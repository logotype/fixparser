export const DATATYPES = [
  {
    'Name': 'int',
    'Description': 'Sequence of digits without commas or decimals and optional sign character (ASCII characters \'-\' and \'0\' - \'9\' ). The sign character utilizes one byte (i.e. positive int is \'99999\' while negative int is \'-99999\'). Note that int values may contain leading zeros (e.g. \'00023\' = \'23\').\nExamples:\n723 in field 21 would be mapped int as |21=723|.\n-723 in field 12 would be mapped int as |12=-723|\nThe following data types are based on int.\n',
    'XML': {
      'BuiltIn': '1',
      'Base': 'xs:integer',
      'Description': 'Sequence of digits without commas or decimals and optional sign character (ASCII characters \'-\' and \'0\' - \'9\' ). The sign character utilizes one byte (i.e. positive int is \'99999\' while negative int is \'-99999\'). Note that int values may contain leading zeros (e.g. \'00023\' = \'23\').\nExamples:\n723 in field 21 would be mapped int as |21=723|.\n-723 in field 12 would be mapped int as |12=-723|\nThe following data types are based on int.\n'
    },
    'Added': 'FIX.2.7',
    'Issue': 'SPEC-370'
  },
  {
    'Name': 'Length',
    'BaseType': 'int',
    'Description': 'int field representing the length in bytes. Value must be positive.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:nonNegativeInteger',
      'Description': 'int field representing the length in bytes. Value must be positive.'
    },
    'Added': 'FIX.4.3'
  },
  {
    'Name': 'TagNum',
    'BaseType': 'int',
    'Description': 'int field representing a field\'s tag number when using FIX \'Tag=Value\' syntax. Value must be positive and may not contain leading zeros.',
    'Added': 'FIX.4.3'
  },
  {
    'Name': 'SeqNum',
    'BaseType': 'int',
    'Description': 'int field representing a message sequence number. Value must be positive.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:positiveInteger',
      'Description': 'int field representing a message sequence number. Value must be positive.'
    },
    'Added': 'FIX.4.3'
  },
  {
    'Name': 'NumInGroup',
    'BaseType': 'int',
    'Description': 'int field representing the number of entries in a repeating group. Value must be positive.',
    'Added': 'FIX.4.3'
  },
  {
    'Name': 'DayOfMonth',
    'BaseType': 'int',
    'Description': 'int field representing a day during a particular monthy (values 1 to 31).',
    'Added': 'FIX.4.1'
  },
  {
    'Name': 'float',
    'Description': 'Sequence of digits with optional decimal point and sign character (ASCII characters \'-\', \'0\' - \'9\' and \'.\'); the absence of the decimal point within the string will be interpreted as the float representation of an integer value. All float fields must accommodate up to fifteen significant digits. The number of decimal places used should be a factor of business/market needs and mutual agreement between counterparties. Note that float values may contain leading zeros (e.g. \'00023.23\' = \'23.23\') and may contain or omit trailing zeros after the decimal point (e.g. \'23.0\' = \'23.0000\' = \'23\' = \'23.\').\nNote that fields which are derived from float may contain negative values unless explicitly specified otherwise. The following data types are based on float.',
    'XML': {
      'BuiltIn': '1',
      'Base': 'xs:decimal',
      'Description': 'Sequence of digits with optional decimal point and sign character (ASCII characters \'-\', \'0\' - \'9\' and \'.\'); the absence of the decimal point within the string will be interpreted as the float representation of an integer value. All float fields must accommodate up to fifteen significant digits. The number of decimal places used should be a factor of business/market needs and mutual agreement between counterparties. Note that float values may contain leading zeros (e.g. \'00023.23\' = \'23.23\') and may contain or omit trailing zeros after the decimal point (e.g. \'23.0\' = \'23.0000\' = \'23\' = \'23.\').\nNote that fields which are derived from float may contain negative values unless explicitly specified otherwise. The following data types are based on float.'
    },
    'Added': 'FIX.2.7'
  },
  {
    'Name': 'Qty',
    'BaseType': 'float',
    'Description': 'float field capable of storing either a whole number (no decimal places) of \'shares\' (securities denominated in whole units) or a decimal value containing decimal places for non-share quantity asset classes (securities denominated in fractional units).',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:decimal',
      'Description': 'float field capable of storing either a whole number (no decimal places) of \'shares\' (securities denominated in whole units) or a decimal value containing decimal places for non-share quantity asset classes (securities denominated in fractional units).'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'Price',
    'BaseType': 'float',
    'Description': 'float field representing a price. Note the number of decimal places may vary. For certain asset classes prices may be negative values. For example, prices for options strategies can be negative under certain market conditions. Refer to Volume 7: FIX Usage by Product for asset classes that support negative price values.',
    'Example': 'Strk=\'47.50\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:decimal',
      'Description': 'float field representing a price. Note the number of decimal places may vary. For certain asset classes prices may be negative values. For example, prices for options strategies can be negative under certain market conditions. Refer to Volume 7: FIX Usage by Product for asset classes that support negative price values.'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'PriceOffset',
    'BaseType': 'float',
    'Description': 'float field representing a price offset, which can be mathematically added to a \'Price\'. Note the number of decimal places may vary and some fields such as LastForwardPoints may be negative.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:decimal',
      'Description': 'float field representing a price offset, which can be mathematically added to a \'Price\'. Note the number of decimal places may vary and some fields such as LastForwardPoints may be negative.'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'Amt',
    'BaseType': 'float',
    'Description': 'float field typically representing a Price times a Qty',
    'Example': 'Amt=\'6847.00\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:decimal',
      'Description': 'float field typically representing a Price times a Qty'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'Percentage',
    'BaseType': 'float',
    'Description': 'float field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:decimal',
      'Description': 'float field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.'
    },
    'Added': 'FIX.4.3'
  },
  {
    'Name': 'char',
    'Description': 'Single character value, can include any alphanumeric character or punctuation except the delimiter. All char fields are case sensitive (i.e. m != M).\nThe following fields are based on char.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '.{1}',
      'Description': 'Single character value, can include any alphanumeric character or punctuation except the delimiter. All char fields are case sensitive (i.e. m != M).\nThe following fields are based on char.'
    },
    'Added': 'FIX.2.7'
  },
  {
    'Name': 'Boolean',
    'BaseType': 'char',
    'Description': 'char field containing one of two values:\n\'Y\' = True/Yes\n\'N\' = False/No',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '[YN]{1}',
      'Description': 'char field containing one of two values:\n\'Y\' = True/Yes\n\'N\' = False/No'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'String',
    'Description': 'Alpha-numeric free format strings, can include any character or punctuation except the delimiter. All String fields are case sensitive (i.e. morstatt != Morstatt).',
    'XML': {
      'BuiltIn': '1',
      'Base': 'xs:string',
      'Description': 'Alpha-numeric free format strings, can include any character or punctuation except the delimiter. All String fields are case sensitive (i.e. morstatt != Morstatt).'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'MultipleCharValue',
    'BaseType': 'String',
    'Description': 'string field containing one or more space delimited single character values (e.g. |18=2 A F| ).',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '[A-Za-z0-9](\\s[A-Za-z0-9])*',
      'Description': 'string field containing one or more space delimited single character values (e.g. |18=2 A F| ).'
    },
    'Added': 'FIX.4.4'
  },
  {
    'Name': 'MultipleStringValue',
    'BaseType': 'String',
    'Description': 'string field containing one or more space delimited multiple character values (e.g. |277=AV AN A| ).',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '.+(\\s.+)*',
      'Description': 'string field containing one or more space delimited multiple character values (e.g. |277=AV AN A| ).'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'Country',
    'BaseType': 'String',
    'Description': 'string field representing a country using ISO 3166 Country code (2 character) values (see Appendix 6-B).',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '.{2}',
      'Description': 'string field representing a country using ISO 3166 Country code (2 character) values (see Appendix 6-B).'
    },
    'Added': 'FIX.4.4'
  },
  {
    'Name': 'Currency',
    'BaseType': 'String',
    'Description': 'string field representing a currency type using ISO 4217 Currency code (3 character) values (see Appendix 6-A).',
    'Example': 'StrkCcy=\'USD\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '.{3}',
      'Description': 'string field representing a currency type using ISO 4217 Currency code (3 character) values (see Appendix 6-A).'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'Exchange',
    'BaseType': 'String',
    'Description': 'string field representing a market or exchange using ISO 10383 Market Identifier Code (MIC) values (see\'Appendix 6-C).',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '.*',
      'Description': 'string field representing a market or exchange using ISO 10383 Market Identifier Code (MIC) values (see\'Appendix 6-C).'
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'MonthYear',
    'BaseType': 'String',
    'Description': 'string field representing month of a year. An optional day of the month can be appended or an optional week code.\nValid formats:\nYYYYMM\nYYYYMMDD\nYYYYMMWW\nValid values:\nYYYY = 0000-9999; MM = 01-12; DD = 01-31; WW = w1, w2, w3, w4, w5.',
    'Example': 'MonthYear=\'200303\',  MonthYear=\'20030320\', MonthYear=\'200303w2\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '\\d{4}(0|1)\\d([0-3wW]\\d)?',
      'Description': 'string field representing month of a year. An optional day of the month can be appended or an optional week code.\nValid formats:\nYYYYMM\nYYYYMMDD\nYYYYMMWW\nValid values:\nYYYY = 0000-9999; MM = 01-12; DD = 01-31; WW = w1, w2, w3, w4, w5.',
      'Example': 'MonthYear=\'200303\',  MonthYear=\'20030320\', MonthYear=\'200303w2\''
    },
    'Added': 'FIX.4.1'
  },
  {
    'Name': 'UTCTimestamp',
    'BaseType': 'String',
    'Description': 'string field representing Time/date combination represented in UTC (Universal Time Coordinated, also known as \'GMT\') in either YYYYMMDD-HH:MM:SS (whole seconds) or YYYYMMDD-HH:MM:SS.sss (milliseconds) format, colons, dash, and period required.\nValid values:\n* YYYY = 0000-9999, MM = 01-12, DD = 01-31, HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second) (without milliseconds).\n* YYYY = 0000-9999, MM = 01-12, DD = 01-31, HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss=000-999 (indicating milliseconds).\nLeap Seconds: Note that UTC includes corrections for leap seconds, which are inserted to account for slowing of the rotation of the earth. Leap second insertion is declared by the International Earth Rotation Service (IERS) and has, since 1972, only occurred on the night of Dec. 31 or Jun 30. The IERS considers March 31 and September 30 as secondary dates for leap second insertion, but has never utilized these dates. During a leap second insertion, a UTCTimestamp field may read \'19981231-23:59:59\', \'19981231-23:59:60\', \'19990101-00:00:00\'. (see http://tycho.usno.navy.mil/leapsec.html)',
    'Example': 'TransactTm=\'20011217-09:30:47\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:dateTime',
      'Description': 'string field representing Time/date combination represented in UTC (Universal Time Coordinated, also known as \'GMT\') in either YYYY-MM-DDTHH:MM:SS (whole seconds) or YYYY-MM-DDTHH:MM:SS.sss (milliseconds) format as specified in ISO 8601.\nValid values:\n* YYYY = 0000-9999, MM = 01-12, DD = 01-31, HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second) (without milliseconds).\n* YYYY = 0000-9999, MM = 01-12, DD = 01-31, HH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss=000-999 (indicating milliseconds).\nLeap Seconds: Note that UTC includes corrections for leap seconds, which are inserted to account for slowing of the rotation of the earth. Leap second insertion is declared by the International Earth Rotation Service (IERS) and has, since 1972, only occurred on the night of Dec. 31 or Jun 30. The IERS considers March 31 and September 30 as secondary dates for leap second insertion, but has never utilized these dates. During a leap second insertion, a UTCTimestamp field may read \'1998-12-31T23:59:59\', \'1998-12-31T23:59:60\', \'1999-01-01T00:00:00\'. (see http://tycho.usno.navy.mil/leapsec.html)',
      'Example': 'TransactTm=\'2001-12-17T09:30:47-05:00\''
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'UTCTimeOnly',
    'BaseType': 'String',
    'Description': 'string field representing Time-only represented in UTC (Universal Time Coordinated, also known as \'GMT\') in either HH:MM:SS (whole seconds) or HH:MM:SS.sss (milliseconds) format, colons, and period required. This special-purpose field is paired with UTCDateOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.\nValid values:\nHH = 00-23, MM = 00-60 (60 only if UTC leap second), SS = 00-59. (without milliseconds)\nHH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss=000-999 (indicating milliseconds).',
    'Example': 'MDEntryTime=\'13:20:00.000\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:time',
      'Description': 'string field representing Time-only represented in UTC (Universal Time Coordinated, also known as \'GMT\') in either HH:MM:SS (whole seconds) or HH:MM:SS.sss (milliseconds) format as specified in ISO 8601. This special-purpose field is paired with UTCDateOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.\nValid values:\nHH = 00-23, MM = 00-60 (60 only if UTC leap second), SS = 00-59. (without milliseconds)\nHH = 00-23, MM = 00-59, SS = 00-60 (60 only if UTC leap second), sss=000-999 (indicating milliseconds).',
      'Example': 'MDEntryTime=\'13:20:00.000\''
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'UTCDateOnly',
    'BaseType': 'String',
    'Description': 'string field representing Date represented in UTC (Universal Time Coordinated, also known as \'GMT\') in YYYYMMDD format. This special-purpose field is paired with UTCTimeOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.\nValid values:\nYYYY = 0000-9999, MM = 01-12, DD = 01-31.',
    'Example': 'MDEntryDate=\'20030910\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:date',
      'Description': 'string field representing Date represented in UTC (Universal Time Coordinated, also known as \'GMT\') in YYYY-MM-DD format specifed in ISO 8601. This special-purpose field is paired with UTCTimeOnly to form a proper UTCTimestamp for bandwidth-sensitive messages.\nValid values:\nYYYY = 0000-9999, MM = 01-12, DD = 01-31.',
      'Example': 'MDEntryDate=\'2003-09-10\''
    },
    'Added': 'FIX.4.4'
  },
  {
    'Name': 'LocalMktDate',
    'BaseType': 'String',
    'Description': 'string field represening a Date of Local Market (as oppose to UTC) in YYYYMMDD format. This is the \'normal\' date field used by the FIX Protocol.\nValid values:\nYYYY = 0000-9999, MM = 01-12, DD = 01-31.',
    'Example': 'BizDate=\'2003-09-10\'',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:date',
      'Description': 'string field represening a Date of Local Market (as oppose to UTC) in YYYY-MM-DD format per the ISO 8601 standard. This is the \'normal\' date field used by the FIX Protocol.\nValid values:\nYYYY = 0000-9999, MM = 01-12, DD = 01-31.',
      'Example': 'BizDate=\'2003-09-10\''
    },
    'Added': 'FIX.4.2'
  },
  {
    'Name': 'TZTimeOnly',
    'BaseType': 'String',
    'Description': 'string field representing the time represented based on ISO 8601. This is the time with a UTC offset to allow identification of local time and timezone of that time.\nFormat is HH:MM[:SS][Z | [ + | - hh[:mm]]] where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes.\nExample: 07:39Z is 07:39 UTC\nExample: 02:39-05 is five hours behind UTC, thus Eastern Time\nExample: 15:39+08 is eight hours ahead of UTC, Hong Kong/Singapore time\nExample: 13:09+05:30 is 5.5 hours ahead of UTC, India time',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:time',
      'Description': 'string field representing the time represented based on ISO 8601. This is the time with a UTC offset to allow identification of local time and timezone of that time.\nFormat is HH:MM[:SS][Z | [ + | - hh[:mm]]] where HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes.',
      'Example': [
        'MatTm=\'07:39Z\' is 07:39 UTC',
        'MatTm=\'02:39-05\' is five hours behind UTC, thus Eastern Time',
        'MatTm=\'15:39+08\' is eight hours ahead of UTC, Hong Kong/Singapore time',
        'MatTm=\'13:09+05:30\' is 5.5 hours ahead of UTC, India time'
      ]
    },
    'Added': 'FIX.4.4',
    'AddedEP': '-1'
  },
  {
    'Name': 'TZTimestamp',
    'BaseType': 'String',
    'Description': 'string field representing a time/date combination representing local time with an offset to UTC to allow identification of local time and timezone offset of that time. The representation is based on ISO 8601.\nFormat is YYYYMMDD-HH:MM:SS[Z | [ + | - hh[:mm]]] where YYYY = 0000 to 9999, MM = 01-12, DD = 01-31 HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes\nExample: 20060901-07:39Z is 07:39 UTC on 1st of September 2006\nExample: 20060901-02:39-05 is five hours behind UTC, thus Eastern Time on 1st of September 2006\nExample: 20060901-15:39+08 is eight hours ahead of UTC, Hong Kong/Singapore time on 1st of September 2006\nExample: 20060901-13:09+05:30 is 5.5 hours ahead of UTC, India time on 1st of September 2006',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:dateTime',
      'Description': 'string field representing a time/date combination representing local time with an offset to UTC to allow identification of local time and timezone offset of that time. The representation is based on ISO 8601.\nFormat is YYYYMMDD-HH:MM:SS[Z | [ + | - hh[:mm]]] where YYYY = 0000 to 9999, MM = 01-12, DD = 01-31 HH = 00-23 hours, MM = 00-59 minutes, SS = 00-59 seconds, hh = 01-12 offset hours, mm = 00-59 offset minutes.',
      'Example': [
        'TZTransactTime=\'2006-09-01T07:39Z\' is 07:39 UTC on 1st of September 2006',
        'TZTransactTime=\'2006-09-01T02:39-05\' is five hours behind UTC, thus Eastern Time on 1st of September 2006',
        'TZTransactTime=\'2006-09-01T15:39+08\' is eight hours ahead of UTC, Hong Kong/Singapore time on 1st of September 2006',
        'TZTransactTime=\'2006-09-01T13:09+05:30\' is 5.5 hours ahead of UTC, India time on 1st of September 2006'
      ]
    },
    'Added': 'FIX.4.4',
    'AddedEP': '-1'
  },
  {
    'Name': 'data',
    'BaseType': 'String',
    'Description': 'string field containing raw data with no format or content restrictions. Data fields are always immediately preceded by a length field. The length field should specify the number of bytes of the value of the data field (up to but not including the terminating SOH).\nCaution: the value of one of these fields may contain the delimiter (SOH) character. Note that the value specified for this field should be followed by the delimiter (SOH) character as all fields are terminated with an \'SOH\'.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Description': 'string field containing raw data with no format or content restrictions. Data fields are always immediately preceded by a length field. The length field should specify the number of bytes of the value of the data field (up to but not including the terminating SOH).\nCaution: the value of one of these fields may contain the delimiter (SOH) character. Note that the value specified for this field should be followed by the delimiter (SOH) character as all fields are terminated with an \'SOH\'.'
    },
    'Added': 'FIX.2.7'
  },
  {
    'Name': 'Pattern',
    'Description': 'Used to build on and provide some restrictions on what is allowed as valid values in fields that uses a base FIX data type and a pattern data type. The universe of allowable valid values for the field would then be the union of the base set of valid values and what is defined by the pattern data type. The pattern data type used by the field will retain its base FIX data type (e.g. String, int, char).',
    'Added': 'FIX.4.4',
    'AddedEP': '-1'
  },
  {
    'Name': 'Tenor',
    'BaseType': 'Pattern',
    'Description': 'used to allow the expression of FX standard tenors in addition to the base valid enumerations defined for the field that uses this pattern data type. This pattern data type is defined as follows:\nDx = tenor expression for \'days\', e.g. \'D5\', where \'x\' is any integer > 0\nMx = tenor expression for \'months\', e.g. \'M3\', where \'x\' is any integer > 0\nWx = tenor expression for \'weeks\', e.g. \'W13\', where \'x\' is any integer > 0\nYx = tenor expression for \'years\', e.g. \'Y1\', where \'x\' is any integer > 0',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string',
      'Pattern': '[DMWY](\\d)+',
      'Description': 'used to allow the expression of FX standard tenors in addition to the base valid enumerations defined for the field that uses this pattern data type. This pattern data type is defined as follows:\nDx = tenor expression for \'days\', e.g. \'D5\', where \'x\' is any integer > 0\nMx = tenor expression for \'months\', e.g. \'M3\', where \'x\' is any integer > 0\nWx = tenor expression for \'weeks\', e.g. \'W13\', where \'x\' is any integer > 0\nYx = tenor expression for \'years\', e.g. \'Y1\', where \'x\' is any integer > 0'
    },
    'Added': 'FIX.4.4',
    'AddedEP': '-1'
  },
  {
    'Name': 'Reserved100Plus',
    'BaseType': 'Pattern',
    'Description': 'Values \'100\' and above are reserved for bilaterally agreed upon user defined enumerations.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:integer',
      'MinInclusive': '100',
      'Description': 'Values \'100\' and above are reserved for bilaterally agreed upon user defined enumerations.'
    },
    'Added': 'FIX.4.4',
    'AddedEP': '-1'
  },
  {
    'Name': 'Reserved1000Plus',
    'BaseType': 'Pattern',
    'Description': 'Values \'1000\' and above are reserved for bilaterally agreed upon user defined enumerations.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:integer',
      'MinInclusive': '1000',
      'Description': 'Values \'1000\' and above are reserved for bilaterally agreed upon user defined enumerations.'
    },
    'Added': 'FIX.4.4',
    'AddedEP': '-1'
  },
  {
    'Name': 'Reserved4000Plus',
    'BaseType': 'Pattern',
    'Description': 'Values \'4000\' and above are reserved for bilaterally agreed upon user defined enumerations.',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:integer',
      'MinInclusive': '4000',
      'Description': 'Values \'4000\' and above are reserved for bilaterally agreed upon user defined enumerations.'
    },
    'Added': 'FIX.4.4',
    'AddedEP': '-1'
  },
  {
    'Name': 'XMLData',
    'BaseType': 'String',
    'Description': 'Contains an XML document raw data with no format or content restrictions. XMLData fields are always immediately preceded by a length field. The length field should specify the number of bytes of the value of the data field (up to but not including the terminating SOH).',
    'XML': {
      'BuiltIn': '0',
      'Base': 'xs:string'
    },
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Name': 'Language',
    'BaseType': 'String',
    'Description': 'Identifier for a national language - uses ISO 639-1 standard',
    'Example': 'en (English), es (spanish), etc.',
    'XML': {
      'BuiltIn': '1',
      'Base': 'xs:language'
    },
    'Added': 'FIX.5.0SP1',
    'AddedEP': '90'
  }
];