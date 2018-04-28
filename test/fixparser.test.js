import { testMessages } from './test-messages';
import FIXParser from './../src/FIXParser';
import { ContraTradeTime, MsgSeqNum } from './../src/fields/Field';

describe('FIXParser', () => {
    describe('#parse: constructor validation', () => {
        it('should return null when having no arguments', () => {
            const fixParser = new FIXParser();
            expect(fixParser.parse()).toBeNull();
        });
    });

    describe('#parse: SDBK Price Correction of Previous Execution', () => {
        let fixParser = new FIXParser(),
            message = fixParser.parse('8=FIX.4.2^A 9=440^A 35=8^A 128=LZJ^A 34=549^A 49=CCG^A 56=LEH_LZJ02^A 52=20100302- 22:36:15^A 55=IOC^A 37=NF 0039/03022010^A 11=NF 0039/03022010^A 17=NF 0039/03022010 001001002^A 20=2^A 39=2^A 150=2^A 54=1^A 38=100^A 40=1^A 59=0^A 31=49.3700^A 32=100^A 14=0^A 6=0^A 151=0^A 60=20100302-22:36:16^A 58=Trade correction^A 19=NF 0039/03022010 001001001^A 1=ABC123ZYX^A 30=N^A 207=N^A 47=A^A 9430=NX^A 9483=000010^A 9578=1^A 9425=5^A 9579=0000100002^A 9704=0000100001^A 382=1^A 375=TOD^A 337=0000^A 437=100^A 438=1736^A 29=1^A 63=0^A 9440=001001002^A 10=235^A'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            message = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(message).toBeTruthy();
        });

        it('should have BeginString value FIX.4.2', () => {
            expect(message.data[index].tag).toBe(8);
            expect(message.data[index].value).toBe('FIX.4.2');
            index++;
        });

        it('should have BodyLength value 440 (validated)', () => {
            expect(message.data[index].tag).toBe(9);
            expect(message.data[index].value).toBe(440);
            expect(message.bodyLengthValid).toBeTruthy();
            index++;
        });

        it('should have MsgType value 8', () => {
            expect(message.data[index].tag).toBe(35);
            expect(message.data[index].value).toBe('8');
            index++;
        });

        it('should have DeliverToCompID value LZJ', () => {
            expect(message.data[index].tag).toBe(128);
            expect(message.data[index].value).toBe('LZJ');
            index++;
        });

        it('should have MsgSeqNum value LZJ', () => {
            expect(message.data[index].tag).toBe(34);
            expect(message.data[index].value).toBe(549);
            index++;
        });

        it('should have SenderCompID value CCG', () => {
            expect(message.data[index].tag).toBe(49);
            expect(message.data[index].value).toBe('CCG');
            index++;
        });

        it('should have TargetCompID value LEH_LZJ02', () => {
            expect(message.data[index].tag).toBe(56);
            expect(message.data[index].value).toBe('LEH_LZJ02');
            index++;
        });

        it('should have SendingTime value 20100302- 22:36:15', () => {
            expect(message.data[index].tag).toBe(52);
            expect(message.data[index].value).toBe('20100302- 22:36:15');
            index++;
        });

        it('should have Symbol value IOC', () => {
            expect(message.data[index].tag).toBe(55);
            expect(message.data[index].value).toBe('IOC');
            index++;
        });

        it('should have OrderID value NF 0039/03022010', () => {
            expect(message.data[index].tag).toBe(37);
            expect(message.data[index].value).toBe('NF 0039/03022010');
            index++;
        });

        it('should have ClOrdID value NF 0039/03022010', () => {
            expect(message.data[index].tag).toBe(11);
            expect(message.data[index].value).toBe('NF 0039/03022010');
            index++;
        });

        it('should have ExecID value NF 0039/03022010 001001002', () => {
            expect(message.data[index].tag).toBe(17);
            expect(message.data[index].value).toBe('NF 0039/03022010 001001002');
            index++;
        });

        it('should have ExecTransType value 2 (Correct)', () => {
            expect(message.data[index].tag).toBe(20);
            expect(message.data[index].value).toBe('2');
            index++;
        });

        it('should have OrdStatus value 2', () => {
            expect(message.data[index].tag).toBe(39);
            expect(message.data[index].value).toBe('2');
            index++;
        });

        it('should have ExecType value 2', () => {
            expect(message.data[index].tag).toBe(150);
            expect(message.data[index].value).toBe('2');
            index++;
        });

        it('should have Side value 1', () => {
            expect(message.data[index].tag).toBe(54);
            expect(message.data[index].value).toBe('1');
            index++;
        });

        it('should have OrderQty value 100', () => {
            expect(message.data[index].tag).toBe(38);
            expect(message.data[index].value).toBe(100);
            expect(message.data[index].value).toBe(100);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(message.data[index].tag).toBe(40);
            expect(message.data[index].value).toBe('1');
            index++;
        });

        it('should have TimeInForce value 0', () => {
            expect(message.data[index].tag).toBe(59);
            expect(message.data[index].value).toBe('0');
            index++;
        });

        it('should have LastPx value 49.3700', () => {
            expect(message.data[index].tag).toBe(31);
            expect(message.data[index].value).toBe(49.3700);
            index++;
        });

        it('should have LastQty value 100', () => {
            expect(message.data[index].tag).toBe(32);
            expect(message.data[index].value).toBe(100);
            index++;
        });

        it('should have CumQty value 0', () => {
            expect(message.data[index].tag).toBe(14);
            expect(message.data[index].value).toBe(0);
            index++;
        });

        it('should have AvgPx value 0', () => {
            expect(message.data[index].tag).toBe(6);
            expect(message.data[index].value).toBe(0.0);
            index++;
        });

        it('should have LeavesQty value 0', () => {
            expect(message.data[index].tag).toBe(151);
            expect(message.data[index].value).toBe(0);
            index++;
        });

        it('should have TransactTime value 20100302-22:36:16', () => {
            expect(message.data[index].tag).toBe(60);
            expect(message.data[index].value).toBe('20100302-22:36:16');
            index++;
        });

        it('should have Text value Trade correction', () => {
            expect(message.data[index].tag).toBe(58);
            expect(message.data[index].value).toBe('Trade correction');
            index++;
        });

        it('should have ExecRefID value NF 0039/03022010 001001001', () => {
            expect(message.data[index].tag).toBe(19);
            expect(message.data[index].value).toBe('NF 0039/03022010 001001001');
            index++;
        });

        it('should have Account value ABC123ZYX', () => {
            expect(message.data[index].tag).toBe(1);
            expect(message.data[index].value).toBe('ABC123ZYX');
            index++;
        });

        it('should have LastMkt value N', () => {
            expect(message.data[index].tag).toBe(30);
            expect(message.data[index].value).toBe('N');
            index++;
        });

        it('should have SecurityExchange value N', () => {
            expect(message.data[index].tag).toBe(207);
            expect(message.data[index].value).toBe('N');
            index++;
        });

        it('should have Rule80A value A', () => {
            expect(message.data[index].tag).toBe(47);
            expect(message.data[index].value).toBe('A');
            index++;
        });

        it('NySE extensions: should have NYSEDirect value NX', () => {
            expect(message.data[index].tag).toBe(9430);
            expect(message.data[index].value).toBe('NX');
            index++;
        });

        it('NySE extensions: should have DBExecID value 000010', () => {
            expect(message.data[index].tag).toBe(9483);
            expect(message.data[index].value).toBe('000010');
            index++;
        });

        it('NySE extensions: should have BillingIndicator value 1', () => {
            expect(message.data[index].tag).toBe(9578);
            expect(message.data[index].value).toBe('1');
            index++;
        });

        it('NySE extensions: should have StatusResp value 5', () => {
            expect(message.data[index].tag).toBe(9425);
            expect(message.data[index].value).toBe('5');
            index++;
        });

        it('NySE extensions: should have ExpERCReferenceNumber value 0000100002', () => {
            expect(message.data[index].tag).toBe(9579);
            expect(message.data[index].value).toBe('0000100002');
            index++;
        });

        it('NySE extensions: should have PrevExpERCReferenceNumber value 0000100001', () => {
            expect(message.data[index].tag).toBe(9704);
            expect(message.data[index].value).toBe('0000100001');
            index++;
        });

        it('should have NoContraBrokers value 1', () => {
            expect(message.data[index].tag).toBe(382);
            expect(message.data[index].value).toBe(1);
            index++;
        });

        it('should have ContraBroker value TOD', () => {
            expect(message.data[index].tag).toBe(375);
            expect(message.data[index].value).toBe('TOD');
            index++;
        });

        it('should have ContraTrader value 0000', () => {
            expect(message.data[index].tag).toBe(337);
            expect(message.data[index].value).toBe('0000');
            index++;
        });

        it('should have ContraTradeQty value 100', () => {
            expect(message.data[index].tag).toBe(437);
            expect(message.data[index].value).toBe(100);
            index++;
        });

        it('should have ContraTradeTime value 1736', () => {
            expect(message.data[index].tag).toBe(438);
            expect(message.data[index].value).toBe('1736');
            index++;
        });

        it('should have LastCapacity value 1', () => {
            expect(message.data[index].tag).toBe(29);
            expect(message.data[index].value).toBe('1');
            index++;
        });

        it('should have SettlType value 0', () => {
            expect(message.data[index].tag).toBe(63);
            expect(message.data[index].value).toBe('0');
            index++;
        });

        it('NySE extensions: should have ERCReferenceNumber value 001001002', () => {
            expect(message.data[index].tag).toBe(9440);
            expect(message.data[index].value).toBe('001001002');
            index++;
        });

        it('should have invalid CheckSum value 235', () => {
            expect(message.data[index].tag).toBe(10);
            expect(message.data[index].value).toBe('235');
            expect(message.checksumValid).toBe(false);
            index++;
        });

        it('should get the correct field', () => {
            expect(message.getField(ContraTradeTime).tag).toBe(438);
            expect(message.getField(ContraTradeTime).value).toBe('1736');
        });
    });

    describe('#parse: New order', () => {
        let fixParser = new FIXParser(),
            message = fixParser.parse('8=FIX.4.2|9=154|35=E|49=INST|56=BROK|52=20050908-15:51:22|34=200|66=14|394=1|68=2|73=2|11=order- 1|67=1|55=IBM|54=2|38=2000|40=1|11=order-2|67=2|55=AOL|54=2|38=1000|40=1|'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            message = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(message).toBeTruthy();
        });

        it('should have BeginString value FIX.4.2', () => {
            expect(message.data[index].tag).toBe(8);
            expect(message.data[index].value).toBe('FIX.4.2');
            index++;
        });

        it('should have BodyLength value 154 (validated)', () => {
            expect(message.data[index].tag).toBe(9);
            expect(message.data[index].value).toBe(154);
            expect(message.bodyLengthValid).toBe(true);
            index++;
        });

        it('should have MsgType value E', () => {
            expect(message.data[index].tag).toBe(35);
            expect(message.data[index].value).toBe('E');
            index++;
        });

        it('should have SenderCompID value INST', () => {
            expect(message.data[index].tag).toBe(49);
            expect(message.data[index].value).toBe('INST');
            index++;
        });

        it('should have MsgSeqNum value BROK', () => {
            expect(message.data[index].tag).toBe(56);
            expect(message.data[index].value).toBe('BROK');
            index++;
        });

        it('should have SendingTime value 20050908-15:51:22', () => {
            expect(message.data[index].tag).toBe(52);
            expect(message.data[index].value).toBe('20050908-15:51:22');
            index++;
        });

        it('should have MsgSeqNum value 200', () => {
            expect(message.data[index].tag).toBe(34);
            expect(message.data[index].value).toBe(200);
            index++;
        });

        it('should have ListID value 14', () => {
            expect(message.data[index].tag).toBe(66);
            expect(message.data[index].value).toBe('14');
            index++;
        });

        it('should have BidType value 1', () => {
            expect(message.data[index].tag).toBe(394);
            expect(message.data[index].value).toBe(1);
            index++;
        });

        it('should have TotNoOrders value 2', () => {
            expect(message.data[index].tag).toBe(68);
            expect(message.data[index].value).toBe(2);
            index++;
        });

        it('should have NoOrders value 2', () => {
            expect(message.data[index].tag).toBe(73);
            expect(message.data[index].value).toBe(2);
            index++;
        });

        it('should have ClOrdID value order- 1', () => {
            expect(message.data[index].tag).toBe(11);
            expect(message.data[index].value).toBe('order- 1');
            index++;
        });

        it('should have ListSeqNo value 1', () => {
            expect(message.data[index].tag).toBe(67);
            expect(message.data[index].value).toBe(1);
            index++;
        });

        it('should have Symbol value IBM', () => {
            expect(message.data[index].tag).toBe(55);
            expect(message.data[index].value).toBe('IBM');
            index++;
        });

        it('should have Side value 2', () => {
            expect(message.data[index].tag).toBe(54);
            expect(message.data[index].value).toBe('2');
            index++;
        });

        it('should have OrderQty value 2000', () => {
            expect(message.data[index].tag).toBe(38);
            expect(message.data[index].value).toBe(2000);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(message.data[index].tag).toBe(40);
            expect(message.data[index].value).toBe('1');
            index++;
        });

        it('should have ClOrdID value order-2', () => {
            expect(message.data[index].tag).toBe(11);
            expect(message.data[index].value).toBe('order-2');
            index++;
        });

        it('should have ListSeqNo value 2', () => {
            expect(message.data[index].tag).toBe(67);
            expect(message.data[index].value).toBe(2);
            index++;
        });

        it('should have Symbol value AOL', () => {
            expect(message.data[index].tag).toBe(55);
            expect(message.data[index].value).toBe('AOL');
            index++;
        });

        it('should have Side value 2', () => {
            expect(message.data[index].tag).toBe(54);
            expect(message.data[index].value).toBe('2');
            index++;
        });

        it('should have OrderQty value 1000', () => {
            expect(message.data[index].tag).toBe(38);
            expect(message.data[index].value).toBe(1000);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(message.data[index].tag).toBe(40);
            expect(message.data[index].value).toBe('1');
            index++;
        });

    });

    describe('#parse: ExecutionReport', () => {
        let fixParser = new FIXParser(),
            message = fixParser.parse('8=FIX.4.4\x019=1753\x0135=8\x01523=S|E|B Auto-pricing\x01'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            message = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(message).toBeTruthy();
        });

        it('should have BeginString value FIX.4.4', () => {
            expect(message.data[index].tag).toBe(8);
            expect(message.data[index].value).toBe('FIX.4.4');
            index++;
        });

        it('should have BodyLength value 1753 (validated)', () => {
            expect(message.data[index].tag).toBe(9);
            expect(message.data[index].value).toBe(1753);
            expect(message.bodyLengthValid).toBeFalsy();
            index++;
        });

        it('should have MsgType value 8', () => {
            expect(message.data[index].tag).toBe(35);
            expect(message.data[index].value).toBe('8');
            index++;
        });

        it('should have PartySubID value 8', () => {
            expect(message.data[index].tag).toBe(523);
            expect(message.data[index].value).toBe('S|E|B Auto-pricing');
            index++;
        });

    });

    describe('#getField: ExecutionReport', () => {
        let fixParser = new FIXParser(),
            message = fixParser.parse('8=FIX.4.2|9=266|35=8|49=ABC|56=XYZ|50=AZ12|57=NA|34=833|52=20100130-08:00:51.992|55=GLD|48=PL11YA|167=FUT|207=LIFFE|1=AA1|37=ABC1|17=INDNTHDOG|58=Fill|200=201009|205=13|32=25|151=0|14=25|54=2|40=2|77=O|59=0|150=2|20=0|39=2|442=1|44=99.06|38=25|31=99.06|6=99.06|60=20100130-08:00:52|10=136|');

        afterAll(() => {
            fixParser = null;
            message = null;
        });

        it('should get the correct field', () => {
            expect(message.getField(MsgSeqNum).tag).toBe(34);
            expect(message.getField(MsgSeqNum).value).toBe(833);
        });
    });

    function processTest(fixMessage) {
        describe(`#parse: ${fixMessage.description}`, () => {
            let fixParser = new FIXParser(),
                message = fixParser.parse(fixMessage.fix);

            afterAll(() => {
                fixParser = null;
                message = null;
            });

            it('should have parsed the FIX message', () => {
                expect(message).toBeTruthy();
                expect(message.data[0].name).toBe('BeginString');
                expect(message.data[1].name).toBe('BodyLength');
                expect(message.data[2].name).toBe('MsgType');
            });

            it(`should have MsgType ${message.description}`, () => {
                expect(message.description).toBe(message.description);
            });

            it(`should have valid BodyLength: ${message.bodyLengthValid}`, () => {
                expect(message.bodyLengthValid).toBe(message.bodyLengthValid, `[actual: ${message.bodyLengthValue}, expected: ${message.bodyLengthExpected}]`);
            });

            it(`should have valid CheckSum: ${message.checksumValid}`, () => {
                expect(message.checksumValid).toBe(message.checksumValid, `[actual: ${message.checksumValue}, expected: ${message.checksumExpected}]`);
            });
        });
    }

    testMessages.forEach((message) => {
        processTest(message);
    });

});
