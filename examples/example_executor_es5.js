const FIXParser = require('./../fixparser'); // require('fixparser');

const fixParser = new FIXParser.default();

function sendLogon() {
    const logon = fixParser.createMessage(
        new FIXParser.Field(FIXParser.MsgType, 'A'),
        new FIXParser.Field(FIXParser.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
        new FIXParser.Field(FIXParser.SenderCompID, 'BANZAI'),
        new FIXParser.Field(FIXParser.SendingTime, fixParser.getTimestamp()),
        new FIXParser.Field(FIXParser.TargetCompID, 'EXEC'),
        new FIXParser.Field(FIXParser.ResetSeqNumFlag, 'Y'),
        new FIXParser.Field(FIXParser.EncryptMethod, 0),
        new FIXParser.Field(FIXParser.HeartBtInt, 10)
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
            new FIXParser.Field(FIXParser.MsgType, 'D'),
            new FIXParser.Field(FIXParser.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
            new FIXParser.Field(FIXParser.SenderCompID, 'BANZAI'),
            new FIXParser.Field(FIXParser.SendingTime, fixParser.getTimestamp()),
            new FIXParser.Field(FIXParser.TargetCompID, 'EXEC'),
            new FIXParser.Field(FIXParser.ClOrdID, '11223344'),
            new FIXParser.Field(FIXParser.HandlInst, '1'),
            new FIXParser.Field(FIXParser.OrderQty, '123'),
            new FIXParser.Field(FIXParser.TransactTime, fixParser.getTimestamp()),
            new FIXParser.Field(FIXParser.OrdType, '1'),
            new FIXParser.Field(FIXParser.Side, '1'),
            new FIXParser.Field(FIXParser.Symbol, '700.HK'),
            new FIXParser.Field(FIXParser.TimeInForce, '0')
        );
        const parsed = fixParser.parse(order.encode());
        console.log('sending message', parsed.description, parsed.string);
        fixParser.send(order);
    }, 200);

});
fixParser.on('message', (message) => {
    console.log('message', message.description, message.string);
});
fixParser.on('close', () => {
    console.log('Disconnected');
});
