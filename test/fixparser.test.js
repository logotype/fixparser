import { testMessages } from './test-messages';
import FIXParser from './../src/FIXParser';
import { ContraTradeTime, MsgSeqNum } from './../src/constants/ConstantsField';

describe('FIXParser', () => {
    describe('#parse: constructor validation', () => {
        it('should return null when having no arguments', () => {
            const fixParser = new FIXParser();
            expect(fixParser.parse()).toEqual([]);
        });
    });

    describe('#parse: invalid message', () => {
        fit('should return null when having incorrect message', () => {
            const fixParser = new FIXParser();
            expect(fixParser.parse('aabbccddeeffgghhii').length).toEqual(0);
        });
    });

    describe('#parse: SDBK Price Correction of Previous Execution', () => {
        let fixParser = new FIXParser(),
            messages = fixParser.parse('8=FIX.4.2^A 9=440^A 35=8^A 128=LZJ^A 34=549^A 49=CCG^A 56=LEH_LZJ02^A 52=20100302- 22:36:15^A 55=IOC^A 37=NF 0039/03022010^A 11=NF 0039/03022010^A 17=NF 0039/03022010 001001002^A 20=2^A 39=2^A 150=2^A 54=1^A 38=100^A 40=1^A 59=0^A 31=49.3700^A 32=100^A 14=0^A 6=0^A 151=0^A 60=20100302-22:36:16^A 58=Trade correction^A 19=NF 0039/03022010 001001001^A 1=ABC123ZYX^A 30=N^A 207=N^A 47=A^A 9430=NX^A 9483=000010^A 9578=1^A 9425=5^A 9579=0000100002^A 9704=0000100001^A 382=1^A 375=TOD^A 337=0000^A 437=100^A 438=1736^A 29=1^A 63=0^A 9440=001001002^A 10=235^A'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            messages = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(messages.length).toEqual(1);
        });

        it('should have BeginString value FIX.4.2', () => {
            expect(messages[0].data[index].tag).toBe(8);
            expect(messages[0].data[index].value).toBe('FIX.4.2');
            index++;
        });

        it('should have BodyLength value 440 (validated)', () => {
            expect(messages[0].data[index].tag).toBe(9);
            expect(messages[0].data[index].value).toBe(440);
            expect(messages[0].bodyLengthValid).toBeTruthy();
            index++;
        });

        it('should have MsgType value 8', () => {
            expect(messages[0].data[index].tag).toBe(35);
            expect(messages[0].data[index].value).toBe('8');
            index++;
        });

        it('should have DeliverToCompID value LZJ', () => {
            expect(messages[0].data[index].tag).toBe(128);
            expect(messages[0].data[index].value).toBe('LZJ');
            index++;
        });

        it('should have MsgSeqNum value LZJ', () => {
            expect(messages[0].data[index].tag).toBe(34);
            expect(messages[0].data[index].value).toBe(549);
            index++;
        });

        it('should have SenderCompID value CCG', () => {
            expect(messages[0].data[index].tag).toBe(49);
            expect(messages[0].data[index].value).toBe('CCG');
            index++;
        });

        it('should have TargetCompID value LEH_LZJ02', () => {
            expect(messages[0].data[index].tag).toBe(56);
            expect(messages[0].data[index].value).toBe('LEH_LZJ02');
            index++;
        });

        it('should have SendingTime value 20100302- 22:36:15', () => {
            expect(messages[0].data[index].tag).toBe(52);
            expect(messages[0].data[index].value).toBe('20100302- 22:36:15');
            index++;
        });

        it('should have Symbol value IOC', () => {
            expect(messages[0].data[index].tag).toBe(55);
            expect(messages[0].data[index].value).toBe('IOC');
            index++;
        });

        it('should have OrderID value NF 0039/03022010', () => {
            expect(messages[0].data[index].tag).toBe(37);
            expect(messages[0].data[index].value).toBe('NF 0039/03022010');
            index++;
        });

        it('should have ClOrdID value NF 0039/03022010', () => {
            expect(messages[0].data[index].tag).toBe(11);
            expect(messages[0].data[index].value).toBe('NF 0039/03022010');
            index++;
        });

        it('should have ExecID value NF 0039/03022010 001001002', () => {
            expect(messages[0].data[index].tag).toBe(17);
            expect(messages[0].data[index].value).toBe('NF 0039/03022010 001001002');
            index++;
        });

        it('should have ExecTransType value 2 (Correct)', () => {
            expect(messages[0].data[index].tag).toBe(20);
            expect(messages[0].data[index].value).toBe('2');
            index++;
        });

        it('should have OrdStatus value 2', () => {
            expect(messages[0].data[index].tag).toBe(39);
            expect(messages[0].data[index].value).toBe('2');
            index++;
        });

        it('should have ExecType value 2', () => {
            expect(messages[0].data[index].tag).toBe(150);
            expect(messages[0].data[index].value).toBe('2');
            index++;
        });

        it('should have Side value 1', () => {
            expect(messages[0].data[index].tag).toBe(54);
            expect(messages[0].data[index].value).toBe('1');
            index++;
        });

        it('should have OrderQty value 100', () => {
            expect(messages[0].data[index].tag).toBe(38);
            expect(messages[0].data[index].value).toBe(100);
            expect(messages[0].data[index].value).toBe(100);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(messages[0].data[index].tag).toBe(40);
            expect(messages[0].data[index].value).toBe('1');
            index++;
        });

        it('should have TimeInForce value 0', () => {
            expect(messages[0].data[index].tag).toBe(59);
            expect(messages[0].data[index].value).toBe('0');
            index++;
        });

        it('should have LastPx value 49.3700', () => {
            expect(messages[0].data[index].tag).toBe(31);
            expect(messages[0].data[index].value).toBe(49.3700);
            index++;
        });

        it('should have LastQty value 100', () => {
            expect(messages[0].data[index].tag).toBe(32);
            expect(messages[0].data[index].value).toBe(100);
            index++;
        });

        it('should have CumQty value 0', () => {
            expect(messages[0].data[index].tag).toBe(14);
            expect(messages[0].data[index].value).toBe(0);
            index++;
        });

        it('should have AvgPx value 0', () => {
            expect(messages[0].data[index].tag).toBe(6);
            expect(messages[0].data[index].value).toBe(0.0);
            index++;
        });

        it('should have LeavesQty value 0', () => {
            expect(messages[0].data[index].tag).toBe(151);
            expect(messages[0].data[index].value).toBe(0);
            index++;
        });

        it('should have TransactTime value 20100302-22:36:16', () => {
            expect(messages[0].data[index].tag).toBe(60);
            expect(messages[0].data[index].value).toBe('20100302-22:36:16');
            index++;
        });

        it('should have Text value Trade correction', () => {
            expect(messages[0].data[index].tag).toBe(58);
            expect(messages[0].data[index].value).toBe('Trade correction');
            index++;
        });

        it('should have ExecRefID value NF 0039/03022010 001001001', () => {
            expect(messages[0].data[index].tag).toBe(19);
            expect(messages[0].data[index].value).toBe('NF 0039/03022010 001001001');
            index++;
        });

        it('should have Account value ABC123ZYX', () => {
            expect(messages[0].data[index].tag).toBe(1);
            expect(messages[0].data[index].value).toBe('ABC123ZYX');
            index++;
        });

        it('should have LastMkt value N', () => {
            expect(messages[0].data[index].tag).toBe(30);
            expect(messages[0].data[index].value).toBe('N');
            index++;
        });

        it('should have SecurityExchange value N', () => {
            expect(messages[0].data[index].tag).toBe(207);
            expect(messages[0].data[index].value).toBe('N');
            index++;
        });

        it('should have Rule80A value A', () => {
            expect(messages[0].data[index].tag).toBe(47);
            expect(messages[0].data[index].value).toBe('A');
            index++;
        });

        it('NySE extensions: should have NYSEDirect value NX', () => {
            expect(messages[0].data[index].tag).toBe(9430);
            expect(messages[0].data[index].value).toBe('NX');
            index++;
        });

        it('NySE extensions: should have DBExecID value 000010', () => {
            expect(messages[0].data[index].tag).toBe(9483);
            expect(messages[0].data[index].value).toBe('000010');
            index++;
        });

        it('NySE extensions: should have BillingIndicator value 1', () => {
            expect(messages[0].data[index].tag).toBe(9578);
            expect(messages[0].data[index].value).toBe('1');
            index++;
        });

        it('NySE extensions: should have StatusResp value 5', () => {
            expect(messages[0].data[index].tag).toBe(9425);
            expect(messages[0].data[index].value).toBe('5');
            index++;
        });

        it('NySE extensions: should have ExpERCReferenceNumber value 0000100002', () => {
            expect(messages[0].data[index].tag).toBe(9579);
            expect(messages[0].data[index].value).toBe('0000100002');
            index++;
        });

        it('NySE extensions: should have PrevExpERCReferenceNumber value 0000100001', () => {
            expect(messages[0].data[index].tag).toBe(9704);
            expect(messages[0].data[index].value).toBe('0000100001');
            index++;
        });

        it('should have NoContraBrokers value 1', () => {
            expect(messages[0].data[index].tag).toBe(382);
            expect(messages[0].data[index].value).toBe(1);
            index++;
        });

        it('should have ContraBroker value TOD', () => {
            expect(messages[0].data[index].tag).toBe(375);
            expect(messages[0].data[index].value).toBe('TOD');
            index++;
        });

        it('should have ContraTrader value 0000', () => {
            expect(messages[0].data[index].tag).toBe(337);
            expect(messages[0].data[index].value).toBe('0000');
            index++;
        });

        it('should have ContraTradeQty value 100', () => {
            expect(messages[0].data[index].tag).toBe(437);
            expect(messages[0].data[index].value).toBe(100);
            index++;
        });

        it('should have ContraTradeTime value 1736', () => {
            expect(messages[0].data[index].tag).toBe(438);
            expect(messages[0].data[index].value).toBe('1736');
            index++;
        });

        it('should have LastCapacity value 1', () => {
            expect(messages[0].data[index].tag).toBe(29);
            expect(messages[0].data[index].value).toBe('1');
            index++;
        });

        it('should have SettlType value 0', () => {
            expect(messages[0].data[index].tag).toBe(63);
            expect(messages[0].data[index].value).toBe('0');
            index++;
        });

        it('NySE extensions: should have ERCReferenceNumber value 001001002', () => {
            expect(messages[0].data[index].tag).toBe(9440);
            expect(messages[0].data[index].value).toBe('001001002');
            index++;
        });

        it('should have invalid CheckSum value 235', () => {
            expect(messages[0].data[index].tag).toBe(10);
            expect(messages[0].data[index].value).toBe('235');
            expect(messages[0].checksumValid).toBe(false);
            index++;
        });

        it('should get the correct field', () => {
            expect(messages[0].getField(ContraTradeTime).tag).toBe(438);
            expect(messages[0].getField(ContraTradeTime).value).toBe('1736');
        });
    });

    describe('#parse: New order', () => {
        let fixParser = new FIXParser(),
            messages = fixParser.parse('8=FIX.4.2|9=154|35=E|49=INST|56=BROK|52=20050908-15:51:22|34=200|66=14|394=1|68=2|73=2|11=order- 1|67=1|55=IBM|54=2|38=2000|40=1|11=order-2|67=2|55=AOL|54=2|38=1000|40=1|'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            messages = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(messages).toBeTruthy();
        });

        it('should have BeginString value FIX.4.2', () => {
            expect(messages[0].data[index].tag).toBe(8);
            expect(messages[0].data[index].value).toBe('FIX.4.2');
            index++;
        });

        it('should have BodyLength value 154 (validated)', () => {
            expect(messages[0].data[index].tag).toBe(9);
            expect(messages[0].data[index].value).toBe(154);
            expect(messages[0].bodyLengthValid).toBe(true);
            index++;
        });

        it('should have MsgType value E', () => {
            expect(messages[0].data[index].tag).toBe(35);
            expect(messages[0].data[index].value).toBe('E');
            index++;
        });

        it('should have SenderCompID value INST', () => {
            expect(messages[0].data[index].tag).toBe(49);
            expect(messages[0].data[index].value).toBe('INST');
            index++;
        });

        it('should have MsgSeqNum value BROK', () => {
            expect(messages[0].data[index].tag).toBe(56);
            expect(messages[0].data[index].value).toBe('BROK');
            index++;
        });

        it('should have SendingTime value 20050908-15:51:22', () => {
            expect(messages[0].data[index].tag).toBe(52);
            expect(messages[0].data[index].value).toBe('20050908-15:51:22');
            index++;
        });

        it('should have MsgSeqNum value 200', () => {
            expect(messages[0].data[index].tag).toBe(34);
            expect(messages[0].data[index].value).toBe(200);
            index++;
        });

        it('should have ListID value 14', () => {
            expect(messages[0].data[index].tag).toBe(66);
            expect(messages[0].data[index].value).toBe('14');
            index++;
        });

        it('should have BidType value 1', () => {
            expect(messages[0].data[index].tag).toBe(394);
            expect(messages[0].data[index].value).toBe(1);
            index++;
        });

        it('should have TotNoOrders value 2', () => {
            expect(messages[0].data[index].tag).toBe(68);
            expect(messages[0].data[index].value).toBe(2);
            index++;
        });

        it('should have NoOrders value 2', () => {
            expect(messages[0].data[index].tag).toBe(73);
            expect(messages[0].data[index].value).toBe(2);
            index++;
        });

        it('should have ClOrdID value order- 1', () => {
            expect(messages[0].data[index].tag).toBe(11);
            expect(messages[0].data[index].value).toBe('order- 1');
            index++;
        });

        it('should have ListSeqNo value 1', () => {
            expect(messages[0].data[index].tag).toBe(67);
            expect(messages[0].data[index].value).toBe(1);
            index++;
        });

        it('should have Symbol value IBM', () => {
            expect(messages[0].data[index].tag).toBe(55);
            expect(messages[0].data[index].value).toBe('IBM');
            index++;
        });

        it('should have Side value 2', () => {
            expect(messages[0].data[index].tag).toBe(54);
            expect(messages[0].data[index].value).toBe('2');
            index++;
        });

        it('should have OrderQty value 2000', () => {
            expect(messages[0].data[index].tag).toBe(38);
            expect(messages[0].data[index].value).toBe(2000);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(messages[0].data[index].tag).toBe(40);
            expect(messages[0].data[index].value).toBe('1');
            index++;
        });

        it('should have ClOrdID value order-2', () => {
            expect(messages[0].data[index].tag).toBe(11);
            expect(messages[0].data[index].value).toBe('order-2');
            index++;
        });

        it('should have ListSeqNo value 2', () => {
            expect(messages[0].data[index].tag).toBe(67);
            expect(messages[0].data[index].value).toBe(2);
            index++;
        });

        it('should have Symbol value AOL', () => {
            expect(messages[0].data[index].tag).toBe(55);
            expect(messages[0].data[index].value).toBe('AOL');
            index++;
        });

        it('should have Side value 2', () => {
            expect(messages[0].data[index].tag).toBe(54);
            expect(messages[0].data[index].value).toBe('2');
            index++;
        });

        it('should have OrderQty value 1000', () => {
            expect(messages[0].data[index].tag).toBe(38);
            expect(messages[0].data[index].value).toBe(1000);
            index++;
        });

        it('should have OrdType value 1', () => {
            expect(messages[0].data[index].tag).toBe(40);
            expect(messages[0].data[index].value).toBe('1');
            index++;
        });

    });

    describe('#parse: ExecutionReport', () => {
        let fixParser = new FIXParser(),
            messages = fixParser.parse('8=FIX.4.4\x019=1753\x0135=8\x01523=S|E|B Auto-pricing\x01'),
            index = 0;

        afterAll(() => {
            fixParser = null;
            messages = null;
            index = 0;
        });

        it('should have parsed the FIX message', () => {
            expect(messages.length).toEqual(1);
        });

        it('should have BeginString value FIX.4.4', () => {
            expect(messages[0].data[index].tag).toBe(8);
            expect(messages[0].data[index].value).toBe('FIX.4.4');
            index++;
        });

        it('should have BodyLength value 1753 (validated)', () => {
            expect(messages[0].data[index].tag).toBe(9);
            expect(messages[0].data[index].value).toBe(1753);
            expect(messages[0].bodyLengthValid).toBeFalsy();
            index++;
        });

        it('should have MsgType value 8', () => {
            expect(messages[0].data[index].tag).toBe(35);
            expect(messages[0].data[index].value).toBe('8');
            index++;
        });

        it('should have PartySubID value 8', () => {
            expect(messages[0].data[index].tag).toBe(523);
            expect(messages[0].data[index].value).toBe('S|E|B Auto-pricing');
            index++;
        });

    });

    describe('#getBriefDescription', () => {
        describe('should generate a brief description', () => {
            let fixParser = new FIXParser(),
                messages = null;

            afterAll(() => {
                fixParser = null;
                messages = null;
            });

            afterEach(() => {
                messages = null;
            });

            it('New Order Single', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=145\x0135=D\x0134=4\x0149=ABC_DEFG01\x0152=20090323-15:40:29\x0156=CCG\x01115=XYZ\x0111=NF 0542/03232009\x0154=1\x0138=100\x0155=CVS\x0140=1\x0159=0\x0147=A\x0160=20090323-15:40:29\x0121=1\x01207=N\x0110=139\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 100 CVS MKT DAY');
            });

            it('CBS Direct-To-Handheld New Order Single', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=154\x0135=D\x0134=57\x0149=ABC_DEFG04\x0152=20090402-18:15:40\x0156=CCG\x01115=XYZ\x01143=100\x0111=NF 0646/04022009\x0154=1\x0138=100\x0155=PAC\x0140=1\x0159=0\x0147=A\x0160=20090402-18:15:40\x0121=1\x01207=N\x0110=013\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 100 PAC MKT DAY');
            });

            it('BBSS Execution', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=451\x0135=8\x01128=XYZ\x0134=52\x0149=CCG\x0156=ABC_DEFG04\x0152=20090402- 18:13:13\x0155=PAC\x0137=NF 0645/04022009\x0111=NF 0645/04022009\x0117=NF 0645/04022009 001001001\x0120=0\x0139=2\x01150=2\x0154=1\x0138=1000\x0140=1\x0159=0\x0131=17.00\x0132=1000\x0114=0\x016=0\x01151=0\x0160=20090402-18:13:11\x0158=Fill\x0176=0123\x019433=0123\x0147=A\x019579=0000100001\x019440=001001001\x01382=1\x01375=SB\x01337=0234\x01437=1000\x01438=1413\x0163=0\x0129=1\x01207=N\x0130=N\x0110=116\x01');
                expect(messages[0].getBriefDescription()).toBe('1000 @17.00 LvsQty 0');
            });

            it('BBSS Trade Bust of Previous Execution', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=397\x0135=8\x01128=XYZ\x0134=70\x0149=CCG\x0156=ABC_DEFG04\x0152=20090402- 18:20:41\x0155=PAC\x0137=NF 0644/04022009\x0111=NF 0644/04022009\x0117=NF 0644/04022009 001001003\x0120=1\x0139=1\x01150=1\x0154=1\x0138=100\x0140=1\x0159=0\x0131=16.77\x0132=100\x0114=0\x016=0\x01151=100\x0160=20090402-18:20:40\x019579=0000100003\x019440=001001003\x01382=1\x01375=BARC\x01337=0000\x01437=100\x01438=1420\x0176=8080\x019433=8080\x0119=NF 0644/04022009 001001002\x019704=0000100002\x019425=1\x0147=A\x0163=0\x0129=1\x01207=N\x0130=N\x0110=004\x01');
                expect(messages[0].getBriefDescription()).toBe('100 @16.77 LvsQty 100');
            });

            it('Cancel Replace (changing quantity) of previously reduced order', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=197\x0135=G\x0134=131\x0149=ABC_DEFG01\x0152=20090325-15:20:32\x0156=CCG\x01115=XYZ\x0111=NF 0578/03252009\x0137=NF 0576/03252009\x0141=NF 0576/03252009\x0154=1\x0138=2000\x0155=CVS\x0140=2\x0144=25.47\x0159=0\x0147=A\x0160=20090325-15:20:32\x0121=1\x01207=N\x0110=172\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 2000 CVS LMT @25.47 DAY');
            });

            it('Closing Offset (New Order Single)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=156\x0135=D\x0134=124\x0149=ABC_DEFG04\x0152=20100208-18:51:42\x0156=CCG\x01115=XYZ\x0111=NF 0015/02082010\x0154=2\x0138=1000\x0155=RRC\x0140=2\x0144=55.36\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x019487=CO\x0110=050\x01');
                expect(messages[0].getBriefDescription()).toBe('SL 1000 RRC LMT @55.36 DAY');
            });

            it('MatchPoint (New Order Single)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=153\x0135=D\x0134=11\x0149=ABC_DEFG04\x0152=20091216-17:23:52\x0156=CCG\x0157=ARCA\x01115=XYZ\x01128=MP\x0111=NF 0921/12162009\x0154=2\x0138=1000\x0155=MMM\x0140=1\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x0110=172\x01');
                expect(messages[0].getBriefDescription()).toBe('SL 1000 MMM MKT DAY');
            });

            it('Sub-Penny (New Order Single)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=147\x0135=D\x0134=215\x0149=ABC_DEFG04\x0152=20100208-19:36:45\x0156=CCG\x01115=XYZ\x0111=NF 0016/02082010\x0154=1\x0138=1000\x0155=VOD\x0140=2\x0144=.995\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x0110=100\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 1000 VOD LMT @.995 DAY');
            });

            it('Dot Reserve Order Type (Max Floor)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=154\x0135=D\x0134=578\x0149=LEH_LZJ02\x0152=20100302-22:50:34\x0156=CCG\x01115=LZJ\x0111=NF 0040/03022010\x0154=1\x0138=1000\x0155=IOC\x0140=2\x0144=49.38\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x01111=0\x0110=121\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 1000 IOC LMT @49.38 DAY');
            });

            it('BBSS Max Quantity Order (99,999,900 shares)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=162\x0135=D\x0134=3\x0149=LEH_LZJ02\x0152=20100303-15:17:05\x0156=CCG\x0157=4\x01115=LZJ\x01143=ER\x0111=NF 0041/03032010\x0154=1\x0138=99999900\x0155=MMM\x0140=2\x0144=50.00\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x0110=069\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 99999900 MMM LMT @50.00 DAY');
            });

            it('Symbol with a Suffix', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=150\x0135=D\x0134=13\x0149=LEH_LZJ02\x0152=20100303-15:21:52\x0156=CCG\x01115=LZJ\x0111=NF 0043/03032010\x0154=1\x0138=100\x0155=ADM\x0165=PRA\x0140=2\x0144=25\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x0110=237\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 100 ADM LMT @25.00 DAY');
            });

            it('Partial Fill Followed by Full Fill', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=389\x0135=8\x01128=XYZ\x0134=27\x0149=CCG\x0156=ABC_DEFG01\x0152=20090325- 14:28:10\x0155=CVS\x0137=NF 0568/03252009\x0111=NF 0568/03252009\x0117=NF 0568/03252009 001001001\x0120=0\x0139=1\x01150=1\x0154=2\x0138=500\x0140=1\x0159=0\x0131=25.4700\x0132=100\x0114=0\x016=0\x01151=400\x0160=20090325-14:28:12\x0158=Partial Fill\x0130=N\x0176=0034\x01207=N\x0147=A\x019430=NX\x019483=000006\x019578=1\x01382=1\x01375=TOD\x01337=0000\x01437=100\x01438=1134\x019579=0000100001\x019426=1\x019433=0034\x0129=1\x0163=0\x019440=001001001\x0110=251\x01');
                expect(messages[0].getBriefDescription()).toBe('100 @25.47 LvsQty 400');
            });

            it('Execution Filling the Order', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=379\x0135=8\x01128=XYZ\x0134=28\x0149=CCG\x0156=ABC_DEFG01\x0152=20090325- 14:28:10\x0155=CVS\x0137=NF 0568/03252009\x0111=NF 0568/03252009\x0117=NF 0568/03252009 002002002\x0120=0\x0139=2\x01150=2\x0154=2\x0138=500\x0140=1\x0159=0\x0131=25.2800\x0132=400\x0114=0\x016=0\x01151=0\x0160=20090325-14:28:12\x0158=Fill\x0130=N\x0176=0034\x01207=N\x0147=A\x019430=NX\x019483=000007\x019578=1\x01382=1\x01375=TOD\x01337=0000\x01437=400\x01438=1134\x019579=0000200002\x019433=0034\x0129=1\x0163=0\x019440=002002002\x0110=186\x01');
                expect(messages[0].getBriefDescription()).toBe('400 @25.28 LvsQty 0');
            });

            it('MatchPoint (Execution Report)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=258\x0135=8\x0150=ARCA\x01128=XYZ\x0134=87\x0149=CCG\x0156=ABC_DEFG04\x0152=20091216-18:00:24\x0155=MMM\x0137=0000002\x0111=NF 0921/12162009\x0117=2000005\x0120=0\x0139=2\x01150=2\x0154=2\x0138=1000\x0140=1\x0159=0\x0131=82.245\x0132=1000\x0114=1000\x016=82.245\x01151=0\x0160=20091216-18:00:25\x0158=Fill\x01583=91XYZ\x0130=MP\x01207=N\x019426=N/MP\x019570=N/MP\x0110=088\x01');
                expect(messages[0].getBriefDescription()).toBe('1000 @82.25 LvsQty 0');
            });

            it('Sub-Penny (Execution Report)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=404\x0135=8\x01128=XYZ\x0134=216\x0149=CCG\x0156=ABC_DEFG04\x0152=20100208-19:36:45\x0155=VOD\x0137=NF 0016/02082010\x0111=NF 0016/02082010\x0117=NF 0016/02082010 001001001\x0120=0\x0139=2\x01150=2\x0154=1\x0138=1000\x0140=2\x0144=0.9950\x0159=0\x0131=0.4000\x0132=1000\x0114=0\x016=0\x01151=0\x0160=20100208-19:36:45\x0158=Fill\x011=ABC123ZYX\x0130=A\x0176=0210\x01207=A\x0147=A\x019430=NX\x019483=000004\x019578=1\x01382=1\x01375=LOC\x01337=0000\x01437=1000\x01438=1437\x019579=0000100001\x019426=1\x019433=0210\x0129=1\x0163=0\x019440=001001001\x0110=121\x01');
                expect(messages[0].getBriefDescription()).toBe('1000 @0.40 LvsQty 0');
            });

            it('New Order (order to be replaced)', () => {
                messages = fixParser.parse('8=FIX.4.2\x019=157\x0135=D\x0134=117\x0149=ABC_DEFG01\x0152=20090325-15:14:27\x0156=CCG\x01115=XYZ\x0111=NF 0573/03252009\x0154=1\x0138=1000\x0155=CVS\x0140=2\x0144=25.47\x0159=0\x0147=A\x0160=20090325-15:14:27\x0121=1\x01207=N\x0110=210\x01');
                expect(messages[0].getBriefDescription()).toBe('BUY 1000 CVS LMT @25.47 DAY');
            });

            it('Multiple messages', () => {
                messages = fixParser.parse('8=FIX.4.1\x019=61\x0135=A\x0134=1\x0149=EXEC\x0152=20121105-23:24:06\x0156=BANZAI\x0198=0\x01108=30\x0110=003\x018=FIX.4.1\x019=61\x0135=A\x0134=1\x0149=BANZAI\x0152=20121105-23:24:06\x0156=EXEC\x0198=0\x01108=30\x0110=003\x018=FIX.4.1\x019=49\x0135=0\x0134=2\x0149=BANZAI\x0152=20121105-23:24:37\x0156=EXEC\x0110=228\x018=FIX.4.1\x019=49\x0135=0\x0134=2\x0149=EXEC\x0152=20121105-23:24:37\x0156=BANZAI\x0110=228\x018=FIX.4.1\x019=103\x0135=D\x0134=3\x0149=BANZAI\x0152=20121105-23:24:42\x0156=EXEC\x0111=1352157882577\x0121=1\x0138=10000\x0140=1\x0154=1\x0155=MSFT\x0159=0\x0110=062\x018=FIX.4.1\x019=139\x0135=8\x0134=3\x0149=EXEC\x0152=20121105-23:24:42\x0156=BANZAI\x016=0\x0111=1352157882577\x0114=0\x0117=1\x0120=0\x0131=0\x0132=0\x0137=1\x0138=10000\x0139=0\x0154=1\x0155=MSFT\x01150=2\x01151=0\x0110=059\x018=FIX.4.1\x019=153\x0135=8\x0134=4\x0149=EXEC\x0152=20121105-23:24:42\x0156=BANZAI\x016=12.3\x0111=1352157882577\x0114=10000\x0117=2\x0120=0\x0131=12.3\x0132=10000\x0137=2\x0138=10000\x0139=2\x0154=1\x0155=MSFT\x01150=2\x01151=0\x0110=230\x018=FIX.4.1\x019=103\x0135=D\x0134=4\x0149=BANZAI\x0152=20121105-23:24:55\x0156=EXEC\x0111=1352157895032\x0121=1\x0138=10000\x0140=1\x0154=1\x0155=ORCL\x0159=0\x0110=047\x018=FIX.4.1\x019=139\x0135=8\x0134=5\x0149=EXEC\x0152=20121105-23:24:55\x0156=BANZAI\x016=0\x0111=1352157895032\x0114=0\x0117=3\x0120=0\x0131=0\x0132=0\x0137=3\x0138=10000\x0139=0\x0154=1\x0155=ORCL\x01150=2\x01151=0\x0110=049\x018=FIX.4.1\x019=153\x0135=8\x0134=6\x0149=EXEC\x0152=20121105-23:24:55\x0156=BANZAI\x016=12.3\x0111=1352157895032\x0114=10000\x0117=4\x0120=0\x0131=12.3\x0132=10000\x0137=4\x0138=10000\x0139=2\x0154=1\x0155=ORCL\x01150=2\x01151=0\x0110=220\x018=FIX.4.1\x019=108\x0135=D\x0134=5\x0149=BANZAI\x0152=20121105-23:25:12\x0156=EXEC\x0111=1352157912357\x0121=1\x0138=10000\x0140=2\x0144=10\x0154=1\x0155=SPY\x0159=0\x0110=003\x018=FIX.4.1\x019=138\x0135=8\x0134=7\x0149=EXEC\x0152=20121105-23:25:12\x0156=BANZAI\x016=0\x0111=1352157912357\x0114=0\x0117=5\x0120=0\x0131=0\x0132=0\x0137=5\x0138=10000\x0139=0\x0154=1\x0155=SPY\x01150=2\x01151=0\x0110=252\x018=FIX.4.1\x019=104\x0135=F\x0134=6\x0149=BANZAI\x0152=20121105-23:25:16\x0156=EXEC\x0111=1352157916437\x0138=10000\x0141=1352157912357\x0154=1\x0155=SPY\x0110=198\x018=FIX.4.1\x019=82\x0135=3\x0134=8\x0149=EXEC\x0152=20121105-23:25:16\x0156=BANZAI\x0145=6\x0158=Unsupported message type\x0110=000\x018=FIX.4.1\x019=104\x0135=F\x0134=7\x0149=BANZAI\x0152=20121105-23:25:25\x0156=EXEC\x0111=1352157925309\x0138=10000\x0141=1352157912357\x0154=1\x0155=SPY\x0110=197\x018=FIX.4.1\x019=82\x0135=3\x0134=9\x0149=EXEC\x0152=20121105-23:25:25\x0156=BANZAI\x0145=7\x0158=Unsupported message type\x0110=002\x01');
                expect(messages[0].getBriefDescription()).toBe('Logon');
                expect(messages[1].getBriefDescription()).toBe('Logon');
                expect(messages[2].getBriefDescription()).toBe('Heartbeat');
                expect(messages[3].getBriefDescription()).toBe('Heartbeat');
                expect(messages[4].getBriefDescription()).toBe('BUY 10000 MSFT MKT DAY');
                expect(messages[5].getBriefDescription()).toBe('10000 @0.00 LvsQty 0');
                expect(messages[6].getBriefDescription()).toBe('10000 @12.30 LvsQty 0');
                expect(messages[7].getBriefDescription()).toBe('BUY 10000 ORCL MKT DAY');
                expect(messages[8].getBriefDescription()).toBe('10000 @0.00 LvsQty 0');
                expect(messages[9].getBriefDescription()).toBe('10000 @12.30 LvsQty 0');
                expect(messages[10].getBriefDescription()).toBe('BUY 10000 SPY LMT @10.00 DAY');
                expect(messages[11].getBriefDescription()).toBe('10000 @0.00 LvsQty 0');
                expect(messages[12].getBriefDescription()).toBe('BUY 10000 SPY');
                expect(messages[13].getBriefDescription()).toBe('Reject');
                expect(messages[14].getBriefDescription()).toBe('BUY 10000 SPY');
                expect(messages[15].getBriefDescription()).toBe('Reject');
            });
        });
    });

    describe('#getField: ExecutionReport', () => {
        let fixParser = new FIXParser(),
            messages = fixParser.parse('8=FIX.4.2|9=266|35=8|49=ABC|56=XYZ|50=AZ12|57=NA|34=833|52=20100130-08:00:51.992|55=GLD|48=PL11YA|167=FUT|207=LIFFE|1=AA1|37=ABC1|17=INDNTHDOG|58=Fill|200=201009|205=13|32=25|151=0|14=25|54=2|40=2|77=O|59=0|150=2|20=0|39=2|442=1|44=99.06|38=25|31=99.06|6=99.06|60=20100130-08:00:52|10=136|');

        afterAll(() => {
            fixParser = null;
            messages = null;
        });

        it('should get the correct field', () => {
            expect(messages[0].getField(MsgSeqNum).tag).toBe(34);
            expect(messages[0].getField(MsgSeqNum).value).toBe(833);
        });
    });

    function processTest(fixMessage) {
        describe(`#parse: ${fixMessage.description}`, () => {
            let fixParser = new FIXParser(),
                messages = fixParser.parse(fixMessage.fix);

            afterAll(() => {
                fixParser = null;
                messages = null;
            });

            it('should have parsed the FIX message', () => {
                expect(messages.length).toEqual(fixMessage.numMessages ? fixMessage.numMessages : 1);
                expect(messages[0].data[0].name).toBe('BeginString');
                expect(messages[0].data[1].name).toBe('BodyLength');
                expect(messages[0].data[2].name).toBe('MsgType');
            });

            it(`should have MsgType ${messages[0].description}`, () => {
                expect(messages[0].description).toBe(fixMessage.description);
            });

            it(`should have valid BodyLength: ${messages[0].bodyLengthValid}`, () => {
                expect(messages[0].bodyLengthValid).toBe(fixMessage.bodyLengthValid, `[actual: ${messages[0].bodyLengthValue}, expected: ${messages[0].bodyLengthExpected}]`);
            });

            it(`should have valid CheckSum: ${messages[0].checksumValid}`, () => {
                expect(messages[0].checksumValid).toBe(fixMessage.checksumValid, `[actual: ${messages[0].checksumValue}, expected: ${messages[0].checksumExpected}]`);
            });
        });
    }

    testMessages.forEach((messages) => {
        processTest(messages);
    });

});
