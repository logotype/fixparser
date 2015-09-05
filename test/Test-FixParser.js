var assert = require('chai').assert,
    testMessages = require('./test-messages.js'),
    FIXParser = require('./../src/FIXParser').FIXParser;

describe('FIXParser', () => {
    describe('#parse: constructor validation', () => {
        it('should throw an error when having no arguments', () => {
            assert.throws(() => {
                let fixParser = new FIXParser();
                fixParser.parse();
            }, Error, 'No message specified!');
        });
    });

    describe('#parse: SDBK Price Correction of Previous Execution', () => {
        let fixParser = new FIXParser(),
            parsed = fixParser.parse('8=FIX.4.2^A 9=439^A 35=8^A 128=LZJ^A 34=549^A 49=CCG^A 56=LEH_LZJ02^A 52=20100302- 22:36:15^A 55=IOC^A 37=NF 0039/03022010^A 11=NF 0039/03022010^A 17=NF 0039/03022010 001001002^A 20=2^A 39=2^A 150=2^A 54=1^A 38=100^A 40=1^A 59=0^A 31=49.3700^A 32=100^A 14=0^A 6=0^A 151=0^A 60=20100302-22:36:16^A 58=Trade correction^A 19=NF 0039/03022010 001001001^A 1=ABC123ZYX^A 30=N^A 207=N^A 47=A^A 9430=NX^A 9483=000010^A 9578=1^A 9425=5^A 9579=0000100002^A 9704=0000100001^A 382=1^A 375=TOD^A 337=0000^A 437=100^A 438=1736^A 29=1^A 63=0^A 9440=001001002^A 10=235^A'),
            index = 0,
            isInt;
        after((done) => {
            fixParser = null;
            parsed = null;
            index = 0;
            done();
        });

        it('should have parsed the FIX message', (done) => {
            assert.ok(parsed);
            assert.isNotNull(parsed);
            done();
        });

        it('should have BeginString value FIX.4.2', (done) => {
            assert.strictEqual(parsed[index].tag, 8);
            assert.strictEqual(parsed[index].value, 'FIX.4.2');
            index++;
            done();
        });

        it('should have BodyLength value 439', (done) => {
            assert.strictEqual(parsed[index].tag, 9);
            assert.strictEqual(parsed[index].value, 439);
            assert.isNumber(parsed[index].value);
            isInt = parsed[index].value % 1 === 0;
            assert(isInt, 'not an integer:' + parsed[index].value);
            index++;
            done();
        });

        it('should have MsgType value 8', (done) => {
            assert.strictEqual(parsed[index].tag, 35);
            assert.strictEqual(parsed[index].value, '8');
            index++;
            done();
        });

        it('should have DeliverToCompID value LZJ', (done) => {
            assert.strictEqual(parsed[index].tag, 128);
            assert.strictEqual(parsed[index].value, 'LZJ');
            index++;
            done();
        });

        it('should have MsgSeqNum value LZJ', (done) => {
            assert.strictEqual(parsed[index].tag, 34);
            assert.strictEqual(parsed[index].value, 549);
            assert.isNumber(parsed[index].value);
            isInt = parsed[index].value % 1 === 0;
            assert(isInt, 'not an integer:' + parsed[index].value);
            index++;
            done();
        });

        it('should have SenderCompID value CCG', (done) => {
            assert.strictEqual(parsed[index].tag, 49);
            assert.strictEqual(parsed[index].value, 'CCG');
            index++;
            done();
        });

        it('should have TargetCompID value LEH_LZJ02', (done) => {
            assert.strictEqual(parsed[index].tag, 56);
            assert.strictEqual(parsed[index].value, 'LEH_LZJ02');
            index++;
            done();
        });

        it('should have SendingTime value 20100302-22:36:15', (done) => {
            assert.strictEqual(parsed[index].tag, 52);
            assert.strictEqual(parsed[index].value, '20100302-22:36:15');
            index++;
            done();
        });

        it('should have Symbol value IOC', (done) => {
            assert.strictEqual(parsed[index].tag, 55);
            assert.strictEqual(parsed[index].value, 'IOC');
            index++;
            done();
        });

        it('should have OrderID value NF0039/03022010', (done) => {
            assert.strictEqual(parsed[index].tag, 37);
            assert.strictEqual(parsed[index].value, 'NF0039/03022010');
            index++;
            done();
        });

        it('should have ClOrdID value NF0039/03022010', (done) => {
            assert.strictEqual(parsed[index].tag, 11);
            assert.strictEqual(parsed[index].value, 'NF0039/03022010');
            index++;
            done();
        });

        it('should have ExecID value NF0039/03022010001001002', (done) => {
            assert.strictEqual(parsed[index].tag, 17);
            assert.strictEqual(parsed[index].value, 'NF0039/03022010001001002');
            index++;
            done();
        });

        it('should have ExecTransType value 2 (Correct)', (done) => {
            assert.strictEqual(parsed[index].tag, 20);
            assert.strictEqual(parsed[index].value, '2');
            index++;
            done();
        });

        it('should have OrdStatus value 2', (done) => {
            assert.strictEqual(parsed[index].tag, 39);
            assert.strictEqual(parsed[index].value, '2');
            index++;
            done();
        });

        it('should have ExecType value 2', (done) => {
            assert.strictEqual(parsed[index].tag, 150);
            assert.strictEqual(parsed[index].value, '2');
            index++;
            done();
        });

        it('should have Side value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 54);
            assert.strictEqual(parsed[index].value, '1');
            index++;
            done();
        });

        it('should have OrderQty value 100', (done) => {
            assert.strictEqual(parsed[index].tag, 38);
            assert.strictEqual(parsed[index].value, 100);
            assert.strictEqual(parsed[index].value, 100);
            index++;
            done();
        });

        it('should have OrdType value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 40);
            assert.strictEqual(parsed[index].value, '1');
            index++;
            done();
        });

        it('should have TimeInForce value 0', (done) => {
            assert.strictEqual(parsed[index].tag, 59);
            assert.strictEqual(parsed[index].value, '0');
            index++;
            done();
        });

        it('should have LastPx value 49.3700', (done) => {
            assert.strictEqual(parsed[index].tag, 31);
            assert.strictEqual(parsed[index].value, 49.3700);
            index++;
            done();
        });

        it('should have LastQty value 100', (done) => {
            assert.strictEqual(parsed[index].tag, 32);
            assert.strictEqual(parsed[index].value, 100);
            index++;
            done();
        });

        it('should have CumQty value 0', (done) => {
            assert.strictEqual(parsed[index].tag, 14);
            assert.strictEqual(parsed[index].value, 0);
            index++;
            done();
        });

        it('should have AvgPx value 0', (done) => {
            assert.strictEqual(parsed[index].tag, 6);
            assert.strictEqual(parsed[index].value, 0.0);
            index++;
            done();
        });

        it('should have LeavesQty value 0', (done) => {
            assert.strictEqual(parsed[index].tag, 151);
            assert.strictEqual(parsed[index].value, 0);
            index++;
            done();
        });

        it('should have TransactTime value 20100302-22:36:16', (done) => {
            assert.strictEqual(parsed[index].tag, 60);
            assert.strictEqual(parsed[index].value, '20100302-22:36:16');
            index++;
            done();
        });

        it('should have Text value Tradecorrection', (done) => {
            assert.strictEqual(parsed[index].tag, 58);
            assert.strictEqual(parsed[index].value, 'Tradecorrection');
            index++;
            done();
        });

        it('should have ExecRefID value NF0039/03022010001001001', (done) => {
            assert.strictEqual(parsed[index].tag, 19);
            assert.strictEqual(parsed[index].value, 'NF0039/03022010001001001');
            index++;
            done();
        });

        it('should have Account value ABC123ZYX', (done) => {
            assert.strictEqual(parsed[index].tag, 1);
            assert.strictEqual(parsed[index].value, 'ABC123ZYX');
            index++;
            done();
        });

        it('should have LastMkt value N', (done) => {
            assert.strictEqual(parsed[index].tag, 30);
            assert.strictEqual(parsed[index].value, 'N');
            index++;
            done();
        });

        it('should have SecurityExchange value N', (done) => {
            assert.strictEqual(parsed[index].tag, 207);
            assert.strictEqual(parsed[index].value, 'N');
            index++;
            done();
        });

        it('should have Rule80A value A', (done) => {
            assert.strictEqual(parsed[index].tag, 47);
            assert.strictEqual(parsed[index].value, 'A');
            index++;
            done();
        });

        it('NySE extensions: should have NYSEDirect value NX', (done) => {
            assert.strictEqual(parsed[index].tag, 9430);
            assert.strictEqual(parsed[index].value, 'NX');
            index++;
            done();
        });

        it('NySE extensions: should have DBExecID value 000010', (done) => {
            assert.strictEqual(parsed[index].tag, 9483);
            assert.strictEqual(parsed[index].value, '000010');
            index++;
            done();
        });

        it('NySE extensions: should have BillingIndicator value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 9578);
            assert.strictEqual(parsed[index].value, '1');
            index++;
            done();
        });

        it('NySE extensions: should have StatusResp value 5', (done) => {
            assert.strictEqual(parsed[index].tag, 9425);
            assert.strictEqual(parsed[index].value, '5');
            index++;
            done();
        });

        it('NySE extensions: should have ExpERCReferenceNumber value 0000100002', (done) => {
            assert.strictEqual(parsed[index].tag, 9579);
            assert.strictEqual(parsed[index].value, '0000100002');
            index++;
            done();
        });

        it('NySE extensions: should have PrevExpERCReferenceNumber value 0000100001', (done) => {
            assert.strictEqual(parsed[index].tag, 9704);
            assert.strictEqual(parsed[index].value, '0000100001');
            index++;
            done();
        });

        it('should have NoContraBrokers value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 382);
            assert.strictEqual(parsed[index].value, 1);
            assert.isNumber(parsed[index].value);
            isInt = parsed[index].value % 1 === 0;
            assert(isInt, 'not an integer:' + parsed[index].value);
            index++;
            done();
        });

        it('should have ContraBroker value TOD', (done) => {
            assert.strictEqual(parsed[index].tag, 375);
            assert.strictEqual(parsed[index].value, 'TOD');
            index++;
            done();
        });

        it('should have ContraTrader value 0000', (done) => {
            assert.strictEqual(parsed[index].tag, 337);
            assert.strictEqual(parsed[index].value, '0000');
            index++;
            done();
        });

        it('should have ContraTradeQty value 100', (done) => {
            assert.strictEqual(parsed[index].tag, 437);
            assert.strictEqual(parsed[index].value, 100);
            index++;
            done();
        });

        it('should have ContraTradeTime value 1736', (done) => {
            assert.strictEqual(parsed[index].tag, 438);
            assert.strictEqual(parsed[index].value, '1736');
            index++;
            done();
        });

        it('should have LastCapacity value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 29);
            assert.strictEqual(parsed[index].value, '1');
            index++;
            done();
        });

        it('should have SettlType value 0', (done) => {
            assert.strictEqual(parsed[index].tag, 63);
            assert.strictEqual(parsed[index].value, '0');
            index++;
            done();
        });

        it('NySE extensions: should have ERCReferenceNumber value 001001002', (done) => {
            assert.strictEqual(parsed[index].tag, 9440);
            assert.strictEqual(parsed[index].value, '001001002');
            index++;
            done();
        });

        it('should have CheckSum value 235', (done) => {
            assert.strictEqual(parsed[index].tag, 10);
            assert.strictEqual(parsed[index].value, '235');
            //assert.strictEqual(parsed[index].valid, true);
            index++;
            done();
        });
    });

    describe('#parse: New order', () => {
        let fixParser = new FIXParser(),
        parsed = fixParser.parse('8=FIX.4.2|9=190|35=E|49=INST|56=BROK|52=20050908-15:51:22|34=200|66=14|394=1|68=2|73=2|11=order- 1|67=1|55=IBM|54=2|38=2000|40=1|11=order-2|67=2|55=AOL|54=2|38=1000|40=1|'),
        index = 0,
        isInt;
        after((done) => {
            fixParser = null;
            parsed = null;
            index = 0;
            done();
        });

        it('should have parsed the FIX message', (done) => {
            assert.ok(parsed);
            assert.isNotNull(parsed);
            done();
        });

        it('should have BeginString value FIX.4.2', (done) => {
            assert.strictEqual(parsed[index].tag, 8);
            assert.strictEqual(parsed[index].value, 'FIX.4.2');
            index++;
            done();
        });

        it('should have BodyLength value 190', (done) => {
            assert.strictEqual(parsed[index].tag, 9);
            assert.strictEqual(parsed[index].value, 190);
            assert.isNumber(parsed[index].value);
            isInt = parsed[index].value % 1 === 0;
            assert(isInt, 'not an integer:' + parsed[index].value);
            index++;
            done();
        });

        it('should have MsgType value E', (done) => {
            assert.strictEqual(parsed[index].tag, 35);
            assert.strictEqual(parsed[index].value, 'E');
            index++;
            done();
        });

        it('should have SenderCompID value INST', (done) => {
            assert.strictEqual(parsed[index].tag, 49);
            assert.strictEqual(parsed[index].value, 'INST');
            index++;
            done();
        });

        it('should have MsgSeqNum value BROK', (done) => {
            assert.strictEqual(parsed[index].tag, 56);
            assert.strictEqual(parsed[index].value, 'BROK');
            index++;
            done();
        });

        it('should have SendingTime value 20050908-15:51:22', (done) => {
            assert.strictEqual(parsed[index].tag, 52);
            assert.strictEqual(parsed[index].value, '20050908-15:51:22');
            index++;
            done();
        });

        it('should have MsgSeqNum value 200', (done) => {
            assert.strictEqual(parsed[index].tag, 34);
            assert.strictEqual(parsed[index].value, 200);
            index++;
            done();
        });

        it('should have ListID value 14', (done) => {
            assert.strictEqual(parsed[index].tag, 66);
            assert.strictEqual(parsed[index].value, '14');
            index++;
            done();
        });

        it('should have BidType value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 394);
            assert.strictEqual(parsed[index].value, 1);
            index++;
            done();
        });

        it('should have TotNoOrders value 2', (done) => {
            assert.strictEqual(parsed[index].tag, 68);
            assert.strictEqual(parsed[index].value, 2);
            index++;
            done();
        });

        it('should have NoOrders value 2', (done) => {
            assert.strictEqual(parsed[index].tag, 73);
            assert.strictEqual(parsed[index].value, 2);
            index++;
            done();
        });

        it('should have ClOrdID value order-1', (done) => {
            assert.strictEqual(parsed[index].tag, 11);
            assert.strictEqual(parsed[index].value, 'order-1');
            index++;
            done();
        });

        it('should have ListSeqNo value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 67);
            assert.strictEqual(parsed[index].value, 1);
            index++;
            done();
        });

        it('should have Symbol value IBM', (done) => {
            assert.strictEqual(parsed[index].tag, 55);
            assert.strictEqual(parsed[index].value, 'IBM');
            index++;
            done();
        });

        it('should have Side value 2', (done) => {
            assert.strictEqual(parsed[index].tag, 54);
            assert.strictEqual(parsed[index].value, '2');
            index++;
            done();
        });

        it('should have OrderQty value 2000', (done) => {
            assert.strictEqual(parsed[index].tag, 38);
            assert.strictEqual(parsed[index].value, 2000);
            index++;
            done();
        });

        it('should have OrdType value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 40);
            assert.strictEqual(parsed[index].value, '1');
            index++;
            done();
        });

        it('should have ClOrdID value order-2', (done) => {
            assert.strictEqual(parsed[index].tag, 11);
            assert.strictEqual(parsed[index].value, 'order-2');
            index++;
            done();
        });

        it('should have ListSeqNo value 2', (done) => {
            assert.strictEqual(parsed[index].tag, 67);
            assert.strictEqual(parsed[index].value, 2);
            index++;
            done();
        });

        it('should have Symbol value AOL', (done) => {
            assert.strictEqual(parsed[index].tag, 55);
            assert.strictEqual(parsed[index].value, 'AOL');
            index++;
            done();
        });

        it('should have Side value 2', (done) => {
            assert.strictEqual(parsed[index].tag, 54);
            assert.strictEqual(parsed[index].value, '2');
            index++;
            done();
        });

        it('should have OrderQty value 1000', (done) => {
            assert.strictEqual(parsed[index].tag, 38);
            assert.strictEqual(parsed[index].value, 1000);
            index++;
            done();
        });

        it('should have OrdType value 1', (done) => {
            assert.strictEqual(parsed[index].tag, 40);
            assert.strictEqual(parsed[index].value, '1');
            index++;
            done();
        });

    });

    for(var message of testMessages) {
        describe('#parse: ' + message.description, () => {
            let fixParser = new FIXParser(),
            parsed = fixParser.parse(message.fix),
            index = 0;

            after((done) => {
                fixParser = null;
                parsed = null;
                index = 0;
                done();
            });

            it('should have parsed the FIX message', (done) => {
                assert.ok(parsed);
                assert.strictEqual(parsed[0].name, 'BeginString');
                assert.strictEqual(parsed[1].name, 'BodyLength');
                assert.strictEqual(parsed[2].name, 'MsgType');
                assert.isNotNull(parsed);
                done();
            });

        });
    }
});