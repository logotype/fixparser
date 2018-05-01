import Field, {
    BeginString,
    BodyLength,
    CheckSum,
    ContraTradeQty,
    LastPx,
    LeavesQty,
    MsgType,
    OrderQty,
    OrdType,
    Price,
    Side,
    Symbol,
    TimeInForce
} from './../fields/Field';

const TAG_CHECKSUM = '10=';
const TAG_MSGTYPE = '35=';
const MARKER_BODYLENGTH = '\x02';
const MARKER_CHECKSUM = '\x03';

export function calculateBodyLength(value) {
    const startLength = value.indexOf(TAG_MSGTYPE) === -1 ? 0 : value.indexOf(TAG_MSGTYPE),
        endLength = value.indexOf(TAG_CHECKSUM) === -1 ? value.length : value.indexOf(TAG_CHECKSUM);

    return endLength - startLength;
}

function nonEmpty(parts, ...args) {
    let res = parts[0];
    for (let i = 1; i < parts.length; i++) {
        if (args[i - 1] || String(args[i - 1]) === '0') {
            res += args[i - 1];
        }
        res += parts[i];
    }
    return res;
}

export function calculateChecksum(value) {
    let integerValues = 0;

    for (let i = 0; i < value.length; i++) {
        integerValues += value.charCodeAt(i);
    }

    return Message.pad(integerValues & 255, 3); // eslint-disable-line no-use-before-define
}

export class Message {

    static pad(value, size) {
        const paddedString = `00${value}`;
        return paddedString.substr(paddedString.length - size);
    }

    constructor(...fields) {
        this.reset();

        // Add other tags
        fields.forEach((field) => {
            this.data.push(field);
        });
    }

    addField(field) {
        this.data.push(field);
    }

    getField(tag) {
        return this.data.find((field) => field.tag === tag);
    }

    setString(fixString) {
        this.string = fixString;
    }

    setDescription(description) {
        this.description = description;
    }

    setMessageType(messageType) {
        this.messageType = messageType;
    }

    setMessageContents(messageContents) {
        this.messageContents = messageContents;
    }

    getBriefDescription() { // eslint-disable-line complexity
        let returnValue = '';
        let side = ((this.getField(Side) || {}).enumeration || {}).symbolicName;
        side = side ? side.replace('Sell', 'SL').toUpperCase() : null;

        if(this.getField(MsgType).value === 'A') {
            returnValue = 'Logon';
        } else if(this.getField(MsgType).value === '0') {
            returnValue = 'Heartbeat';
        } else if(this.getField(MsgType).value === '3') {
            returnValue = 'Reject';
        } else if(this.getField(LeavesQty)) {
            let quantity = null;

            if(this.getField(ContraTradeQty)) {
                quantity = (this.getField(ContraTradeQty) || {}).value;
            } else {
                quantity = (this.getField(OrderQty) || {}).value;
            }
            const leavesQuantity = (this.getField(LeavesQty) || {}).value;
            const lastPrice = (this.getField(LastPx) || {}).value;
            returnValue = nonEmpty `${quantity} @${lastPrice || String(lastPrice) === '0' ? lastPrice.toFixed(2) : null} ${this.getField(LeavesQty).name.replace('LeavesQty', 'LvsQty')} ${leavesQuantity}`;

        } else {
            const orderQuantity = (this.getField(OrderQty) || {}).value;
            const symbol = (this.getField(Symbol) || {}).value;
            const orderType = ((this.getField(OrdType) || {}).enumeration || {}).symbolicName;
            const timeInForce = ((this.getField(TimeInForce) || {}).enumeration || {}).symbolicName;

            if(this.getField(Price)) {
                let price = (this.getField(Price) || {}).value;
                if(price && price >= 1) {
                    price = price.toFixed(2);
                } else if(price && price < 1) {
                    price = String(price).replace('0.', '.');
                }
                returnValue = nonEmpty `${side} ${orderQuantity} ${symbol ? symbol.toUpperCase() : null} ${orderType ? orderType.replace('Market', 'MKT').replace('Limit', 'LMT').toUpperCase() : null} @${price} ${timeInForce ? timeInForce.toUpperCase() : null}`;
            } else {
                returnValue = nonEmpty `${side} ${orderQuantity} ${symbol ? symbol.toUpperCase() : null} ${orderType ? orderType.replace('Market', 'MKT').replace('Limit', 'LMT').toUpperCase() : null} ${timeInForce ? timeInForce.toUpperCase() : null}`;
            }
        }

        return returnValue.trim();
    }

    reset() {
        this.data = [];
        this.string = '';
        this.description = '';
        this.messageType = '';
        this.messageContents = [];
        this.bodyLengthValid = false;
        this.checksumValid = false;
        this.checksumValue = null;
        this.checksumExpected = null;
        this.bodyLengthValue = null;
        this.bodyLengthExpected = null;
    }

    validateBodyLength(value) {
        const startLength = this.string.indexOf(TAG_MSGTYPE) === -1 ? 0 : this.string.indexOf(TAG_MSGTYPE),
            endLength = this.string.indexOf(TAG_CHECKSUM) === -1 ? this.string.length : this.string.indexOf(TAG_CHECKSUM),
            bodyLength = endLength - startLength;

        this.bodyLengthValue = value >> 0;
        this.bodyLengthExpected = bodyLength;
        this.bodyLengthValid = value >> 0 === bodyLength;
        return this.bodyLengthValid;
    }

    validateChecksum(value) {
        const length = this.string.indexOf(TAG_CHECKSUM) === -1 ? this.string.length : this.string.indexOf(TAG_CHECKSUM),
            data = this.string.substring(0, length),
            calculatedChecksum = calculateChecksum(data);

        this.checksumValue = value;
        this.checksumExpected = calculatedChecksum;
        this.checksumValid = value === calculatedChecksum;
        return this.checksumValid;
    }

    encode(separator = '\x01') {

        // Add header
        const data = [
            new Field(BeginString, 'FIX.4.2').toString(),
            new Field(BodyLength, MARKER_BODYLENGTH).toString()
        ];

        // Add other fields
        this.data.forEach((field) => {
            data.push(field.toString());
        });

        // Add trailer
        data.push(new Field(CheckSum, MARKER_CHECKSUM).toString());

        let fixMessage = `${data.join(separator)}${separator}`;
        fixMessage = fixMessage.replace(MARKER_BODYLENGTH, calculateBodyLength(fixMessage));

        const length = fixMessage.indexOf(TAG_CHECKSUM) === -1 ? fixMessage.length : fixMessage.indexOf(TAG_CHECKSUM);
        const calculatedChecksum = calculateChecksum(fixMessage.substring(0, length));
        fixMessage = fixMessage.replace(MARKER_CHECKSUM, calculatedChecksum);

        return fixMessage;
    }
}

