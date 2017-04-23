import { testMessages } from './test-messages';
import FIXParser from './../src/FIXParser';

describe('FIXParser', () => {
    describe('#parse: constructor validation', () => {
        it('should throw an error when having no arguments', () => {
            const fixParser = new FIXParser();
            expect(() => {
                fixParser.parse();
            }).toThrowError('No message specified!');
        });
    });

    describe('#parse: SDBK Price Correction of Previous Execution', () => {
        let fixParser = new FIXParser(),
            parsed = fixParser.parse('8=FIX.4.2^A 9=440^A 35=8^A 128=LZJ^A 34=549^A 49=CCG^A 56=LEH_LZJ02^A 52=20100302- 22:36:15^A 55=IOC^A 37=NF 0039/03022010^A 11=NF 0039/03022010^A 17=NF 0039/03022010 001001002^A 20=2^A 39=2^A 150=2^A 54=1^A 38=100^A 40=1^A 59=0^A 31=49.3700^A 32=100^A 14=0^A 6=0^A 151=0^A 60=20100302-22:36:16^A 58=Trade correction^A 19=NF 0039/03022010 001001001^A 1=ABC123ZYX^A 30=N^A 207=N^A 47=A^A 9430=NX^A 9483=000010^A 9578=1^A 9425=5^A 9579=0000100002^A 9704=0000100001^A 382=1^A 375=TOD^A 337=0000^A 437=100^A 438=1736^A 29=1^A 63=0^A 9440=001001002^A 10=235^A'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            parsed = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(parsed).toBeTruthy();
        });

        it('should have BeginString value FIX.4.2', () => {
            expect(parsed.data[index].tag).toBe(8);
            expect(parsed.data[index].value).toBe('FIX.4.2');
            index++;
        });

        it('should have BodyLength value 440 (validated)', () => {
            expect(parsed.data[index].tag).toBe(9);
            expect(parsed.data[index].value).toBe(440);
            expect(parsed.bodyLengthValid).toBeTruthy();
            index++;
        });

        it('should have MsgType value 8', () => {
            expect(parsed.data[index].tag).toBe(35);
            expect(parsed.data[index].value).toBe('8');
            index++;
        });

        it('should have DeliverToCompID value LZJ', () => {
            expect(parsed.data[index].tag).toBe(128);
            expect(parsed.data[index].value).toBe('LZJ');
            index++;
        });

        it('should have MsgSeqNum value LZJ', () => {
            expect(parsed.data[index].tag).toBe(34);
            expect(parsed.data[index].value).toBe(549);
            index++;
        });

        it('should have SenderCompID value CCG', () => {
            expect(parsed.data[index].tag).toBe(49);
            expect(parsed.data[index].value).toBe('CCG');
            index++;
        });

        it('should have TargetCompID value LEH_LZJ02', () => {
            expect(parsed.data[index].tag).toBe(56);
            expect(parsed.data[index].value).toBe('LEH_LZJ02');
            index++;
        });

        it('should have SendingTime value 20100302- 22:36:15', () => {
            expect(parsed.data[index].tag).toBe(52);
            expect(parsed.data[index].value).toBe('20100302- 22:36:15');
            index++;
        });

        it('should have Symbol value IOC', () => {
            expect(parsed.data[index].tag).toBe(55);
            expect(parsed.data[index].value).toBe('IOC');
            index++;
        });

        it('should have OrderID value NF 0039/03022010', () => {
            expect(parsed.data[index].tag).toBe(37);
            expect(parsed.data[index].value).toBe('NF 0039/03022010');
            index++;
        });

        it('should have ClOrdID value NF 0039/03022010', () => {
            expect(parsed.data[index].tag).toBe(11);
            expect(parsed.data[index].value).toBe('NF 0039/03022010');
            index++;
        });

        it('should have ExecID value NF 0039/03022010 001001002', () => {
            expect(parsed.data[index].tag).toBe(17);
            expect(parsed.data[index].value).toBe('NF 0039/03022010 001001002');
            index++;
        });

        it('should have ExecTransType value 2 (Correct)', () => {
            expect(parsed.data[index].tag).toBe(20);
            expect(parsed.data[index].value).toBe('2');
            index++;
        });

        it('should have OrdStatus value 2', () => {
            expect(parsed.data[index].tag).toBe(39);
            expect(parsed.data[index].value).toBe('2');
            index++;
        });

        it('should have ExecType value 2', () => {
            expect(parsed.data[index].tag).toBe(150);
            expect(parsed.data[index].value).toBe('2');
            index++;
        });

        it('should have Side value 1', () => {
            expect(parsed.data[index].tag).toBe(54);
            expect(parsed.data[index].value).toBe('1');
            index++;
        });

        it('should have OrderQty value 100', () => {
            expect(parsed.data[index].tag).toBe(38);
            expect(parsed.data[index].value).toBe(100);
            expect(parsed.data[index].value).toBe(100);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(parsed.data[index].tag).toBe(40);
            expect(parsed.data[index].value).toBe('1');
            index++;
        });

        it('should have TimeInForce value 0', () => {
            expect(parsed.data[index].tag).toBe(59);
            expect(parsed.data[index].value).toBe('0');
            index++;
        });

        it('should have LastPx value 49.3700', () => {
            expect(parsed.data[index].tag).toBe(31);
            expect(parsed.data[index].value).toBe(49.3700);
            index++;
        });

        it('should have LastQty value 100', () => {
            expect(parsed.data[index].tag).toBe(32);
            expect(parsed.data[index].value).toBe(100);
            index++;
        });

        it('should have CumQty value 0', () => {
            expect(parsed.data[index].tag).toBe(14);
            expect(parsed.data[index].value).toBe(0);
            index++;
        });

        it('should have AvgPx value 0', () => {
            expect(parsed.data[index].tag).toBe(6);
            expect(parsed.data[index].value).toBe(0.0);
            index++;
        });

        it('should have LeavesQty value 0', () => {
            expect(parsed.data[index].tag).toBe(151);
            expect(parsed.data[index].value).toBe(0);
            index++;
        });

        it('should have TransactTime value 20100302-22:36:16', () => {
            expect(parsed.data[index].tag).toBe(60);
            expect(parsed.data[index].value).toBe('20100302-22:36:16');
            index++;
        });

        it('should have Text value Trade correction', () => {
            expect(parsed.data[index].tag).toBe(58);
            expect(parsed.data[index].value).toBe('Trade correction');
            index++;
        });

        it('should have ExecRefID value NF 0039/03022010 001001001', () => {
            expect(parsed.data[index].tag).toBe(19);
            expect(parsed.data[index].value).toBe('NF 0039/03022010 001001001');
            index++;
        });

        it('should have Account value ABC123ZYX', () => {
            expect(parsed.data[index].tag).toBe(1);
            expect(parsed.data[index].value).toBe('ABC123ZYX');
            index++;
        });

        it('should have LastMkt value N', () => {
            expect(parsed.data[index].tag).toBe(30);
            expect(parsed.data[index].value).toBe('N');
            index++;
        });

        it('should have SecurityExchange value N', () => {
            expect(parsed.data[index].tag).toBe(207);
            expect(parsed.data[index].value).toBe('N');
            index++;
        });

        it('should have Rule80A value A', () => {
            expect(parsed.data[index].tag).toBe(47);
            expect(parsed.data[index].value).toBe('A');
            index++;
        });

        it('NySE extensions: should have NYSEDirect value NX', () => {
            expect(parsed.data[index].tag).toBe(9430);
            expect(parsed.data[index].value).toBe('NX');
            index++;
        });

        it('NySE extensions: should have DBExecID value 000010', () => {
            expect(parsed.data[index].tag).toBe(9483);
            expect(parsed.data[index].value).toBe('000010');
            index++;
        });

        it('NySE extensions: should have BillingIndicator value 1', () => {
            expect(parsed.data[index].tag).toBe(9578);
            expect(parsed.data[index].value).toBe('1');
            index++;
        });

        it('NySE extensions: should have StatusResp value 5', () => {
            expect(parsed.data[index].tag).toBe(9425);
            expect(parsed.data[index].value).toBe('5');
            index++;
        });

        it('NySE extensions: should have ExpERCReferenceNumber value 0000100002', () => {
            expect(parsed.data[index].tag).toBe(9579);
            expect(parsed.data[index].value).toBe('0000100002');
            index++;
        });

        it('NySE extensions: should have PrevExpERCReferenceNumber value 0000100001', () => {
            expect(parsed.data[index].tag).toBe(9704);
            expect(parsed.data[index].value).toBe('0000100001');
            index++;
        });

        it('should have NoContraBrokers value 1', () => {
            expect(parsed.data[index].tag).toBe(382);
            expect(parsed.data[index].value).toBe(1);
            index++;
        });

        it('should have ContraBroker value TOD', () => {
            expect(parsed.data[index].tag).toBe(375);
            expect(parsed.data[index].value).toBe('TOD');
            index++;
        });

        it('should have ContraTrader value 0000', () => {
            expect(parsed.data[index].tag).toBe(337);
            expect(parsed.data[index].value).toBe('0000');
            index++;
        });

        it('should have ContraTradeQty value 100', () => {
            expect(parsed.data[index].tag).toBe(437);
            expect(parsed.data[index].value).toBe(100);
            index++;
        });

        it('should have ContraTradeTime value 1736', () => {
            expect(parsed.data[index].tag).toBe(438);
            expect(parsed.data[index].value).toBe('1736');
            index++;
        });

        it('should have LastCapacity value 1', () => {
            expect(parsed.data[index].tag).toBe(29);
            expect(parsed.data[index].value).toBe('1');
            index++;
        });

        it('should have SettlType value 0', () => {
            expect(parsed.data[index].tag).toBe(63);
            expect(parsed.data[index].value).toBe('0');
            index++;
        });

        it('NySE extensions: should have ERCReferenceNumber value 001001002', () => {
            expect(parsed.data[index].tag).toBe(9440);
            expect(parsed.data[index].value).toBe('001001002');
            index++;
        });

        it('should have invalid CheckSum value 235', () => {
            expect(parsed.data[index].tag).toBe(10);
            expect(parsed.data[index].value).toBe('235');
            expect(parsed.checksumValid).toBe(false);
            index++;
        });
    });

    describe('#parse: New order', () => {
        let fixParser = new FIXParser(),
            parsed = fixParser.parse('8=FIX.4.2|9=154|35=E|49=INST|56=BROK|52=20050908-15:51:22|34=200|66=14|394=1|68=2|73=2|11=order- 1|67=1|55=IBM|54=2|38=2000|40=1|11=order-2|67=2|55=AOL|54=2|38=1000|40=1|'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            parsed = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(parsed).toBeTruthy();
        });

        it('should have BeginString value FIX.4.2', () => {
            expect(parsed.data[index].tag).toBe(8);
            expect(parsed.data[index].value).toBe('FIX.4.2');
            index++;
        });

        it('should have BodyLength value 154 (validated)', () => {
            expect(parsed.data[index].tag).toBe(9);
            expect(parsed.data[index].value).toBe(154);
            expect(parsed.bodyLengthValid).toBe(true);
            index++;
        });

        it('should have MsgType value E', () => {
            expect(parsed.data[index].tag).toBe(35);
            expect(parsed.data[index].value).toBe('E');
            index++;
        });

        it('should have SenderCompID value INST', () => {
            expect(parsed.data[index].tag).toBe(49);
            expect(parsed.data[index].value).toBe('INST');
            index++;
        });

        it('should have MsgSeqNum value BROK', () => {
            expect(parsed.data[index].tag).toBe(56);
            expect(parsed.data[index].value).toBe('BROK');
            index++;
        });

        it('should have SendingTime value 20050908-15:51:22', () => {
            expect(parsed.data[index].tag).toBe(52);
            expect(parsed.data[index].value).toBe('20050908-15:51:22');
            index++;
        });

        it('should have MsgSeqNum value 200', () => {
            expect(parsed.data[index].tag).toBe(34);
            expect(parsed.data[index].value).toBe(200);
            index++;
        });

        it('should have ListID value 14', () => {
            expect(parsed.data[index].tag).toBe(66);
            expect(parsed.data[index].value).toBe('14');
            index++;
        });

        it('should have BidType value 1', () => {
            expect(parsed.data[index].tag).toBe(394);
            expect(parsed.data[index].value).toBe(1);
            index++;
        });

        it('should have TotNoOrders value 2', () => {
            expect(parsed.data[index].tag).toBe(68);
            expect(parsed.data[index].value).toBe(2);
            index++;
        });

        it('should have NoOrders value 2', () => {
            expect(parsed.data[index].tag).toBe(73);
            expect(parsed.data[index].value).toBe(2);
            index++;
        });

        it('should have ClOrdID value order- 1', () => {
            expect(parsed.data[index].tag).toBe(11);
            expect(parsed.data[index].value).toBe('order- 1');
            index++;
        });

        it('should have ListSeqNo value 1', () => {
            expect(parsed.data[index].tag).toBe(67);
            expect(parsed.data[index].value).toBe(1);
            index++;
        });

        it('should have Symbol value IBM', () => {
            expect(parsed.data[index].tag).toBe(55);
            expect(parsed.data[index].value).toBe('IBM');
            index++;
        });

        it('should have Side value 2', () => {
            expect(parsed.data[index].tag).toBe(54);
            expect(parsed.data[index].value).toBe('2');
            index++;
        });

        it('should have OrderQty value 2000', () => {
            expect(parsed.data[index].tag).toBe(38);
            expect(parsed.data[index].value).toBe(2000);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(parsed.data[index].tag).toBe(40);
            expect(parsed.data[index].value).toBe('1');
            index++;
        });

        it('should have ClOrdID value order-2', () => {
            expect(parsed.data[index].tag).toBe(11);
            expect(parsed.data[index].value).toBe('order-2');
            index++;
        });

        it('should have ListSeqNo value 2', () => {
            expect(parsed.data[index].tag).toBe(67);
            expect(parsed.data[index].value).toBe(2);
            index++;
        });

        it('should have Symbol value AOL', () => {
            expect(parsed.data[index].tag).toBe(55);
            expect(parsed.data[index].value).toBe('AOL');
            index++;
        });

        it('should have Side value 2', () => {
            expect(parsed.data[index].tag).toBe(54);
            expect(parsed.data[index].value).toBe('2');
            index++;
        });

        it('should have OrderQty value 1000', () => {
            expect(parsed.data[index].tag).toBe(38);
            expect(parsed.data[index].value).toBe(1000);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(parsed.data[index].tag).toBe(40);
            expect(parsed.data[index].value).toBe('1');
            index++;
        });

    });

    function processTest(message) {
        describe(`#parse: ${message.description}`, () => {
            let fixParser = new FIXParser(),
                parsed = fixParser.parse(message.fix);

            afterAll(() => {
                fixParser = null;
                parsed = null;
            });

            it('should have parsed the FIX message', () => {
                expect(parsed).toBeTruthy();
                expect(parsed.data[0].name).toBe('BeginString');
                expect(parsed.data[1].name).toBe('BodyLength');
                expect(parsed.data[2].name).toBe('MsgType');
            });

            it(`should have MsgType ${message.description}`, () => {
                expect(parsed.description).toBe(message.description);
            });

            it(`should have valid BodyLength: ${message.bodyLengthValid}`, () => {
                expect(parsed.bodyLengthValid).toBe(message.bodyLengthValid, `[actual: ${parsed.bodyLengthValue}, expected: ${parsed.bodyLengthExpected}]`);
            });

            it(`should have valid CheckSum: ${message.checksumValid}`, () => {
                expect(parsed.checksumValid).toBe(message.checksumValid, `[actual: ${parsed.checksumValue}, expected: ${parsed.checksumExpected}]`);
            });
        });
    }

    testMessages.forEach((message) => {
        processTest(message);
    });

});