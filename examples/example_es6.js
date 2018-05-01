import FIXParser from './../src/FIXParser';

const fixParser = new FIXParser(), //eslint-disable-line no-undef
    string = '8=FIX.4.2\x019=145\x0135=D\x0134=4\x0149=ABC_DEFG01\x0152=20090323-15:40:29\x0156=CCG\x01115=XYZ\x0111=NF 0542/03232009\x0154=1\x0138=100\x0155=CVS\x0140=1\x0159=0\x0147=A\x0160=20090323-15:40:29\x0121=1\x01207=N\x0110=139\x01',
    message = fixParser.parse(string);
console.log(JSON.stringify(message, null, 4));
// run with babel-node examples/example_es6.js
