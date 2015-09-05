import './../build/FIXParser.js';

console.log('Running performance tests...');

let fixParser = new FIXParser(), i, length = 10000, startDate, dateDiff, rate, relativeRate, messages = [
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
];

// 1st allocation
fixParser.parse('allocate');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    fixParser.parse(messages[Math.floor(Math.random()*messages.length)].fix);
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
console.log('FIX rate (random): ' + rate.toFixed() + ' messages/sec');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    fixParser.parse('8=FIX.4.19=6135=A34=149=EXEC52=20121105-23:24:0656=BANZAI98=0108=3010=0038=FIX.4.19=6135=A34=149=BANZAI52=20121105-23:24:0656=EXEC98=0108=3010=0038=FIX.4.19=4935=034=249=BANZAI52=20121105-23:24:3756=EXEC10=2288=FIX.4.19=4935=034=249=EXEC52=20121105-23:24:3756=BANZAI10=2288=FIX.4.19=10335=D34=349=BANZAI52=20121105-23:24:4256=EXEC11=135215788257721=138=1000040=154=155=MSFT59=010=0628=FIX.4.19=13935=834=349=EXEC52=20121105-23:24:4256=BANZAI6=011=135215788257714=017=120=031=032=037=138=1000039=054=155=MSFT150=2151=010=0598=FIX.4.19=15335=834=449=EXEC52=20121105-23:24:4256=BANZAI6=12.311=135215788257714=1000017=220=031=12.332=1000037=238=1000039=254=155=MSFT150=2151=010=2308=FIX.4.19=10335=D34=449=BANZAI52=20121105-23:24:5556=EXEC11=135215789503221=138=1000040=154=155=ORCL59=010=0478=FIX.4.19=13935=834=549=EXEC52=20121105-23:24:5556=BANZAI6=011=135215789503214=017=320=031=032=037=338=1000039=054=155=ORCL150=2151=010=0498=FIX.4.19=15335=834=649=EXEC52=20121105-23:24:5556=BANZAI6=12.311=135215789503214=1000017=420=031=12.332=1000037=438=1000039=254=155=ORCL150=2151=010=2208=FIX.4.19=10835=D34=549=BANZAI52=20121105-23:25:1256=EXEC11=135215791235721=138=1000040=244=1054=155=SPY59=010=0038=FIX.4.19=13835=834=749=EXEC52=20121105-23:25:1256=BANZAI6=011=135215791235714=017=520=031=032=037=538=1000039=054=155=SPY150=2151=010=2528=FIX.4.19=10435=F34=649=BANZAI52=20121105-23:25:1656=EXEC11=135215791643738=1000041=135215791235754=155=SPY10=1988=FIX.4.19=8235=334=849=EXEC52=20121105-23:25:1656=BANZAI45=658=Unsupported message type10=0008=FIX.4.19=10435=F34=749=BANZAI52=20121105-23:25:2556=EXEC11=135215792530938=1000041=135215791235754=155=SPY10=1978=FIX.4.19=8235=334=949=EXEC52=20121105-23:25:2556=BANZAI45=758=Unsupported message type10=002');
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
console.log('FIX rate (fixed) : ' + rate.toFixed() + ' messages/sec');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    fixParser.parse(messages[Math.floor(Math.random()*messages.length)].fix);
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
console.log('FIX rate (random): ' + rate.toFixed() + ' messages/sec');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    fixParser.parse('8=FIX.4.19=6135=A34=149=EXEC52=20121105-23:24:0656=BANZAI98=0108=3010=0038=FIX.4.19=6135=A34=149=BANZAI52=20121105-23:24:0656=EXEC98=0108=3010=0038=FIX.4.19=4935=034=249=BANZAI52=20121105-23:24:3756=EXEC10=2288=FIX.4.19=4935=034=249=EXEC52=20121105-23:24:3756=BANZAI10=2288=FIX.4.19=10335=D34=349=BANZAI52=20121105-23:24:4256=EXEC11=135215788257721=138=1000040=154=155=MSFT59=010=0628=FIX.4.19=13935=834=349=EXEC52=20121105-23:24:4256=BANZAI6=011=135215788257714=017=120=031=032=037=138=1000039=054=155=MSFT150=2151=010=0598=FIX.4.19=15335=834=449=EXEC52=20121105-23:24:4256=BANZAI6=12.311=135215788257714=1000017=220=031=12.332=1000037=238=1000039=254=155=MSFT150=2151=010=2308=FIX.4.19=10335=D34=449=BANZAI52=20121105-23:24:5556=EXEC11=135215789503221=138=1000040=154=155=ORCL59=010=0478=FIX.4.19=13935=834=549=EXEC52=20121105-23:24:5556=BANZAI6=011=135215789503214=017=320=031=032=037=338=1000039=054=155=ORCL150=2151=010=0498=FIX.4.19=15335=834=649=EXEC52=20121105-23:24:5556=BANZAI6=12.311=135215789503214=1000017=420=031=12.332=1000037=438=1000039=254=155=ORCL150=2151=010=2208=FIX.4.19=10835=D34=549=BANZAI52=20121105-23:25:1256=EXEC11=135215791235721=138=1000040=244=1054=155=SPY59=010=0038=FIX.4.19=13835=834=749=EXEC52=20121105-23:25:1256=BANZAI6=011=135215791235714=017=520=031=032=037=538=1000039=054=155=SPY150=2151=010=2528=FIX.4.19=10435=F34=649=BANZAI52=20121105-23:25:1656=EXEC11=135215791643738=1000041=135215791235754=155=SPY10=1988=FIX.4.19=8235=334=849=EXEC52=20121105-23:25:1656=BANZAI45=658=Unsupported message type10=0008=FIX.4.19=10435=F34=749=BANZAI52=20121105-23:25:2556=EXEC11=135215792530938=1000041=135215791235754=155=SPY10=1978=FIX.4.19=8235=334=949=EXEC52=20121105-23:25:2556=BANZAI45=758=Unsupported message type10=002');
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
console.log('FIX rate (fixed) : ' + rate.toFixed() + ' messages/sec');

console.log('Performance tests ran successfully.');
console.log('');