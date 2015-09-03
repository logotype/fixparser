export class DataTypes {
    constructor() {
        this.dataTypes = [
            {
                'typeName':'int',
                'baseType':'',
                'description':'Sequence of digits without commas or decimals and optional sign character (ASCII characters "-" and "0" - "9" ). The sign character utilizes one byte (i.e. positive int is "99999" while negative int is "-99999"). Note that int values may contain leading zeros (e.g. "00023" = "23"). Examples: 723 in field 21 would be mapped int as |21=723|. -723 in field 12 would be mapped int as |12=-723| The following data types are based on int.',
                'added':'FIX.2.7'
            },
            {
                'typeName':'Length',
                'baseType':'int',
                'description':'int field representing the length in bytes. Value must be positive.',
                'added':'FIX.4.3'
            },
            {
                'typeName':'TagNum',
                'baseType':'int',
                'description':'int field representing a field\'s tag number when using FIX "Tag=Value" syntax. Value must be positive and may not contain leading zeros.',
                'added':'FIX.4.3'
            },
            {
                'typeName':'SeqNum',
                'baseType':'int',
                'description':'int field representing a message sequence number. Value must be positive.',
                'added':'FIX.4.3'
            },
            {
                'typeName':'NumInGroup',
                'baseType':'int',
                'description':'int field representing the number of entries in a repeating group. Value must be positive.',
                'added':'FIX.4.3'
            },
            {
                'typeName':'DayOfMonth',
                'baseType':'int',
                'description':'int field representing a day during a particular monthy (values 1 to 31).',
                'added':'FIX.4.1'
            },
            {
                'typeName':'float',
                'baseType':'',
                'description':'Sequence of digits with optional decimal point and sign character (ASCII characters "-", "0" - "9" and "."); the absence of the decimal point within the string will be interpreted as the float representation of an integer value. All float fields must accommodate up to fifteen significant digits. The number of decimal places used should be a factor of business/market needs and mutual agreement between counterparties. Note that float values may contain leading zeros (e.g. "00023.23" = "23.23") and may contain or omit trailing zeros after the decimal point (e.g. "23.0" = "23.0000" = "23" = "23."). Note that fields which are derived from float may contain negative values unless explicitly specified otherwise. The following data types are based on float.',
                'added':'FIX.2.7'
            },
            {
                'typeName':'Qty',
                'baseType':'float',
                'description':'float field capable of storing either a whole number (no decimal places) of "shares" (securities denominated in whole units) or a decimal value containing decimal places for non-share quantity asset classes (securities denominated in fractional units).',
                'added':'FIX.4.2'
            },
            {
                'typeName':'Price',
                'baseType':'float',
                'description':'float field representing a price. Note the number of decimal places may vary. For certain asset classes prices may be negative values. For example, prices for options strategies can be negative under certain market conditions. Refer to Volume 7: FIX Usage by Product for asset classes that support negative price values. Example(s)Strk="47.50"',
                'added':'FIX.4.2'
            },
            {
                'typeName':'PriceOffset',
                'baseType':'float',
                'description':'float field representing a price offset, which can be mathematically added to a "Price". Note the number of decimal places may vary and some fields such as LastForwardPoints may be negative.',
                'added':'FIX.4.2'
            },
            {
                'typeName':'Amt',
                'baseType':'float',
                'description':'float field typically representing a Price times a Qty Example(s)Amt="6847.00"',
                'added':'FIX.4.2'
            },
            {
                'typeName':'Percentage',
                'baseType':'float',
                'description':'float field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.',
                'added':'FIX.4.3'
            },
            {
                'typeName':'char',
                'baseType':'',
                'description':'Single character value, can include any alphanumeric character or punctuation except the delimiter. All char fields are case sensitive (i.e. m != M). The following fields are based on char.',
                'added':'FIX.2.7'
            },
            {
                'typeName':'Boolean',
                'baseType':'char',
                'description':'char field containing one of two values: \'Y\' = True/Yes \'N\' = False/No',
                'added':'FIX.4.2'
            },
            {
                'typeName':'String',
                'baseType':'',
                'description':'Alpha-numeric free format strings, can include any character or punctuation except the delimiter. All String fields are case sensitive (i.e. morstatt != Morstatt).',
                'added':'FIX.4.2'
            },
            {
                'typeName':'MultipleCharValue',
                'baseType':'String',
                'description':'string field containing one or more space delimited single character values (e.g. |18=2 A F| ).',
                'added':'FIX.4.4'
            },
            {
                'typeName':'MultipleStringValue',
                'baseType':'String',
                'description':'string field containing one or more space delimited multiple character values (e.g. |277=AV AN A| ).',
                'added':'FIX.4.2'
            },
            {
                'typeName':'Country',
                'baseType':'String',
                'description':'string field representing a country using ISO 3166 Country code (2 character) values (see Appendix 6-B).',
                'added':'FIX.4.4'
            },
            {
                'typeName':'Currency',
                'baseType':'String',
                'description':'string field representing a currency type using ISO 4217 Currency code (3 character) values (see Appendix 6-A). Example(s)StrkCcy="USD"',
                'added':'FIX.4.2'
            },
            {
                'typeName':'Exchange',
                'baseType':'String',
                'description':'string field representing a market or exchange using ISO 10383 Market Identifier Code (MIC) values (see"Appendix 6-C).',
                'added':'FIX.4.2'
            },
            {
                'typeName':'MonthYear',
                'baseType':'String',
                'description':'string field representing month of a year. An optional day of the month can be appended or an optional week code. Valid formats: YYYYMM YYYYMMDD YYYYMMWW Valid values: YYYY = 0000-9999; MM = 01-12; DD = 01-31; WW = w1, w2, w3, w4, w5. Example(s)MonthYear="200303",  MonthYear="20030320", MonthYear="200303w2"',
                'added':'FIX.4.1'
            },
            {
                'typeName':'UTCTimestamp',
                'baseType':'String',
                'description':'string field representing Time/date combination represented in UTC (Universal Time Coordinated, also known as "GMT") in either YYYYMMDD-HH:MM:SS (whole seconds) or YYYYMMDD-HH:MM:SS.sss (milliseconds) format, colons, dash, and period required. Valid values: * YYYY = 0000-9999, MM = 01-12, DD = 01-31, HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second) (without milliseconds). * YYYY = 0000-9999, MM = 01-12, DD = 01-31, HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss=000-999 (indicating milliseconds). Leap Seconds: Note that UTC includes corrections for leap seconds, which are inserted to account for slowing of the rotation of the earth. Leap second insertion is declared by the International Earth Rotation Service (IERS) and has, since 1972, only occurred on the night of Dec. 31 or Jun 30. The IERS considers March 31 and September 30 as secondary dates for leap second insertion, but has never utilized these dates. During a leap second insertion, a UTCTimestamp field may read "19981231-23:59:59", "19981231-23:59:60", "19990101-00:00:00". (see http://tycho.usno.navy.mil/leapsec.html) Example(s)TransactTm="20011217-09:30:47"',
                'added':'FIX.4.2'
            },
            {
                'typeName':'UTCTimeOnly',
                'baseType':'String',
                'description':'string field representing Time-only represented in UTC (Universal Time Coordinated, also known as "GMT") in either HH:MM:SS (whole seconds) or HH:MM:SS.sss (milliseconds) format, colons, and period required. This special-purpose field is paired with UTCDateOnly to form a proper UTCTimestamp for bandwidth-sensitive messages. Valid values: HH = 00-23, MM = 00-60 (60 only if UTC leap second), SS = 00-59. (without milliseconds) HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss=000-999 (indicating milliseconds). Example(s)MDEntryTime="13:20:00.000"',
                'added':'FIX.4.2'
            },
            {
                'typeName':'UTCDateOnly',
                'baseType':'String',
                'description':'string field representing Date represented in UTC (Universal Time Coordinated, also known as "GMT") in YYYYMMDD format. This special-purpose field is paired with UTCTimeOnly to form a proper UTCTimestamp for bandwidth-sensitive messages. Valid values: YYYY = 0000-9999, MM = 01-12, DD = 01-31. Example(s)MDEntryDate="20030910"',
                'added':'FIX.4.4'
            },
            {
                'typeName':'LocalMktDate',
                'baseType':'String',
                'description':'string field represening a Date of Local Market (as oppose to UTC) in YYYYMMDD format. This is the "normal" date field used by the FIX Protocol. Valid values: YYYY = 0000-9999, MM = 01-12, DD = 01-31. Example(s)BizDate="2003-09-10"',
                'added':'FIX.4.2'
            },
            {
                'typeName':'TZTimeOnly',
                'baseType':'String',
                'description':'string field representing the time represented based on ISO 8601. This is the time with a UTC offset to allow identification of local time and timezone of that time. Format is HH:MM[:SS][Z | [ + | - hh[:mm]]] where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes. Example: 07:39Z is 07:39 UTC Example: 02:39-05 is five hours behind UTC, thus Eastern Time Example: 15:39+08 is eight hours ahead of UTC, Hong Kong/Singapore time Example: 13:09+05:30 is 5.5 hours ahead of UTC, India time',
                'added':'FIX.4.4 EP-1'
            },
            {
                'typeName':'TZTimestamp',
                'baseType':'String',
                'description':'string field representing a time/date combination representing local time with an offset to UTC to allow identification of local time and timezone offset of that time. The representation is based on ISO 8601. Format is YYYYMMDD-HH:MM:SS[Z | [ + | - hh[:mm]]] where YYYY = 0000 to 9999, MM = 01-12, DD = 01-31 HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes Example: 20060901-07:39Z is 07:39 UTC on 1st of September 2006 Example: 20060901-02:39-05 is five hours behind UTC, thus Eastern Time on 1st of September 2006 Example: 20060901-15:39+08 is eight hours ahead of UTC, Hong Kong/Singapore time on 1st of September 2006 Example: 20060901-13:09+05:30 is 5.5 hours ahead of UTC, India time on 1st of September 2006',
                'added':'FIX.4.4 EP-1'
            },
            {
                'typeName':'data',
                'baseType':'String',
                'description':'string field containing raw data with no format or content restrictions. Data fields are always immediately preceded by a length field. The length field should specify the number of bytes of the value of the data field (up to but not including the terminating SOH). Caution: the value of one of these fields may contain the delimiter (SOH) character. Note that the value specified for this field should be followed by the delimiter (SOH) character as all fields are terminated with an "SOH".',
                'added':'FIX.2.7'
            },
            {
                'typeName':'Pattern',
                'baseType':'',
                'description':'Used to build on and provide some restrictions on what is allowed as valid values in fields that uses a base FIX data type and a pattern data type. The universe of allowable valid values for the field would then be the union of the base set of valid values and what is defined by the pattern data type. The pattern data type used by the field will retain its base FIX data type (e.g. String, int, char).',
                'added':'FIX.4.4 EP-1'
            },
            {
                'typeName':'Tenor',
                'baseType':'Pattern',
                'description':'used to allow the expression of FX standard tenors in addition to the base valid enumerations defined for the field that uses this pattern data type. This pattern data type is defined as follows: Dx = tenor expression for "days", e.g. "D5", where "x" is any integer > 0 Mx = tenor expression for "months", e.g. "M3", where "x" is any integer > 0 Wx = tenor expression for "weeks", e.g. "W13", where "x" is any integer > 0 Yx = tenor expression for "years", e.g. "Y1", where "x" is any integer > 0',
                'added':'FIX.4.4 EP-1'
            },
            {
                'typeName':'Reserved100Plus',
                'baseType':'Pattern',
                'description':'Values "100" and above are reserved for bilaterally agreed upon user defined enumerations.',
                'added':'FIX.4.4 EP-1'
            },
            {
                'typeName':'Reserved1000Plus',
                'baseType':'Pattern',
                'description':'Values "1000" and above are reserved for bilaterally agreed upon user defined enumerations.',
                'added':'FIX.4.4 EP-1'
            },
            {
                'typeName':'Reserved4000Plus',
                'baseType':'Pattern',
                'description':'Values "4000" and above are reserved for bilaterally agreed upon user defined enumerations.',
                'added':'FIX.4.4 EP-1'
            },
            {
                'typeName':'XMLData',
                'baseType':'String',
                'description':'Contains an XML document raw data with no format or content restrictions. XMLData fields are always immediately preceded by a length field. The length field should specify the number of bytes of the value of the data field (up to but not including the terminating SOH).',
                'added':'FIX.5.0 EP-1'
            },
            {
                'typeName':'Language',
                'baseType':'String',
                'description':'Identifier for a national language - uses ISO 639-1 standard Example(s)en (English), es (spanish), etc.',
                'added':'FIX.5.0SP1 EP90'
            }
        ];
    }

    find(dataType) {
        return this.dataTypes.find(item => item.typeName === dataType);
    }

    process(item, tag, value) {

        let dataType = this.find(item.datatype);
        if(dataType) {
            item.dataTypeDetail = dataType;
        }

        switch(item.datatype) {
            case 'int':
            case 'Length':
            case 'TagNum':
            case 'SeqNum':
            case 'NumInGroup':
            case 'DayOfMonth':
                item.value = parseInt(value);
                break;
            case 'float':
            case 'Qty':
            case 'Price':
            case 'PriceOffset':
            case 'Amt':
            case 'Percentage':
                item.value = parseFloat(value);
                break;
            case 'char':
            case 'Boolean':
                item.value = String(value);
                break;
            case 'String':
            case 'MultipleCharValue':
            case 'MultipleStringValue':
            case 'Country':
            case 'Currency':
            case 'Exchange':
            case 'MonthYear':
            case 'UTCTimestamp':
            case 'UTCTimeOnly':
            case 'UTCDateOnly':
            case 'LocalMktDate':
            case 'TZTimeOnly':
            case 'TZTimestamp':
            case 'data':
            case 'XMLData':
            case 'Language':
                item.value = String(value);
                break;
            case 'Pattern':
            case 'Tenor':
            case 'Reserved100Plus':
            case 'Reserved1000Plus':
            case 'Reserved4000Plus':
                item.value = String(value);
                break;
            default:
                item.value = String(value);
                break;
        }
    }
}