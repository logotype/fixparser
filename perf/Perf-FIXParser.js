import './../build/FIXParser.js';

console.log('Running performance tests...');

let i = null, startDate = null, dateDiff = null, rate = null;

const Table = require('cli-table'),
    fixParser = new FIXParser(), //eslint-disable-line no-undef
    iterations = 200000,
    messages = [
        {'description':'New Order Single', 'detail': 'BUY 100 CVS MKT DAY', 'fix':'8=FIX.4.2^A 9=145^A 35=D^A 34=4^A 49=ABC_DEFG01^A 52=20090323-15:40:29^A 56=CCG^A 115=XYZ^A 11=NF 0542/03232009^A 54=1^A 38=100^A 55=CVS^A 40=1^A 59=0^A 47=A^A 60=20090323-15:40:29^A 21=1^A 207=N^A 10=139^A'},
        {'description':'Order Acknowledgement', 'detail': '', 'fix':'8=FIX.4.2^A 9=226^A 35=8^A 128=XYZ^A 34=4^A 49=CCG^A 56=ABC_DEFG01^A 52=20090323-15:40:35^A 55=CVS^A 37=NF 0542/03232009^A 11=NF 0542/03232009^A 17=0^A 20=0^A 39=0^A 150=0^A 54=1^A 38=100^A 40=1^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=100^A 60=20090323-15:40:30^A 58=New order^A 30=N^A 207=N^A 47=A^A 10=149^A'},
        {'description':'Closing Offset (New Order Single)', 'detail': 'SL 1000 RRC LMT @55.36 DAY', 'fix':'8=FIX.4.2^A 9=156^A 35=D^A 34=124^A 49=ABC_DEFG04^A 52=20100208-18:51:42^A 56=CCG^A 115=XYZ^A 11=NF 0015/02082010^A 54=2^A 38=1000^A 55=RRC^A 40=2^A 44=55.36^A 59=0^A 1=ABC123ZYX^A 21=1^A 207=N^A 47=A^A 9487=CO^A 10=050^A'},
        {'description':'Closing Offset (Order Acknowledgement)', 'detail': '', 'fix':'8=FIX.4.2^A 9=253^A 35=8^A 128=XYZ^A 34=124^A 49=CCG^A 56=ABC_DEFG04^A 52=20100208-18:51:42^A 55=RRC^A 37=NF 0015/02082010^A 11=NF 0015/02082010^A 17=0^A 20=0^A 39=0^A 150=0^A 54=2^A 38=1000^A 40=2^A 44=55.3600^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=1000^A 60=20100208-18:51:42^A 58=New order^A 30=N^A 1=ABC123ZYX^A 207=N^A 47=A^A 10=037^A'},
        {'description':'MatchPoint (New Order Single)', 'detail': 'SL 1000 MMM MKT DAY', 'fix':'8=FIX.4.2^A 9=153^A 35=D^A 34=11^A 49=ABC_DEFG04^A 52=20091216-17:23:52^A 56=CCG^A 57=ARCA^A 115=XYZ^A 128=MP^A 11=NF 0921/12162009^A 54=2^A 38=1000^A 55=MMM^A 40=1^A 59=0^A 1=ABC123ZYX^A 21=1^A 207=N^A 47=A^A 10=172^A'},
        {'description':'MatchPoint (Order Acknowledgement)', 'detail': '', 'fix':'8=FIX.4.2^A 9=234^A 35=8^A 50=ARCA^A 128=XYZ^A 34=11^A 49=CCG^A 56=ABC_DEFG04^A 52=20091216-17:23:51^A 55=MMM^A 37=0000002^A 11=NF 0921/12162009^A 17=1000002^A 20=0^A 39=0^A 150=0^A 54=2^A 38=1000^A 40=1^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=1000^A 60=20091216-17:23:52^A 58=New order^A 207=N^A 9570=N/MP^A 10=051^A'},
        {'description':'Sub-Penny (New Order Single)', 'detail': 'BUY 1000 VOD LMT @.995 DAY', 'fix':'8=FIX.4.2^A 9=147^A 35=D^A 34=215^A 49=ABC_DEFG04^A 52=20100208-19:36:45^A 56=CCG^A 115=XYZ^A 11=NF 0016/02082010^A 54=1^A 38=1000^A 55=VOD^A 40=2^A 44=.995^A 59=0^A 1=ABC123ZYX^A 21=1^A 207=N^A 47=A^A 10=100^A'},
        {'description':'Sub-Penny (Order Acknowledgement)', 'detail': '', 'fix':'8=FIX.4.2^A 9=252^A 35=8^A 128=XYZ^A 34=215^A 49=CCG^A 56=ABC_DEFG04^A 52=20100208-19:36:45^A 55=VOD^A 37=NF 0016/02082010^A 11=NF 0016/02082010^A 17=0^A 20=0^A 39=0^A 150=0^A 54=1^A 38=1000^A 40=2^A 44=0.9950^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=1000^A 60=20100208-19:36:45^A 58=New order^A 30=A^A 1=ABC123ZYX^A 207=A^A 47=A^A 10=240^A'},
        {'description':'Test 1', 'detail': '', 'fix':'8=FIX.4.2|9=76|35=A|34=702|49=ABC|52=20100130-10:52:40.663|56=XYZ|95=4|96=1234|98=0|108=60|10=134|'},
        {'description':'Test 2', 'detail': '', 'fix':'8=FIX.4.2|9=59|35=A|49=XYZ|56=ABC|34=710|52=20100130-10:52:36|98=0|108=60|10=103|'},
        {'description':'Test 3', 'detail': '', 'fix':'8=FIX.4.2|9=51|35=0|34=703|49=ABC|52=20100130-10:53:40.830|56=XYZ|10=249|'},
        {'description':'Test 4', 'detail': '', 'fix':'8=FIX.4.2|9=47|35=0|49=XYZ|56=ABC|34=711|52=20100130-10:53:36|10=057|'},
        {'description':'Test 5', 'detail': '', 'fix':'8=FIX.4.2|9=266|35=8|49=ABC|56=XYZ|50=AZ12|57=NA|34=833|52=20100130-08:00:51.992|55=GLD|48=PL11YA|167=FUT|207=LIFFE|1=AA1|37=ABC1|17=INDNTHDOG|58=Fill|200=201009|205=13|32=25|151=0|14=25|54=2|40=2|77=O|59=0|150=2|20=0|39=2|442=1|44=99.06|38=25|31=99.06|6=99.06|60=20100130-08:00:52|10=136|'},
        {'description':'Test 6', 'detail': '', 'fix':'8=FIX.4.2|9=262|35=8|49=ABC|56=XYZ|50=AZ12|57=NA|34=834|52=20100130-08:00:52.008|55=GLD|48=PL11YA|167=FUT|207=LIFFE|1=AA1|37=ABC2|17=93OOO|58=Fill|200=201009|205=13|32=25|151=0|14=25|54=2|40=2|77=O|59=0|150=2|20=0|39=2|442=1|44=99.06|38=25|31=99.06|6=99.06|60=20100130-08:00:52|10=053|'}
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
            fixParser.parse('8=FIX.4.2|9=154|35=6|49=BRKR|56=INVMGR|34=238|52=19980604-07:59:56|23=115686|28=N|55=FIA.MI|54=2|27=250000|44=7900.000000|25=H|10=231|');
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