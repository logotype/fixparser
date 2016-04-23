require('./../build/FIXParser');
const fixParser = new FIXParser(), //eslint-disable-line no-undef
    message = fixParser.parse('8=FIX.4.2|9=76|35=A|34=702|49=ABC|52=20100130-10:52:40.663|56=XYZ|95=4|96=1234|98=0|108=60|10=134|');
console.log(JSON.stringify(message, null, 4));