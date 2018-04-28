'use strict';

require('./../fixparser');
console.log('Running performance tests...');

let i = null, startDate = null, dateDiff = null, rate = null;

const Table = require('cli-table'),
    fixParser = new FIXParser(), //eslint-disable-line no-undef
    iterations = 200000,
    messages = [
        {'description':'New Order Single', 'detail': 'BUY 100 CVS MKT DAY', 'fix':'8=FIX.4.2\x019=145\x0135=D\x0134=4\x0149=ABC_DEFG01\x0152=20090323-15:40:29\x0156=CCG\x01115=XYZ\x0111=NF 0542/03232009\x0154=1\x0138=100\x0155=CVS\x0140=1\x0159=0\x0147=A\x0160=20090323-15:40:29\x0121=1\x01207=N\x0110=139\x01'},
        {'description':'Order Acknowledgement', 'detail': '', 'fix':'8=FIX.4.2\x019=226\x0135=8\x01128=XYZ\x0134=4\x0149=CCG\x0156=ABC_DEFG01\x0152=20090323-15:40:35\x0155=CVS\x0137=NF 0542/03232009\x0111=NF 0542/03232009\x0117=0\x0120=0\x0139=0\x01150=0\x0154=1\x0138=100\x0140=1\x0159=0\x0131=0\x0132=0\x0114=0\x016=0\x01151=100\x0160=20090323-15:40:30\x0158=New order\x0130=N\x01207=N\x0147=A\x0110=149\x01'},
        {'description':'Closing Offset (New Order Single)', 'detail': 'SL 1000 RRC LMT @55.36 DAY', 'fix':'8=FIX.4.2\x019=156\x0135=D\x0134=124\x0149=ABC_DEFG04\x0152=20100208-18:51:42\x0156=CCG\x01115=XYZ\x0111=NF 0015/02082010\x0154=2\x0138=1000\x0155=RRC\x0140=2\x0144=55.36\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x019487=CO\x0110=050\x01'},
        {'description':'Closing Offset (Order Acknowledgement)', 'detail': '', 'fix':'8=FIX.4.2\x019=253\x0135=8\x01128=XYZ\x0134=124\x0149=CCG\x0156=ABC_DEFG04\x0152=20100208-18:51:42\x0155=RRC\x0137=NF 0015/02082010\x0111=NF 0015/02082010\x0117=0\x0120=0\x0139=0\x01150=0\x0154=2\x0138=1000\x0140=2\x0144=55.3600\x0159=0\x0131=0\x0132=0\x0114=0\x016=0\x01151=1000\x0160=20100208-18:51:42\x0158=New order\x0130=N\x011=ABC123ZYX\x01207=N\x0147=A\x0110=037\x01'},
        {'description':'MatchPoint (New Order Single)', 'detail': 'SL 1000 MMM MKT DAY', 'fix':'8=FIX.4.2\x019=153\x0135=D\x0134=11\x0149=ABC_DEFG04\x0152=20091216-17:23:52\x0156=CCG\x0157=ARCA\x01115=XYZ\x01128=MP\x0111=NF 0921/12162009\x0154=2\x0138=1000\x0155=MMM\x0140=1\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x0110=172\x01'},
        {'description':'MatchPoint (Order Acknowledgement)', 'detail': '', 'fix':'8=FIX.4.2\x019=234\x0135=8\x0150=ARCA\x01128=XYZ\x0134=11\x0149=CCG\x0156=ABC_DEFG04\x0152=20091216-17:23:51\x0155=MMM\x0137=0000002\x0111=NF 0921/12162009\x0117=1000002\x0120=0\x0139=0\x01150=0\x0154=2\x0138=1000\x0140=1\x0159=0\x0131=0\x0132=0\x0114=0\x016=0\x01151=1000\x0160=20091216-17:23:52\x0158=New order\x01207=N\x019570=N/MP\x0110=051\x01'},
        {'description':'Sub-Penny (New Order Single)', 'detail': 'BUY 1000 VOD LMT @.995 DAY', 'fix':'8=FIX.4.2\x019=147\x0135=D\x0134=215\x0149=ABC_DEFG04\x0152=20100208-19:36:45\x0156=CCG\x01115=XYZ\x0111=NF 0016/02082010\x0154=1\x0138=1000\x0155=VOD\x0140=2\x0144=.995\x0159=0\x011=ABC123ZYX\x0121=1\x01207=N\x0147=A\x0110=100\x01'},
        {'description':'Sub-Penny (Order Acknowledgement)', 'detail': '', 'fix':'8=FIX.4.2\x019=252\x0135=8\x01128=XYZ\x0134=215\x0149=CCG\x0156=ABC_DEFG04\x0152=20100208-19:36:45\x0155=VOD\x0137=NF 0016/02082010\x0111=NF 0016/02082010\x0117=0\x0120=0\x0139=0\x01150=0\x0154=1\x0138=1000\x0140=2\x0144=0.9950\x0159=0\x0131=0\x0132=0\x0114=0\x016=0\x01151=1000\x0160=20100208-19:36:45\x0158=New order\x0130=A\x011=ABC123ZYX\x01207=A\x0147=A\x0110=240\x01'},
        {'description':'Test 1', 'detail': '', 'fix':'8=FIX.4.2\x019=76\x0135=A\x0134=702\x0149=ABC\x0152=20100130-10:52:40.663\x0156=XYZ\x0195=4\x0196=1234\x0198=0\x01108=60\x0110=134\x01'},
        {'description':'Test 2', 'detail': '', 'fix':'8=FIX.4.2\x019=59\x0135=A\x0149=XYZ\x0156=ABC\x0134=710\x0152=20100130-10:52:36\x0198=0\x01108=60\x0110=103\x01'},
        {'description':'Test 3', 'detail': '', 'fix':'8=FIX.4.2\x019=51\x0135=0\x0134=703\x0149=ABC\x0152=20100130-10:53:40.830\x0156=XYZ\x0110=249\x01'},
        {'description':'Test 4', 'detail': '', 'fix':'8=FIX.4.2\x019=47\x0135=0\x0149=XYZ\x0156=ABC\x0134=711\x0152=20100130-10:53:36\x0110=057\x01'},
        {'description':'Test 5', 'detail': '', 'fix':'8=FIX.4.2\x019=266\x0135=8\x0149=ABC\x0156=XYZ\x0150=AZ12\x0157=NA\x0134=833\x0152=20100130-08:00:51.992\x0155=GLD\x0148=PL11YA\x01167=FUT\x01207=LIFFE\x011=AA1\x0137=ABC1\x0117=INDNTHDOG\x0158=Fill\x01200=201009\x01205=13\x0132=25\x01151=0\x0114=25\x0154=2\x0140=2\x0177=O\x0159=0\x01150=2\x0120=0\x0139=2\x01442=1\x0144=99.06\x0138=25\x0131=99.06\x016=99.06\x0160=20100130-08:00:52\x0110=136\x01'},
        {'description':'Test 6', 'detail': '', 'fix':'8=FIX.4.2\x019=262\x0135=8\x0149=ABC\x0156=XYZ\x0150=AZ12\x0157=NA\x0134=834\x0152=20100130-08:00:52.008\x0155=GLD\x0148=PL11YA\x01167=FUT\x01207=LIFFE\x011=AA1\x0137=ABC2\x0117=93OOO\x0158=Fill\x01200=201009\x01205=13\x0132=25\x01151=0\x0114=25\x0154=2\x0140=2\x0177=O\x0159=0\x01150=2\x0120=0\x0139=2\x01442=1\x0144=99.06\x0138=25\x0131=99.06\x016=99.06\x0160=20100130-08:00:52\x0110=053\x01'}
    ],
    units = {
        time: {
            milliseconds: {
                unit: 1000,
                title: 'ms'
            },
            microseconds: {
                unit: 1000000,
                title: 'μs'
            }
        }
    },
    table = new Table({
        chars: {'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': ''},
        head: ['FIX Messages', 'Messages/sec', 'Microseconds', 'Milliseconds']
    }),
    numberWithCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    rateCalculation = (total, diff) => {
        return (total / diff) * 1000;
    },
    rateDisplayMessages = (num) => {
        return `${numberWithCommas(num.toFixed())} msg/s`;
    },
    rateDisplayTime = (rateNum, unit) => {
        return `${((1/rateNum)*unit.unit).toFixed(4)} ${unit.title}`;
    },
    runOnceFixed = () => {
        i = 0;
        startDate = new Date();
        for (i; i < iterations; i++) {
            fixParser.parse('8=FIX.4.2\x019=154\x0135=6\x0149=BRKR\x0156=INVMGR\x0134=238\x0152=19980604-07:59:56\x0123=115686\x0128=N\x0155=FIA.MI\x0154=2\x0127=250000\x0144=7900.000000\x0125=H\x0110=231\x01');
        }
        dateDiff = new Date() - startDate;
        rate = rateCalculation(iterations, dateDiff);
        table.push([
            `${numberWithCommas(iterations)} iterations (same msg)`,
            rateDisplayMessages(rate),
            rateDisplayTime(rate, units.time.microseconds),
            rateDisplayTime(rate, units.time.milliseconds)
        ]);
    },
    runOnceRandom = () => {
        i = 0;
        startDate = new Date();
        for (i; i < iterations; i++) {
            fixParser.parse(messages[Math.floor(Math.random()*messages.length)].fix);
        }
        dateDiff = new Date() - startDate;
        rate = rateCalculation(iterations, dateDiff);
        table.push([
            `${numberWithCommas(iterations)} iterations (random msg)`,
            rateDisplayMessages(rate),
            rateDisplayTime(rate, units.time.microseconds),
            rateDisplayTime(rate, units.time.milliseconds)
        ]);
    };

// 1st allocation
fixParser.parse('allocate');

process.stdout.write('0%...');
runOnceFixed();
process.stdout.write('10%...');
runOnceFixed();
process.stdout.write('20%...');
runOnceRandom();
process.stdout.write('30%...');
runOnceFixed();
process.stdout.write('40%...');
runOnceRandom();
process.stdout.write('50%...');
runOnceFixed();
process.stdout.write('60%...');
runOnceRandom();
process.stdout.write('70%...');
runOnceFixed();
process.stdout.write('80%...');
runOnceFixed();
process.stdout.write('90%...');
runOnceFixed();
process.stdout.write('100%');

console.log('');
console.log(table.toString());
console.log('Performance tests ran successfully.');
console.log('');
