import FIXParser, {
    Field,
    Fields,
    Messages,
    Side,
    OrderTypes,
    HandlInst,
    TimeInForce,
    EncryptMethod
} from './../src/FIXParser'; // from 'fixparser';

const fixParser = new FIXParser();
const SENDER = 'BANZAI';
const TARGET = 'EXEC';

function sendLogon() {
    const logon = fixParser.createMessage(
        new Field(Fields.BeginString, 'FIX.4.2'),
        new Field(Fields.MsgType, Messages.Logon),
        new Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
        new Field(Fields.SenderCompID, SENDER),
        new Field(Fields.SendingTime, fixParser.getTimestamp()),
        new Field(Fields.TargetCompID, TARGET),
        new Field(Fields.ResetSeqNumFlag, 'Y'),
        new Field(Fields.EncryptMethod, EncryptMethod.None),
        new Field(Fields.HeartBtInt, 10)
    );
    const messages = fixParser.parse(logon.encode());
    console.log('sending message', messages[0].description, messages[0].string);
    fixParser.send(logon);
}

fixParser.connect('localhost', 9878, SENDER, TARGET);

fixParser.on('open', () => {
    console.log('Open');

    sendLogon();

    setInterval(() => {
        const order = fixParser.createMessage(
            new Field(Fields.BeginString, 'FIX.4.2'),
            new Field(Fields.MsgType, Messages.NewOrderSingle),
            new Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
            new Field(Fields.SenderCompID, SENDER),
            new Field(Fields.SendingTime, fixParser.getTimestamp()),
            new Field(Fields.TargetCompID, TARGET),
            new Field(Fields.ClOrdID, '11223344'),
            new Field(Fields.HandlInst, HandlInst.AutomatedExecutionNoIntervention),
            new Field(Fields.OrderQty, '123'),
            new Field(Fields.TransactTime, fixParser.getTimestamp()),
            new Field(Fields.OrdType, OrderTypes.Market),
            new Field(Fields.Side, Side.Buy),
            new Field(Fields.Symbol, '700.HK'),
            new Field(Fields.TimeInForce, TimeInForce.Day)
        );
        const messages = fixParser.parse(order.encode());
        console.log('sending message', messages[0].description, messages[0].string.replace(/\x01/g, '|'));
        fixParser.send(order);
    }, 5000);

});
fixParser.on('message', (message) => {
    console.log('received message', message.description, message.string);
});
fixParser.on('close', () => {
    console.log('Disconnected');
});
