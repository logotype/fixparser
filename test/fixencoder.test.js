import FIXParser, { Field } from './../src/FIXParser';
import {Field as FieldClass} from "../src/fields/Field";

describe('FIXEncoder', () => {
    describe('#encode: Heartbeat', () => {
        const fixString = '8=FIX.4.2|9=51|35=0|34=703|49=ABC|52=20100130-10:53:40.830|56=XYZ|10=249|';
        const fixParser = new FIXParser();

        it('should have encoded the FIX message', () => {
            const message = fixParser.createMessage(
                new FieldClass(FieldClass.MsgType, 0),
                new FieldClass(FieldClass.MsgSeqNum, fixParser.setNextTargetMsgSeqNum(703)),
                new FieldClass(FieldClass.SenderCompID, 'ABC'),
                new FieldClass(FieldClass.SendingTime, fixParser.getTimestamp(new Date(Date.UTC(2010, 0, 30, 10, 53, 40, 830)))),
                new FieldClass(FieldClass.TargetCompID, 'XYZ'),
            );
            expect(message.encode().replace(/\x01/g, '|')).toEqual(fixString);
        });
    });
    describe('#encode: Logon', () => {
        const fixString = '8=FIX.4.2|9=76|35=A|34=702|49=ABC|52=20100130-10:52:40.663|56=XYZ|95=4|96=1234|98=0|108=60|10=134|';
        const fixParser = new FIXParser();

        it('should have encoded the FIX message', () => {
            const message = fixParser.createMessage(
                new FieldClass(FieldClass.MsgType, 'A'),
                new FieldClass(FieldClass.MsgSeqNum, fixParser.setNextTargetMsgSeqNum(702)),
                new FieldClass(FieldClass.SenderCompID, 'ABC'),
                new FieldClass(FieldClass.SendingTime, fixParser.getTimestamp(new Date(Date.UTC(2010, 0, 30, 10, 52, 40, 663)))),
                new FieldClass(FieldClass.TargetCompID, 'XYZ'),
                new FieldClass(FieldClass.RawDataLength, 4),
                new FieldClass(FieldClass.RawData, 1234),
                new FieldClass(FieldClass.EncryptMethod, 0),
                new FieldClass(FieldClass.HeartBtInt, 60),
            );
            expect(message.encode().replace(/\x01/g, '|')).toEqual(fixString);
        });
    });
});
