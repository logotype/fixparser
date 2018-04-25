import FIXParser, { Field } from './../src/FIXParser.js';

const fixParser = new FIXParser();

function sendLogon() {
    const logon = fixParser.createMessage(
        new Field(Field.MsgType, 'A'),
        new Field(Field.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
        new Field(Field.SenderCompID, 'BANZAI'),
        new Field(Field.SendingTime, fixParser.getTimestamp()),
        new Field(Field.TargetCompID, 'EXEC'),
        new Field(Field.ResetSeqNumFlag, 'Y'),
        new Field(Field.EncryptMethod, 0),
        new Field(Field.HeartBtInt, 10),
    );
    const parsed = fixParser.parse(logon.encode());
    console.log('sending message', parsed.description, parsed.string);
    fixParser.send(logon);
}

fixParser.connect('localhost', 9878, 'BANZAI', 'EXEC');

fixParser.on('open', () => {
    console.log('Open');

    sendLogon();

    setInterval(() => {
        const order = fixParser.createMessage(
            new Field(Field.MsgType, 'D'),
            new Field(Field.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
            new Field(Field.SenderCompID, 'BANZAI'),
            new Field(Field.SendingTime, fixParser.getTimestamp()),
            new Field(Field.TargetCompID, 'EXEC'),
            new Field(Field.ClOrdID, '11223344'),
            new Field(Field.HandlInst, '1'),
            new Field(Field.OrderQty, '123'),
            new Field(Field.TransactTime, fixParser.getTimestamp()),
            new Field(Field.OrdType, '1'),
            new Field(Field.Side, '1'),
            new Field(Field.Symbol, '700.HK'),
            new Field(Field.TimeInForce, '0'),
        );
        const parsed = fixParser.parse(order.encode());
        console.log('sending message', parsed.description, parsed.string);
        fixParser.send(order);
    }, 200);

});
fixParser.on('message', (message) => {
    console.log('received message', message.description, message.string);
});
fixParser.on('close', () => {
    console.log('Disconnected');
});
