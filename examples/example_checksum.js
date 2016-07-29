import FIXParser from './../src/FIXParser.js';
const fixParser = new FIXParser(),
    //parsedMessage = fixParser.parse('8=FIX.4.29=14535=D34=1449=SENDER52=20140228-05:43:10.53156=TARGET11=139356619053321=138=20040=244=45.6754=155=FIXSPEC59=060=20140228-05:43:10.53110=216');
    parsedMessage = fixParser.parse('8=FIX.4.29=17135=834=2649=TARGET52=20140228-05:43:27.32656=SENDER6=45.6711=139356619053314=20017=620=031=45.6732=12537=139356619053338=20039=254=155=FIXSPEC150=2151=010=079');
console.log(parsedMessage);
// 155
// run with babel-node examples/example_es6.js