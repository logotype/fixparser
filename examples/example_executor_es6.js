import FIXParser, * as Fields from './../src/FIXParser'; // from 'fixparser';

const fixParser = new FIXParser();
const SENDER = 'BANZAI';
const TARGET = 'EXEC';

function sendLogon() {
    const logon = fixParser.createMessage(
        new Fields.Field(Fields.MsgType, 'A'),
        new Fields.Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
        new Fields.Field(Fields.SenderCompID, SENDER),
        new Fields.Field(Fields.SendingTime, fixParser.getTimestamp()),
        new Fields.Field(Fields.TargetCompID, TARGET),
        new Fields.Field(Fields.ResetSeqNumFlag, 'Y'),
        new Fields.Field(Fields.EncryptMethod, 0),
        new Fields.Field(Fields.HeartBtInt, 10)
    );
    const parsed = fixParser.parse(logon.encode());
    console.log('sending message', parsed.description, parsed.string);
    fixParser.send(logon);
}

fixParser.connect('localhost', 9878, SENDER, TARGET);

fixParser.on('open', () => {
    console.log('Open');

    sendLogon();

    setInterval(() => {
        const order = fixParser.createMessage(
            new Fields.Field(Fields.MsgType, 'D'),
            new Fields.Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
            new Fields.Field(Fields.SenderCompID, SENDER),
            new Fields.Field(Fields.SendingTime, fixParser.getTimestamp()),
            new Fields.Field(Fields.TargetCompID, TARGET),
            new Fields.Field(Fields.ClOrdID, '11223344'),
            new Fields.Field(Fields.HandlInst, '1'),
            new Fields.Field(Fields.OrderQty, '123'),
            new Fields.Field(Fields.TransactTime, fixParser.getTimestamp()),
            new Fields.Field(Fields.OrdType, '1'),
            new Fields.Field(Fields.Side, '1'),
            new Fields.Field(Fields.Symbol, '700.HK'),
            new Fields.Field(Fields.TimeInForce, '0')
        );
        const parsed = fixParser.parse(order.encode());
        console.log('sending message', parsed.description, parsed.string);
        fixParser.send(order);
    }, 5000);

});
fixParser.on('message', (message) => {
    console.log('received message', message.description, message.string);
});
fixParser.on('close', () => {
    console.log('Disconnected');
});
