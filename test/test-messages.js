module.exports = [
    {"description":"NewOrderSingle", "detail": "New Order Single - BUY 100 CVS MKT DAY", "fix":"8=FIX.4.2^A 9=146^A 35=D^A 34=4^A 49=ABC_DEFG01^A 52=20090323-15:40:29^A 56=CCG^A 115=XYZ^A 11=NF 0542/03232009^A 54=1^A 38=100^A 55=CVS^A 40=1^A 59=0^A 47=A^A 60=20090323-15:40:29^A 21=1^A 207=N^A 10=139^A", checksumValid: false, bodyLengthValid: true},
    {"description":"ExecutionReport", "detail": "Order Acknowledgement", "fix":"8=FIX.4.2^A 9=227^A 35=8^A 128=XYZ^A 34=4^A 49=CCG^A 56=ABC_DEFG01^A 52=20090323-15:40:35^A 55=CVS^A 37=NF 0542/03232009^A 11=NF 0542/03232009^A 17=0^A 20=0^A 39=0^A 150=0^A 54=1^A 38=100^A 40=1^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=100^A 60=20090323-15:40:30^A 58=New order^A 30=N^A 207=N^A 47=A^A 10=205^A", checksumValid: true, bodyLengthValid: true},
    {"description":"NewOrderSingle", "detail": "Closing Offset (New Order Single) - SL 1000 RRC LMT @55.36 DAY", "fix":"8=FIX.4.2^A 9=157^A 35=D^A 34=124^A 49=ABC_DEFG04^A 52=20100208-18:51:42^A 56=CCG^A 115=XYZ^A 11=NF 0015/02082010^A 54=2^A 38=1000^A 55=RRC^A 40=2^A 44=55.36^A 59=0^A 1=ABC123ZYX^A 21=1^A 207=N^A 47=A^A 9487=CO^A 10=050^A", checksumValid: false, bodyLengthValid: true},
    {"description":"ExecutionReport", "detail": "Closing Offset (Order Acknowledgement)", "fix":"8=FIX.4.2^A 9=254^A 35=8^A 128=XYZ^A 34=124^A 49=CCG^A 56=ABC_DEFG04^A 52=20100208-18:51:42^A 55=RRC^A 37=NF 0015/02082010^A 11=NF 0015/02082010^A 17=0^A 20=0^A 39=0^A 150=0^A 54=2^A 38=1000^A 40=2^A 44=55.3600^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=1000^A 60=20100208-18:51:42^A 58=New order^A 30=N^A 1=ABC123ZYX^A 207=N^A 47=A^A 10=037^A", checksumValid: false, bodyLengthValid: true},
    {"description":"NewOrderSingle", "detail": "MatchPoint (New Order Single) - SL 1000 MMM MKT DAY", "fix":"8=FIX.4.2^A 9=154^A 35=D^A 34=11^A 49=ABC_DEFG04^A 52=20091216-17:23:52^A 56=CCG^A 57=ARCA^A 115=XYZ^A 128=MP^A 11=NF 0921/12162009^A 54=2^A 38=1000^A 55=MMM^A 40=1^A 59=0^A 1=ABC123ZYX^A 21=1^A 207=N^A 47=A^A 10=035^A", checksumValid: true, bodyLengthValid: true},
    {"description":"ExecutionReport", "detail": "MatchPoint (Order Acknowledgement)", "fix":"8=FIX.4.2^A 9=235^A 35=8^A 50=ARCA^A 128=XYZ^A 34=11^A 49=CCG^A 56=ABC_DEFG04^A 52=20091216-17:23:51^A 55=MMM^A 37=0000002^A 11=NF 0921/12162009^A 17=1000002^A 20=0^A 39=0^A 150=0^A 54=2^A 38=1000^A 40=1^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=1000^A 60=20091216-17:23:52^A 58=New order^A 207=N^A 9570=N/MP^A 10=051^A", checksumValid: false, bodyLengthValid: true},
    {"description":"NewOrderSingle", "detail": "Sub-Penny (New Order Single) - BUY 1000 VOD LMT @.995 DAY", "fix":"8=FIX.4.2^A 9=148^A 35=D^A 34=215^A 49=ABC_DEFG04^A 52=20100208-19:36:45^A 56=CCG^A 115=XYZ^A 11=NF 0016/02082010^A 54=1^A 38=1000^A 55=VOD^A 40=2^A 44=.995^A 59=0^A 1=ABC123ZYX^A 21=1^A 207=N^A 47=A^A 10=100^A", checksumValid: false, bodyLengthValid: true},
    {"description":"ExecutionReport", "detail": "Sub-Penny (Order Acknowledgement)", "fix":"8=FIX.4.2^A 9=253^A 35=8^A 128=XYZ^A 34=215^A 49=CCG^A 56=ABC_DEFG04^A 52=20100208-19:36:45^A 55=VOD^A 37=NF 0016/02082010^A 11=NF 0016/02082010^A 17=0^A 20=0^A 39=0^A 150=0^A 54=1^A 38=1000^A 40=2^A 44=0.9950^A 59=0^A 31=0^A 32=0^A 14=0^A 6=0^A 151=1000^A 60=20100208-19:36:45^A 58=New order^A 30=A^A 1=ABC123ZYX^A 207=A^A 47=A^A 10=240^A", checksumValid: false, bodyLengthValid: true},
    {"description":"Logon", "detail": "", "fix":"8=FIX.4.2|9=76|35=A|34=702|49=ABC|52=20100130-10:52:40.663|56=XYZ|95=4|96=1234|98=0|108=60|10=134|", checksumValid: true, bodyLengthValid: true},
    {"description":"Logon", "detail": "", "fix":"8=FIX.4.2|9=59|35=A|49=XYZ|56=ABC|34=710|52=20100130-10:52:36|98=0|108=60|10=103|", checksumValid: true, bodyLengthValid: true},
    {"description":"Heartbeat", "detail": "", "fix":"8=FIX.4.2|9=51|35=0|34=703|49=ABC|52=20100130-10:53:40.830|56=XYZ|10=249|", checksumValid: true, bodyLengthValid: true},
    {"description":"Heartbeat", "detail": "", "fix":"8=FIX.4.2|9=47|35=0|49=XYZ|56=ABC|34=711|52=20100130-10:53:36|10=057|", checksumValid: true, bodyLengthValid: true},
    {"description":"ExecutionReport", "detail": "", "fix":"8=FIX.4.2|9=266|35=8|49=ABC|56=XYZ|50=AZ12|57=NA|34=833|52=20100130-08:00:51.992|55=GLD|48=PL11YA|167=FUT|207=LIFFE|1=AA1|37=ABC1|17=INDNTHDOG|58=Fill|200=201009|205=13|32=25|151=0|14=25|54=2|40=2|77=O|59=0|150=2|20=0|39=2|442=1|44=99.06|38=25|31=99.06|6=99.06|60=20100130-08:00:52|10=136|", checksumValid: true, bodyLengthValid: true},
    {"description":"ExecutionReport", "detail": "", "fix":"8=FIX.4.2|9=262|35=8|49=ABC|56=XYZ|50=AZ12|57=NA|34=834|52=20100130-08:00:52.008|55=GLD|48=PL11YA|167=FUT|207=LIFFE|1=AA1|37=ABC2|17=93OOO|58=Fill|200=201009|205=13|32=25|151=0|14=25|54=2|40=2|77=O|59=0|150=2|20=0|39=2|442=1|44=99.06|38=25|31=99.06|6=99.06|60=20100130-08:00:52|10=053|", checksumValid: true, bodyLengthValid: true},
    {"description":"TradeCaptureReport", "detail": "", "fix":"8=FIX.4.2|9=178|35=AE|56=LSEHub|49=BROKERX|128=LSETR|34=2175|52=20120126-15:15:54|918=GBP|31=89.0000000|64=20120126|828=1|60=20120126-13:32:49|32=6|22=4|571=124|43=N|570=N|150=0|48=GB0007188757|10=206|", checksumValid: true, bodyLengthValid: true},
    {"description":"TradeCaptureReportAck", "detail": "", "fix":"8=FIX.4.2|9=112|35=AR|49=LSEHub|56=BROKERX|115=LSETR|34=2006|52=20120126-15:15:54|370=20120126-15:15:54.822|571=124|150=0|939=0|10=059|", checksumValid: true, bodyLengthValid: true},
    {"description":"TradeCaptureReport", "detail": "", "fix":"8=FIX.4.2|9=130|35=AE|49=LSEHub|56=LSETR|115=BROKERX|34=2287|43=N|52=20120330-12:14:09|370=20120330-12:14:09.816|571=00008661533TRLO1-1-1-0|150=H|10=074|", checksumValid: true, bodyLengthValid: true},
    {"description":"TradeCaptureReportAck", "detail": "", "fix":"8=FIX.4.2|9=109|35=AR|34=2486|49=LSETR|52=20120330-12:14:10.379|56=LSEHub|128=BROKERX|150=H|571=00008661533TRLO1-1-1-0|939=0|10=073|", checksumValid: true, bodyLengthValid: true},
    {"description":"TradeCaptureReport", "detail": "", "fix":"8=FIX.4.2|9=175|35=AE|49=BROKERX|56=LSEHub|34=17|52=20120202-16:04:44|128=LSETR|918=EUR|31=89.0000000|64=20120202|828=1007|60=20120202-16:04:44|32=6|22=4|571=1698|570=N|150=0|48=AT0000785555|10=076|", checksumValid: true, bodyLengthValid: true},
    {"description":"TradeCaptureReportAck", "detail": "", "fix":"8=FIX.4.2|9=111|35=AR|49=LSEHub|56=BROKERX|115=LSETR|34=16|52=20120202-16:04:44|370=20120202-16:04:45.257|571=1698|150=0|939=0|10=015|", checksumValid: true, bodyLengthValid: true},
    {"description":"Logon", "detail": "", "fix":"8=FIX.4.19=69035=A49=INVMGR56=BRKR98=590=62591=-----BEGIN PGP MESSAGE----- Version: 2.7.1  hIwDDrony+hQ+FEBA/9qd5Vcdw2w2DSKx3+XbqOhWz9xZ07RYRyhKDG/qE5EQbYu 6srrDowCzscPb9+krWcxH4xL3B/1DEwL3QpQsxCSGY1JnbjDCTyJ21nuZ6NHY6YA AAECr4mTIlZgM5hmSmrlunDoeOQWwPkca9OCWh0n3VXfGkA7e99DCq0P3MZ48Jlr GNF141hwWLIpN2RfqYvfzPD0w7I54wf3z/sYefGj+a0QTt1JOLEFxzsPykIyMPEI kGfdjuzOL8/94plkeeWSJHx7K6IemVRsT6HwLJtFaW/JIJr+hxYr1Z8BBjyXoQCz argut9niFOcnSqwvZolAYqjMPrkWuaeJn+bJ4kCEuLGdrQJDHvlzOS6r3By80IUc 2L4W7yJL7Am82wTWD4s5ANBQz8FCwLtLMivUTvqsg/Zp8v7vSQ1FfEIsg30XXtBL 6QBYtnYnAAAwCEOrv6DavDTfhWl72D6VfiOLrHIHtEQf3iwb5JFHGRaMpX88VlSU W7qy163o78rIEL3WEak4pwmnf28P =v9gz -----END PGP MESSAGE----- 93=1689=................10=161", checksumValid: false, bodyLengthValid: true},
    {"description":"Reject", "detail": "", "fix":"8=FIX.4.19=6135=A34=149=EXEC52=20121105-23:24:0656=BANZAI98=0108=3010=0038=FIX.4.19=6135=A34=149=BANZAI52=20121105-23:24:0656=EXEC98=0108=3010=0038=FIX.4.19=4935=034=249=BANZAI52=20121105-23:24:3756=EXEC10=2288=FIX.4.19=4935=034=249=EXEC52=20121105-23:24:3756=BANZAI10=2288=FIX.4.19=10335=D34=349=BANZAI52=20121105-23:24:4256=EXEC11=135215788257721=138=1000040=154=155=MSFT59=010=0628=FIX.4.19=13935=834=349=EXEC52=20121105-23:24:4256=BANZAI6=011=135215788257714=017=120=031=032=037=138=1000039=054=155=MSFT150=2151=010=0598=FIX.4.19=15335=834=449=EXEC52=20121105-23:24:4256=BANZAI6=12.311=135215788257714=1000017=220=031=12.332=1000037=238=1000039=254=155=MSFT150=2151=010=2308=FIX.4.19=10335=D34=449=BANZAI52=20121105-23:24:5556=EXEC11=135215789503221=138=1000040=154=155=ORCL59=010=0478=FIX.4.19=13935=834=549=EXEC52=20121105-23:24:5556=BANZAI6=011=135215789503214=017=320=031=032=037=338=1000039=054=155=ORCL150=2151=010=0498=FIX.4.19=15335=834=649=EXEC52=20121105-23:24:5556=BANZAI6=12.311=135215789503214=1000017=420=031=12.332=1000037=438=1000039=254=155=ORCL150=2151=010=2208=FIX.4.19=10835=D34=549=BANZAI52=20121105-23:25:1256=EXEC11=135215791235721=138=1000040=244=1054=155=SPY59=010=0038=FIX.4.19=13835=834=749=EXEC52=20121105-23:25:1256=BANZAI6=011=135215791235714=017=520=031=032=037=538=1000039=054=155=SPY150=2151=010=2528=FIX.4.19=10435=F34=649=BANZAI52=20121105-23:25:1656=EXEC11=135215791643738=1000041=135215791235754=155=SPY10=1988=FIX.4.19=8235=334=849=EXEC52=20121105-23:25:1656=BANZAI45=658=Unsupported message type10=0008=FIX.4.19=10435=F34=749=BANZAI52=20121105-23:25:2556=EXEC11=135215792530938=1000041=135215791235754=155=SPY10=1978=FIX.4.19=8235=334=949=EXEC52=20121105-23:25:2556=BANZAI45=758=Unsupported message type10=002", checksumValid: false, bodyLengthValid: false}
];