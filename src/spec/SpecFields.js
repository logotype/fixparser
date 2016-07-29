export const FIELDS = [
  {
    'Tag': '1',
    'Name': 'Account',
    'Type': 'String',
    'AbbrName': 'Acct',
    'NotReqXML': '0',
    'Description': 'Account mnemonic as agreed between buy and sell sides, e.g. broker and institution or investor/intermediary and fund manager.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '2',
    'Name': 'AdvId',
    'Type': 'String',
    'AbbrName': 'AdvId',
    'NotReqXML': '0',
    'Description': 'Unique identifier of advertisement message.\n(Prior to FIX 4.1 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '3',
    'Name': 'AdvRefID',
    'Type': 'String',
    'AbbrName': 'AdvRefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier used with CANCEL and REPLACE transaction types.\n(Prior to FIX 4.1 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '4',
    'Name': 'AdvSide',
    'Type': 'char',
    'AbbrName': 'AdvSide',
    'NotReqXML': '0',
    'Description': 'Broker\'s side of advertised trade',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '5',
    'Name': 'AdvTransType',
    'Type': 'String',
    'AbbrName': 'AdvTransTyp',
    'NotReqXML': '0',
    'Description': 'Identifies advertisement message transaction type',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '6',
    'Name': 'AvgPx',
    'Type': 'Price',
    'AbbrName': 'AvgPx',
    'NotReqXML': '0',
    'Description': 'Calculated average price of all fills on this order.\nFor Fixed Income trades AvgPx is always expressed as percent-of-par, regardless of the PriceType (423) of LastPx (31). I.e., AvgPx will contain an average of percent-of-par values (see LastParPx (669)) for issues traded in Yield, Spread or Discount.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '7',
    'Name': 'BeginSeqNo',
    'Type': 'SeqNum',
    'AbbrName': 'BeginSeqNo',
    'NotReqXML': '1',
    'Description': 'Message sequence number of first message in range to be resent',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '8',
    'Name': 'BeginString',
    'Type': 'String',
    'AbbrName': 'BeginString',
    'NotReqXML': '1',
    'Description': 'Identifies beginning of new message and protocol version. ALWAYS FIRST FIELD IN MESSAGE. (Always unencrypted)\nValid values:\nFIXT.1.1\n',
    'Added': 'FIX.2.7',
    'Issue': 'SPEC-376'
  },
  {
    'Tag': '9',
    'Name': 'BodyLength',
    'Type': 'Length',
    'AbbrName': 'BodyLength',
    'NotReqXML': '1',
    'Description': 'Message length, in bytes, forward to the CheckSum field. ALWAYS SECOND FIELD IN MESSAGE. (Always unencrypted)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '10',
    'Name': 'CheckSum',
    'Type': 'String',
    'AbbrName': 'CheckSum',
    'NotReqXML': '1',
    'Description': 'Three byte, simple checksum (see Volume 2: \'Checksum Calculation\' for description). ALWAYS LAST FIELD IN MESSAGE; i.e. serves, with the trailing <SOH>, as the end-of-message delimiter. Always defined as three characters. (Always unencrypted)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '11',
    'Name': 'ClOrdID',
    'Type': 'String',
    'AbbrName': 'ClOrdID',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Order as assigned by the buy-side (institution, broker, intermediary etc.) (identified by SenderCompID (49) or OnBehalfOfCompID (5) as appropriate). Uniqueness must be guaranteed within a single trading day. Firms, particularly those which electronically submit multi-day orders, trade globally or throughout market close periods, should ensure uniqueness across days, for example by embedding a date within the ClOrdID field.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '12',
    'Name': 'Commission',
    'Type': 'Amt',
    'AbbrName': 'Comm',
    'NotReqXML': '0',
    'Description': 'Commission. Note if CommType (13) is percentage, Commission of 5% should be represented as .05.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '13',
    'Name': 'CommType',
    'Type': 'char',
    'AbbrName': 'CommTyp',
    'NotReqXML': '0',
    'Description': 'Commission type',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '14',
    'Name': 'CumQty',
    'Type': 'Qty',
    'AbbrName': 'CumQty',
    'NotReqXML': '0',
    'Description': 'Total quantity (e.g. number of shares) filled.\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '15',
    'Name': 'Currency',
    'Type': 'Currency',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'Identifies currency used for price. Absence of this field is interpreted as the default for the security. It is recommended that systems provide the currency value whenever possible. See \'Appendix 6-A: Valid Currency Codes\' for information on obtaining valid values.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '16',
    'Name': 'EndSeqNo',
    'Type': 'SeqNum',
    'AbbrName': 'EndSeqNo',
    'NotReqXML': '1',
    'Description': 'Message sequence number of last message in range to be resent. If request is for a single message BeginSeqNo (7) = EndSeqNo. If request is for all messages subsequent to a particular message, EndSeqNo = \'0\' (representing infinity).',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '17',
    'Name': 'ExecID',
    'Type': 'String',
    'AbbrName': 'ExecID',
    'NotReqXML': '0',
    'Description': 'Unique identifier of execution message as assigned by sell-side (broker, exchange, ECN) (will be 0 (zero) for ExecType (150)=I (Order Status)).\nUniqueness must be guaranteed within a single trading day or the life of a multi-day order. Firms which accept multi-day orders should consider embedding a date within the ExecID field to assure uniqueness across days.\n(Prior to FIX 4.1 this field was of type int).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '18',
    'Name': 'ExecInst',
    'Type': 'MultipleCharValue',
    'AbbrName': 'ExecInst',
    'NotReqXML': '0',
    'Description': 'Instructions for order handling on exchange trading floor. If more than one instruction is applicable to an order, this field can contain multiple instructions separated by space. *** SOME VALUES HAVE BEEN REPLACED - See \'Replaced Features and Supported Approach\' *** (see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '19',
    'Name': 'ExecRefID',
    'Type': 'String',
    'AbbrName': 'ExecRefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier used with Trade, Trade Cancel and Trade Correct execution types.\n(Prior to FIX 4.1 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '21',
    'Name': 'HandlInst',
    'Type': 'char',
    'AbbrName': 'HandlInst',
    'NotReqXML': '0',
    'Description': 'Instructions for order handling on Broker trading floor',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '22',
    'Name': 'SecurityIDSource',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'Description': 'Identifies class or source of the SecurityID (48) value. Required if SecurityID is specified.\n100+ are reserved for private security identifications',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '23',
    'Name': 'IOIID',
    'Type': 'String',
    'AbbrName': 'IOIID',
    'BaseCategory': 'Indication',
    'BaseCategoryAbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Unique identifier of IOI message.\n(Prior to FIX 4.1 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '25',
    'Name': 'IOIQltyInd',
    'Type': 'char',
    'AbbrName': 'QltyInd',
    'NotReqXML': '0',
    'Description': 'Relative quality of indication',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '26',
    'Name': 'IOIRefID',
    'Type': 'String',
    'AbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier used with CANCEL and REPLACE, transaction types.\n(Prior to FIX 4.1 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '27',
    'Name': 'IOIQty',
    'Type': 'String',
    'AbbrName': 'Qty',
    'NotReqXML': '0',
    'UnionDataType': 'Qty',
    'Description': 'Quantity (e.g. number of shares) in numeric form or relative size.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '28',
    'Name': 'IOITransType',
    'Type': 'char',
    'AbbrName': 'TransTyp',
    'NotReqXML': '0',
    'Description': 'Identifies IOI message transaction type',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '29',
    'Name': 'LastCapacity',
    'Type': 'char',
    'AbbrName': 'LastCpcty',
    'NotReqXML': '0',
    'Description': 'Broker capacity in order execution',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '30',
    'Name': 'LastMkt',
    'Type': 'Exchange',
    'AbbrName': 'LastMkt',
    'NotReqXML': '0',
    'Description': 'Market of execution for last fill, or an indication of the market where an order was routed\nValid values:\nSee \'Appendix 6-C\'',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '31',
    'Name': 'LastPx',
    'Type': 'Price',
    'AbbrName': 'LastPx',
    'NotReqXML': '0',
    'Description': 'Price of this (last) fill.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '32',
    'Name': 'LastQty',
    'Type': 'Qty',
    'AbbrName': 'LastQty',
    'NotReqXML': '0',
    'Description': 'Quantity (e.g. shares) bought/sold on this (last) fill.\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '33',
    'Name': 'NoLinesOfText',
    'Type': 'NumInGroup',
    'AbbrName': 'NoLinesOfText',
    'NotReqXML': '1',
    'Description': 'Identifies number of lines of text body',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '34',
    'Name': 'MsgSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'SeqNum',
    'NotReqXML': '0',
    'Description': 'Integer message sequence number.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '35',
    'Name': 'MsgType',
    'Type': 'String',
    'AbbrName': 'MsgTyp',
    'NotReqXML': '0',
    'Description': 'Defines message type ALWAYS THIRD FIELD IN MESSAGE. (Always unencrypted)\nNote: A \'U\' as the first character in the MsgType field (i.e. U, U2, etc) indicates that the message format is privately defined between the sender and receiver.\n*** Note the use of lower case letters ***',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '36',
    'Name': 'NewSeqNo',
    'Type': 'SeqNum',
    'AbbrName': 'NewSeqNo',
    'NotReqXML': '1',
    'Description': 'New sequence number',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '37',
    'Name': 'OrderID',
    'Type': 'String',
    'AbbrName': 'OrdID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Order as assigned by sell-side (broker, exchange, ECN). Uniqueness must be guaranteed within a single trading day. Firms which accept multi-day orders should consider embedding a date within the OrderID field to assure uniqueness across days.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '38',
    'Name': 'OrderQty',
    'Type': 'Qty',
    'AbbrName': 'Qty',
    'NotReqXML': '0',
    'Description': 'Quantity ordered. This represents the number of shares for equities or par, face or nominal value for FI instruments.\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '39',
    'Name': 'OrdStatus',
    'Type': 'char',
    'AbbrName': 'OrdStat',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Identifies current status of order. *** SOME VALUES HAVE BEEN REPLACED - See \'Replaced Features and Supported Approach\' *** (see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '40',
    'Name': 'OrdType',
    'Type': 'char',
    'AbbrName': 'OrdTyp',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Order type. *** SOME VALUES ARE NO LONGER USED - See \'Deprecated (Phased-out) Features and Supported Approach\' *** (see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '41',
    'Name': 'OrigClOrdID',
    'Type': 'String',
    'AbbrName': 'OrigClOrdID',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'OrigID',
    'NotReqXML': '0',
    'Description': 'ClOrdID (11) of the previous order (NOT the initial order of the day) as assigned by the institution, used to identify the previous order in cancel and cancel/replace requests.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '42',
    'Name': 'OrigTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'OrigTm',
    'NotReqXML': '0',
    'Description': 'Time of message origination (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\'))',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '43',
    'Name': 'PossDupFlag',
    'Type': 'Boolean',
    'AbbrName': 'PosDup',
    'NotReqXML': '0',
    'Description': 'Indicates possible retransmission of message with this sequence number',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '44',
    'Name': 'Price',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Price per unit of quantity (e.g. per share)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '45',
    'Name': 'RefSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'RefSeqNum',
    'NotReqXML': '0',
    'Description': 'Reference message sequence number',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '48',
    'Name': 'SecurityID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Security identifier value of SecurityIDSource (22) type (e.g. CUSIP, SEDOL, ISIN, etc). Requires SecurityIDSource.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '49',
    'Name': 'SenderCompID',
    'Type': 'String',
    'AbbrName': 'SID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify firm sending message.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '50',
    'Name': 'SenderSubID',
    'Type': 'String',
    'AbbrName': 'SSub',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific message originator (desk, trader, etc.)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '52',
    'Name': 'SendingTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'Snt',
    'NotReqXML': '0',
    'Description': 'Time of message transmission (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\')',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '53',
    'Name': 'Quantity',
    'Type': 'Qty',
    'AbbrName': 'Qty',
    'NotReqXML': '0',
    'Description': 'Overall/total quantity (e.g. number of shares)\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '54',
    'Name': 'Side',
    'Type': 'char',
    'AbbrName': 'Side',
    'NotReqXML': '0',
    'Description': 'Side of order (see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '55',
    'Name': 'Symbol',
    'Type': 'String',
    'AbbrName': 'Sym',
    'NotReqXML': '0',
    'Description': 'Ticker symbol. Common, \'human understood\' representation of the security. SecurityID (48) value can be specified if no symbol exists (e.g. non-exchange traded Collective Investment Vehicles)\nUse \'[N/A]\' for products which do not have a symbol.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '56',
    'Name': 'TargetCompID',
    'Type': 'String',
    'AbbrName': 'TID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify receiving firm.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '57',
    'Name': 'TargetSubID',
    'Type': 'String',
    'AbbrName': 'TSub',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific individual or unit intended to receive message. \'ADMIN\' reserved for administrative messages not intended for a specific user.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '58',
    'Name': 'Text',
    'Type': 'String',
    'AbbrName': 'Txt',
    'NotReqXML': '0',
    'Description': 'Free format text string\n(Note: this field does not have a specified maximum length)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '59',
    'Name': 'TimeInForce',
    'Type': 'char',
    'AbbrName': 'TmInForce',
    'NotReqXML': '0',
    'Description': 'Specifies how long the order remains in effect. Absence of this field is interpreted as DAY. NOTE not applicable to CIV Orders. (see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '60',
    'Name': 'TransactTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'TxnTm',
    'NotReqXML': '0',
    'Description': 'Timestamp when the business transaction represented by the message occurred.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '94',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '61',
    'Name': 'Urgency',
    'Type': 'char',
    'AbbrName': 'Urgency',
    'NotReqXML': '0',
    'Description': 'Urgency flag',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '62',
    'Name': 'ValidUntilTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'ValidUntilTm',
    'NotReqXML': '0',
    'Description': 'Indicates expiration time of indication message (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\')',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '63',
    'Name': 'SettlType',
    'Type': 'String',
    'AbbrName': 'SettlTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Tenor',
    'Description': 'Indicates order settlement period. If present, SettlDate (64) overrides this field. If both SettlType (63) and SettDate (64) are omitted, the default for SettlType (63) is 0 (Regular)\nRegular is defined as the default settlement period for the particular security on the exchange of execution.\nIn Fixed Income the contents of this field may influence the instrument definition if the SecurityID (48) is ambiguous. In the US an active Treasury offering may be re-opened, and for a time one CUSIP will apply to both the current and \'when-issued\' securities. Supplying a value of \'7\' clarifies the instrument description; any other value or the absence of this field should cause the respondent to default to the active issue.\nAdditionally the following patterns may be uses as well as enum values\nDx = FX tenor expression for \'days\', e.g. \'D5\', where \'x\' is any integer > 0\nMx = FX tenor expression for \'months\', e.g. \'M3\', where \'x\' is any integer > 0\nWx = FX tenor expression for \'weeks\', e.g. \'W13\', where \'x\' is any integer > 0\nYx = FX tenor expression for \'years\', e.g. \'Y1\', where \'x\' is any integer > 0\nNoted that for FX the tenors expressed using Dx, Mx, Wx, and Yx values do not denote business days, but calendar days.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '64',
    'Name': 'SettlDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'SettlDt',
    'NotReqXML': '0',
    'Description': 'Specific date of trade settlement (SettlementDate) in YYYYMMDD format.\nIf present, this field overrides SettlType (63). This field is required if the value of SettlType (63) is 6 (Future) or 8 (Sellers Option). This field must be omitted if the value of SettlType (63) is 7 (When and If Issued)\n(expressed in local time at place of settlement)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '65',
    'Name': 'SymbolSfx',
    'Type': 'String',
    'AbbrName': 'Sfx',
    'NotReqXML': '0',
    'Description': 'Additional information about the security (e.g. preferred, warrants, etc.). Note also see SecurityType (167).\nAs defined in the NYSE Stock and bond Symbol Directory and in the AMEX Fitch Directory.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '66',
    'Name': 'ListID',
    'Type': 'String',
    'AbbrName': 'ListID',
    'BaseCategory': 'ProgramTrading',
    'BaseCategoryAbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for list as assigned by institution, used to associate multiple individual orders. Uniqueness must be guaranteed within a single trading day. Firms which generate multi-day orders should consider embedding a date within the ListID field to assure uniqueness across days.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '67',
    'Name': 'ListSeqNo',
    'Type': 'int',
    'AbbrName': 'ListSeqNo',
    'BaseCategory': 'ProgramTrading',
    'BaseCategoryAbbrName': 'SeqNo',
    'NotReqXML': '0',
    'Description': 'Sequence of individual order within list (i.e. ListSeqNo of TotNoOrders (68), 2 of 25, 3 of 25, . . . )',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '68',
    'Name': 'TotNoOrders',
    'Type': 'int',
    'AbbrName': 'TotNoOrds',
    'NotReqXML': '0',
    'Description': 'Total number of list order entries across all messages. Should be the sum of all NoOrders (73) in each message that has repeating list order entries related to the same ListID (66). Used to support fragmentation.\n(Prior to FIX 4.2 this field was named \'ListNoOrds\')',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '69',
    'Name': 'ListExecInst',
    'Type': 'String',
    'AbbrName': 'ListExecInst',
    'NotReqXML': '0',
    'Description': 'Free format text message containing list handling and execution instructions.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '70',
    'Name': 'AllocID',
    'Type': 'String',
    'AbbrName': 'AllocID',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for allocation message.\n(Prior to FIX 4.1 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '71',
    'Name': 'AllocTransType',
    'Type': 'char',
    'AbbrName': 'TransTyp',
    'NotReqXML': '0',
    'Description': 'Identifies allocation transaction type *** SOME VALUES HAVE BEEN REPLACED - See \'Replaced Features and Supported Approach\' ***',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '72',
    'Name': 'RefAllocID',
    'Type': 'String',
    'AbbrName': 'RefAllocID',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier to be used with AllocTransType (71) = Replace or Cancel.\n(Prior to FIX 4.1 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '73',
    'Name': 'NoOrders',
    'Type': 'NumInGroup',
    'AbbrName': 'NoOrds',
    'NotReqXML': '1',
    'Description': 'Indicates number of orders to be combined for average pricing and allocation.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '74',
    'Name': 'AvgPxPrecision',
    'Type': 'int',
    'AbbrName': 'AvgPxPrcsn',
    'NotReqXML': '0',
    'Description': 'Indicates number of decimal places to be used for average pricing. Absence of this field indicates that default precision arranged by the broker/institution is to be used.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '75',
    'Name': 'TradeDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'TrdDt',
    'NotReqXML': '0',
    'Description': 'Indicates date of trade referenced in this message in YYYYMMDD format. Absence of this field indicates current day (expressed in local time at place of trade).',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '77',
    'Name': 'PositionEffect',
    'Type': 'char',
    'AbbrName': 'PosEfct',
    'NotReqXML': '0',
    'Description': 'Indicates whether the resulting position after a trade should be an opening position or closing position. Used for omnibus accounting - where accounts are held on a gross basis instead of being netted together.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '78',
    'Name': 'NoAllocs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoAllocs',
    'NotReqXML': '1',
    'Description': 'Number of repeating AllocAccount (79)/AllocPrice (366) entries.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '79',
    'Name': 'AllocAccount',
    'Type': 'String',
    'AbbrName': 'Acct',
    'NotReqXML': '0',
    'Description': 'Sub-account mnemonic',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '80',
    'Name': 'AllocQty',
    'Type': 'Qty',
    'AbbrName': 'Qty',
    'NotReqXML': '0',
    'Description': 'Quantity to be allocated to specific sub-account\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '81',
    'Name': 'ProcessCode',
    'Type': 'char',
    'AbbrName': 'ProcCode',
    'NotReqXML': '0',
    'Description': 'Processing code for sub-account. Absence of this field in AllocAccount (79) / AllocPrice (366) /AllocQty (80) / ProcessCode instance indicates regular trade.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '82',
    'Name': 'NoRpts',
    'Type': 'int',
    'AbbrName': 'NoRpts',
    'NotReqXML': '0',
    'Description': 'Total number of reports within series.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '83',
    'Name': 'RptSeq',
    'Type': 'int',
    'AbbrName': 'RptSeq',
    'NotReqXML': '0',
    'Description': 'Sequence number of message within report series. Used to carry reporting sequence number of the fill as represented on the Trade Report Side.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '84',
    'Name': 'CxlQty',
    'Type': 'Qty',
    'AbbrName': 'CxlQty',
    'NotReqXML': '0',
    'Description': 'Total quantity canceled for this order.\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '85',
    'Name': 'NoDlvyInst',
    'Type': 'NumInGroup',
    'AbbrName': 'NoDlvyInst',
    'NotReqXML': '1',
    'Description': 'Number of delivery instruction fields in repeating group.\nNote this field was removed in FIX 4.1 and reinstated in FIX 4.4.',
    'Added': 'FIX.2.7',
    'Issue': 'SPEC-394'
  },
  {
    'Tag': '87',
    'Name': 'AllocStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Identifies status of allocation.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '88',
    'Name': 'AllocRejCode',
    'Type': 'int',
    'AbbrName': 'RejCode',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies reason for rejection.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '89',
    'Name': 'Signature',
    'Type': 'data',
    'AbbrName': 'Signature',
    'NotReqXML': '1',
    'Description': 'Electronic signature',
    'Added': 'FIX.2.7',
    'Deprecated': 'FIXT.1.1'
  },
  {
    'Tag': '90',
    'Name': 'SecureDataLen',
    'Type': 'Length',
    'AssociatedDataTag': '91',
    'AbbrName': 'SecureDataLen',
    'NotReqXML': '1',
    'Description': 'Length of encrypted message',
    'Added': 'FIX.2.7',
    'Deprecated': 'FIXT.1.1'
  },
  {
    'Tag': '91',
    'Name': 'SecureData',
    'Type': 'data',
    'AbbrName': 'SecureData',
    'NotReqXML': '1',
    'Description': 'Actual encrypted data stream',
    'Added': 'FIX.2.7',
    'Deprecated': 'FIXT.1.1'
  },
  {
    'Tag': '93',
    'Name': 'SignatureLength',
    'Type': 'Length',
    'AssociatedDataTag': '89',
    'AbbrName': 'SignatureLength',
    'NotReqXML': '1',
    'Description': 'Number of bytes in signature field',
    'Added': 'FIX.2.7',
    'Deprecated': 'FIXT.1.1'
  },
  {
    'Tag': '94',
    'Name': 'EmailType',
    'Type': 'char',
    'AbbrName': 'EmailTyp',
    'NotReqXML': '0',
    'Description': 'Email message type.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '95',
    'Name': 'RawDataLength',
    'Type': 'Length',
    'AssociatedDataTag': '96',
    'AbbrName': 'RawDataLength',
    'NotReqXML': '0',
    'Description': 'Number of bytes in raw data field.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '96',
    'Name': 'RawData',
    'Type': 'data',
    'AbbrName': 'RawData',
    'NotReqXML': '0',
    'Description': 'Unformatted raw data, can include bitmaps, word processor documents, etc.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '97',
    'Name': 'PossResend',
    'Type': 'Boolean',
    'AbbrName': 'PosRsnd',
    'NotReqXML': '0',
    'Description': 'Indicates that message may contain information that has been sent under another sequence number.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '98',
    'Name': 'EncryptMethod',
    'Type': 'int',
    'AbbrName': 'EncryptMethod',
    'NotReqXML': '1',
    'Description': 'Method of encryption.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '99',
    'Name': 'StopPx',
    'Type': 'Price',
    'AbbrName': 'StopPx',
    'NotReqXML': '0',
    'Description': 'Price per unit of quantity (e.g. per share)',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '100',
    'Name': 'ExDestination',
    'Type': 'Exchange',
    'AbbrName': 'ExDest',
    'NotReqXML': '0',
    'Description': 'Execution destination as defined by institution when order is entered.\nValid values:\nSee \'Appendix 6-C\'',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '102',
    'Name': 'CxlRejReason',
    'Type': 'int',
    'AbbrName': 'CxlRejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Code to identify reason for cancel rejection.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '103',
    'Name': 'OrdRejReason',
    'Type': 'int',
    'AbbrName': 'RejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Code to identify reason for order rejection. Note: Values 3, 4, and 5 will be used when rejecting an order due to pre-allocation information errors.',
    'Added': 'FIX.2.7'
  },
  {
    'Tag': '104',
    'Name': 'IOIQualifier',
    'Type': 'char',
    'AbbrName': 'Qual',
    'NotReqXML': '0',
    'Description': 'Code to qualify IOI use. (see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.3.0'
  },
  {
    'Tag': '106',
    'Name': 'Issuer',
    'Type': 'String',
    'AbbrName': 'Issr',
    'NotReqXML': '0',
    'Description': 'Name of security issuer (e.g. International Business Machines, GNMA).\nsee also Volume 7: \'PRODUCT: FIXED INCOME - Euro Issuer Values\'',
    'Added': 'FIX.3.0'
  },
  {
    'Tag': '107',
    'Name': 'SecurityDesc',
    'Type': 'String',
    'AbbrName': 'Desc',
    'NotReqXML': '0',
    'Description': 'Can be used to provide an optional textual description for a financial instrument.',
    'Added': 'FIX.3.0'
  },
  {
    'Tag': '108',
    'Name': 'HeartBtInt',
    'Type': 'int',
    'AbbrName': 'HeartBtInt',
    'NotReqXML': '1',
    'Description': 'Heartbeat interval (seconds)',
    'Added': 'FIX.3.0'
  },
  {
    'Tag': '110',
    'Name': 'MinQty',
    'Type': 'Qty',
    'AbbrName': 'MinQty',
    'NotReqXML': '0',
    'Description': 'Minimum quantity of an order to be executed.\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.3.0'
  },
  {
    'Tag': '111',
    'Name': 'MaxFloor',
    'Type': 'Qty',
    'AbbrName': 'MaxFloor',
    'NotReqXML': '0',
    'Description': 'The quantity to be displayed . Required for reserve orders. On orders specifies the qty to be displayed, on execution reports the currently displayed quantity.',
    'Added': 'FIX.3.0',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '112',
    'Name': 'TestReqID',
    'Type': 'String',
    'AbbrName': 'TestReqID',
    'NotReqXML': '1',
    'Description': 'Identifier included in Test Request message to be returned in resulting Heartbeat',
    'Added': 'FIX.3.0'
  },
  {
    'Tag': '113',
    'Name': 'ReportToExch',
    'Type': 'Boolean',
    'AbbrName': 'RptToExch',
    'NotReqXML': '0',
    'Description': 'Identifies party of trade responsible for exchange reporting.',
    'Added': 'FIX.3.0'
  },
  {
    'Tag': '114',
    'Name': 'LocateReqd',
    'Type': 'Boolean',
    'AbbrName': 'LocReqd',
    'NotReqXML': '0',
    'Description': 'Indicates whether the broker is to locate the stock in conjunction with a short sell order.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '115',
    'Name': 'OnBehalfOfCompID',
    'Type': 'String',
    'AbbrName': 'OBID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify firm originating message if the message was delivered by a third party i.e. the third party firm identifier would be delivered in the SenderCompID field and the firm originating the message in this field.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '116',
    'Name': 'OnBehalfOfSubID',
    'Type': 'String',
    'AbbrName': 'OBSub',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific message originator (i.e. trader) if the message was delivered by a third party',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '117',
    'Name': 'QuoteID',
    'Type': 'String',
    'AbbrName': 'QID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for quote',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '118',
    'Name': 'NetMoney',
    'Type': 'Amt',
    'AbbrName': 'NetMny',
    'NotReqXML': '0',
    'Description': 'Total amount due as the result of the transaction (e.g. for Buy order - principal + commission + fees) reported in currency of execution.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '119',
    'Name': 'SettlCurrAmt',
    'Type': 'Amt',
    'AbbrName': 'SettlCurrAmt',
    'NotReqXML': '0',
    'Description': 'Total amount due expressed in settlement currency (includes the effect of the forex transaction)',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '120',
    'Name': 'SettlCurrency',
    'Type': 'Currency',
    'AbbrName': 'SettlCcy',
    'NotReqXML': '0',
    'Description': 'Currency code of settlement denomination.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '121',
    'Name': 'ForexReq',
    'Type': 'Boolean',
    'AbbrName': 'ForexReq',
    'NotReqXML': '0',
    'Description': 'Indicates request for forex accommodation trade to be executed along with security transaction.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '122',
    'Name': 'OrigSendingTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'OrigSnt',
    'NotReqXML': '0',
    'Description': 'Original time of message transmission (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\') when transmitting orders as the result of a resend request.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '123',
    'Name': 'GapFillFlag',
    'Type': 'Boolean',
    'AbbrName': 'GapFillFlag',
    'NotReqXML': '1',
    'Description': 'Indicates that the Sequence Reset message is replacing administrative or application messages which will not be resent.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '124',
    'Name': 'NoExecs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoExecs',
    'NotReqXML': '1',
    'Description': 'No of execution repeating group entries to follow.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '126',
    'Name': 'ExpireTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'ExpireTm',
    'NotReqXML': '0',
    'Description': 'Time/Date of order expiration (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\')\nThe meaning of expiration is specific to the context where the field is used.\nFor orders, this is the expiration time of a Good Til Date TimeInForce.\nFor Quotes - this is the expiration of the quote.\nExpiration time is provided across the quote message dialog to control the length of time of the overall quoting process.\nFor collateral requests, this is the time by which collateral must be assigned.\nFor collateral assignments, this is the time by which a response to the assignment is expected.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '127',
    'Name': 'DKReason',
    'Type': 'char',
    'AbbrName': 'DkRsn',
    'NotReqXML': '0',
    'Description': 'Reason for execution rejection.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '128',
    'Name': 'DeliverToCompID',
    'Type': 'String',
    'AbbrName': 'D2ID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify the firm targeted to receive the message if the message is delivered by a third party i.e. the third party firm identifier would be delivered in the TargetCompID (56) field and the ultimate receiver firm ID in this field.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '129',
    'Name': 'DeliverToSubID',
    'Type': 'String',
    'AbbrName': 'D2Sub',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific message recipient (i.e. trader) if the message is delivered by a third party',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '130',
    'Name': 'IOINaturalFlag',
    'Type': 'Boolean',
    'AbbrName': 'NatFlag',
    'NotReqXML': '0',
    'Description': 'Indicates that IOI is the result of an existing agency order or a facilitation position resulting from an agency order, not from principal trading or order solicitation activity.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '131',
    'Name': 'QuoteReqID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for quote request',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '132',
    'Name': 'BidPx',
    'Type': 'Price',
    'AbbrName': 'BidPx',
    'NotReqXML': '0',
    'Description': 'Bid price/rate',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '133',
    'Name': 'OfferPx',
    'Type': 'Price',
    'AbbrName': 'OfrPx',
    'NotReqXML': '0',
    'Description': 'Offer price/rate',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '134',
    'Name': 'BidSize',
    'Type': 'Qty',
    'AbbrName': 'BidSz',
    'NotReqXML': '0',
    'Description': 'Quantity of bid\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '135',
    'Name': 'OfferSize',
    'Type': 'Qty',
    'AbbrName': 'OfrSz',
    'NotReqXML': '0',
    'Description': 'Quantity of offer\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '136',
    'Name': 'NoMiscFees',
    'Type': 'NumInGroup',
    'AbbrName': 'NoMiscFees',
    'NotReqXML': '1',
    'Description': 'Number of repeating groups of miscellaneous fees',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '137',
    'Name': 'MiscFeeAmt',
    'Type': 'Amt',
    'AbbrName': 'Amt',
    'NotReqXML': '0',
    'Description': 'Miscellaneous fee value',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '138',
    'Name': 'MiscFeeCurr',
    'Type': 'Currency',
    'AbbrName': 'Curr',
    'NotReqXML': '0',
    'Description': 'Currency of miscellaneous fee',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '139',
    'Name': 'MiscFeeType',
    'Type': 'String',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Indicates type of miscellaneous fee.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '140',
    'Name': 'PrevClosePx',
    'Type': 'Price',
    'AbbrName': 'PrevClsPx',
    'NotReqXML': '0',
    'Description': 'Previous closing price of security.',
    'Added': 'FIX.4.0'
  },
  {
    'Tag': '141',
    'Name': 'ResetSeqNumFlag',
    'Type': 'Boolean',
    'AbbrName': 'ResetSeqNumFlag',
    'NotReqXML': '1',
    'Description': 'Indicates that the both sides of the FIX session should reset sequence numbers.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '142',
    'Name': 'SenderLocationID',
    'Type': 'String',
    'AbbrName': 'SLoc',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific message originator\'s location (i.e. geographic location and/or desk, trader)',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '143',
    'Name': 'TargetLocationID',
    'Type': 'String',
    'AbbrName': 'TLoc',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific message destination\'s location (i.e. geographic location and/or desk, trader)',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '144',
    'Name': 'OnBehalfOfLocationID',
    'Type': 'String',
    'AbbrName': 'OBLoc',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific message originator\'s location (i.e. geographic location and/or desk, trader) if the message was delivered by a third party',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '145',
    'Name': 'DeliverToLocationID',
    'Type': 'String',
    'AbbrName': 'D2Loc',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific message recipient\'s location (i.e. geographic location and/or desk, trader) if the message was delivered by a third party',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '146',
    'Name': 'NoRelatedSym',
    'Type': 'NumInGroup',
    'AbbrName': 'NoReltdSym',
    'NotReqXML': '1',
    'Description': 'Specifies the number of repeating symbols specified.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '147',
    'Name': 'Subject',
    'Type': 'String',
    'AbbrName': 'Subject',
    'NotReqXML': '0',
    'Description': 'The subject of an Email message',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '148',
    'Name': 'Headline',
    'Type': 'String',
    'AbbrName': 'Headline',
    'NotReqXML': '0',
    'Description': 'The headline of a News message',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '149',
    'Name': 'URLLink',
    'Type': 'String',
    'AbbrName': 'URL',
    'NotReqXML': '0',
    'Description': 'A URI (Uniform Resource Identifier) or URL (Uniform Resource Locator) link to additional information (i.e. http://www.XYZ.com/research.html)\nSee \'Appendix 6-B FIX Fields Based Upon Other Standards\'',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '150',
    'Name': 'ExecType',
    'Type': 'char',
    'AbbrName': 'ExecTyp',
    'NotReqXML': '0',
    'Description': 'Describes the specific ExecutionRpt (i.e. Pending Cancel) while OrdStatus (39) will always identify the current order status (i.e. Partially Filled) *** SOME VALUES HAVE BEEN REPLACED - See \'Replaced Features and Supported Approach\' ***',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '151',
    'Name': 'LeavesQty',
    'Type': 'Qty',
    'AbbrName': 'LeavesQty',
    'NotReqXML': '0',
    'Description': 'Quantity open for further execution. If the OrdStatus (39) is Canceled, DoneForTheDay, Expired, Calculated, or Rejected (in which case the order is no longer active) then LeavesQty could be 0, otherwise LeavesQty = OrderQty (38) - CumQty (14).\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '152',
    'Name': 'CashOrderQty',
    'Type': 'Qty',
    'AbbrName': 'Cash',
    'NotReqXML': '0',
    'Description': 'Specifies the approximate order quantity desired in total monetary units vs. as tradeable units (e.g. number of shares). The broker or fund manager (for CIV orders) would be responsible for converting and calculating a tradeable unit (e.g. share) quantity (OrderQty (38)) based upon this amount to be used for the actual order and subsequent messages.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '153',
    'Name': 'AllocAvgPx',
    'Type': 'Price',
    'AbbrName': 'AvgPx',
    'NotReqXML': '0',
    'Description': 'AvgPx (6) for a specific AllocAccount (79)\nFor Fixed Income this is always expressed as \'percent of par\' price type.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '154',
    'Name': 'AllocNetMoney',
    'Type': 'Amt',
    'AbbrName': 'NetMny',
    'NotReqXML': '0',
    'Description': 'NetMoney (8) for a specific AllocAccount (79)',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '155',
    'Name': 'SettlCurrFxRate',
    'Type': 'float',
    'AbbrName': 'SettlCurrFxRt',
    'NotReqXML': '0',
    'Description': 'Foreign exchange rate used to compute SettlCurrAmt (9) from Currency (5) to SettlCurrency (20)',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '156',
    'Name': 'SettlCurrFxRateCalc',
    'Type': 'char',
    'AbbrName': 'SettlCurrFxRtCalc',
    'NotReqXML': '0',
    'Description': 'Specifies whether or not SettlCurrFxRate (55) should be multiplied or divided.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '157',
    'Name': 'NumDaysInterest',
    'Type': 'int',
    'AbbrName': 'NumDaysInt',
    'NotReqXML': '0',
    'Description': 'Number of Days of Interest for convertible bonds and fixed income. Note value may be negative.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '158',
    'Name': 'AccruedInterestRate',
    'Type': 'Percentage',
    'AbbrName': 'AcrdIntRt',
    'NotReqXML': '0',
    'Description': 'The amount the buyer compensates the seller for the portion of the next coupon interest payment the seller has earned but will not receive from the issuer because the issuer will send the next coupon payment to the buyer. Accrued Interest Rate is the annualized Accrued Interest amount divided by the purchase price of the bond.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '159',
    'Name': 'AccruedInterestAmt',
    'Type': 'Amt',
    'AbbrName': 'AcrdIntAmt',
    'NotReqXML': '0',
    'Description': 'Amount of Accrued Interest for convertible bonds and fixed income',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '160',
    'Name': 'SettlInstMode',
    'Type': 'char',
    'AbbrName': 'SettlInstMode',
    'NotReqXML': '0',
    'Description': 'Indicates mode used for Settlement Instructions message. *** SOME VALUES HAVE BEEN REPLACED - See \'Replaced Features and Supported Approach\' ***',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '161',
    'Name': 'AllocText',
    'Type': 'String',
    'AbbrName': 'Txt',
    'NotReqXML': '0',
    'Description': 'Free format text related to a specific AllocAccount (79).',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '162',
    'Name': 'SettlInstID',
    'Type': 'String',
    'AbbrName': 'SettlInstID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Settlement Instruction.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '163',
    'Name': 'SettlInstTransType',
    'Type': 'char',
    'AbbrName': 'SettlInstTransTyp',
    'NotReqXML': '0',
    'Description': 'Settlement Instructions message transaction type',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '164',
    'Name': 'EmailThreadID',
    'Type': 'String',
    'AbbrName': 'EmailThreadID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for an email thread (new and chain of replies)',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '165',
    'Name': 'SettlInstSource',
    'Type': 'char',
    'AbbrName': 'InstSrc',
    'NotReqXML': '0',
    'Description': 'Indicates source of Settlement Instructions',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '167',
    'Name': 'SecurityType',
    'Type': 'String',
    'AbbrName': 'SecTyp',
    'NotReqXML': '0',
    'Description': 'Indicates type of security. Security type enumerations are grouped by Product(460) field value. NOTE: Additional values may be used by mutual agreement of the counterparties.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '168',
    'Name': 'EffectiveTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'EfctvTm',
    'NotReqXML': '0',
    'Description': 'Time the details within the message should take effect (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\')',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '169',
    'Name': 'StandInstDbType',
    'Type': 'int',
    'AbbrName': 'StandInstDbTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the Standing Instruction database used',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '170',
    'Name': 'StandInstDbName',
    'Type': 'String',
    'AbbrName': 'StandInstDbName',
    'NotReqXML': '0',
    'Description': 'Name of the Standing Instruction database represented with StandInstDbType (169) (i.e. the Global Custodian\'s name).',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '171',
    'Name': 'StandInstDbID',
    'Type': 'String',
    'AbbrName': 'StandInstDbID',
    'NotReqXML': '0',
    'Description': 'Unique identifier used on the Standing Instructions database for the Standing Instructions to be referenced.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '172',
    'Name': 'SettlDeliveryType',
    'Type': 'int',
    'AbbrName': 'DlvryTyp',
    'NotReqXML': '0',
    'Description': 'Identifies type of settlement',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '188',
    'Name': 'BidSpotRate',
    'Type': 'Price',
    'AbbrName': 'BidSpotRt',
    'NotReqXML': '0',
    'Description': 'Bid F/X spot rate.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '189',
    'Name': 'BidForwardPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'BidFwdPnts',
    'NotReqXML': '0',
    'Description': 'Bid F/X forward points added to spot rate. May be a negative value.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '190',
    'Name': 'OfferSpotRate',
    'Type': 'Price',
    'AbbrName': 'OfrSpotRt',
    'NotReqXML': '0',
    'Description': 'Offer F/X spot rate.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '191',
    'Name': 'OfferForwardPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'OfrFwdPnts',
    'NotReqXML': '0',
    'Description': 'Offer F/X forward points added to spot rate. May be a negative value.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '192',
    'Name': 'OrderQty2',
    'Type': 'Qty',
    'AbbrName': 'Qty2',
    'NotReqXML': '0',
    'Description': 'OrderQty (38) of the future part of a F/X swap order.',
    'Added': 'FIX.4.1',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '193',
    'Name': 'SettlDate2',
    'Type': 'LocalMktDate',
    'AbbrName': 'SettlDt2',
    'NotReqXML': '0',
    'Description': 'SettDate (64) of the future part of a F/X swap order.',
    'Added': 'FIX.4.1',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '194',
    'Name': 'LastSpotRate',
    'Type': 'Price',
    'AbbrName': 'LastSpotRt',
    'NotReqXML': '0',
    'Description': 'F/X spot rate.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '195',
    'Name': 'LastForwardPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'LastFwdPnts',
    'NotReqXML': '0',
    'Description': 'F/X forward points added to LastSpotRate (94). May be a negative value. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '196',
    'Name': 'AllocLinkID',
    'Type': 'String',
    'AbbrName': 'LinkID',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'LinkID',
    'NotReqXML': '0',
    'Description': 'Can be used to link two different Allocation messages (each with unique AllocID (70)) together, i.e. for F/X \'Netting\' or \'Swaps\'. Should be unique.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '197',
    'Name': 'AllocLinkType',
    'Type': 'int',
    'AbbrName': 'LinkTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type of Allocation linkage when AllocLinkID (96) is used.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '198',
    'Name': 'SecondaryOrderID',
    'Type': 'String',
    'AbbrName': 'OrdID2',
    'NotReqXML': '0',
    'Description': 'Assigned by the party which accepts the order. Can be used to provide the OrderID (37) used by an exchange or executing system.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '199',
    'Name': 'NoIOIQualifiers',
    'Type': 'NumInGroup',
    'AbbrName': 'NoIOIQuals',
    'NotReqXML': '1',
    'Description': 'Number of repeating groups of IOIQualifiers (04).',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '200',
    'Name': 'MaturityMonthYear',
    'Type': 'MonthYear',
    'AbbrName': 'MMY',
    'NotReqXML': '0',
    'Description': 'Can be used with standardized derivatives vs. the MaturityDate (54) field.  Month and Year of the maturity (used for standardized futures and options).\nFormat:\nYYYYMM (e.g. 199903)\nYYYYMMDD (e.g. 20030323)\nYYYYMMwN (e.g. 200303w) for week\nA specific date or can be appended to the MaturityMonthYear. For instance, if multiple standard products exist that mature in the same Year and Month, but actually mature at a different time, a value can be appended, such as \'w\' or \'w2\' to indicate week  as opposed to week 2 expiration. Likewise, the date (0-3) can be appended to indicate a specific expiration (maturity date).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '201',
    'Name': 'PutOrCall',
    'Type': 'int',
    'AbbrName': 'PutCall',
    'NotReqXML': '0',
    'Description': 'Indicates whether an option contract is a put or call',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '202',
    'Name': 'StrikePrice',
    'Type': 'Price',
    'AbbrName': 'StrkPx',
    'NotReqXML': '0',
    'Description': 'Strike Price for an Option.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '203',
    'Name': 'CoveredOrUncovered',
    'Type': 'int',
    'AbbrName': 'Covered',
    'NotReqXML': '0',
    'Description': 'Used for derivative products, such as options',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '206',
    'Name': 'OptAttribute',
    'Type': 'char',
    'AbbrName': 'OptAt',
    'NotReqXML': '0',
    'Description': 'Provided to support versioning of option contracts as a result of corporate actions or events. Use of this field is defined by counterparty agreement or market conventions.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '207',
    'Name': 'SecurityExchange',
    'Type': 'Exchange',
    'AbbrName': 'Exch',
    'NotReqXML': '0',
    'Description': 'Market used to help identify a security.\nValid values:\nSee \'Appendix 6-C\'',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '208',
    'Name': 'NotifyBrokerOfCredit',
    'Type': 'Boolean',
    'AbbrName': 'NotifyBrkrOfCredit',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not details should be communicated to BrokerOfCredit (i.e. step-in broker).',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '209',
    'Name': 'AllocHandlInst',
    'Type': 'int',
    'AbbrName': 'HandlInst',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'HndInst',
    'NotReqXML': '0',
    'Description': 'Indicates how the receiver (i.e. third party) of Allocation message should handle/process the account details.',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '210',
    'Name': 'MaxShow',
    'Type': 'Qty',
    'AbbrName': 'MaxShow',
    'NotReqXML': '0',
    'Description': 'Maximum quantity (e.g. number of shares) within an order to be shown to other customers (i.e. sent via an IOI).\n(Prior to FIX 4.2 this field was of type int)',
    'Added': 'FIX.4.1',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '211',
    'Name': 'PegOffsetValue',
    'Type': 'float',
    'AbbrName': 'OfstVal',
    'NotReqXML': '0',
    'Description': 'Amount (signed) added to the peg for a pegged order in the context of the PegOffsetType (836)\n(Prior to FIX 4.4 this field was of type PriceOffset)',
    'Added': 'FIX.4.1'
  },
  {
    'Tag': '212',
    'Name': 'XmlDataLen',
    'Type': 'Length',
    'AssociatedDataTag': '213',
    'AbbrName': 'XmlDataLen',
    'NotReqXML': '1',
    'Description': 'Length of the XmlData data block.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '213',
    'Name': 'XmlData',
    'Type': 'data',
    'AbbrName': 'XmlData',
    'NotReqXML': '1',
    'Description': 'Actual XML data stream (e.g. FIXML). See approriate XML reference (e.g. FIXML). Note: may contain embedded SOH characters.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '214',
    'Name': 'SettlInstRefID',
    'Type': 'String',
    'AbbrName': 'SettlInstRefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier for the SettlInstID (162) with Cancel and Replace SettlInstTransType (163) transaction types.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '215',
    'Name': 'NoRoutingIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoRtgIDs',
    'NotReqXML': '1',
    'Description': 'Number of repeating groups of RoutingID (217) and RoutingType (216) values.\nSee Volume 3: \'Pre-Trade Message Targeting/Routing\'',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '216',
    'Name': 'RoutingType',
    'Type': 'int',
    'AbbrName': 'RtgTyp',
    'NotReqXML': '0',
    'Description': 'Indicates the type of RoutingID (217) specified.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '217',
    'Name': 'RoutingID',
    'Type': 'String',
    'AbbrName': 'RtgID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify a specific routing destination.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '218',
    'Name': 'Spread',
    'Type': 'PriceOffset',
    'AbbrName': 'Spread',
    'NotReqXML': '0',
    'Description': 'For Fixed Income. Either Swap Spread or Spread to Benchmark depending upon the order type.\nSpread to Benchmark: Basis points relative to a benchmark. To be expressed as \'count of basis points\' (vs. an absolute value). E.g. High Grade Corporate Bonds may express price as basis points relative to benchmark (the BenchmarkCurveName (22) field). Note: Basis points can be negative.\nSwap Spread: Target spread for a swap.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '220',
    'Name': 'BenchmarkCurveCurrency',
    'Type': 'Currency',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'Identifies currency used for benchmark curve. See \'Appendix 6-A: Valid Currency Codes\' for information on obtaining valid values.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '221',
    'Name': 'BenchmarkCurveName',
    'Type': 'String',
    'AbbrName': 'Name',
    'NotReqXML': '0',
    'Description': 'Name of benchmark curve.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '222',
    'Name': 'BenchmarkCurvePoint',
    'Type': 'String',
    'AbbrName': 'Point',
    'NotReqXML': '0',
    'Description': 'Point on benchmark curve. Free form values: e.g. \'Y\', \'7Y\', \'INTERPOLATED\'.\nSample values:\nM = combination of a number between 1-12 and a \'M\' for month\nY = combination of number between 1-100 and a \'Y\' for year}\n10Y-OLD = see above, then add \'-OLD\' when appropriate\nINTERPOLATED = the point is mathematically derived\n2/2031 5 3/8 = the point is stated via a combination of maturity month / year and coupon\nSee Fixed Income-specific documentation at http://www.fixprotocol.org for additional values.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '223',
    'Name': 'CouponRate',
    'Type': 'Percentage',
    'AbbrName': 'CpnRt',
    'NotReqXML': '0',
    'Description': 'The rate of interest that, when multiplied by the principal, par value, or face value of a bond, provides the currency amount of the periodic interest payment. The coupon is always cited, along with maturity, in any quotation of a bond\'s price.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '224',
    'Name': 'CouponPaymentDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'CpnPmt',
    'NotReqXML': '0',
    'Description': 'Date interest is to be paid. Used in identifying Corporate Bond issues.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '225',
    'Name': 'IssueDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Issued',
    'NotReqXML': '0',
    'Description': 'The date on which a bond or stock offering is issued. It may or may not be the same as the effective date (\'Dated Date\') or the date on which interest begins to accrue (\'Interest Accrual Date\')\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '226',
    'Name': 'RepurchaseTerm',
    'Type': 'int',
    'AbbrName': 'RepoTrm',
    'NotReqXML': '0',
    'Description': 'Number of business days before repurchase of a repo. (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '227',
    'Name': 'RepurchaseRate',
    'Type': 'Percentage',
    'AbbrName': 'RepoRt',
    'NotReqXML': '0',
    'Description': 'Percent of par at which a Repo will be repaid. Represented as a percent, e.g. .9525 represents 95-/4 percent of par. (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '228',
    'Name': 'Factor',
    'Type': 'float',
    'AbbrName': 'Fctr',
    'NotReqXML': '0',
    'Description': 'For Fixed Income: Amorization Factor for deriving Current face from Original face for ABS or MBS securities, note the fraction may be greater than, equal to or less than . In TIPS securities this is the Inflation index.\nQty * Factor * Price = Gross Trade Amount\nFor Derivatives: Contract Value Factor by which price must be adjusted to determine the true nominal value of one futures/options contract.\n(Qty * Price) * Factor = Nominal Value\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '229',
    'Name': 'TradeOriginationDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'OrignDt',
    'NotReqXML': '0',
    'Description': 'Used with Fixed Income for Muncipal New Issue Market. Agreement in principal between counter-parties prior to actual trade date.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '230',
    'Name': 'ExDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'ExDt',
    'NotReqXML': '0',
    'Description': 'The date when a distribution of interest is deducted from a securities assets or set aside for payment to bondholders. On the ex-date, the securities price drops by the amount of the distribution (plus or minus any market activity).\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '231',
    'Name': 'ContractMultiplier',
    'Type': 'float',
    'AbbrName': 'Mult',
    'NotReqXML': '0',
    'Description': 'Specifies the ratio or multiply factor to convert from \'nominal\' units (e.g. contracts) to total units (e.g. shares) (e.g. 1.0, 100, 1000, etc). Applicable For Fixed Income, Convertible Bonds, Derivatives, etc.\nIn general quantities for all calsses should be expressed in the basic unit of the instrument, e.g. shares for equities, norminal or par amount for bonds, currency for foreign exchange. When quantity is expressed in contracts, e.g. financing transactions and bond trade reporting, ContractMutliplier should contain the number of units in one contract and can be omitted if the multiplier is the default amount for the instrument, i.e. 1,000 par of bonds, 1,000,000 par for financing transactions.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '232',
    'Name': 'NoStipulations',
    'Type': 'NumInGroup',
    'AbbrName': 'NoStips',
    'NotReqXML': '1',
    'Description': 'Number of stipulation entries\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '233',
    'Name': 'StipulationType',
    'Type': 'String',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'For Fixed Income.\nType of Stipulation.\nOther types may be used by mutual agreement of the counterparties.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '234',
    'Name': 'StipulationValue',
    'Type': 'String',
    'AbbrName': 'Val',
    'NotReqXML': '0',
    'Description': 'For Fixed Income. Value of stipulation.\nThe expression can be an absolute single value or a combination of values and logical operators:\n< value\n> value\n<= value\n>= value\nvalue\nvalue - value2\nvalue OR value2\nvalue AND value2\nYES\nNO\nBargain conditions recognized by the London Stock Exchange - to be used when StipulationType is \'BGNCON\'.\nCD = Special cum Dividend\nXD = Special ex Dividend\nCC = Special cum Coupon\nXC = Special ex Coupon\nCB = Special cum Bonus\nXB = Special ex Bonus\nCR = Special cum Rights\nXR = Special ex Rights\nCP = Special cum Capital Repayments\nXP = Special ex Capital Repayments\nCS = Cash Settlement\nSP = Special Price\nTR = Report for European Equity Market Securities in accordance with Chapter 8 of the Rules.\nGD = Guaranteed Delivery\nValues for StipulationType = \'PXSOURCE\':\nBB GENERIC\nBB FAIRVALUE\nBROKERTEC\nESPEED\nGOVPX\nHILLIARD FARBER\nICAP\nTRADEWEB\nTULLETT LIBERTY\nIf a particular side of the market is wanted append /BID /OFFER or /MID.\nplus appropriate combinations of the above and other expressions by mutual agreement of the counterparties.\nExamples: \'>=60\', \'.25\', \'ORANGE OR CONTRACOSTA\', etc.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '235',
    'Name': 'YieldType',
    'Type': 'String',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Type of yield. (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '236',
    'Name': 'Yield',
    'Type': 'Percentage',
    'AbbrName': 'Yld',
    'NotReqXML': '0',
    'Description': 'Yield percentage.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '237',
    'Name': 'TotalTakedown',
    'Type': 'Amt',
    'AbbrName': 'TotTakedown',
    'NotReqXML': '0',
    'Description': 'The price at which the securities are distributed to the different members of an underwriting group for the primary market in Municipals, total gross underwriter\'s spread.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '238',
    'Name': 'Concession',
    'Type': 'Amt',
    'AbbrName': 'Concession',
    'NotReqXML': '0',
    'Description': 'Provides the reduction in price for the secondary market in Muncipals.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '239',
    'Name': 'RepoCollateralSecurityType',
    'Type': 'String',
    'AssociatedDataTag': '167',
    'AbbrName': 'RepoCollSecTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the collateral used in the transaction.\nValid values: see SecurityType (167) field (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '240',
    'Name': 'RedemptionDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Redeem',
    'NotReqXML': '0',
    'Description': 'Return of investor\'s principal in a security. Bond redemption can occur before maturity date.(Note tag # was reserved in FIX 4.1, added in FIX 4.3) (prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '241',
    'Name': 'UnderlyingCouponPaymentDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'CpnPmt',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s CouponPaymentDate.\nSee CouponPaymentDate (224) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '242',
    'Name': 'UnderlyingIssueDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Issued',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s IssueDate.\nSee IssueDate (225) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '243',
    'Name': 'UnderlyingRepoCollateralSecurityType',
    'Type': 'String',
    'AssociatedDataTag': '167',
    'AbbrName': 'RepoCollSecTyp',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s RepoCollateralSecurityType. See RepoCollateralSecurityType (239) field for description.(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '244',
    'Name': 'UnderlyingRepurchaseTerm',
    'Type': 'int',
    'AbbrName': 'RepoTrm',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s RepurchaseTerm. See RepurchaseTerm (226) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '245',
    'Name': 'UnderlyingRepurchaseRate',
    'Type': 'Percentage',
    'AbbrName': 'RepoRt',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s RepurchaseRate. See RepurchaseRate (227) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '246',
    'Name': 'UnderlyingFactor',
    'Type': 'float',
    'AbbrName': 'Fctr',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s Factor.\nSee Factor (228) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '247',
    'Name': 'UnderlyingRedemptionDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Redeem',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s RedemptionDate. See RedemptionDate (240) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) (prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '248',
    'Name': 'LegCouponPaymentDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'CpnPmt',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s CouponPaymentDate.\nSee CouponPaymentDate (224) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '249',
    'Name': 'LegIssueDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Issued',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s IssueDate.\nSee IssueDate (225) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '250',
    'Name': 'LegRepoCollateralSecurityType',
    'Type': 'String',
    'AssociatedDataTag': '167',
    'AbbrName': 'RepoCollSecTyp',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s RepoCollateralSecurityType. See RepoCollateralSecurityType (239) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '251',
    'Name': 'LegRepurchaseTerm',
    'Type': 'int',
    'AbbrName': 'RepoTrm',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s RepurchaseTerm. See RepurchaseTerm (226) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '252',
    'Name': 'LegRepurchaseRate',
    'Type': 'Percentage',
    'AbbrName': 'RepoRt',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s RepurchaseRate. See RepurchaseRate (227) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '253',
    'Name': 'LegFactor',
    'Type': 'float',
    'AbbrName': 'Fctr',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s Factor.\nSee Factor (228) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '254',
    'Name': 'LegRedemptionDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Redeem',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s RedemptionDate. See RedemptionDate (240) field for description (Note tag # was reserved in FIX 4.1, added in FIX 4.3) (prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '255',
    'Name': 'CreditRating',
    'Type': 'String',
    'AbbrName': 'CrdRtg',
    'NotReqXML': '0',
    'Description': 'An evaluation of a company\'s ability to repay obligations or its likelihood of not defaulting. These evaluation are provided by Credit Rating Agencies, i.e. S&P, Moody\'s.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '256',
    'Name': 'UnderlyingCreditRating',
    'Type': 'String',
    'AbbrName': 'CrdRtg',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s CreditRating.\nSee CreditRating (255) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '257',
    'Name': 'LegCreditRating',
    'Type': 'String',
    'AbbrName': 'CrdRtg',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s CreditRating.\nSee CreditRating (255) field for description\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '258',
    'Name': 'TradedFlatSwitch',
    'Type': 'Boolean',
    'AbbrName': 'TrddFlatSwitch',
    'NotReqXML': '0',
    'Description': 'Driver and part of trade in the event that the Security Master file was wrong at the point of entry(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '259',
    'Name': 'BasisFeatureDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'BasisFeatureDt',
    'NotReqXML': '0',
    'Description': 'BasisFeatureDate allows requesting firms within fixed income the ability to request an alternative yield-to-worst, -maturity, -extended or other call. This flows through the confirm process.\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '260',
    'Name': 'BasisFeaturePrice',
    'Type': 'Price',
    'AbbrName': 'BasisFeaturePx',
    'NotReqXML': '0',
    'Description': 'Price for BasisFeatureDate.\nSee BasisFeatureDate (259)\n(Note tag # was reserved in FIX 4.1, added in FIX 4.3)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '262',
    'Name': 'MDReqID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Market Data Request',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '263',
    'Name': 'SubscriptionRequestType',
    'Type': 'char',
    'AbbrName': 'SubReqTyp',
    'NotReqXML': '0',
    'Description': 'Subscription Request Type',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '264',
    'Name': 'MarketDepth',
    'Type': 'int',
    'AbbrName': 'MktDepth',
    'NotReqXML': '0',
    'Description': 'Depth of market for Book Snapshot / Incremental updates\n0 - full book depth\n1 - top of book\n2 and above - book depth (number of levels)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '265',
    'Name': 'MDUpdateType',
    'Type': 'int',
    'AbbrName': 'UpdtTyp',
    'NotReqXML': '0',
    'Description': 'Specifies the type of Market Data update.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '266',
    'Name': 'AggregatedBook',
    'Type': 'Boolean',
    'AbbrName': 'AggBook',
    'NotReqXML': '0',
    'Description': 'Specifies whether or not book entries should be aggregated. (Not specified) = broker option',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '267',
    'Name': 'NoMDEntryTypes',
    'Type': 'NumInGroup',
    'AbbrName': 'NoMDEntryTyps',
    'NotReqXML': '1',
    'Description': 'Number of MDEntryType (269) fields requested.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '268',
    'Name': 'NoMDEntries',
    'Type': 'NumInGroup',
    'AbbrName': 'NoMDEntries',
    'NotReqXML': '1',
    'Description': 'Number of entries in Market Data message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '269',
    'Name': 'MDEntryType',
    'Type': 'char',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Type Market Data entry.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '270',
    'Name': 'MDEntryPx',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Price of the Market Data Entry.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '271',
    'Name': 'MDEntrySize',
    'Type': 'Qty',
    'AbbrName': 'Sz',
    'NotReqXML': '0',
    'Description': 'Quantity or volume represented by the Market Data Entry.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '272',
    'Name': 'MDEntryDate',
    'Type': 'UTCDateOnly',
    'AbbrName': 'Dt',
    'NotReqXML': '0',
    'Description': 'Date of Market Data Entry.\n(prior to FIX 4.4 field was of type UTCDate)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '273',
    'Name': 'MDEntryTime',
    'Type': 'UTCTimeOnly',
    'AbbrName': 'Tm',
    'NotReqXML': '0',
    'Description': 'Time of Market Data Entry.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '274',
    'Name': 'TickDirection',
    'Type': 'char',
    'AbbrName': 'TickDirctn',
    'NotReqXML': '0',
    'Description': 'Direction of the \'tick\'.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '275',
    'Name': 'MDMkt',
    'Type': 'Exchange',
    'AbbrName': 'Mkt',
    'NotReqXML': '0',
    'Description': 'Market posting quote / trade.\nValid values:\nSee \'Appendix 6-C\'',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '276',
    'Name': 'QuoteCondition',
    'Type': 'MultipleStringValue',
    'AbbrName': 'QCond',
    'NotReqXML': '0',
    'Description': 'Space-delimited list of conditions describing a quote.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '277',
    'Name': 'TradeCondition',
    'Type': 'MultipleStringValue',
    'AbbrName': 'TrdCond',
    'NotReqXML': '0',
    'Description': 'Space-delimited list of conditions describing a trade',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '278',
    'Name': 'MDEntryID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Unique Market Data Entry identifier.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '279',
    'Name': 'MDUpdateAction',
    'Type': 'char',
    'AbbrName': 'UpdtAct',
    'NotReqXML': '0',
    'Description': 'Type of Market Data update action.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '280',
    'Name': 'MDEntryRefID',
    'Type': 'String',
    'AbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Refers to a previous MDEntryID (278).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '281',
    'Name': 'MDReqRejReason',
    'Type': 'char',
    'AbbrName': 'ReqRejResn',
    'NotReqXML': '0',
    'Description': 'Reason for the rejection of a Market Data request.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '282',
    'Name': 'MDEntryOriginator',
    'Type': 'String',
    'AbbrName': 'Orig',
    'NotReqXML': '0',
    'Description': 'Originator of a Market Data Entry',
    'Added': 'FIX.4.2',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '283',
    'Name': 'LocationID',
    'Type': 'String',
    'AbbrName': 'LctnID',
    'NotReqXML': '0',
    'Description': 'Identification of a Market Maker\'s location',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '284',
    'Name': 'DeskID',
    'Type': 'String',
    'AbbrName': 'DeskID',
    'NotReqXML': '0',
    'Description': 'Identification of a Market Maker\'s desk',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '285',
    'Name': 'DeleteReason',
    'Type': 'char',
    'AbbrName': 'DelRsn',
    'NotReqXML': '0',
    'Description': 'Reason for deletion.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '286',
    'Name': 'OpenCloseSettlFlag',
    'Type': 'MultipleCharValue',
    'AbbrName': 'OpenClsSettlFlag',
    'NotReqXML': '0',
    'Description': 'Flag that identifies a market data entry. (Prior to FIX 4.3 this field was of type char)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '287',
    'Name': 'SellerDays',
    'Type': 'int',
    'AbbrName': 'SellerDays',
    'NotReqXML': '0',
    'Description': 'Specifies the number of days that may elapse before delivery of the security',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '288',
    'Name': 'MDEntryBuyer',
    'Type': 'String',
    'AbbrName': 'Buyer',
    'NotReqXML': '0',
    'Description': 'Buying party in a trade',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '289',
    'Name': 'MDEntrySeller',
    'Type': 'String',
    'AbbrName': 'Seller',
    'NotReqXML': '0',
    'Description': 'Selling party in a trade',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '290',
    'Name': 'MDEntryPositionNo',
    'Type': 'int',
    'AbbrName': 'PosNo',
    'NotReqXML': '0',
    'Description': 'Display position of a bid or offer, numbered from most competitive to least competitive, per market side, beginning with .',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '291',
    'Name': 'FinancialStatus',
    'Type': 'MultipleCharValue',
    'AbbrName': 'FinclStat',
    'NotReqXML': '0',
    'Description': 'Identifies a firm\'s or a security\'s financial status',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '292',
    'Name': 'CorporateAction',
    'Type': 'MultipleCharValue',
    'AbbrName': 'CorpActn',
    'NotReqXML': '0',
    'Description': 'Identifies the type of Corporate Action.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '293',
    'Name': 'DefBidSize',
    'Type': 'Qty',
    'AbbrName': 'DefBidSz',
    'NotReqXML': '0',
    'Description': 'Default Bid Size.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '294',
    'Name': 'DefOfferSize',
    'Type': 'Qty',
    'AbbrName': 'DefOfrSz',
    'NotReqXML': '0',
    'Description': 'Default Offer Size.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '295',
    'Name': 'NoQuoteEntries',
    'Type': 'NumInGroup',
    'AbbrName': 'NoQuotEntries',
    'NotReqXML': '1',
    'Description': 'The number of quote entries for a QuoteSet.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '296',
    'Name': 'NoQuoteSets',
    'Type': 'NumInGroup',
    'AbbrName': 'NoQuotSets',
    'NotReqXML': '1',
    'Description': 'The number of sets of quotes in the message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '297',
    'Name': 'QuoteStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Identifies the status of the quote acknowledgement.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '298',
    'Name': 'QuoteCancelType',
    'Type': 'int',
    'AbbrName': 'CxlTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies the type of quote cancel.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '85',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '299',
    'Name': 'QuoteEntryID',
    'Type': 'String',
    'AbbrName': 'EntryID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a quote. The QuoteEntryID stays with the quote as a static identifier even if the quote is updated.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '300',
    'Name': 'QuoteRejectReason',
    'Type': 'int',
    'AbbrName': 'RejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason Quote was rejected:',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '301',
    'Name': 'QuoteResponseLevel',
    'Type': 'int',
    'AbbrName': 'RspLvl',
    'NotReqXML': '0',
    'Description': 'Level of Response requested from receiver of quote messages. A default value should be bilaterally agreed.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '302',
    'Name': 'QuoteSetID',
    'Type': 'String',
    'AbbrName': 'SetID',
    'NotReqXML': '0',
    'Description': 'Unique id for the Quote Set.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '303',
    'Name': 'QuoteRequestType',
    'Type': 'int',
    'AbbrName': 'ReqTyp',
    'NotReqXML': '0',
    'Description': 'Indicates the type of Quote Request being generated',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '304',
    'Name': 'TotNoQuoteEntries',
    'Type': 'int',
    'AbbrName': 'TotNoQuotEntries',
    'NotReqXML': '0',
    'Description': 'Total number of quotes for the quote set.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '305',
    'Name': 'UnderlyingSecurityIDSource',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Underlying security\'s SecurityIDSource.\nValid values: see SecurityIDSource (22) field',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '306',
    'Name': 'UnderlyingIssuer',
    'Type': 'String',
    'AbbrName': 'Issr',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s Issuer.\nSee Issuer (06) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '307',
    'Name': 'UnderlyingSecurityDesc',
    'Type': 'String',
    'AbbrName': 'Desc',
    'NotReqXML': '0',
    'Description': 'Description of the Underlying security.\nSee SecurityDesc(107).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '308',
    'Name': 'UnderlyingSecurityExchange',
    'Type': 'Exchange',
    'AbbrName': 'Exch',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s SecurityExchange. Can be used to identify the underlying security.\nValid values: see SecurityExchange (207)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '309',
    'Name': 'UnderlyingSecurityID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s SecurityID.\nSee SecurityID (48) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '310',
    'Name': 'UnderlyingSecurityType',
    'Type': 'String',
    'AbbrName': 'SecTyp',
    'NotReqXML': '0',
    'EnumDatatype': '167',
    'Description': 'Underlying security\'s SecurityType.\nValid values: see SecurityType (167) field\n(see below for details concerning this fields use in conjunction with SecurityType=REPO)\nThe following applies when used in conjunction with SecurityType=REPO\nRepresents the general or specific type of security that underlies a financing agreement\nValid values for SecurityType=REPO:\nIf bonds of a particular issuer or country are wanted in an Order or are in the basket of an Execution and the SecurityType is not granular enough, include the UnderlyingIssuer (306), UnderlyingCountryOfIssue (592), UnderlyingProgram, UnderlyingRegType and/or < UnderlyingStipulations > block e.g.:',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '311',
    'Name': 'UnderlyingSymbol',
    'Type': 'String',
    'AbbrName': 'Sym',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s Symbol.\nSee Symbol (55) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '312',
    'Name': 'UnderlyingSymbolSfx',
    'Type': 'String',
    'AbbrName': 'Sfx',
    'NotReqXML': '0',
    'EnumDatatype': '65',
    'Description': 'Underlying security\'s SymbolSfx.\nSee SymbolSfx (65) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '313',
    'Name': 'UnderlyingMaturityMonthYear',
    'Type': 'MonthYear',
    'AbbrName': 'MMY',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s MaturityMonthYear. Can be used with standardized derivatives vs. the UnderlyingMaturityDate (542) field.\nSee MaturityMonthYear (200) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '315',
    'Name': 'UnderlyingPutOrCall',
    'Type': 'int',
    'AbbrName': 'PutCall',
    'NotReqXML': '0',
    'Description': 'Put or call indicator of the underlying security.\nSee PutOrCall(201).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '76',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '316',
    'Name': 'UnderlyingStrikePrice',
    'Type': 'Price',
    'AbbrName': 'StrkPx',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s StrikePrice.\nSee StrikePrice (202) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '317',
    'Name': 'UnderlyingOptAttribute',
    'Type': 'char',
    'AbbrName': 'OptA',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s OptAttribute.\nSee OptAttribute (206) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '318',
    'Name': 'UnderlyingCurrency',
    'Type': 'Currency',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s Currency.\nSee Currency (5) field for description and valid values',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '320',
    'Name': 'SecurityReqID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Unique ID of a Security Definition Request.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '321',
    'Name': 'SecurityRequestType',
    'Type': 'int',
    'AbbrName': 'ReqTyp',
    'NotReqXML': '0',
    'Description': 'Type of Security Definition Request.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '322',
    'Name': 'SecurityResponseID',
    'Type': 'String',
    'AbbrName': 'RspID',
    'NotReqXML': '0',
    'Description': 'Unique ID of a Security Definition message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '323',
    'Name': 'SecurityResponseType',
    'Type': 'int',
    'AbbrName': 'RspTyp',
    'NotReqXML': '0',
    'Description': 'Type of Security Definition message response.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '324',
    'Name': 'SecurityStatusReqID',
    'Type': 'String',
    'AbbrName': 'StatReqID',
    'NotReqXML': '0',
    'Description': 'Unique ID of a Security Status Request message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '325',
    'Name': 'UnsolicitedIndicator',
    'Type': 'Boolean',
    'AbbrName': 'Unsol',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not message is being sent as a result of a subscription request or not.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '326',
    'Name': 'SecurityTradingStatus',
    'Type': 'int',
    'AbbrName': 'TrdgStat',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies the trading status applicable to the transaction.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '327',
    'Name': 'HaltReason',
    'Type': 'int',
    'AbbrName': 'HaltRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Denotes the reason for the Opening Delay or Trading Halt.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '86',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '328',
    'Name': 'InViewOfCommon',
    'Type': 'Boolean',
    'AbbrName': 'InViewOfCmn',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not the halt was due to Common Stock trading being halted.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '329',
    'Name': 'DueToRelated',
    'Type': 'Boolean',
    'AbbrName': 'DueToReltd',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not the halt was due to the Related Security being halted.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '330',
    'Name': 'BuyVolume',
    'Type': 'Qty',
    'AbbrName': 'BuyVol',
    'NotReqXML': '0',
    'Description': 'Quantity bought.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '331',
    'Name': 'SellVolume',
    'Type': 'Qty',
    'AbbrName': 'SellVol',
    'NotReqXML': '0',
    'Description': 'Quantity sold.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '332',
    'Name': 'HighPx',
    'Type': 'Price',
    'AbbrName': 'HighPx',
    'NotReqXML': '0',
    'Description': 'Represents an indication of the high end of the price range for a security prior to the open or reopen',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '333',
    'Name': 'LowPx',
    'Type': 'Price',
    'AbbrName': 'LowPx',
    'NotReqXML': '0',
    'Description': 'Represents an indication of the low end of the price range for a security prior to the open or reopen',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '334',
    'Name': 'Adjustment',
    'Type': 'int',
    'AbbrName': 'Adjmt',
    'NotReqXML': '0',
    'Description': 'Identifies the type of adjustment.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '335',
    'Name': 'TradSesReqID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Unique ID of a Trading Session Status message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '336',
    'Name': 'TradingSessionID',
    'Type': 'String',
    'AbbrName': 'SesID',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifier for Trading Session\nA trading session spans an extended period of time that can also be expressed informally in terms of the trading day. Usage is determined by market or counterparties.\nTo specify good for session where session spans more than one calendar day, use TimeInForce = Day in conjunction with TradingSessionID.\nBilaterally agreed values of data type \'String\' that start with a character can be used for backward compatibility.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '337',
    'Name': 'ContraTrader',
    'Type': 'String',
    'AbbrName': 'CntraTrdr',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'Trdr',
    'NotReqXML': '0',
    'Description': 'Identifies the trader (e.g. \'badge number\') of the ContraBroker.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '338',
    'Name': 'TradSesMethod',
    'Type': 'int',
    'AbbrName': 'Method',
    'NotReqXML': '0',
    'Description': 'Method of trading',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '339',
    'Name': 'TradSesMode',
    'Type': 'int',
    'AbbrName': 'Mode',
    'NotReqXML': '0',
    'Description': 'Trading Session Mode',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '340',
    'Name': 'TradSesStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'State of the trading session.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '341',
    'Name': 'TradSesStartTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'StartTm',
    'NotReqXML': '0',
    'Description': 'Starting time of the trading session',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '342',
    'Name': 'TradSesOpenTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'OpenTm',
    'NotReqXML': '0',
    'Description': 'Time of the opening of the trading session',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '343',
    'Name': 'TradSesPreCloseTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'PreClsTm',
    'NotReqXML': '0',
    'Description': 'Time of the pre-closed of the trading session',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '344',
    'Name': 'TradSesCloseTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'ClsTm',
    'NotReqXML': '0',
    'Description': 'Closing time of the trading session',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '345',
    'Name': 'TradSesEndTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'EndTm',
    'NotReqXML': '0',
    'Description': 'End time of the trading session',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '346',
    'Name': 'NumberOfOrders',
    'Type': 'int',
    'AbbrName': 'NumOfOrds',
    'NotReqXML': '0',
    'Description': 'Number of orders in the market.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '347',
    'Name': 'MessageEncoding',
    'Type': 'String',
    'AbbrName': 'MsgEncd',
    'NotReqXML': '0',
    'Description': 'Type of message encoding (non-ASCII (non-English) characters) used in a message\'s \'Encoded\' fields.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '348',
    'Name': 'EncodedIssuerLen',
    'Type': 'Length',
    'AssociatedDataTag': '349',
    'AbbrName': 'EncIssrLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedIssuer (349) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '349',
    'Name': 'EncodedIssuer',
    'Type': 'data',
    'AbbrName': 'EncIssr',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the Issuer field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Issuer field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '350',
    'Name': 'EncodedSecurityDescLen',
    'Type': 'Length',
    'AssociatedDataTag': '351',
    'AbbrName': 'EncSecDescLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedSecurityDesc (351) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '351',
    'Name': 'EncodedSecurityDesc',
    'Type': 'data',
    'AbbrName': 'EncSecDesc',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the SecurityDesc (107) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the SecurityDesc field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '352',
    'Name': 'EncodedListExecInstLen',
    'Type': 'Length',
    'AssociatedDataTag': '353',
    'AbbrName': 'EncListExecInstLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedListExecInst (353) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '353',
    'Name': 'EncodedListExecInst',
    'Type': 'data',
    'AbbrName': 'EncListExecInst',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the ListExecInst (69) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ListExecInst field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '354',
    'Name': 'EncodedTextLen',
    'Type': 'Length',
    'AssociatedDataTag': '355',
    'AbbrName': 'EncTxtLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedText (355) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '355',
    'Name': 'EncodedText',
    'Type': 'data',
    'AbbrName': 'EncTxt',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the Text (58) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Text field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '356',
    'Name': 'EncodedSubjectLen',
    'Type': 'Length',
    'AssociatedDataTag': '357',
    'AbbrName': 'EncSubjectLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedSubject (357) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '357',
    'Name': 'EncodedSubject',
    'Type': 'data',
    'AbbrName': 'EncSubject',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the Subject (147) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Subject field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '358',
    'Name': 'EncodedHeadlineLen',
    'Type': 'Length',
    'AssociatedDataTag': '359',
    'AbbrName': 'EncHeadlineLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedHeadline (359) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '359',
    'Name': 'EncodedHeadline',
    'Type': 'data',
    'AbbrName': 'EncHeadline',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the Headline (148) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the Headline field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '360',
    'Name': 'EncodedAllocTextLen',
    'Type': 'Length',
    'AssociatedDataTag': '361',
    'AbbrName': 'EncAllocTextLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedAllocText (361) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '361',
    'Name': 'EncodedAllocText',
    'Type': 'data',
    'AbbrName': 'EncAllocText',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the AllocText (161) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the AllocText field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '362',
    'Name': 'EncodedUnderlyingIssuerLen',
    'Type': 'Length',
    'AssociatedDataTag': '363',
    'AbbrName': 'EncUndIssrLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedUnderlyingIssuer (363) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '363',
    'Name': 'EncodedUnderlyingIssuer',
    'Type': 'data',
    'AbbrName': 'EncUndIssr',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the UnderlyingIssuer (306) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingIssuer field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '364',
    'Name': 'EncodedUnderlyingSecurityDescLen',
    'Type': 'Length',
    'AssociatedDataTag': '365',
    'AbbrName': 'EncUndSecDescLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedUnderlyingSecurityDesc (365) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '365',
    'Name': 'EncodedUnderlyingSecurityDesc',
    'Type': 'data',
    'AbbrName': 'EncUndSecDesc',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the UnderlyingSecurityDesc (307) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the UnderlyingSecurityeDesc field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '366',
    'Name': 'AllocPrice',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Executed price for an AllocAccount (79) entry used when using \'executed price\' vs. \'average price\' allocations (e.g. Japan).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '367',
    'Name': 'QuoteSetValidUntilTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'ValidTil',
    'NotReqXML': '0',
    'Description': 'Indicates expiration time of this particular QuoteSet (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\')',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '368',
    'Name': 'QuoteEntryRejectReason',
    'Type': 'int',
    'AbbrName': 'EntryRejRsn',
    'NotReqXML': '0',
    'EnumDatatype': '300',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason Quote Entry was rejected:',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '369',
    'Name': 'LastMsgSeqNumProcessed',
    'Type': 'SeqNum',
    'AbbrName': 'LastMsgSeqNumProced',
    'NotReqXML': '1',
    'Description': 'The last MsgSeqNum (34) value received by the FIX engine and processed by downstream application, such as trading engine or order routing system. Can be specified on every message sent. Useful for detecting a backlog with a counterparty.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '371',
    'Name': 'RefTagID',
    'Type': 'int',
    'AbbrName': 'RefTagID',
    'NotReqXML': '0',
    'Description': 'The tag number of the FIX field being referenced.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '372',
    'Name': 'RefMsgType',
    'Type': 'String',
    'AbbrName': 'RefMsgTyp',
    'NotReqXML': '0',
    'EnumDatatype': '35',
    'Description': 'The MsgType (35) of the FIX message being referenced.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '373',
    'Name': 'SessionRejectReason',
    'Type': 'int',
    'AbbrName': 'SessRejRsn',
    'NotReqXML': '1',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Code to identify reason for a session-level Reject message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '374',
    'Name': 'BidRequestTransType',
    'Type': 'char',
    'AbbrName': 'BidReqTransTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the Bid Request message type.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '375',
    'Name': 'ContraBroker',
    'Type': 'String',
    'AbbrName': 'CntraBrkr',
    'NotReqXML': '0',
    'Description': 'Identifies contra broker. Standard NASD market-maker mnemonic is preferred.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '376',
    'Name': 'ComplianceID',
    'Type': 'String',
    'AbbrName': 'ComplianceID',
    'NotReqXML': '0',
    'Description': 'ID used to represent this transaction for compliance purposes (e.g. OATS reporting).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '377',
    'Name': 'SolicitedFlag',
    'Type': 'Boolean',
    'AbbrName': 'SolFlag',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not the order was solicited.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '378',
    'Name': 'ExecRestatementReason',
    'Type': 'int',
    'AbbrName': 'ExecRstmtRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Code to identify reason for an ExecutionRpt message sent with ExecType=Restated or used when communicating an unsolicited cancel.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '379',
    'Name': 'BusinessRejectRefID',
    'Type': 'String',
    'AbbrName': 'BizRejRefID',
    'NotReqXML': '0',
    'Description': 'The value of the business-level \'ID\' field on the message being referenced.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '380',
    'Name': 'BusinessRejectReason',
    'Type': 'int',
    'AbbrName': 'BizRejRsn',
    'NotReqXML': '0',
    'Description': 'Code to identify reason for a Business Message Reject message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '381',
    'Name': 'GrossTradeAmt',
    'Type': 'Amt',
    'AbbrName': 'GrossTrdAmt',
    'NotReqXML': '0',
    'Description': 'Total amount traded (i.e. quantity * price) expressed in units of currency. For FX Futures this is used to express the notional value of a fill when quantity fields are expressed in terms of contract size (i.e. quantity * price * contract size).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '382',
    'Name': 'NoContraBrokers',
    'Type': 'NumInGroup',
    'AbbrName': 'NoCntraBrkrs',
    'NotReqXML': '1',
    'Description': 'The number of ContraBroker (375) entries.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '383',
    'Name': 'MaxMessageSize',
    'Type': 'Length',
    'AbbrName': 'MaxMsgSz',
    'NotReqXML': '1',
    'Description': 'Maximum number of bytes supported for a single message.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '384',
    'Name': 'NoMsgTypes',
    'Type': 'NumInGroup',
    'AbbrName': 'NoMsgTyps',
    'NotReqXML': '1',
    'Description': 'Number of MsgTypes (35) in repeating group.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '385',
    'Name': 'MsgDirection',
    'Type': 'char',
    'AbbrName': 'MsgDirctn',
    'NotReqXML': '1',
    'Description': 'Specifies the direction of the messsage.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '386',
    'Name': 'NoTradingSessions',
    'Type': 'NumInGroup',
    'AbbrName': 'NoTrdgSesss',
    'NotReqXML': '1',
    'Description': 'Number of TradingSessionIDs (336) in repeating group.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '387',
    'Name': 'TotalVolumeTraded',
    'Type': 'Qty',
    'AbbrName': 'TotVolTrdd',
    'NotReqXML': '0',
    'Description': 'Total volume (quantity) traded.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '388',
    'Name': 'DiscretionInst',
    'Type': 'char',
    'AbbrName': 'DsctnInst',
    'NotReqXML': '0',
    'Description': 'Code to identify the price a DiscretionOffsetValue (389) is related to and should be mathematically added to.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '389',
    'Name': 'DiscretionOffsetValue',
    'Type': 'float',
    'AbbrName': 'OfstValu',
    'NotReqXML': '0',
    'Description': 'Amount (signed) added to the \'related to\' price specified via DiscretionInst (388), in the context of DiscretionOffsetType (842)\n(Prior to FIX 4.4 this field was of type PriceOffset)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '390',
    'Name': 'BidID',
    'Type': 'String',
    'AbbrName': 'BidID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Bid Response as assigned by sell-side (broker, exchange, ECN). Uniqueness must be guaranteed within a single trading day.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '391',
    'Name': 'ClientBidID',
    'Type': 'String',
    'AbbrName': 'ClBidID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a Bid Request as assigned by institution. Uniqueness must be guaranteed within a single trading day.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '392',
    'Name': 'ListName',
    'Type': 'String',
    'AbbrName': 'ListName',
    'NotReqXML': '0',
    'Description': 'Descriptive name for list order.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '393',
    'Name': 'TotNoRelatedSym',
    'Type': 'int',
    'AbbrName': 'TotNoReltdSym',
    'NotReqXML': '0',
    'Description': 'Total number of securities.\n(Prior to FIX 4.4 this field was named TotalNumSecurities)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '394',
    'Name': 'BidType',
    'Type': 'int',
    'AbbrName': 'BidTyp',
    'NotReqXML': '0',
    'Description': 'Code to identify the type of Bid Request.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '395',
    'Name': 'NumTickets',
    'Type': 'int',
    'AbbrName': 'NumTkts',
    'NotReqXML': '0',
    'Description': 'Total number of tickets.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '396',
    'Name': 'SideValue1',
    'Type': 'Amt',
    'AbbrName': 'SideValu1',
    'NotReqXML': '0',
    'Description': 'Amounts in currency',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '397',
    'Name': 'SideValue2',
    'Type': 'Amt',
    'AbbrName': 'SideValu2',
    'NotReqXML': '0',
    'Description': 'Amounts in currency',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '398',
    'Name': 'NoBidDescriptors',
    'Type': 'NumInGroup',
    'AbbrName': 'NoBidDescptrs',
    'NotReqXML': '1',
    'Description': 'Number of BidDescriptor (400) entries.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '399',
    'Name': 'BidDescriptorType',
    'Type': 'int',
    'AbbrName': 'BidDescptrTyp',
    'NotReqXML': '0',
    'Description': 'Code to identify the type of BidDescriptor (400).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '400',
    'Name': 'BidDescriptor',
    'Type': 'String',
    'AbbrName': 'BidDescptr',
    'NotReqXML': '0',
    'Description': 'BidDescriptor value. Usage depends upon BidDescriptorTyp (399).\nIf BidDescriptorType = 1\nIndustrials etc - Free text\nIf BidDescriptorType = 2\n\'FR\' etc - ISO Country Codes\nIf BidDescriptorType = 3\nFT00, FT250, STOX - Free text',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '401',
    'Name': 'SideValueInd',
    'Type': 'int',
    'AbbrName': 'SideValuInd',
    'NotReqXML': '0',
    'Description': 'Code to identify which \'SideValue\' the value refers to. SideValue1 and SideValue2 are used as opposed to Buy or Sell so that the basket can be quoted either way as Buy or Sell.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '402',
    'Name': 'LiquidityPctLow',
    'Type': 'Percentage',
    'AbbrName': 'LqdtyPctLow',
    'NotReqXML': '0',
    'Description': 'Liquidity indicator or lower limit if TotalNumSecurities (393) > 1. Represented as a percentage.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '403',
    'Name': 'LiquidityPctHigh',
    'Type': 'Percentage',
    'AbbrName': 'LqdtyPctHigh',
    'NotReqXML': '0',
    'Description': 'Upper liquidity indicator if TotalNumSecurities (393) > 1. Represented as a percentage.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '404',
    'Name': 'LiquidityValue',
    'Type': 'Amt',
    'AbbrName': 'LqdtyValu',
    'NotReqXML': '0',
    'Description': 'Value between LiquidityPctLow (402) and LiquidityPctHigh (403) in Currency',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '405',
    'Name': 'EFPTrackingError',
    'Type': 'Percentage',
    'AbbrName': 'EFPTrkngErr',
    'NotReqXML': '0',
    'Description': 'Eg Used in EFP trades 2% (EFP - Exchange for Physical ). Represented as a percentage.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '406',
    'Name': 'FairValue',
    'Type': 'Amt',
    'AbbrName': 'FairValu',
    'NotReqXML': '0',
    'Description': 'Used in EFP trades',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '407',
    'Name': 'OutsideIndexPct',
    'Type': 'Percentage',
    'AbbrName': 'OutsideNdxPct',
    'NotReqXML': '0',
    'Description': 'Used in EFP trades. Represented as a percentage.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '408',
    'Name': 'ValueOfFutures',
    'Type': 'Amt',
    'AbbrName': 'ValuOfFuts',
    'NotReqXML': '0',
    'Description': 'Used in EFP trades',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '409',
    'Name': 'LiquidityIndType',
    'Type': 'int',
    'AbbrName': 'LqdtyIndTyp',
    'NotReqXML': '0',
    'Description': 'Code to identify the type of liquidity indicator.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '410',
    'Name': 'WtAverageLiquidity',
    'Type': 'Percentage',
    'AbbrName': 'WtAvgLqdty',
    'NotReqXML': '0',
    'Description': 'Overall weighted average liquidity expressed as a % of average daily volume. Represented as a percentage.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '411',
    'Name': 'ExchangeForPhysical',
    'Type': 'Boolean',
    'AbbrName': 'EFP',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not to exchange for phsyical.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '412',
    'Name': 'OutMainCntryUIndex',
    'Type': 'Amt',
    'AbbrName': 'OutMainCntryUNdx',
    'NotReqXML': '0',
    'Description': 'Value of stocks in Currency',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '413',
    'Name': 'CrossPercent',
    'Type': 'Percentage',
    'AbbrName': 'CrssPct',
    'BaseCategory': 'CrossOrders',
    'BaseCategoryAbbrName': 'Pct',
    'NotReqXML': '0',
    'Description': 'Percentage of program that crosses in Currency. Represented as a percentage.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '414',
    'Name': 'ProgRptReqs',
    'Type': 'int',
    'AbbrName': 'ProgRptReqs',
    'NotReqXML': '0',
    'Description': 'Code to identify the desired frequency of progress reports.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '415',
    'Name': 'ProgPeriodInterval',
    'Type': 'int',
    'AbbrName': 'ProgPeriodIntvl',
    'NotReqXML': '0',
    'Description': 'Time in minutes between each ListStatus report sent by SellSide. Zero means don\'t send status.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '416',
    'Name': 'IncTaxInd',
    'Type': 'int',
    'AbbrName': 'IncTaxInd',
    'NotReqXML': '0',
    'Description': 'Code to represent whether value is net (inclusive of tax) or gross.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '417',
    'Name': 'NumBidders',
    'Type': 'int',
    'AbbrName': 'NumBidders',
    'NotReqXML': '0',
    'Description': 'Indicates the total number of bidders on the list',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '418',
    'Name': 'BidTradeType',
    'Type': 'char',
    'AbbrName': 'BidTrdTyp',
    'NotReqXML': '0',
    'Description': 'Code to represent the type of trade.\n(Prior to FIX 4.4 this field was named \'TradeType\')',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '419',
    'Name': 'BasisPxType',
    'Type': 'char',
    'AbbrName': 'BasisPxTyp',
    'NotReqXML': '0',
    'Description': 'Code to represent the basis price type.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '420',
    'Name': 'NoBidComponents',
    'Type': 'NumInGroup',
    'AbbrName': 'NoBidComponents',
    'NotReqXML': '1',
    'Description': 'Indicates the number of list entries.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '421',
    'Name': 'Country',
    'Type': 'Country',
    'AbbrName': 'Ctry',
    'NotReqXML': '0',
    'Description': 'ISO Country Code in field',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '422',
    'Name': 'TotNoStrikes',
    'Type': 'int',
    'AbbrName': 'TotNoStrks',
    'NotReqXML': '0',
    'Description': 'Total number of strike price entries across all messages. Should be the sum of all NoStrikes (428) in each message that has repeating strike price entries related to the same ListID (66). Used to support fragmentation.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '423',
    'Name': 'PriceType',
    'Type': 'int',
    'AbbrName': 'PxTyp',
    'NotReqXML': '0',
    'Description': 'Code to represent the price type.\n(For Financing transactions PriceType implies the \'repo type\' - Fixed or Floating - 9 (Yield) or 6 (Spread) respectively - and Price (44) gives the corresponding \'repo rate\'.\nSee Volume : \'Glossary\' for further value definitions)',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '424',
    'Name': 'DayOrderQty',
    'Type': 'Qty',
    'AbbrName': 'DayOrdQty',
    'NotReqXML': '0',
    'Description': 'For GT orders, the OrderQty (38) less all quantity (adjusted for stock splits) that traded on previous days. DayOrderQty (424) = OrderQty - (CumQty (14) - DayCumQty (425))',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '425',
    'Name': 'DayCumQty',
    'Type': 'Qty',
    'AbbrName': 'DayCumQty',
    'NotReqXML': '0',
    'Description': 'Quantity on a GT order that has traded today.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '426',
    'Name': 'DayAvgPx',
    'Type': 'Price',
    'AbbrName': 'DayAvgPx',
    'NotReqXML': '0',
    'Description': 'The average price for quantity on a GT order that has traded today.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '427',
    'Name': 'GTBookingInst',
    'Type': 'int',
    'AbbrName': 'GTBkngInst',
    'NotReqXML': '0',
    'Description': 'Code to identify whether to book out executions on a part-filled GT order on the day of execution or to accumulate.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '428',
    'Name': 'NoStrikes',
    'Type': 'NumInGroup',
    'AbbrName': 'NoStrks',
    'NotReqXML': '1',
    'Description': 'Number of list strike price entries.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '429',
    'Name': 'ListStatusType',
    'Type': 'int',
    'AbbrName': 'ListStatTyp',
    'NotReqXML': '0',
    'Description': 'Code to represent the status type.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '430',
    'Name': 'NetGrossInd',
    'Type': 'int',
    'AbbrName': 'NetGrossInd',
    'NotReqXML': '0',
    'Description': 'Code to represent whether value is net (inclusive of tax) or gross.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '431',
    'Name': 'ListOrderStatus',
    'Type': 'int',
    'AbbrName': 'ListOrdStat',
    'NotReqXML': '0',
    'Description': 'Code to represent the status of a list order.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '432',
    'Name': 'ExpireDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'ExpireDt',
    'NotReqXML': '0',
    'Description': 'Date of order expiration (last day the order can trade), always expressed in terms of the local market date. The time at which the order expires is determined by the local market\'s business practices',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '433',
    'Name': 'ListExecInstType',
    'Type': 'char',
    'AbbrName': 'ListExecInstTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type of ListExecInst (69).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '434',
    'Name': 'CxlRejResponseTo',
    'Type': 'char',
    'AbbrName': 'CxlRejRspTo',
    'NotReqXML': '0',
    'Description': 'Identifies the type of request that a Cancel Reject is in response to.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '435',
    'Name': 'UnderlyingCouponRate',
    'Type': 'Percentage',
    'AbbrName': 'CpnRt',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s CouponRate.\nSee CouponRate (223) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '436',
    'Name': 'UnderlyingContractMultiplier',
    'Type': 'float',
    'AbbrName': 'Mult',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s ContractMultiplier.\nSee ContractMultiplier (231) field for description',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '437',
    'Name': 'ContraTradeQty',
    'Type': 'Qty',
    'AbbrName': 'CntraTrdQty',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'TrdQty',
    'NotReqXML': '0',
    'Description': 'Quantity traded with the ContraBroker (375).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '438',
    'Name': 'ContraTradeTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'CntraTrdTm',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'TrdTm',
    'NotReqXML': '0',
    'Description': 'Identifes the time of the trade with the ContraBroker (375). (always expressed in UTC (Universal Time Coordinated, also known as \'GMT\')',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '441',
    'Name': 'LiquidityNumSecurities',
    'Type': 'int',
    'AbbrName': 'LqdtyNumSecurities',
    'NotReqXML': '0',
    'Description': 'Number of Securites between LiquidityPctLow (402) and LiquidityPctHigh (403) in Currency.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '442',
    'Name': 'MultiLegReportingType',
    'Type': 'char',
    'AbbrName': 'MLegRptTyp',
    'NotReqXML': '0',
    'Description': 'Used to indicate what an Execution Report represents (e.g. used with multi-leg securities, such as option strategies, spreads, etc.).',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '443',
    'Name': 'StrikeTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'StrkTm',
    'NotReqXML': '0',
    'Description': 'The time at which current market prices are used to determine the value of a basket.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '444',
    'Name': 'ListStatusText',
    'Type': 'String',
    'AbbrName': 'ListStatText',
    'NotReqXML': '0',
    'Description': 'Free format text string related to List Status.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '445',
    'Name': 'EncodedListStatusTextLen',
    'Type': 'Length',
    'AssociatedDataTag': '446',
    'AbbrName': 'EncListStatTextLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedListStatusText (446) field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '446',
    'Name': 'EncodedListStatusText',
    'Type': 'data',
    'AbbrName': 'EncListStatText',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the ListStatusText (444) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the ListStatusText field.',
    'Added': 'FIX.4.2'
  },
  {
    'Tag': '447',
    'Name': 'PartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'Description': 'Identifies class or source of the PartyID (448) value. Required if PartyID is specified. Note: applicable values depend upon PartyRole (452) specified.\nSee \'Appendix 6-G - Use of <Parties> Component Block\'',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '448',
    'Name': 'PartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Party identifier/code. See PartyIDSource (447) and PartyRole (452).\nSee \'Appendix 6-G - Use of <Parties> Component Block\'',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '451',
    'Name': 'NetChgPrevDay',
    'Type': 'PriceOffset',
    'AbbrName': 'NetChgPrevDay',
    'NotReqXML': '0',
    'Description': 'Net change from previous day\'s closing price vs. last traded price.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '452',
    'Name': 'PartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'Description': 'Identifies the type or role of the PartyID (448) specified.\nSee \'Appendix 6-G - Use of <Parties> Component Block\'\n(see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '453',
    'Name': 'NoPartyIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoPtyIDs',
    'NotReqXML': '1',
    'Description': 'Number of PartyID (448), PartyIDSource (447), and PartyRole (452) entries',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '454',
    'Name': 'NoSecurityAltID',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSecAltID',
    'NotReqXML': '1',
    'Description': 'Number of SecurityAltID (455) entries.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '455',
    'Name': 'SecurityAltID',
    'Type': 'String',
    'AbbrName': 'AltID',
    'NotReqXML': '0',
    'Description': 'Alternate Security identifier value for this security of SecurityAltIDSource (456) type (e.g. CUSIP, SEDOL, ISIN, etc). Requires SecurityAltIDSource.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '456',
    'Name': 'SecurityAltIDSource',
    'Type': 'String',
    'AbbrName': 'AltIDSrc',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Identifies class or source of the SecurityAltID (455) value. Required if SecurityAltID is specified.\nValid values:\nSame valid values as the SecurityIDSource (22) field',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '457',
    'Name': 'NoUnderlyingSecurityAltID',
    'Type': 'NumInGroup',
    'AbbrName': 'NoUndSecAltID',
    'NotReqXML': '1',
    'Description': 'Number of UnderlyingSecurityAltID (458) entries.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '458',
    'Name': 'UnderlyingSecurityAltID',
    'Type': 'String',
    'AbbrName': 'AltID',
    'NotReqXML': '0',
    'Description': 'Alternate Security identifier value for this underlying security of UnderlyingSecurityAltIDSource (459) type (e.g. CUSIP, SEDOL, ISIN, etc). Requires UnderlyingSecurityAltIDSource.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '459',
    'Name': 'UnderlyingSecurityAltIDSource',
    'Type': 'String',
    'AbbrName': 'AltIDSrc',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Identifies class or source of the UnderlyingSecurityAltID (458) value. Required if UnderlyingSecurityAltID is specified.\nValid values:\nSame valid values as the SecurityIDSource (22) field',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '460',
    'Name': 'Product',
    'Type': 'int',
    'AbbrName': 'Prod',
    'NotReqXML': '0',
    'Description': 'Indicates the type of product the security is associated with. See also the CFICode (461) and SecurityType (167) fields.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '461',
    'Name': 'CFICode',
    'Type': 'String',
    'AbbrName': 'CFI',
    'NotReqXML': '0',
    'Description': 'Indicates the type of security using ISO 10962 standard, Classification of Financial Instruments (CFI code) values. ISO 10962 is maintained by ANNA (Association of National Numbering Agencies) acting as Registration Authority. See \'Appendix 6-B FIX Fields Based Upon Other Standards\'. See also the Product (460) and SecurityType (167) fields. It is recommended that CFICode be used instead of SecurityType (167) for non-Fixed Income instruments.\nA subset of possible values applicable to FIX usage are identified in \'Appendix 6-D CFICode Usage - ISO 10962 Classification of Financial Instruments (CFI code)\'',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '462',
    'Name': 'UnderlyingProduct',
    'Type': 'int',
    'AbbrName': 'Prod',
    'NotReqXML': '0',
    'EnumDatatype': '460',
    'Description': 'Underlying security\'s Product.\nValid values: see Product(460) field',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '463',
    'Name': 'UnderlyingCFICode',
    'Type': 'String',
    'AbbrName': 'CFI',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s CFICode.\nValid values: see CFICode (461) field',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '464',
    'Name': 'TestMessageIndicator',
    'Type': 'Boolean',
    'AbbrName': 'TestMsgInd',
    'NotReqXML': '1',
    'Description': 'Indicates whether or not this FIX Session is a \'test\' vs. \'production\' connection. Useful for preventing \'accidents\'.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '466',
    'Name': 'BookingRefID',
    'Type': 'String',
    'AbbrName': 'BkngRefID',
    'NotReqXML': '0',
    'Description': 'Common reference passed to a post-trade booking process (e.g. industry matching utility).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '467',
    'Name': 'IndividualAllocID',
    'Type': 'String',
    'AbbrName': 'IndAllocID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a specific NoAllocs (78) repeating group instance (e.g. for an AllocAccount).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '468',
    'Name': 'RoundingDirection',
    'Type': 'char',
    'AbbrName': 'RndDir',
    'NotReqXML': '0',
    'Description': 'Specifies which direction to round For CIV - indicates whether or not the quantity of shares/units is to be rounded and in which direction where CashOrdQty (152) or (for CIV only) OrderPercent (516) are specified on an order.\nThe default is for rounding to be at the discretion of the executing broker or fund manager.\ne.g. for an order specifying CashOrdQty or OrderPercent if the calculated number of shares/units was 325.76 and RoundingModulus (469) was 0 - \'round down\' would give 320 units, 1 - \'round up\' would give 330 units and \'round to nearest\' would give 320 units.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '469',
    'Name': 'RoundingModulus',
    'Type': 'float',
    'AbbrName': 'RndMod',
    'NotReqXML': '0',
    'Description': 'For CIV - a float value indicating the value to which rounding is required.\ni.e. 0 means round to a multiple of 0 units/shares; 0.5 means round to a multiple of 0.5 units/shares.\nThe default, if RoundingDirection (468) is specified without RoundingModulus, is to round to a whole unit/share.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '470',
    'Name': 'CountryOfIssue',
    'Type': 'Country',
    'AbbrName': 'IssuCtry',
    'NotReqXML': '0',
    'Description': 'ISO Country code of instrument issue (e.g. the country portion typically used in ISIN). Can be used in conjunction with non-ISIN SecurityID (48) (e.g. CUSIP for Municipal Bonds without ISIN) to provide uniqueness.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '471',
    'Name': 'StateOrProvinceOfIssue',
    'Type': 'String',
    'AbbrName': 'StPrv',
    'NotReqXML': '0',
    'Description': 'A two-character state or province abbreviation.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '472',
    'Name': 'LocaleOfIssue',
    'Type': 'String',
    'AbbrName': 'Lcl',
    'NotReqXML': '0',
    'Description': 'Identifies the locale. For Municipal Security Issuers other than state or province. Refer to\nhttp://www.atmos.albany.edu/cgi/stagrep-cgi\nReference the IATA city codes for values.\nNote IATA (International Air Transport Association) maintains the codes at www.iata.org.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '473',
    'Name': 'NoRegistDtls',
    'Type': 'NumInGroup',
    'AbbrName': 'NoRegistDtls',
    'NotReqXML': '1',
    'Description': 'The number of registration details on a Registration Instructions message',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '474',
    'Name': 'MailingDtls',
    'Type': 'String',
    'AbbrName': 'MailingDtls',
    'NotReqXML': '0',
    'Description': 'Set of Correspondence address details, possibly including phone, fax, etc.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '475',
    'Name': 'InvestorCountryOfResidence',
    'Type': 'Country',
    'AbbrName': 'InvestorCtryOfResidence',
    'NotReqXML': '0',
    'Description': 'The ISO 366 Country code (2 character) identifying which country the beneficial investor is resident for tax purposes.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '476',
    'Name': 'PaymentRef',
    'Type': 'String',
    'AbbrName': 'PmtRef',
    'NotReqXML': '0',
    'Description': '\'Settlement Payment Reference\' - A free format Payment reference to assist with reconciliation, e.g. a Client and/or Order ID number.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '477',
    'Name': 'DistribPaymentMethod',
    'Type': 'int',
    'AbbrName': 'DistribPmtMethod',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'A code identifying the payment method for a (fractional) distribution.\n13 through 998 are reserved for future use\nValues above 1000 are available for use by private agreement among counterparties',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '478',
    'Name': 'CashDistribCurr',
    'Type': 'Currency',
    'AbbrName': 'CshDistribCurr',
    'NotReqXML': '0',
    'Description': 'Specifies currency to be used for Cash Distributions see \'Appendix 6-A Valid Currency Codes\'.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '479',
    'Name': 'CommCurrency',
    'Type': 'Currency',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'Specifies currency to be use for Commission (12) if the Commission currency is different from the Deal Currency - see \'Appendix 6-A; Valid Currency Codes\'.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '480',
    'Name': 'CancellationRights',
    'Type': 'char',
    'AbbrName': 'CxllationRights',
    'NotReqXML': '0',
    'Description': 'For CIV - A one character code identifying whether Cancellation rights/Cooling off period applies.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '481',
    'Name': 'MoneyLaunderingStatus',
    'Type': 'char',
    'AbbrName': 'MnyLaunderingStat',
    'NotReqXML': '0',
    'Description': 'A one character code identifying Money laundering status.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '482',
    'Name': 'MailingInst',
    'Type': 'String',
    'AbbrName': 'MailingInst',
    'NotReqXML': '0',
    'Description': 'Free format text to specify mailing instruction requirements, e.g. \'no third party mailings\'.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '483',
    'Name': 'TransBkdTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'TransBkdTm',
    'NotReqXML': '0',
    'Description': 'For CIV A date and time stamp to indicate the time a CIV order was booked by the fund manager.\nFor derivatives a date and time stamp to indicate when this order was booked with the agent prior to submission to the VMU. Indicates the time at which the order was finalized between the buyer and seller prior to submission.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '484',
    'Name': 'ExecPriceType',
    'Type': 'char',
    'AbbrName': 'ExecPxTyp',
    'NotReqXML': '0',
    'Description': 'For CIV - Identifies how the execution price LastPx (31) was calculated from the fund unit/share price(s) calculated at the fund valuation point.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '485',
    'Name': 'ExecPriceAdjustment',
    'Type': 'float',
    'AbbrName': 'ExecPxAdjment',
    'NotReqXML': '0',
    'Description': 'For CIV the amount or percentage by which the fund unit/share price was adjusted, as indicated by ExecPriceType (484)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '486',
    'Name': 'DateOfBirth',
    'Type': 'LocalMktDate',
    'AbbrName': 'DtOfBirth',
    'NotReqXML': '0',
    'Description': 'The date of birth applicable to the individual, e.g. required to open some types of tax-exempt account.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '487',
    'Name': 'TradeReportTransType',
    'Type': 'int',
    'AbbrName': 'TransTyp',
    'NotReqXML': '0',
    'Description': 'Identifies Trade Report message transaction type\n(Prior to FIX 4.4 this field was of type char)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '488',
    'Name': 'CardHolderName',
    'Type': 'String',
    'AbbrName': 'CardHolderName',
    'NotReqXML': '0',
    'Description': 'The name of the payment card holder as specified on the card being used for payment.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '489',
    'Name': 'CardNumber',
    'Type': 'String',
    'AbbrName': 'CardNum',
    'NotReqXML': '0',
    'Description': 'The number of the payment card as specified on the card being used for payment.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '490',
    'Name': 'CardExpDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'CardExpDt',
    'NotReqXML': '0',
    'Description': 'The expiry date of the payment card as specified on the card being used for payment.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '491',
    'Name': 'CardIssNum',
    'Type': 'String',
    'AbbrName': 'CardIssNum',
    'NotReqXML': '0',
    'Description': 'The issue number of the payment card as specified on the card being used for payment. This is only applicable to certain types of card.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '492',
    'Name': 'PaymentMethod',
    'Type': 'int',
    'AbbrName': 'PmtMethod',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved1000Plus',
    'Description': 'A code identifying the Settlement payment method. 16 through 998 are reserved for future use\nValues above 1000 are available for use by private agreement among counterparties',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '493',
    'Name': 'RegistAcctType',
    'Type': 'String',
    'AbbrName': 'AcctTyp',
    'BaseCategory': 'RegistrationInstruction',
    'BaseCategoryAbbrName': 'AcctTyp',
    'NotReqXML': '0',
    'Description': 'For CIV - a fund manager-defined code identifying which of the fund manager\'s account types is required.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '494',
    'Name': 'Designation',
    'Type': 'String',
    'AbbrName': 'Designation',
    'NotReqXML': '0',
    'Description': 'Free format text defining the designation to be associated with a holding on the register. Used to identify assets of a specific underlying investor using a common registration, e.g. a broker\'s nominee or street name.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '495',
    'Name': 'TaxAdvantageType',
    'Type': 'int',
    'AbbrName': 'TaxAdvantageTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved1000Plus',
    'Description': 'For CIV - a code identifying the type of tax exempt account in which purchased shares/units are to be held.\n30 - 998 are reserved for future use by recognized taxation authorities\n999=Other\nvalues above 1000 are available for use by private agreement among counterparties',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '496',
    'Name': 'RegistRejReasonText',
    'Type': 'String',
    'AbbrName': 'RejRsnTxt',
    'BaseCategory': 'RegistrationInstruction',
    'BaseCategoryAbbrName': 'Dtls',
    'NotReqXML': '0',
    'Description': 'Text indicating reason(s) why a Registration Instruction has been rejected.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '497',
    'Name': 'FundRenewWaiv',
    'Type': 'char',
    'AbbrName': 'FundRenewWaiv',
    'NotReqXML': '0',
    'Description': 'A one character code identifying whether the Fund based renewal commission is to be waived.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '498',
    'Name': 'CashDistribAgentName',
    'Type': 'String',
    'AbbrName': 'CshDistribAgentName',
    'NotReqXML': '0',
    'Description': 'Name of local agent bank if for cash distributions',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '499',
    'Name': 'CashDistribAgentCode',
    'Type': 'String',
    'AbbrName': 'CshDistribAgentCode',
    'NotReqXML': '0',
    'Description': 'BIC (Bank Identification Code--Swift managed) code of agent bank for cash distributions',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '500',
    'Name': 'CashDistribAgentAcctNumber',
    'Type': 'String',
    'AbbrName': 'CshDistribAgentAcctNum',
    'NotReqXML': '0',
    'Description': 'Account number at agent bank for distributions.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '501',
    'Name': 'CashDistribPayRef',
    'Type': 'String',
    'AbbrName': 'CshDistribPayRef',
    'NotReqXML': '0',
    'Description': 'Free format Payment reference to assist with reconciliation of distributions.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '502',
    'Name': 'CashDistribAgentAcctName',
    'Type': 'String',
    'AbbrName': 'CshDistribAgentAcctName',
    'NotReqXML': '0',
    'Description': 'Name of account at agent bank for distributions.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '503',
    'Name': 'CardStartDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'CardStartDt',
    'NotReqXML': '0',
    'Description': 'The start date of the card as specified on the card being used for payment.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '504',
    'Name': 'PaymentDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'PmtDt',
    'NotReqXML': '0',
    'Description': 'The date written on a cheque or date payment should be submitted to the relevant clearing system.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '505',
    'Name': 'PaymentRemitterID',
    'Type': 'String',
    'AbbrName': 'PmtRemtrID',
    'NotReqXML': '0',
    'Description': 'Identifies sender of a payment, e.g. the payment remitter or a customer reference number.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '506',
    'Name': 'RegistStatus',
    'Type': 'char',
    'AbbrName': 'RegStat',
    'NotReqXML': '0',
    'Description': 'Registration status as returned by the broker or (for CIV) the fund manager:',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '507',
    'Name': 'RegistRejReasonCode',
    'Type': 'int',
    'AbbrName': 'RejRsnCd',
    'BaseCategory': 'RegistrationInstruction',
    'BaseCategoryAbbrName': 'RejRsnCd',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason(s) why Registration Instructions has been rejected.\nThe reason may be further amplified in the RegistRejReasonCode field.\nPossible values of reason code include:',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '508',
    'Name': 'RegistRefID',
    'Type': 'String',
    'AbbrName': 'RefID',
    'BaseCategory': 'RegistrationInstruction',
    'BaseCategoryAbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier for the RegistID (53) with Cancel and Replace RegistTransType (54) transaction types.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '509',
    'Name': 'RegistDtls',
    'Type': 'String',
    'AbbrName': 'Dtls',
    'BaseCategory': 'RegistrationInstruction',
    'BaseCategoryAbbrName': 'RejRsnTxt',
    'NotReqXML': '0',
    'Description': 'Set of Registration name and address details, possibly including phone, fax etc.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '510',
    'Name': 'NoDistribInsts',
    'Type': 'NumInGroup',
    'AbbrName': 'NoDistribInsts',
    'NotReqXML': '1',
    'Description': 'The number of Distribution Instructions on a Registration Instructions message',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '511',
    'Name': 'RegistEmail',
    'Type': 'String',
    'AbbrName': 'Email',
    'BaseCategory': 'RegistrationInstruction',
    'BaseCategoryAbbrName': 'Email',
    'NotReqXML': '0',
    'Description': 'Email address relating to Registration name and address details',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '512',
    'Name': 'DistribPercentage',
    'Type': 'Percentage',
    'AbbrName': 'DistribPctage',
    'NotReqXML': '0',
    'Description': 'The amount of each distribution to go to this beneficiary, expressed as a percentage',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '513',
    'Name': 'RegistID',
    'Type': 'String',
    'AbbrName': 'RegistID',
    'BaseCategory': 'RegistrationInstruction',
    'BaseCategoryAbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Unique identifier of the registration details as assigned by institution or intermediary.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '514',
    'Name': 'RegistTransType',
    'Type': 'char',
    'AbbrName': 'TransTyp',
    'NotReqXML': '0',
    'Description': 'Identifies Registration Instructions transaction type',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '515',
    'Name': 'ExecValuationPoint',
    'Type': 'UTCTimestamp',
    'AbbrName': 'ExecValuationPoint',
    'NotReqXML': '0',
    'Description': 'For CIV - a date and time stamp to indicate the fund valuation point with respect to which a order was priced by the fund manager.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '516',
    'Name': 'OrderPercent',
    'Type': 'Percentage',
    'AbbrName': 'Pct',
    'NotReqXML': '0',
    'Description': 'For CIV specifies the approximate order quantity desired. For a CIV Sale it specifies percentage of investor\'s total holding to be sold. For a CIV switch/exchange it specifies percentage of investor\'s cash realised from sales to be re-invested. The executing broker, intermediary or fund manager is responsible for converting and calculating OrderQty (38) in shares/units for subsequent messages.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '517',
    'Name': 'OwnershipType',
    'Type': 'char',
    'AbbrName': 'OwnershipTyp',
    'NotReqXML': '0',
    'Description': 'The relationship between Registration parties.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '518',
    'Name': 'NoContAmts',
    'Type': 'NumInGroup',
    'AbbrName': 'NoContAmts',
    'NotReqXML': '1',
    'Description': 'The number of Contract Amount details on an Execution Report message',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '519',
    'Name': 'ContAmtType',
    'Type': 'int',
    'AbbrName': 'ContAmtTyp',
    'NotReqXML': '0',
    'Description': 'Type of ContAmtValue (520).\nNOTE That Commission Amount / % in Contract Amounts is the commission actually charged, rather than the commission instructions given in Fields 2/3.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '520',
    'Name': 'ContAmtValue',
    'Type': 'float',
    'AbbrName': 'ContAmtValu',
    'NotReqXML': '0',
    'Description': 'Value of Contract Amount, e.g. a financial amount or percentage as indicated by ContAmtType (519).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '521',
    'Name': 'ContAmtCurr',
    'Type': 'Currency',
    'AbbrName': 'ContAmtCurr',
    'NotReqXML': '0',
    'Description': 'Specifies currency for the Contract amount if different from the Deal Currency - see \'Appendix 6-A; Valid Currency Codes\'.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '522',
    'Name': 'OwnerType',
    'Type': 'int',
    'AbbrName': 'OwnerTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type of owner.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '523',
    'Name': 'PartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Sub-identifier (e.g. Clearing Account for PartyRole (452)=Clearing Firm, Locate ID # for PartyRole=Locate/Lending Firm, etc). Not required when using PartyID (448), PartyIDSource (447), and PartyRole.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '524',
    'Name': 'NestedPartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within a nested repeating group.\nSame values as PartyID (448)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '525',
    'Name': 'NestedPartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within a nested repeating group.\nSame values as PartyIDSource (447)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '526',
    'Name': 'SecondaryClOrdID',
    'Type': 'String',
    'AbbrName': 'ClOrdID2',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'ID2',
    'NotReqXML': '0',
    'Description': 'Assigned by the party which originates the order. Can be used to provide the ClOrdID (11) used by an exchange or executing system.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '527',
    'Name': 'SecondaryExecID',
    'Type': 'String',
    'AbbrName': 'ExecID2',
    'NotReqXML': '0',
    'Description': 'Assigned by the party which accepts the order. Can be used to provide the ExecID (17) used by an exchange or executing system.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '528',
    'Name': 'OrderCapacity',
    'Type': 'char',
    'AbbrName': 'Cpcty',
    'NotReqXML': '0',
    'Description': 'Designates the capacity of the firm placing the order.\n(as of FIX 4.3, this field replaced Rule80A (tag 47) --used in conjunction with OrderRestrictions (529) field)\n(see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '529',
    'Name': 'OrderRestrictions',
    'Type': 'MultipleCharValue',
    'AbbrName': 'Rstctions',
    'NotReqXML': '0',
    'Description': 'Restrictions associated with an order. If more than one restriction is applicable to an order, this field can contain multiple instructions separated by space.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '530',
    'Name': 'MassCancelRequestType',
    'Type': 'char',
    'AbbrName': 'MassCxlReqTyp',
    'BaseCategory': 'OrderMassHandling',
    'BaseCategoryAbbrName': 'ReqTyp',
    'NotReqXML': '0',
    'Description': 'Specifies scope of Order Mass Cancel Request.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '531',
    'Name': 'MassCancelResponse',
    'Type': 'char',
    'AbbrName': 'MassCxlRsp',
    'BaseCategory': 'OrderMassHandling',
    'BaseCategoryAbbrName': 'Rsp',
    'NotReqXML': '0',
    'Description': 'Specifies the action taken by counterparty order handling system as a result of the Order Mass Cancel Request',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '532',
    'Name': 'MassCancelRejectReason',
    'Type': 'int',
    'AbbrName': 'MassCxlRejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason Order Mass Cancel Request was rejected',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '533',
    'Name': 'TotalAffectedOrders',
    'Type': 'int',
    'AbbrName': 'TotAffctdOrds',
    'NotReqXML': '0',
    'Description': 'Total number of orders affected by either the OrderMassActionRequest(MsgType=CA) or OrderMassCancelRequest(MsgType=Q).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '534',
    'Name': 'NoAffectedOrders',
    'Type': 'NumInGroup',
    'AbbrName': 'NoAffctdOrds',
    'NotReqXML': '0',
    'Description': 'Number of affected orders in the repeating group of order ids.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '535',
    'Name': 'AffectedOrderID',
    'Type': 'String',
    'AbbrName': 'AffctdOrdID',
    'NotReqXML': '0',
    'Description': 'OrderID (37) of an order affected by a mass cancel request.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '536',
    'Name': 'AffectedSecondaryOrderID',
    'Type': 'String',
    'AbbrName': 'AffctdScndOrdID',
    'NotReqXML': '0',
    'Description': 'SecondaryOrderID (198) of an order affected by a mass cancel request.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '537',
    'Name': 'QuoteType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Identifies the type of quote.\nAn indicative quote is used to inform a counterparty of a market. An indicative quote does not result directly in a trade.\nA tradeable quote is submitted to a market and will result directly in a trade against other orders and quotes in a market.\nA restricted tradeable quote is submitted to a market and within a certain restriction (possibly based upon price or quantity) will automatically trade against orders. Order that do not comply with restrictions are sent to the quote issuer who can choose to accept or decline the order.\nA counter quote is used in the negotiation model. See Volume 7 - Product: Fixed Income for example usage.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '538',
    'Name': 'NestedPartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within a nested repeating group.\nSame values as PartyRole (452)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '539',
    'Name': 'NoNestedPartyIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNstPtyIDs',
    'NotReqXML': '1',
    'Description': 'Number of NestedPartyID (524), NestedPartyIDSource (525), and NestedPartyRole (538) entries',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '540',
    'Name': 'TotalAccruedInterestAmt',
    'Type': 'Amt',
    'AbbrName': 'TotAcrdIntAmt',
    'NotReqXML': '0',
    'Description': 'Total Amount of Accrued Interest for convertible bonds and fixed income',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.4.4'
  },
  {
    'Tag': '541',
    'Name': 'MaturityDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'MatDt',
    'NotReqXML': '0',
    'Description': 'Date of maturity.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '542',
    'Name': 'UnderlyingMaturityDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Mat',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s maturity date.\nSee MaturityDate (541) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '543',
    'Name': 'InstrRegistry',
    'Type': 'String',
    'AbbrName': 'Rgstry',
    'NotReqXML': '0',
    'Description': 'Values may include BIC for the depository or custodian who maintain ownership records, the ISO country code for the location of the record, or the value \'ZZ\' to specify physical ownership of the security (e.g. stock certificate).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '544',
    'Name': 'CashMargin',
    'Type': 'char',
    'AbbrName': 'CshMgn',
    'NotReqXML': '0',
    'Description': 'Identifies whether an order is a margin order or a non-margin order. This is primarily used when sending orders to Japanese exchanges to indicate sell margin or buy to cover. The same tag could be assigned also by buy-side to indicate the intent to sell or buy margin and the sell-side to accept or reject (base on some validation criteria) the margin request.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '545',
    'Name': 'NestedPartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartySubID value within a nested repeating group.\nSame values as PartySubID (523)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '546',
    'Name': 'Scope',
    'Type': 'MultipleCharValue',
    'AbbrName': 'Scope',
    'NotReqXML': '0',
    'Description': 'Specifies the market scope of the market data.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '547',
    'Name': 'MDImplicitDelete',
    'Type': 'Boolean',
    'AbbrName': 'ImplctDel',
    'NotReqXML': '0',
    'Description': 'Defines how a server handles distribution of a truncated book. Defaults to broker option.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '548',
    'Name': 'CrossID',
    'Type': 'String',
    'AbbrName': 'CrssID',
    'BaseCategory': 'CrossOrders',
    'BaseCategoryAbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Identifier for a cross order. Must be unique during a given trading day. Recommend that firms use the order date as part of the CrossID for Good Till Cancel (GT) orders.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '549',
    'Name': 'CrossType',
    'Type': 'int',
    'AbbrName': 'CrssTyp',
    'BaseCategory': 'CrossOrders',
    'BaseCategoryAbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Type of cross being submitted to a market',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '550',
    'Name': 'CrossPrioritization',
    'Type': 'int',
    'AbbrName': 'CrssPriortstn',
    'BaseCategory': 'CrossOrders',
    'BaseCategoryAbbrName': 'Priorty',
    'NotReqXML': '0',
    'Description': 'Indicates if one side or the other of a cross order should be prioritized.\nThe definition of prioritization is left to the market. In some markets prioritization means which side of the cross order is applied to the market first. In other markets - prioritization may mean that the prioritized side is fully executed (sometimes referred to as the side being protected).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '551',
    'Name': 'OrigCrossID',
    'Type': 'String',
    'AbbrName': 'OrigCrssID',
    'BaseCategory': 'CrossOrders',
    'BaseCategoryAbbrName': 'OrigID',
    'NotReqXML': '0',
    'Description': 'CrossID of the previous cross order (NOT the initial cross order of the day) as assigned by the institution, used to identify the previous cross order in Cross Cancel and Cross Cancel/Replace Requests.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '552',
    'Name': 'NoSides',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSides',
    'NotReqXML': '1',
    'Description': 'Number of Side repeating group instances.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '553',
    'Name': 'Username',
    'Type': 'String',
    'AbbrName': 'Username',
    'NotReqXML': '0',
    'Description': 'Userid or username.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '554',
    'Name': 'Password',
    'Type': 'String',
    'AbbrName': 'Password',
    'NotReqXML': '0',
    'Description': 'Password or passphrase.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '555',
    'Name': 'NoLegs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoLegs',
    'NotReqXML': '1',
    'Description': 'Number of InstrumentLeg repeating group instances.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '556',
    'Name': 'LegCurrency',
    'Type': 'Currency',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'Currency associated with a particular Leg\'s quantity',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '557',
    'Name': 'TotNoSecurityTypes',
    'Type': 'int',
    'AbbrName': 'TotNoSecTyps',
    'NotReqXML': '0',
    'Description': 'Used to support fragmentation. Indicates total number of security types when multiple Security Type messages are used to return results.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '558',
    'Name': 'NoSecurityTypes',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSecTyps',
    'NotReqXML': '1',
    'Description': 'Number of Security Type repeating group instances.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '559',
    'Name': 'SecurityListRequestType',
    'Type': 'int',
    'AbbrName': 'ListReqTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type/criteria of Security List Request',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '560',
    'Name': 'SecurityRequestResult',
    'Type': 'int',
    'AbbrName': 'ReqRslt',
    'NotReqXML': '0',
    'Description': 'The results returned to a Security Request message',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '561',
    'Name': 'RoundLot',
    'Type': 'Qty',
    'AbbrName': 'RndLot',
    'NotReqXML': '0',
    'Description': 'The trading lot size of a security',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '562',
    'Name': 'MinTradeVol',
    'Type': 'Qty',
    'AbbrName': 'MinTrdVol',
    'NotReqXML': '0',
    'Description': 'The minimum trading volume for a security',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '563',
    'Name': 'MultiLegRptTypeReq',
    'Type': 'int',
    'AbbrName': 'MLEGRptTypReq',
    'NotReqXML': '0',
    'Description': 'Indicates the method of execution reporting requested by issuer of the order.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '564',
    'Name': 'LegPositionEffect',
    'Type': 'char',
    'AbbrName': 'PosEfct',
    'NotReqXML': '0',
    'EnumDatatype': '77',
    'Description': 'PositionEffect for leg of a multileg\nSee PositionEffect (77) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '565',
    'Name': 'LegCoveredOrUncovered',
    'Type': 'int',
    'AbbrName': 'Cover',
    'NotReqXML': '0',
    'EnumDatatype': '203',
    'Description': 'CoveredOrUncovered for leg of a multileg\nSee CoveredOrUncovered (203) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '566',
    'Name': 'LegPrice',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Price for leg of a multileg\nSee Price (44) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '567',
    'Name': 'TradSesStatusRejReason',
    'Type': 'int',
    'AbbrName': 'StatRejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Indicates the reason a Trading Session Status Request was rejected.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '568',
    'Name': 'TradeRequestID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Trade Capture Report Request ID',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '569',
    'Name': 'TradeRequestType',
    'Type': 'int',
    'AbbrName': 'ReqTyp',
    'NotReqXML': '0',
    'Description': 'Type of Trade Capture Report.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '570',
    'Name': 'PreviouslyReported',
    'Type': 'Boolean',
    'AbbrName': 'PrevlyRpted',
    'NotReqXML': '0',
    'Description': 'Indicates if the trade capture report was previously reported to the counterparty',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '571',
    'Name': 'TradeReportID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Unique identifier of trade capture report',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '572',
    'Name': 'TradeReportRefID',
    'Type': 'String',
    'AbbrName': 'RptRefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier used with CANCEL and REPLACE transaction types.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '573',
    'Name': 'MatchStatus',
    'Type': 'char',
    'AbbrName': 'MtchStat',
    'NotReqXML': '0',
    'Description': 'The status of this trade with respect to matching or comparison.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '574',
    'Name': 'MatchType',
    'Type': 'String',
    'AbbrName': 'MtchTyp',
    'NotReqXML': '0',
    'Description': 'The point in the matching process at which this trade was matched.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '575',
    'Name': 'OddLot',
    'Type': 'Boolean',
    'AbbrName': 'OddLot',
    'NotReqXML': '0',
    'Description': 'This trade is to be treated as an odd lot\nIf this field is not specified, the default will be \'N\'',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '576',
    'Name': 'NoClearingInstructions',
    'Type': 'NumInGroup',
    'AbbrName': 'NoClrngInstrctns',
    'NotReqXML': '1',
    'Description': 'Number of clearing instructions',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '577',
    'Name': 'ClearingInstruction',
    'Type': 'int',
    'AbbrName': 'ClrngInstrctn',
    'NotReqXML': '0',
    'Description': 'Eligibility of this trade for clearing and central counterparty processing\nvalues above 4000 are reserved for agreement between parties',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '578',
    'Name': 'TradeInputSource',
    'Type': 'String',
    'AbbrName': 'InptSrc',
    'NotReqXML': '0',
    'Description': 'Type of input device or system from which the trade was entered.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '579',
    'Name': 'TradeInputDevice',
    'Type': 'String',
    'AbbrName': 'InptDev',
    'NotReqXML': '0',
    'Description': 'Specific device number, terminal number or station where trade was entered',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '580',
    'Name': 'NoDates',
    'Type': 'NumInGroup',
    'AbbrName': 'NoDts',
    'NotReqXML': '0',
    'Description': 'Number of Date fields provided in date range',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '581',
    'Name': 'AccountType',
    'Type': 'int',
    'AbbrName': 'AcctTyp',
    'NotReqXML': '0',
    'Description': 'Type of account associated with an order',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '582',
    'Name': 'CustOrderCapacity',
    'Type': 'int',
    'AbbrName': 'CustCpcty',
    'NotReqXML': '0',
    'Description': 'Capacity of customer placing the order\nPrimarily used by futures exchanges to indicate the CTICode (customer type indicator) as required by the US CFTC (Commodity Futures Trading Commission).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '583',
    'Name': 'ClOrdLinkID',
    'Type': 'String',
    'AbbrName': 'ClOrdLinkID',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'LnkID',
    'NotReqXML': '0',
    'Description': 'Permits order originators to tie together groups of orders in which trades resulting from orders are associated for a specific purpose, for example the calculation of average execution price for a customer or to associate lists submitted to a broker as waves of a larger program trade.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '584',
    'Name': 'MassStatusReqID',
    'Type': 'String',
    'AbbrName': 'MassStatReqID',
    'BaseCategory': 'OrderMassHandling',
    'BaseCategoryAbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Value assigned by issuer of Mass Status Request to uniquely identify the request',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '585',
    'Name': 'MassStatusReqType',
    'Type': 'int',
    'AbbrName': 'MassStatReqTyp',
    'BaseCategory': 'OrderMassHandling',
    'BaseCategoryAbbrName': 'ReqTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Mass Status Request Type',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '85',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '586',
    'Name': 'OrigOrdModTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'OrigOrdModTm',
    'NotReqXML': '0',
    'Description': 'The most recent (or current) modification TransactTime (tag 60) reported on an Execution Report for the order. The OrigOrdModTime is provided as an optional field on Order Cancel Request and Order Cancel Replace Requests to identify that the state of the order has not changed since the request was issued. The use of this approach is not recommended.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '587',
    'Name': 'LegSettlType',
    'Type': 'char',
    'AbbrName': 'SettlTyp',
    'NotReqXML': '0',
    'EnumDatatype': '63',
    'Description': 'Refer to values for SettlType[63]',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '588',
    'Name': 'LegSettlDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'SettlDt',
    'NotReqXML': '0',
    'Description': 'Refer to description for SettlDate[64]',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '589',
    'Name': 'DayBookingInst',
    'Type': 'char',
    'AbbrName': 'DayBkngInst',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not automatic booking can occur.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '590',
    'Name': 'BookingUnit',
    'Type': 'char',
    'AbbrName': 'BkngUnit',
    'NotReqXML': '0',
    'Description': 'Indicates what constitutes a bookable unit.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '591',
    'Name': 'PreallocMethod',
    'Type': 'char',
    'AbbrName': 'PreallocMeth',
    'NotReqXML': '0',
    'Description': 'Indicates the method of preallocation.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '592',
    'Name': 'UnderlyingCountryOfIssue',
    'Type': 'Country',
    'AbbrName': 'Ctry',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s CountryOfIssue.\nSee CountryOfIssue (470) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '593',
    'Name': 'UnderlyingStateOrProvinceOfIssue',
    'Type': 'String',
    'AbbrName': 'StOrProvnc',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s StateOrProvinceOfIssue.\nSee StateOrProvinceOfIssue (471) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '594',
    'Name': 'UnderlyingLocaleOfIssue',
    'Type': 'String',
    'AbbrName': 'Lcl',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s LocaleOfIssue.\nSee LocaleOfIssue (472) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '595',
    'Name': 'UnderlyingInstrRegistry',
    'Type': 'String',
    'AbbrName': 'Rgstry',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s InstrRegistry.\nSee InstrRegistry (543) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '596',
    'Name': 'LegCountryOfIssue',
    'Type': 'Country',
    'AbbrName': 'Ctry',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s CountryOfIssue.\nSee CountryOfIssue (470) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '597',
    'Name': 'LegStateOrProvinceOfIssue',
    'Type': 'String',
    'AbbrName': 'StOrProvnc',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s StateOrProvinceOfIssue.\nSee StateOrProvinceOfIssue (471) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '598',
    'Name': 'LegLocaleOfIssue',
    'Type': 'String',
    'AbbrName': 'Lcl',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s LocaleOfIssue.\nSee LocaleOfIssue (472) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '599',
    'Name': 'LegInstrRegistry',
    'Type': 'String',
    'AbbrName': 'Rgstry',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual leg security\'s InstrRegistry.\nSee InstrRegistry (543) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '600',
    'Name': 'LegSymbol',
    'Type': 'String',
    'AbbrName': 'Sym',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s Symbol.\nSee Symbol (55) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '601',
    'Name': 'LegSymbolSfx',
    'Type': 'String',
    'AbbrName': 'Sfx',
    'NotReqXML': '0',
    'EnumDatatype': '65',
    'Description': 'Multileg instrument\'s individual security\'s SymbolSfx.\nSee SymbolSfx (65) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '602',
    'Name': 'LegSecurityID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s SecurityID.\nSee SecurityID (48) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '603',
    'Name': 'LegSecurityIDSource',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Multileg instrument\'s individual security\'s SecurityIDSource.\nSee SecurityIDSource (22) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '604',
    'Name': 'NoLegSecurityAltID',
    'Type': 'NumInGroup',
    'AbbrName': 'NoLegSecAltID',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s NoSecurityAltID.\nSee NoSecurityAltID (454) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '605',
    'Name': 'LegSecurityAltID',
    'Type': 'String',
    'AbbrName': 'SecAltID',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s SecurityAltID.\nSee SecurityAltID (455) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '606',
    'Name': 'LegSecurityAltIDSource',
    'Type': 'String',
    'AbbrName': 'SecAltIDSrc',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Multileg instrument\'s individual security\'s SecurityAltIDSource.\nSee SecurityAltIDSource (456) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '607',
    'Name': 'LegProduct',
    'Type': 'int',
    'AbbrName': 'Prod',
    'NotReqXML': '0',
    'EnumDatatype': '460',
    'Description': 'Multileg instrument\'s individual security\'s Product.\nSee Product (460) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '608',
    'Name': 'LegCFICode',
    'Type': 'String',
    'AbbrName': 'CFI',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s CFICode.\nSee CFICode (461) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '609',
    'Name': 'LegSecurityType',
    'Type': 'String',
    'AbbrName': 'SecTyp',
    'NotReqXML': '0',
    'EnumDatatype': '167',
    'Description': 'Refer to definition of SecurityType(167)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '610',
    'Name': 'LegMaturityMonthYear',
    'Type': 'MonthYear',
    'AbbrName': 'MMY',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s MaturityMonthYear.\nSee MaturityMonthYear (200) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '611',
    'Name': 'LegMaturityDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Mat',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s MaturityDate.\nSee MaturityDate (54) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '612',
    'Name': 'LegStrikePrice',
    'Type': 'Price',
    'AbbrName': 'Strk',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s StrikePrice.\nSee StrikePrice (202) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '613',
    'Name': 'LegOptAttribute',
    'Type': 'char',
    'AbbrName': 'OptA',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s OptAttribute.\nSee OptAttribute (206) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '614',
    'Name': 'LegContractMultiplier',
    'Type': 'float',
    'AbbrName': 'Cmult',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s ContractMultiplier.\nSee ContractMultiplier (23) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '615',
    'Name': 'LegCouponRate',
    'Type': 'Percentage',
    'AbbrName': 'CpnRt',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s CouponRate.\nSee CouponRate (223) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '616',
    'Name': 'LegSecurityExchange',
    'Type': 'Exchange',
    'AbbrName': 'Exch',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s SecurityExchange.\nSee SecurityExchange (207) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '617',
    'Name': 'LegIssuer',
    'Type': 'String',
    'AbbrName': 'Issr',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s Issuer.\nSee Issuer (106) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '618',
    'Name': 'EncodedLegIssuerLen',
    'Type': 'Length',
    'AssociatedDataTag': '619',
    'AbbrName': 'EncLegIssrLen',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s EncodedIssuerLen.\nSee EncodedIssuerLen (348) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '619',
    'Name': 'EncodedLegIssuer',
    'Type': 'data',
    'AbbrName': 'EncLegIssr',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s EncodedIssuer.\nSee EncodedIssuer (349) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '620',
    'Name': 'LegSecurityDesc',
    'Type': 'String',
    'AbbrName': 'Desc',
    'NotReqXML': '0',
    'Description': 'Description of a leg of a multileg instrument.\nSee SecurityDesc(107).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '621',
    'Name': 'EncodedLegSecurityDescLen',
    'Type': 'Length',
    'AssociatedDataTag': '622',
    'AbbrName': 'EncLegSecDescLen',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s EncodedSecurityDescLen.\nSee EncodedSecurityDescLen (350) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '622',
    'Name': 'EncodedLegSecurityDesc',
    'Type': 'data',
    'AbbrName': 'EncLegSecDesc',
    'NotReqXML': '0',
    'Description': 'Multileg instrument\'s individual security\'s EncodedSecurityDesc.\nSee EncodedSecurityDesc (35) field for description',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '623',
    'Name': 'LegRatioQty',
    'Type': 'float',
    'AbbrName': 'RatioQty',
    'NotReqXML': '0',
    'Description': 'The ratio of quantity for this individual leg relative to the entire multileg security.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '624',
    'Name': 'LegSide',
    'Type': 'char',
    'AbbrName': 'Side',
    'NotReqXML': '0',
    'EnumDatatype': '54',
    'Description': 'The side of this individual leg (multileg security).\nSee Side (54) field for description and values',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '625',
    'Name': 'TradingSessionSubID',
    'Type': 'String',
    'AbbrName': 'SesSub',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Optional market assigned sub identifier for a trading phase within a trading session. Usage is determined by market or counterparties. Used by US based futures markets to identify exchange specific execution time bracket codes as required by US market regulations. Bilaterally agreed values of data type \'String\' that start with a character can be used for backward compatibility',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '626',
    'Name': 'AllocType',
    'Type': 'int',
    'AbbrName': 'AllocType',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Describes the specific type or purpose of an Allocation message (i.e. \'Buyside Calculated\')\n(see Volume : \'Glossary\' for value definitions)\n*** SOME VALUES HAVE BEEN REPLACED - See \'Replaced Features and Supported Approach\' ***',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '627',
    'Name': 'NoHops',
    'Type': 'NumInGroup',
    'AbbrName': 'NoHops',
    'NotReqXML': '1',
    'Description': 'Number of HopCompID entries in repeating group.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '628',
    'Name': 'HopCompID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify the third party firm which delivered a specific message either from the firm which originated the message or from another third party (if multiple \'hops\' are performed). It is recommended that this value be the SenderCompID (49) of the third party.\nApplicable when messages are communicated/re-distributed via third parties which function as service bureaus or \'hubs\'. Only applicable if OnBehalfOfCompID (115) is being used.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '629',
    'Name': 'HopSendingTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'Snt',
    'NotReqXML': '0',
    'Description': 'Time that HopCompID (628) sent the message. It is recommended that this value be the SendingTime (52) of the message sent by the third party.\nApplicable when messages are communicated/re-distributed via third parties which function as service bureaus or \'hubs\'. Only applicable if OnBehalfOfCompID (115) is being used.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '630',
    'Name': 'HopRefID',
    'Type': 'SeqNum',
    'AbbrName': 'Ref',
    'NotReqXML': '0',
    'Description': 'Reference identifier assigned by HopCompID (628) associated with the message sent. It is recommended that this value be the MsgSeqNum (34) of the message sent by the third party.\nApplicable when messages are communicated/re-distributed via third parties which function as service bureaus or \'hubs\'. Only applicable if OnBehalfOfCompID (115) is being used.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '631',
    'Name': 'MidPx',
    'Type': 'Price',
    'AbbrName': 'MidPx',
    'NotReqXML': '0',
    'Description': 'Mid price/rate',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '632',
    'Name': 'BidYield',
    'Type': 'Percentage',
    'AbbrName': 'BidYld',
    'NotReqXML': '0',
    'Description': 'Bid yield',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '633',
    'Name': 'MidYield',
    'Type': 'Percentage',
    'AbbrName': 'MidYld',
    'NotReqXML': '0',
    'Description': 'Mid yield',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '634',
    'Name': 'OfferYield',
    'Type': 'Percentage',
    'AbbrName': 'OfrYld',
    'NotReqXML': '0',
    'Description': 'Offer yield',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '635',
    'Name': 'ClearingFeeIndicator',
    'Type': 'String',
    'AbbrName': 'ClrFeeInd',
    'NotReqXML': '0',
    'Description': 'Indicates type of fee being assessed of the customer for trade executions at an exchange. Applicable for futures markets only at this time.\n(Values source CBOT, CME, NYBOT, and NYMEX):',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '636',
    'Name': 'WorkingIndicator',
    'Type': 'Boolean',
    'AbbrName': 'WorkingInd',
    'NotReqXML': '0',
    'Description': 'Indicates if the order is currently being worked. Applicable only for OrdStatus = \'New\'. For open outcry markets this indicates that the order is being worked in the crowd. For electronic markets it indicates that the order has transitioned from a contingent order to a market order.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '637',
    'Name': 'LegLastPx',
    'Type': 'Price',
    'AbbrName': 'LastPx',
    'NotReqXML': '0',
    'Description': 'Execution price assigned to a leg of a multileg instrument.\nSee LastPx (31) field for description and values',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '638',
    'Name': 'PriorityIndicator',
    'Type': 'int',
    'AbbrName': 'PriInd',
    'NotReqXML': '0',
    'Description': 'Indicates if a Cancel/Replace has caused an order to lose book priority.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '639',
    'Name': 'PriceImprovement',
    'Type': 'PriceOffset',
    'AbbrName': 'PxImprvmnt',
    'NotReqXML': '0',
    'Description': 'Amount of price improvement.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '640',
    'Name': 'Price2',
    'Type': 'Price',
    'AbbrName': 'Px2',
    'NotReqXML': '0',
    'Description': 'Price of the future part of a F/X swap order.\nSee Price (44) for description.',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '641',
    'Name': 'LastForwardPoints2',
    'Type': 'PriceOffset',
    'AbbrName': 'LastFwdPnts2',
    'NotReqXML': '0',
    'Description': 'F/X forward points of the future part of a F/X swap order added to LastSpotRate (94). May be a negative value.',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '642',
    'Name': 'BidForwardPoints2',
    'Type': 'PriceOffset',
    'AbbrName': 'BidFwdPnts2',
    'NotReqXML': '0',
    'Description': 'Bid F/X forward points of the future portion of a F/X swap quote added to spot rate. May be a negative value.',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '643',
    'Name': 'OfferForwardPoints2',
    'Type': 'PriceOffset',
    'AbbrName': 'OfrFwdPnts2',
    'NotReqXML': '0',
    'Description': 'Offer F/X forward points of the future portion of a F/X swap quote added to spot rate. May be a negative value.',
    'Added': 'FIX.4.3',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '644',
    'Name': 'RFQReqID',
    'Type': 'String',
    'AbbrName': 'RFQReqID',
    'NotReqXML': '0',
    'Description': 'RFQ Request ID - used to identify an RFQ Request.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '645',
    'Name': 'MktBidPx',
    'Type': 'Price',
    'AbbrName': 'MktBidPx',
    'NotReqXML': '0',
    'Description': 'Used to indicate the best bid in a market',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '646',
    'Name': 'MktOfferPx',
    'Type': 'Price',
    'AbbrName': 'MktOfrPx',
    'NotReqXML': '0',
    'Description': 'Used to indicate the best offer in a market',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '647',
    'Name': 'MinBidSize',
    'Type': 'Qty',
    'AbbrName': 'MinBidSz',
    'NotReqXML': '0',
    'Description': 'Used to indicate a minimum quantity for a bid. If this field is used the BidSize (134) field is interpreted as the maximum bid size',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '648',
    'Name': 'MinOfferSize',
    'Type': 'Qty',
    'AbbrName': 'MinOfrSz',
    'NotReqXML': '0',
    'Description': 'Used to indicate a minimum quantity for an offer. If this field is used the OfferSize (135) field is interpreted as the maximum offer size.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '649',
    'Name': 'QuoteStatusReqID',
    'Type': 'String',
    'AbbrName': 'StatReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Quote Status Request.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '650',
    'Name': 'LegalConfirm',
    'Type': 'Boolean',
    'AbbrName': 'LegalCnfm',
    'NotReqXML': '0',
    'Description': 'Indicates that this message is to serve as the final and legal confirmation.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '651',
    'Name': 'UnderlyingLastPx',
    'Type': 'Price',
    'AbbrName': 'UndLastPx',
    'NotReqXML': '0',
    'Description': 'The calculated or traded price for the underlying instrument that corresponds to a derivative. Used for transactions that include the cash instrument and the derivative.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '652',
    'Name': 'UnderlyingLastQty',
    'Type': 'Qty',
    'AbbrName': 'UndLastQty',
    'NotReqXML': '0',
    'Description': 'The calculated or traded quantity for the underlying instrument that corresponds to a derivative. Used for transactions that include the cash instrument and the derivative.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '654',
    'Name': 'LegRefID',
    'Type': 'String',
    'AbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Unique indicator for a specific leg.',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '655',
    'Name': 'ContraLegRefID',
    'Type': 'String',
    'AbbrName': 'CntraLegRefID',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'LegRefID',
    'NotReqXML': '0',
    'Description': 'Unique indicator for a specific leg for the ContraBroker (375).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '656',
    'Name': 'SettlCurrBidFxRate',
    'Type': 'float',
    'AbbrName': 'SettlCurrBidFxRt',
    'NotReqXML': '0',
    'Description': 'Foreign exchange rate used to compute the bid \'SettlCurrAmt\' (119) from Currency (15) to SettlCurrency (120)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '657',
    'Name': 'SettlCurrOfferFxRate',
    'Type': 'float',
    'AbbrName': 'SettlCurrOfrFxRt',
    'NotReqXML': '0',
    'Description': 'Foreign exchange rate used to compute the offer \'SettlCurrAmt\' (119) from Currency (15) to SettlCurrency (120)',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '658',
    'Name': 'QuoteRequestRejectReason',
    'Type': 'int',
    'AbbrName': 'ReqRejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason Quote was rejected:',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '659',
    'Name': 'SideComplianceID',
    'Type': 'String',
    'AbbrName': 'SideComplianceID',
    'NotReqXML': '0',
    'Description': 'ID within repeating group of sides which is used to represent this transaction for compliance purposes (e.g. OATS reporting).',
    'Added': 'FIX.4.3'
  },
  {
    'Tag': '660',
    'Name': 'AcctIDSource',
    'Type': 'int',
    'AbbrName': 'AcctIDSrc',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Used to identify the source of the Account (1) code. This is especially useful if the account is a new account that the Respondent may not have setup yet in their system.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '661',
    'Name': 'AllocAcctIDSource',
    'Type': 'int',
    'AbbrName': 'ActIDSrc',
    'NotReqXML': '0',
    'EnumDatatype': '660',
    'Description': 'Used to identify the source of the AllocAccount (79) code.\nSee AcctIDSource (660) for valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '662',
    'Name': 'BenchmarkPrice',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Specifies the price of the benchmark.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '663',
    'Name': 'BenchmarkPriceType',
    'Type': 'int',
    'AbbrName': 'PxTyp',
    'NotReqXML': '0',
    'EnumDatatype': '423',
    'Description': 'Identifies type of BenchmarkPrice (662).\nSee PriceType (423) for valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '664',
    'Name': 'ConfirmID',
    'Type': 'String',
    'AbbrName': 'CnfmID',
    'NotReqXML': '0',
    'Description': 'Message reference for Confirmation',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '665',
    'Name': 'ConfirmStatus',
    'Type': 'int',
    'AbbrName': 'CnfmStat',
    'NotReqXML': '0',
    'Description': 'Identifies the status of the Confirmation.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '666',
    'Name': 'ConfirmTransType',
    'Type': 'int',
    'AbbrName': 'CnfmTransTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the Confirmation transaction type.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '667',
    'Name': 'ContractSettlMonth',
    'Type': 'MonthYear',
    'AbbrName': 'CSetMo',
    'NotReqXML': '0',
    'Description': 'Specifies when the contract (i.e. MBS/TBA) will settle.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '668',
    'Name': 'DeliveryForm',
    'Type': 'int',
    'AbbrName': 'DlvryForm',
    'NotReqXML': '0',
    'Description': 'Identifies the form of delivery.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '669',
    'Name': 'LastParPx',
    'Type': 'Price',
    'AbbrName': 'LastParPx',
    'NotReqXML': '0',
    'Description': 'Last price expressed in percent-of-par. Conditionally required for Fixed Income trades when LastPx (31) is expressed in Yield, Spread, Discount or any other type.\nUsage: Execution Report and Allocation Report repeating executions block (from sellside).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '670',
    'Name': 'NoLegAllocs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoLegAllocs',
    'NotReqXML': '1',
    'Description': 'Number of Allocations for the leg',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '671',
    'Name': 'LegAllocAccount',
    'Type': 'String',
    'AbbrName': 'AllocAcct',
    'NotReqXML': '0',
    'Description': 'Allocation Account for the leg\nSee AllocAccount (79) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '672',
    'Name': 'LegIndividualAllocID',
    'Type': 'String',
    'AbbrName': 'IndAllocID',
    'NotReqXML': '0',
    'Description': 'Reference for the individual allocation ticket\nSee IndividualAllocID (467) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '673',
    'Name': 'LegAllocQty',
    'Type': 'Qty',
    'AbbrName': 'AllocQty',
    'NotReqXML': '0',
    'Description': 'Leg allocation quantity.\nSee AllocQty (80) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '674',
    'Name': 'LegAllocAcctIDSource',
    'Type': 'String',
    'AbbrName': 'AllocAcctIDSrc',
    'NotReqXML': '0',
    'Description': 'The source of the LegAllocAccount (671)\nSee AllocAcctIDSource (661) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '675',
    'Name': 'LegSettlCurrency',
    'Type': 'Currency',
    'AbbrName': 'SettlCcy',
    'NotReqXML': '0',
    'Description': 'Identifies settlement currency for the Leg.\nSee SettlCurrency (20) for description and valid values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '676',
    'Name': 'LegBenchmarkCurveCurrency',
    'Type': 'Currency',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'LegBenchmarkPrice (679) currency\nSee BenchmarkCurveCurrency (220) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '677',
    'Name': 'LegBenchmarkCurveName',
    'Type': 'String',
    'AbbrName': 'Name',
    'NotReqXML': '0',
    'EnumDatatype': '221',
    'Description': 'Name of the Leg Benchmark Curve.\nSee BenchmarkCurveName (22) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '678',
    'Name': 'LegBenchmarkCurvePoint',
    'Type': 'String',
    'AbbrName': 'Point',
    'NotReqXML': '0',
    'Description': 'Identifies the point on the Leg Benchmark Curve.\nSee BenchmarkCurvePoint (222) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '679',
    'Name': 'LegBenchmarkPrice',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Used to identify the price of the benchmark security.\nSee BenchmarkPrice (662) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '680',
    'Name': 'LegBenchmarkPriceType',
    'Type': 'int',
    'AbbrName': 'PxTyp',
    'NotReqXML': '0',
    'Description': 'The price type of the LegBenchmarkPrice.\nSee BenchmarkPriceType (663) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '681',
    'Name': 'LegBidPx',
    'Type': 'Price',
    'AbbrName': 'BidPx',
    'NotReqXML': '0',
    'Description': 'Bid price of this leg.\nSee BidPx (32) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '682',
    'Name': 'LegIOIQty',
    'Type': 'String',
    'AbbrName': 'IOIQty',
    'NotReqXML': '0',
    'EnumDatatype': '27',
    'UnionDataType': 'Qty',
    'Description': 'Leg-specific IOI quantity.\nSee IOIQty (27) for description and valid values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '683',
    'Name': 'NoLegStipulations',
    'Type': 'NumInGroup',
    'AbbrName': 'NoLegStips',
    'NotReqXML': '1',
    'Description': 'Number of leg stipulation entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '684',
    'Name': 'LegOfferPx',
    'Type': 'Price',
    'AbbrName': 'OfrPx',
    'NotReqXML': '0',
    'Description': 'Offer price of this leg.\nSee OfferPx (133) for description and valid values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '685',
    'Name': 'LegOrderQty',
    'Type': 'Qty',
    'AbbrName': 'OrdQty',
    'NotReqXML': '0',
    'Description': 'Quantity ordered of this leg.\nSee OrderQty (38) for description and valid values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '686',
    'Name': 'LegPriceType',
    'Type': 'int',
    'AbbrName': 'PxTyp',
    'NotReqXML': '0',
    'EnumDatatype': '423',
    'Description': 'The price type of the LegBidPx (681) and/or LegOfferPx (684).\nSee PriceType (423) for description and valid values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '687',
    'Name': 'LegQty',
    'Type': 'Qty',
    'AbbrName': 'Qty',
    'NotReqXML': '0',
    'Description': 'Quantity of this leg, e.g. in Quote dialog.\nSee Quantity (53) for description and valid values',
    'Added': 'FIX.4.4',
    'Deprecated': 'FIX.5.0SP1'
  },
  {
    'Tag': '688',
    'Name': 'LegStipulationType',
    'Type': 'String',
    'AbbrName': 'StipTyp',
    'NotReqXML': '0',
    'EnumDatatype': '233',
    'Description': 'For Fixed Income, type of Stipulation for this leg.\nSee StipulationType (233) for description and valid values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '689',
    'Name': 'LegStipulationValue',
    'Type': 'String',
    'AbbrName': 'StipVal',
    'NotReqXML': '0',
    'Description': 'For Fixed Income, value of stipulation.\nSee StipulationValue (234) for description and valid values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '690',
    'Name': 'LegSwapType',
    'Type': 'int',
    'AbbrName': 'SwapTyp',
    'NotReqXML': '0',
    'Description': 'For Fixed Income, used instead of LegQty (687) or LegOrderQty (685) to requests the respondent to calculate the quantity based on the quantity on the opposite side of the swap.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '691',
    'Name': 'Pool',
    'Type': 'String',
    'AbbrName': 'Pool',
    'NotReqXML': '0',
    'Description': 'For Fixed Income, identifies MBS / ABS pool.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '692',
    'Name': 'QuotePriceType',
    'Type': 'int',
    'AbbrName': 'QuotPxTyp',
    'NotReqXML': '0',
    'Description': 'Code to represent price type requested in Quote.\nIf the Quote Request is for a Swap values 1-8 apply to all legs.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '693',
    'Name': 'QuoteRespID',
    'Type': 'String',
    'AbbrName': 'RspID',
    'NotReqXML': '0',
    'Description': 'Message reference for Quote Response',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '694',
    'Name': 'QuoteRespType',
    'Type': 'int',
    'AbbrName': 'RspTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type of Quote Response.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '695',
    'Name': 'QuoteQualifier',
    'Type': 'char',
    'AbbrName': 'Qual',
    'NotReqXML': '0',
    'EnumDatatype': '104',
    'Description': 'Code to qualify Quote use\nSee IOIQualifier (104) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '696',
    'Name': 'YieldRedemptionDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'RedDt',
    'NotReqXML': '0',
    'Description': 'Date to which the yield has been calculated (i.e. maturity, par call or current call, pre-refunded date).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '697',
    'Name': 'YieldRedemptionPrice',
    'Type': 'Price',
    'AbbrName': 'RedPx',
    'NotReqXML': '0',
    'Description': 'Price to which the yield has been calculated.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '698',
    'Name': 'YieldRedemptionPriceType',
    'Type': 'int',
    'AbbrName': 'RedPxTyp',
    'NotReqXML': '0',
    'EnumDatatype': '423',
    'Description': 'The price type of the YieldRedemptionPrice (697)\nSee PriceType (423) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '699',
    'Name': 'BenchmarkSecurityID',
    'Type': 'String',
    'AbbrName': 'SecID',
    'NotReqXML': '0',
    'Description': 'The identifier of the benchmark security, e.g. Treasury against Corporate bond.\nSee SecurityID (tag 48) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '700',
    'Name': 'ReversalIndicator',
    'Type': 'Boolean',
    'AbbrName': 'ReversalInd',
    'NotReqXML': '0',
    'Description': 'Indicates a trade that reverses a previous trade.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '701',
    'Name': 'YieldCalcDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'CalcDt',
    'NotReqXML': '0',
    'Description': 'Include as needed to clarify yield irregularities associated with date, e.g. when it falls on a non-business day.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '702',
    'Name': 'NoPositions',
    'Type': 'NumInGroup',
    'AbbrName': 'NoPoss',
    'NotReqXML': '1',
    'Description': 'Number of position entries.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '703',
    'Name': 'PosType',
    'Type': 'String',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Used to identify the type of quantity that is being returned.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '704',
    'Name': 'LongQty',
    'Type': 'Qty',
    'AbbrName': 'Long',
    'NotReqXML': '0',
    'Description': 'Long Quantity',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '705',
    'Name': 'ShortQty',
    'Type': 'Qty',
    'AbbrName': 'Short',
    'NotReqXML': '0',
    'Description': 'Short Quantity',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '706',
    'Name': 'PosQtyStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Status of this position.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '707',
    'Name': 'PosAmtType',
    'Type': 'String',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Type of Position amount',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '708',
    'Name': 'PosAmt',
    'Type': 'Amt',
    'AbbrName': 'Amt',
    'NotReqXML': '0',
    'Description': 'Position amount',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '709',
    'Name': 'PosTransType',
    'Type': 'int',
    'AbbrName': 'TxnTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type of position transaction',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '710',
    'Name': 'PosReqID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for the position maintenance request as assigned by the submitter',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '711',
    'Name': 'NoUnderlyings',
    'Type': 'NumInGroup',
    'AbbrName': 'NoUnds',
    'NotReqXML': '1',
    'Description': 'Number of underlying legs that make up the security.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '712',
    'Name': 'PosMaintAction',
    'Type': 'int',
    'AbbrName': 'Actn',
    'NotReqXML': '0',
    'Description': 'Maintenance Action to be performed.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '713',
    'Name': 'OrigPosReqRefID',
    'Type': 'String',
    'AbbrName': 'OrigPosReqRefID',
    'BaseCategory': 'PositionMaintenance',
    'BaseCategoryAbbrName': 'OrigReqRefID',
    'NotReqXML': '0',
    'Description': 'Reference to the PosReqID (710) of a previous maintenance request that is being replaced or canceled.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '714',
    'Name': 'PosMaintRptRefID',
    'Type': 'String',
    'AbbrName': 'RptRefID',
    'NotReqXML': '0',
    'Description': 'Reference to a PosMaintRptID (721) from a previous Position Maintenance Report that is being replaced or canceled.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '715',
    'Name': 'ClearingBusinessDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'BizDt',
    'NotReqXML': '0',
    'Description': 'The \'Clearing Business Date\' referred to by this maintenance request.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '716',
    'Name': 'SettlSessID',
    'Type': 'String',
    'AbbrName': 'SetSesID',
    'NotReqXML': '0',
    'Description': 'Identifies a specific settlement session',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '717',
    'Name': 'SettlSessSubID',
    'Type': 'String',
    'AbbrName': 'SetSesSub',
    'NotReqXML': '0',
    'Description': 'SubID value associated with SettlSessID(716)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '718',
    'Name': 'AdjustmentType',
    'Type': 'int',
    'AbbrName': 'AdjTyp',
    'NotReqXML': '0',
    'Description': 'Type of adjustment to be applied, used for PCS and PAJ',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '719',
    'Name': 'ContraryInstructionIndicator',
    'Type': 'Boolean',
    'AbbrName': 'CntraryInstrctnInd',
    'BaseCategory': 'SingleGeneralOrderHandling',
    'BaseCategoryAbbrName': 'InstrctnInd',
    'NotReqXML': '0',
    'Description': 'Used to indicate when a contrary instruction for exercise or abandonment is being submitted',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '720',
    'Name': 'PriorSpreadIndicator',
    'Type': 'Boolean',
    'AbbrName': 'PriorSpreadInd',
    'NotReqXML': '0',
    'Description': 'Indicates if requesting a rollover of prior day\'s spread submissions.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '721',
    'Name': 'PosMaintRptID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for this position report',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '722',
    'Name': 'PosMaintStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Status of Position Maintenance Request',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '723',
    'Name': 'PosMaintResult',
    'Type': 'int',
    'AbbrName': 'Rslt',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Result of Position Maintenance Request.\n4000+ Reserved and available for bi-laterally agreed upon user-defined values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '724',
    'Name': 'PosReqType',
    'Type': 'int',
    'AbbrName': 'ReqTyp',
    'NotReqXML': '0',
    'Description': 'Used to specify the type of position request being made.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '725',
    'Name': 'ResponseTransportType',
    'Type': 'int',
    'AbbrName': 'RspTransportTyp',
    'NotReqXML': '0',
    'Description': 'Identifies how the response to the request should be transmitted.\nDetails specified via ResponseDestination (726).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '726',
    'Name': 'ResponseDestination',
    'Type': 'String',
    'AbbrName': 'RspDest',
    'NotReqXML': '0',
    'Description': 'URI (Uniform Resource Identifier) for details) or other pre-arranged value. Used in conjunction with ResponseTransportType (725) value of Out-of-Band to identify the out-of-band destination.\nSee \'Appendix 6-B FIX Fields Based Upon Other Standards\'',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '727',
    'Name': 'TotalNumPosReports',
    'Type': 'int',
    'AbbrName': 'TotRpts',
    'NotReqXML': '0',
    'Description': 'Total number of Position Reports being returned.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '728',
    'Name': 'PosReqResult',
    'Type': 'int',
    'AbbrName': 'Rslt',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Result of Request for Position\n4000+ Reserved and available for bi-laterally agreed upon user-defined values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '729',
    'Name': 'PosReqStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Status of Request for Positions',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '730',
    'Name': 'SettlPrice',
    'Type': 'Price',
    'AbbrName': 'SetPx',
    'NotReqXML': '0',
    'Description': 'Settlement price',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '731',
    'Name': 'SettlPriceType',
    'Type': 'int',
    'AbbrName': 'SetPxTyp',
    'NotReqXML': '0',
    'Description': 'Type of settlement price',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '732',
    'Name': 'UnderlyingSettlPrice',
    'Type': 'Price',
    'AbbrName': 'UndSetPx',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s SettlPrice.\nSee SettlPrice (730) field for description',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '733',
    'Name': 'UnderlyingSettlPriceType',
    'Type': 'int',
    'AbbrName': 'UndSetPxTyp',
    'NotReqXML': '0',
    'EnumDatatype': '731',
    'Description': 'Underlying security\'s SettlPriceType.\nSee SettlPriceType (731) field for description',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '734',
    'Name': 'PriorSettlPrice',
    'Type': 'Price',
    'AbbrName': 'PriSetPx',
    'NotReqXML': '0',
    'Description': 'Previous settlement price',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '735',
    'Name': 'NoQuoteQualifiers',
    'Type': 'NumInGroup',
    'AbbrName': 'NoQuotQuals',
    'NotReqXML': '1',
    'Description': 'Number of repeating groups of QuoteQualifiers (695).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '736',
    'Name': 'AllocSettlCurrency',
    'Type': 'Currency',
    'AbbrName': 'AllocSettlCcy',
    'NotReqXML': '0',
    'Description': 'Currency code of settlement denomination for a specific AllocAccount (79).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '737',
    'Name': 'AllocSettlCurrAmt',
    'Type': 'Amt',
    'AbbrName': 'AllocSettlCurrAmt',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'SettlCcyAmt',
    'NotReqXML': '0',
    'Description': 'Total amount due expressed in settlement currency (includes the effect of the forex transaction) for a specific AllocAccount (79).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '738',
    'Name': 'InterestAtMaturity',
    'Type': 'Amt',
    'AbbrName': 'IntAtMat',
    'NotReqXML': '0',
    'Description': 'Amount of interest (i.e. lump-sum) at maturity.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '739',
    'Name': 'LegDatedDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Dated',
    'NotReqXML': '0',
    'Description': 'The effective date of a new securities issue determined by its underwriters. Often but not always the same as the Issue Date and the Interest Accrual Date',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '740',
    'Name': 'LegPool',
    'Type': 'String',
    'AbbrName': 'Pool',
    'NotReqXML': '0',
    'Description': 'For Fixed Income, identifies MBS / ABS pool for a specific leg of a multi-leg instrument.\nSee Pool (691) for description and valid values.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '741',
    'Name': 'AllocInterestAtMaturity',
    'Type': 'Amt',
    'AbbrName': 'IntAtMat',
    'NotReqXML': '0',
    'Description': 'Amount of interest (i.e. lump-sum) at maturity at the account-level.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '742',
    'Name': 'AllocAccruedInterestAmt',
    'Type': 'Amt',
    'AbbrName': 'AcrdIntAmt',
    'NotReqXML': '0',
    'Description': 'Amount of Accrued Interest for convertible bonds and fixed income at the allocation-level.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '743',
    'Name': 'DeliveryDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'DlvDt',
    'NotReqXML': '0',
    'Description': 'Date of delivery.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '744',
    'Name': 'AssignmentMethod',
    'Type': 'char',
    'AbbrName': 'AsgnMeth',
    'NotReqXML': '0',
    'Description': 'Method by which short positions are assigned to an exercise notice during exercise and assignment processing',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '745',
    'Name': 'AssignmentUnit',
    'Type': 'Qty',
    'AbbrName': 'Unit',
    'NotReqXML': '0',
    'Description': 'Quantity Increment used in performing assignment.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '746',
    'Name': 'OpenInterest',
    'Type': 'Amt',
    'AbbrName': 'OpenInt',
    'NotReqXML': '0',
    'Description': 'Open interest that was eligible for assignment.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '747',
    'Name': 'ExerciseMethod',
    'Type': 'char',
    'AbbrName': 'ExrMethod',
    'NotReqXML': '0',
    'Description': 'Exercise Method used to in performing assignment.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '748',
    'Name': 'TotNumTradeReports',
    'Type': 'int',
    'AbbrName': 'TotNumTrdRpts',
    'NotReqXML': '0',
    'Description': 'Total number of trade reports returned.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '749',
    'Name': 'TradeRequestResult',
    'Type': 'int',
    'AbbrName': 'ReqRslt',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Result of Trade Request',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '750',
    'Name': 'TradeRequestStatus',
    'Type': 'int',
    'AbbrName': 'ReqStat',
    'NotReqXML': '0',
    'Description': 'Status of Trade Request.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '751',
    'Name': 'TradeReportRejectReason',
    'Type': 'int',
    'AbbrName': 'RejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason Trade Capture Request was rejected.\n100+ Reserved and available for bi-laterally agreed upon user-defined values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '752',
    'Name': 'SideMultiLegReportingType',
    'Type': 'int',
    'AbbrName': 'MLegRptTyp',
    'NotReqXML': '0',
    'Description': 'Used to indicate if the side being reported on Trade Capture Report represents a leg of a multileg instrument or a single security.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '753',
    'Name': 'NoPosAmt',
    'Type': 'NumInGroup',
    'AbbrName': 'NoPosAmt',
    'NotReqXML': '1',
    'Description': 'Number of position amount entries.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '754',
    'Name': 'AutoAcceptIndicator',
    'Type': 'Boolean',
    'AbbrName': 'AutoAcceptInd',
    'NotReqXML': '0',
    'Description': 'Identifies whether or not an allocation has been automatically accepted on behalf of the Carry Firm by the Clearing House.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '755',
    'Name': 'AllocReportID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Allocation Report message.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '756',
    'Name': 'NoNested2PartyIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNst2PtyIDs',
    'NotReqXML': '1',
    'Description': 'Number of Nested2PartyID (757), Nested2PartyIDSource (758), and Nested2PartyRole (759) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '757',
    'Name': 'Nested2PartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within a \'second instance\' Nested repeating group.\nSame values as PartyID (448)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '758',
    'Name': 'Nested2PartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within a \'second instance\' Nested repeating group.\nSame values as PartyIDSource (447)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '759',
    'Name': 'Nested2PartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within a \'second instance\' Nested repeating group.\nSame values as PartyRole (452)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '760',
    'Name': 'Nested2PartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartySubID value within a \'second instance\' Nested repeating group.\nSame values as PartySubID (523)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '761',
    'Name': 'BenchmarkSecurityIDSource',
    'Type': 'String',
    'AbbrName': 'SecIDSrc',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Identifies class or source of the BenchmarkSecurityID (699) value. Required if BenchmarkSecurityID is specified.\nSame values as the SecurityIDSource (22) field',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '762',
    'Name': 'SecuritySubType',
    'Type': 'String',
    'AbbrName': 'SubTyp',
    'NotReqXML': '0',
    'Description': 'Sub-type qualification/identification of the SecurityType. As an example for SecurityType(167)=\'REPO\', the SecuritySubType=\'General Collateral\' can be used to further specify the type of REPO.\nIf SecuritySubType is used then SecurityType is required.\nFor SecurityType=\'MLEG\' a name of the option or futures strategy name can be specified, such as \'Calendar\', \'Vertical\', \'Butterfly\'.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '763',
    'Name': 'UnderlyingSecuritySubType',
    'Type': 'String',
    'AbbrName': 'SubTyp',
    'NotReqXML': '0',
    'Description': 'Underlying security\'s SecuritySubType.\nSee SecuritySubType (762) field for description',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '764',
    'Name': 'LegSecuritySubType',
    'Type': 'String',
    'AbbrName': 'SecSubTyp',
    'NotReqXML': '0',
    'Description': 'SecuritySubType of the leg instrument.\nSee SecuritySubType (762) field for description',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '765',
    'Name': 'AllowableOneSidednessPct',
    'Type': 'Percentage',
    'AbbrName': 'AOSPct',
    'NotReqXML': '0',
    'Description': 'The maximum percentage that execution of one side of a program trade can exceed execution of the other.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '766',
    'Name': 'AllowableOneSidednessValue',
    'Type': 'Amt',
    'AbbrName': 'AOSValu',
    'NotReqXML': '0',
    'Description': 'The maximum amount that execution of one side of a program trade can exceed execution of the other.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '767',
    'Name': 'AllowableOneSidednessCurr',
    'Type': 'Currency',
    'AbbrName': 'AOSCurr',
    'NotReqXML': '0',
    'Description': 'The currency that AllowableOneSidednessValue (766) is expressed in if AllowableOneSidednessValue is used.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '768',
    'Name': 'NoTrdRegTimestamps',
    'Type': 'NumInGroup',
    'AbbrName': 'NoTrdRegTmstamps',
    'NotReqXML': '1',
    'Description': 'Number of TrdRegTimestamp (769) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '769',
    'Name': 'TrdRegTimestamp',
    'Type': 'UTCTimestamp',
    'AbbrName': 'TS',
    'NotReqXML': '0',
    'Description': 'Traded / Regulatory timestamp value. Use to store time information required by government regulators or self regulatory organizations (such as an exchange or clearing house).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '770',
    'Name': 'TrdRegTimestampType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Traded / Regulatory timestamp type.\nNote of Applicability: values are required in US futures markets by the CFTC to support computerized trade reconstruction.\n(see Volume : \'Glossary\' for value definitions)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '771',
    'Name': 'TrdRegTimestampOrigin',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'Description': 'Text which identifies the \'origin\' (i.e. system which was used to generate the time stamp) for the Traded / Regulatory timestamp value.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '772',
    'Name': 'ConfirmRefID',
    'Type': 'String',
    'AbbrName': 'CnfmRefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier to be used with ConfirmTransType (666) = Replace or Cancel',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '773',
    'Name': 'ConfirmType',
    'Type': 'int',
    'AbbrName': 'CnfmTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type of Confirmation message being sent.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '774',
    'Name': 'ConfirmRejReason',
    'Type': 'int',
    'AbbrName': 'CnfmRejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies the reason for rejecting a Confirmation.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '775',
    'Name': 'BookingType',
    'Type': 'int',
    'AbbrName': 'BkngTyp',
    'NotReqXML': '0',
    'Description': 'Method for booking out this order. Used when notifying a broker that an order to be settled by that broker is to be booked out as an OTC derivative (e.g. CFD or similar).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '776',
    'Name': 'IndividualAllocRejCode',
    'Type': 'int',
    'AbbrName': 'IndAllocRejCode',
    'NotReqXML': '0',
    'EnumDatatype': '88',
    'Description': 'Identified reason for rejecting an individual AllocAccount (79) detail.\nSame values as AllocRejCode (88)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '777',
    'Name': 'SettlInstMsgID',
    'Type': 'String',
    'AbbrName': 'SettlInstMsgID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for Settlement Instruction message.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '778',
    'Name': 'NoSettlInst',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSettlInst',
    'NotReqXML': '1',
    'Description': 'Number of settlement instructions within repeating group.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '779',
    'Name': 'LastUpdateTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'LastUpdateTm',
    'NotReqXML': '0',
    'Description': 'Timestamp of last update to data item (or creation if no updates made since creation).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '780',
    'Name': 'AllocSettlInstType',
    'Type': 'int',
    'AbbrName': 'SettlInstTyp',
    'NotReqXML': '0',
    'Description': 'Used to indicate whether settlement instructions are provided on an allocation instruction message, and if not, how they are to be derived.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '781',
    'Name': 'NoSettlPartyIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSettlPtyIDs',
    'NotReqXML': '1',
    'Description': 'Number of SettlPartyID (782), SettlPartyIDSource (783), and SettlPartyRole (784) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '782',
    'Name': 'SettlPartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within a settlement parties component. Nested repeating group.\nSame values as PartyID (448)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '783',
    'Name': 'SettlPartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within a settlement parties component.\nSame values as PartyIDSource (447)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '784',
    'Name': 'SettlPartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within a settlement parties component.\nSame values as PartyRole (452)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '785',
    'Name': 'SettlPartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartySubID value within a settlement parties component.\nSame values as PartySubID (523)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '786',
    'Name': 'SettlPartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Type of SettlPartySubID (785) value.\nSame values as PartySubIDType (803)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '787',
    'Name': 'DlvyInstType',
    'Type': 'char',
    'AbbrName': 'InstTyp',
    'NotReqXML': '0',
    'Description': 'Used to indicate whether a delivery instruction is used for securities or cash settlement.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '788',
    'Name': 'TerminationType',
    'Type': 'int',
    'AbbrName': 'TrmTyp',
    'NotReqXML': '0',
    'Description': 'Type of financing termination.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '789',
    'Name': 'NextExpectedMsgSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'NextExpectedMsgSeqNum',
    'NotReqXML': '1',
    'Description': 'Next expected MsgSeqNum value to be received.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '790',
    'Name': 'OrdStatusReqID',
    'Type': 'String',
    'AbbrName': 'StatReqID',
    'NotReqXML': '0',
    'Description': 'Can be used to uniquely identify a specific Order Status Request message.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '791',
    'Name': 'SettlInstReqID',
    'Type': 'String',
    'AbbrName': 'SettlInstReqID',
    'NotReqXML': '0',
    'Description': 'Unique ID of settlement instruction request message',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '792',
    'Name': 'SettlInstReqRejCode',
    'Type': 'int',
    'AbbrName': 'SettlInstReqRejCode',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies reason for rejection (of a settlement instruction request message).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '793',
    'Name': 'SecondaryAllocID',
    'Type': 'String',
    'AbbrName': 'AllocID2',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'ID2',
    'NotReqXML': '0',
    'Description': 'Secondary allocation identifier. Unlike the AllocID (70), this can be shared across a number of allocation instruction or allocation report messages, thereby making it possible to pass an identifier for an original allocation message on multiple messages (e.g. from one party to a second to a third, across cancel and replace messages etc.).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '794',
    'Name': 'AllocReportType',
    'Type': 'int',
    'AbbrName': 'RptTyp',
    'NotReqXML': '0',
    'Description': 'Describes the specific type or purpose of an Allocation Report message',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '795',
    'Name': 'AllocReportRefID',
    'Type': 'String',
    'AbbrName': 'RptRefID',
    'NotReqXML': '0',
    'Description': 'Reference identifier to be used with AllocTransType (7) = Replace or Cancel',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '796',
    'Name': 'AllocCancReplaceReason',
    'Type': 'int',
    'AbbrName': 'CxlRplcRsn',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'CxlRplcRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason for cancelling or replacing an Allocation Instruction or Allocation Report message',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '797',
    'Name': 'CopyMsgIndicator',
    'Type': 'Boolean',
    'AbbrName': 'CopyMsgInd',
    'NotReqXML': '0',
    'Description': 'Indicates whether or not this message is a drop copy of another message.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '798',
    'Name': 'AllocAccountType',
    'Type': 'int',
    'AbbrName': 'AcctTyp',
    'NotReqXML': '0',
    'Description': 'Type of account associated with a confirmation or other trade-level message',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '799',
    'Name': 'OrderAvgPx',
    'Type': 'Price',
    'AbbrName': 'AvgPx',
    'NotReqXML': '0',
    'Description': 'Average price for a specific order',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '800',
    'Name': 'OrderBookingQty',
    'Type': 'Qty',
    'AbbrName': 'BkngQty',
    'NotReqXML': '0',
    'Description': 'Quantity of the order that is being booked out as part of an Allocation Instruction or Allocation Report message',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '801',
    'Name': 'NoSettlPartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSettlPtySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of SettlPartySubID (785) and SettlPartySubIDType (786) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '802',
    'Name': 'NoPartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoPtySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of PartySubID (523)and PartySubIDType (803) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '803',
    'Name': 'PartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved4000Plus',
    'Description': 'Type of PartySubID (523) value\n4000+ = Reserved and available for bi-laterally agreed upon user defined values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '804',
    'Name': 'NoNestedPartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNstPtySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of NestedPartySubID (545) and NestedPartySubIDType (805) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '805',
    'Name': 'NestedPartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Type of NestedPartySubID (545) value.\nSame values as PartySubIDType (803)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '806',
    'Name': 'NoNested2PartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNst2PtySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of Nested2PartySubID (760) and Nested2PartySubIDType (807) entries. Second instance of <NestedParties>.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '807',
    'Name': 'Nested2PartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Type of Nested2PartySubID (760) value. Second instance of <NestedParties>.\nSame values as PartySubIDType (803)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '808',
    'Name': 'AllocIntermedReqType',
    'Type': 'int',
    'AbbrName': 'IntermedReqTyp',
    'BaseCategory': 'Allocation',
    'BaseCategoryAbbrName': 'ImReqTyp',
    'NotReqXML': '0',
    'Description': 'Response to allocation to be communicated to a counterparty through an intermediary, i.e. clearing house. Used in conjunction with AllocType = \'Request to Intermediary\' and AllocReportType = \'Request to Intermediary\'',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '810',
    'Name': 'UnderlyingPx',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Underlying price associate with a derivative instrument.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '811',
    'Name': 'PriceDelta',
    'Type': 'float',
    'AbbrName': 'PxDelta',
    'NotReqXML': '0',
    'Description': 'The rate of change in the price of a derivative with respect to the movement in the price of the underlying instrument(s) upon which the derivative instrument price is based.\nThis value is normally between -1.0 and 1.0.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '812',
    'Name': 'ApplQueueMax',
    'Type': 'int',
    'AbbrName': 'ApplQuMax',
    'NotReqXML': '0',
    'Description': 'Used to specify the maximum number of application messages that can be queued bedore a corrective action needs to take place to resolve the queuing issue.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '813',
    'Name': 'ApplQueueDepth',
    'Type': 'int',
    'AbbrName': 'ApplQuDepth',
    'NotReqXML': '0',
    'Description': 'Current number of application messages that were queued at the time that the message was created by the counterparty.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '814',
    'Name': 'ApplQueueResolution',
    'Type': 'int',
    'AbbrName': 'ApplQuResolution',
    'NotReqXML': '0',
    'Description': 'Resolution taken when ApplQueueDepth (813) exceeds ApplQueueMax (812) or system specified maximum queue size.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '815',
    'Name': 'ApplQueueAction',
    'Type': 'int',
    'AbbrName': 'ApplQuActn',
    'NotReqXML': '0',
    'Description': 'Action to take to resolve an application message queue (backlog).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '816',
    'Name': 'NoAltMDSource',
    'Type': 'NumInGroup',
    'AbbrName': 'NoAltMDSrc',
    'NotReqXML': '1',
    'Description': 'Number of alternative market data sources',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '817',
    'Name': 'AltMDSourceID',
    'Type': 'String',
    'AbbrName': 'AltMDSrcID',
    'NotReqXML': '0',
    'Description': 'Session layer source for market data\n(For the standard FIX session layer, this would be the TargetCompID (56) where market data can be obtained).',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '818',
    'Name': 'SecondaryTradeReportID',
    'Type': 'String',
    'AbbrName': 'TrdRptID2',
    'BaseCategory': 'TradeCapture',
    'BaseCategoryAbbrName': 'RptID2',
    'NotReqXML': '0',
    'Description': 'Secondary trade report identifier - can be used to associate an additional identifier with a trade.',
    'Added': 'FIX.4.4',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '819',
    'Name': 'AvgPxIndicator',
    'Type': 'int',
    'AbbrName': 'AvgPxInd',
    'NotReqXML': '0',
    'Description': 'Average Pricing Indicator',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '820',
    'Name': 'TradeLinkID',
    'Type': 'String',
    'AbbrName': 'LinkID',
    'BaseCategory': 'TradeCapture',
    'BaseCategoryAbbrName': 'LinkID',
    'NotReqXML': '0',
    'Description': 'Used to link a group of trades together. Useful for linking a group of trades together for average price calculations.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '821',
    'Name': 'OrderInputDevice',
    'Type': 'String',
    'AbbrName': 'OrdInptDev',
    'NotReqXML': '0',
    'Description': 'Specific device number, terminal number or station where order was entered',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '822',
    'Name': 'UnderlyingTradingSessionID',
    'Type': 'String',
    'AbbrName': 'UndSesID',
    'NotReqXML': '0',
    'Description': 'Trading Session in which the underlying instrument trades',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '823',
    'Name': 'UnderlyingTradingSessionSubID',
    'Type': 'String',
    'AbbrName': 'UndSesSub',
    'NotReqXML': '0',
    'Description': 'Trading Session sub identifier in which the underlying instrument trades',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '824',
    'Name': 'TradeLegRefID',
    'Type': 'String',
    'AbbrName': 'TrdLegRefID',
    'NotReqXML': '0',
    'Description': 'Reference to the leg of a multileg instrument to which this trade refers',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '825',
    'Name': 'ExchangeRule',
    'Type': 'String',
    'AbbrName': 'ExchRule',
    'NotReqXML': '0',
    'Description': 'Used to report any exchange rules that apply to this trade.\nPrimarily intended for US futures markets. Certain trading practices are permitted by the CFTC, such as large lot trading, block trading, all or none trades. If the rules are used, the exchanges are required to indicate these rules on the trade.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '826',
    'Name': 'TradeAllocIndicator',
    'Type': 'int',
    'AbbrName': 'AllocInd',
    'NotReqXML': '0',
    'Description': 'Identifies how the trade is to be allocated',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '827',
    'Name': 'ExpirationCycle',
    'Type': 'int',
    'AbbrName': 'ExpirationCycle',
    'NotReqXML': '0',
    'Description': 'Part of trading cycle when an instrument expires. Field is applicable for derivatives.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '828',
    'Name': 'TrdType',
    'Type': 'int',
    'AbbrName': 'TrdTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved1000Plus',
    'Description': 'Type of Trade:',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '829',
    'Name': 'TrdSubType',
    'Type': 'int',
    'AbbrName': 'TrdSubTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved1000Plus',
    'Description': 'Further qualification to the trade type',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '830',
    'Name': 'TransferReason',
    'Type': 'String',
    'AbbrName': 'TrnsfrRsn',
    'NotReqXML': '0',
    'Description': 'Reason trade is being transferred',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '832',
    'Name': 'TotNumAssignmentReports',
    'Type': 'int',
    'AbbrName': 'TotNumAsgnRpts',
    'NotReqXML': '0',
    'Description': 'Total Number of Assignment Reports being returned to a firm',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '833',
    'Name': 'AsgnRptID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for the Assignment Report',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '834',
    'Name': 'ThresholdAmount',
    'Type': 'PriceOffset',
    'AbbrName': 'ThresholdAmt',
    'NotReqXML': '0',
    'Description': 'Amount that a position has to be in the money before it is exercised.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '835',
    'Name': 'PegMoveType',
    'Type': 'int',
    'AbbrName': 'MoveTyp',
    'NotReqXML': '0',
    'Description': 'Describes whether peg is static or floats',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '836',
    'Name': 'PegOffsetType',
    'Type': 'int',
    'AbbrName': 'OfstTyp',
    'NotReqXML': '0',
    'Description': 'Type of Peg Offset value',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '837',
    'Name': 'PegLimitType',
    'Type': 'int',
    'AbbrName': 'LmtTyp',
    'NotReqXML': '0',
    'Description': 'Type of Peg Limit',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '838',
    'Name': 'PegRoundDirection',
    'Type': 'int',
    'AbbrName': 'RndDir',
    'NotReqXML': '0',
    'Description': 'If the calculated peg price is not a valid tick price, specifies whether to round the price to be more or less aggressive',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '839',
    'Name': 'PeggedPrice',
    'Type': 'Price',
    'AbbrName': 'PeggedPx',
    'NotReqXML': '0',
    'Description': 'The price the order is currently pegged at',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '840',
    'Name': 'PegScope',
    'Type': 'int',
    'AbbrName': 'Scope',
    'NotReqXML': '0',
    'Description': 'The scope of the peg',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '841',
    'Name': 'DiscretionMoveType',
    'Type': 'int',
    'AbbrName': 'MoveTyp',
    'NotReqXML': '0',
    'Description': 'Describes whether discretionay price is static or floats',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '842',
    'Name': 'DiscretionOffsetType',
    'Type': 'int',
    'AbbrName': 'OfstTyp',
    'NotReqXML': '0',
    'Description': 'Type of Discretion Offset value',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '843',
    'Name': 'DiscretionLimitType',
    'Type': 'int',
    'AbbrName': 'LimitTyp',
    'NotReqXML': '0',
    'Description': 'Type of Discretion Limit',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '844',
    'Name': 'DiscretionRoundDirection',
    'Type': 'int',
    'AbbrName': 'RndDir',
    'NotReqXML': '0',
    'Description': 'If the calculated discretionary price is not a valid tick price, specifies whether to round the price to be more or less aggressive',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '845',
    'Name': 'DiscretionPrice',
    'Type': 'Price',
    'AbbrName': 'DsctnPx',
    'NotReqXML': '0',
    'Description': 'The current discretionary price of the order',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '846',
    'Name': 'DiscretionScope',
    'Type': 'int',
    'AbbrName': 'Scope',
    'NotReqXML': '0',
    'Description': 'The scope of the discretion',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '847',
    'Name': 'TargetStrategy',
    'Type': 'int',
    'AbbrName': 'TgtStrategy',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved1000Plus',
    'Description': 'The target strategy of the order\n1000+ = Reserved and available for bi-laterally agreed upon user defined values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '848',
    'Name': 'TargetStrategyParameters',
    'Type': 'String',
    'AbbrName': 'TgtStrategyParameters',
    'NotReqXML': '0',
    'Description': 'Field to allow further specification of the TargetStrategy - usage to be agreed between counterparties',
    'Added': 'FIX.4.4',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '849',
    'Name': 'ParticipationRate',
    'Type': 'Percentage',
    'AbbrName': 'ParticipationRt',
    'NotReqXML': '0',
    'Description': 'For a TargetStrategy=Participate order specifies the target particpation rate. For other order types this is a volume limit (i.e. do not be more than this percent of the market volume)',
    'Added': 'FIX.4.4',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '850',
    'Name': 'TargetStrategyPerformance',
    'Type': 'float',
    'AbbrName': 'TgtStrategyPerformance',
    'NotReqXML': '0',
    'Description': 'For communication of the performance of the order versus the target strategy',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '851',
    'Name': 'LastLiquidityInd',
    'Type': 'int',
    'AbbrName': 'LastLqdtyInd',
    'NotReqXML': '0',
    'Description': 'Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity. Applicable only for OrdStatus of Partial or Filled.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '852',
    'Name': 'PublishTrdIndicator',
    'Type': 'Boolean',
    'AbbrName': 'PubTrdInd',
    'NotReqXML': '0',
    'Description': 'Indicates if a trade should be reported via a market reporting service.',
    'Added': 'FIX.4.4',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '853',
    'Name': 'ShortSaleReason',
    'Type': 'int',
    'AbbrName': 'ShrtSaleRsn',
    'NotReqXML': '0',
    'Description': 'Reason for short sale.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '854',
    'Name': 'QtyType',
    'Type': 'int',
    'AbbrName': 'QtyTyp',
    'NotReqXML': '0',
    'Description': 'Type of quantity specified in a quantity field:',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '855',
    'Name': 'SecondaryTrdType',
    'Type': 'int',
    'AbbrName': 'TrdTyp2',
    'NotReqXML': '0',
    'EnumDatatype': '828',
    'Description': 'Additional TrdType(828) assigned to a trade by trade match system.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '856',
    'Name': 'TradeReportType',
    'Type': 'int',
    'AbbrName': 'RptTyp',
    'NotReqXML': '0',
    'Description': 'Type of Trade Report',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '857',
    'Name': 'AllocNoOrdersType',
    'Type': 'int',
    'AbbrName': 'NoOrdsTyp',
    'NotReqXML': '0',
    'Description': 'Indicates how the orders being booked and allocated by an Allocation Instruction or Allocation Report message are identified, i.e. by explicit definition in the NoOrders group or not.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '858',
    'Name': 'SharedCommission',
    'Type': 'Amt',
    'AbbrName': 'SharedComm',
    'NotReqXML': '0',
    'Description': 'Commission to be shared with a third party, e.g. as part of a directed brokerage commission sharing arrangement.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '859',
    'Name': 'ConfirmReqID',
    'Type': 'String',
    'AbbrName': 'CnfmReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a Confirmation Request message',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '860',
    'Name': 'AvgParPx',
    'Type': 'Price',
    'AbbrName': 'AvgParPx',
    'NotReqXML': '0',
    'Description': 'Used to express average price as percent of par (used where AvgPx field is expressed in some other way)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '861',
    'Name': 'ReportedPx',
    'Type': 'Price',
    'AbbrName': 'RptedPx',
    'NotReqXML': '0',
    'Description': 'Reported price (used to differentiate from AvgPx on a confirmation of a marked-up or marked-down principal trade)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '862',
    'Name': 'NoCapacities',
    'Type': 'NumInGroup',
    'AbbrName': 'NoCapacities',
    'NotReqXML': '1',
    'Description': 'Number of repeating OrderCapacity entries.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '863',
    'Name': 'OrderCapacityQty',
    'Type': 'Qty',
    'AbbrName': 'CpctyQty',
    'NotReqXML': '0',
    'Description': 'Quantity executed under a specific OrderCapacity (e.g. quantity executed as agent, quantity executed as principal)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '864',
    'Name': 'NoEvents',
    'Type': 'NumInGroup',
    'AbbrName': 'NoEvents',
    'NotReqXML': '1',
    'Description': 'Number of repeating EventType entries.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '865',
    'Name': 'EventType',
    'Type': 'int',
    'AbbrName': 'EventTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Code to represent the type of event',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '866',
    'Name': 'EventDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Dt',
    'NotReqXML': '0',
    'Description': 'Date of event',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '867',
    'Name': 'EventPx',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Predetermined price of issue at event, if applicable',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '868',
    'Name': 'EventText',
    'Type': 'String',
    'AbbrName': 'Txt',
    'NotReqXML': '0',
    'Description': 'Comments related to the event.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '869',
    'Name': 'PctAtRisk',
    'Type': 'Percentage',
    'AbbrName': 'PctAtRisk',
    'NotReqXML': '0',
    'Description': 'Percent at risk due to lowest possible call.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '870',
    'Name': 'NoInstrAttrib',
    'Type': 'NumInGroup',
    'AbbrName': 'NoInstrAttrib',
    'NotReqXML': '1',
    'Description': 'Number of repeating InstrAttribType entries.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '871',
    'Name': 'InstrAttribType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Code to represent the type of instrument attribute',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '872',
    'Name': 'InstrAttribValue',
    'Type': 'String',
    'AbbrName': 'Val',
    'NotReqXML': '0',
    'Description': 'Attribute value appropriate to the InstrAttribType (87) field.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '873',
    'Name': 'DatedDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Dated',
    'NotReqXML': '0',
    'Description': 'The effective date of a new securities issue determined by its underwriters. Often but not always the same as the Issue Date and the Interest Accrual Date',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '874',
    'Name': 'InterestAccrualDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'IntAcrl',
    'NotReqXML': '0',
    'Description': 'The start date used for calculating accrued interest on debt instruments which are being sold between interest payment dates. Often but not always the same as the Issue Date and the Dated Date',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '875',
    'Name': 'CPProgram',
    'Type': 'int',
    'AbbrName': 'CPPgm',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'The program under which a commercial paper is issued',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '876',
    'Name': 'CPRegType',
    'Type': 'String',
    'AbbrName': 'CPRegT',
    'NotReqXML': '0',
    'Description': 'The registration type of a commercial paper issuance',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '877',
    'Name': 'UnderlyingCPProgram',
    'Type': 'String',
    'AbbrName': 'CPPgm',
    'NotReqXML': '0',
    'Description': 'The program under which the underlying commercial paper is issued',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '878',
    'Name': 'UnderlyingCPRegType',
    'Type': 'String',
    'AbbrName': 'CPRegTyp',
    'NotReqXML': '0',
    'Description': 'The registration type of the underlying commercial paper issuance',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '879',
    'Name': 'UnderlyingQty',
    'Type': 'Qty',
    'AbbrName': 'Qty',
    'NotReqXML': '0',
    'Description': 'Unit amount of the underlying security (par, shares, currency, etc.)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '880',
    'Name': 'TrdMatchID',
    'Type': 'String',
    'AbbrName': 'MtchID',
    'NotReqXML': '0',
    'Description': 'Identifier assigned to a trade by a matching system.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '881',
    'Name': 'SecondaryTradeReportRefID',
    'Type': 'String',
    'AbbrName': 'TrdRptRefID2',
    'BaseCategory': 'TradeCapture',
    'BaseCategoryAbbrName': 'RptRefID2',
    'NotReqXML': '0',
    'Description': 'Used to refer to a previous SecondaryTradeReportRefID when amending the transaction (cancel, replace, release, or reversal).',
    'Added': 'FIX.4.4',
    'Deprecated': 'FIX.5.0'
  },
  {
    'Tag': '882',
    'Name': 'UnderlyingDirtyPrice',
    'Type': 'Price',
    'AbbrName': 'DirtPx',
    'NotReqXML': '0',
    'Description': 'Price (percent-of-par or per unit) of the underlying security or basket. \'Dirty\' means it includes accrued interest',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '883',
    'Name': 'UnderlyingEndPrice',
    'Type': 'Price',
    'AbbrName': 'EndPx',
    'NotReqXML': '0',
    'Description': 'Price (percent-of-par or per unit) of the underlying security or basket at the end of the agreement.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '884',
    'Name': 'UnderlyingStartValue',
    'Type': 'Amt',
    'AbbrName': 'StartVal',
    'NotReqXML': '0',
    'Description': 'Currency value attributed to this collateral at the start of the agreement',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '885',
    'Name': 'UnderlyingCurrentValue',
    'Type': 'Amt',
    'AbbrName': 'CurVal',
    'NotReqXML': '0',
    'Description': 'Currency value currently attributed to this collateral',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '886',
    'Name': 'UnderlyingEndValue',
    'Type': 'Amt',
    'AbbrName': 'EndVal',
    'NotReqXML': '0',
    'Description': 'Currency value attributed to this collateral at the end of the agreement',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '887',
    'Name': 'NoUnderlyingStips',
    'Type': 'NumInGroup',
    'AbbrName': 'NoUndStips',
    'NotReqXML': '1',
    'Description': 'Number of underlying stipulation entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '888',
    'Name': 'UnderlyingStipType',
    'Type': 'String',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '233',
    'Description': 'Type of stipulation.\nSame values as StipulationType (233)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '889',
    'Name': 'UnderlyingStipValue',
    'Type': 'String',
    'AbbrName': 'Val',
    'NotReqXML': '0',
    'Description': 'Value of stipulation.\nSame values as StipulationValue (234)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '890',
    'Name': 'MaturityNetMoney',
    'Type': 'Amt',
    'AbbrName': 'MatNetMny',
    'NotReqXML': '0',
    'Description': 'Net Money at maturity if Zero Coupon and maturity value is different from par value',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '891',
    'Name': 'MiscFeeBasis',
    'Type': 'int',
    'AbbrName': 'Basis',
    'NotReqXML': '0',
    'Description': 'Defines the unit for a miscellaneous fee.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '892',
    'Name': 'TotNoAllocs',
    'Type': 'int',
    'AbbrName': 'TotNoAllocs',
    'NotReqXML': '0',
    'Description': 'Total number of NoAlloc entries across all messages. Should be the sum of all NoAllocs in each message that has repeating NoAlloc entries related to the same AllocID or AllocReportID. Used to support fragmentation.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '893',
    'Name': 'LastFragment',
    'Type': 'Boolean',
    'AbbrName': 'LastFragment',
    'NotReqXML': '0',
    'Description': 'Indicates whether this message is the last in a sequence of messages for those messages that support fragmentation, such as Allocation Instruction, Mass Quote, Security List, Derivative Security List',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '894',
    'Name': 'CollReqID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Collateral Request Identifier',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '895',
    'Name': 'CollAsgnReason',
    'Type': 'int',
    'AbbrName': 'AsgnRsn',
    'NotReqXML': '0',
    'Description': 'Reason for Collateral Assignment',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '896',
    'Name': 'CollInquiryQualifier',
    'Type': 'int',
    'AbbrName': 'Qual',
    'NotReqXML': '0',
    'Description': 'Collateral inquiry qualifiers:',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '897',
    'Name': 'NoTrades',
    'Type': 'NumInGroup',
    'AbbrName': 'NoTrds',
    'NotReqXML': '1',
    'Description': 'Number of trades in repeating group.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '898',
    'Name': 'MarginRatio',
    'Type': 'Percentage',
    'AbbrName': 'MgnRatio',
    'NotReqXML': '0',
    'Description': 'The fraction of the cash consideration that must be collateralized, expressed as a percent. A MarginRatio of 02% indicates that the value of the collateral (after deducting for \'haircut\') must exceed the cash consideration by 2%.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '899',
    'Name': 'MarginExcess',
    'Type': 'Amt',
    'AbbrName': 'MgnExcess',
    'NotReqXML': '0',
    'Description': 'Excess margin amount (deficit if value is negative)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '900',
    'Name': 'TotalNetValue',
    'Type': 'Amt',
    'AbbrName': 'TotNetValu',
    'NotReqXML': '0',
    'Description': 'TotalNetValue is determined as follows:\nAt the initial collateral assignment TotalNetValue is the sum of (UnderlyingStartValue * (1-haircut)).\nIn a collateral substitution TotalNetValue is the sum of (UnderlyingCurrentValue * (1-haircut)).\nFor listed derivatives clearing margin management, this is the collateral value which equals (Market value * haircut)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '901',
    'Name': 'CashOutstanding',
    'Type': 'Amt',
    'AbbrName': 'CshOutstanding',
    'NotReqXML': '0',
    'Description': 'Starting consideration less repayments',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '902',
    'Name': 'CollAsgnID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Collateral Assignment Identifier',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '903',
    'Name': 'CollAsgnTransType',
    'Type': 'int',
    'AbbrName': 'TransTyp',
    'NotReqXML': '0',
    'Description': 'Collateral Assignment Transaction Type',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '904',
    'Name': 'CollRespID',
    'Type': 'String',
    'AbbrName': 'RespID',
    'NotReqXML': '0',
    'Description': 'Collateral Response Identifier',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '905',
    'Name': 'CollAsgnRespType',
    'Type': 'int',
    'AbbrName': 'RespTyp',
    'NotReqXML': '0',
    'Description': 'Collateral Assignment Response Type',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '906',
    'Name': 'CollAsgnRejectReason',
    'Type': 'int',
    'AbbrName': 'RejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Collateral Assignment Reject Reason',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '907',
    'Name': 'CollAsgnRefID',
    'Type': 'String',
    'AbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Collateral Assignment Identifier to which a transaction refers',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '908',
    'Name': 'CollRptID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Collateral Report Identifier',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '909',
    'Name': 'CollInquiryID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Collateral Inquiry Identifier',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '910',
    'Name': 'CollStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Collateral Status',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '911',
    'Name': 'TotNumReports',
    'Type': 'int',
    'AbbrName': 'TotNumRpts',
    'NotReqXML': '0',
    'Description': 'Total number of reports returned in response to a request.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '912',
    'Name': 'LastRptRequested',
    'Type': 'Boolean',
    'AbbrName': 'LastRptReqed',
    'NotReqXML': '0',
    'Description': 'Indicates whether this message is that last report message in response to a request, such as Order Mass Status Request.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '913',
    'Name': 'AgreementDesc',
    'Type': 'String',
    'AbbrName': 'AgmtDesc',
    'NotReqXML': '0',
    'Description': 'The full name of the base standard agreement, annexes and amendments in place between the principals applicable to a financing transaction.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '914',
    'Name': 'AgreementID',
    'Type': 'String',
    'AbbrName': 'AgmtID',
    'NotReqXML': '0',
    'Description': 'A common reference to the applicable standing agreement between the counterparties to a financing transaction.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '915',
    'Name': 'AgreementDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'AgmtDt',
    'NotReqXML': '0',
    'Description': 'A reference to the date the underlying agreement specified by AgreementID and AgreementDesc was executed.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '916',
    'Name': 'StartDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'StartDt',
    'NotReqXML': '0',
    'Description': 'Start date of a financing deal, i.e. the date the buyer pays the seller cash and takes control of the collateral',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '917',
    'Name': 'EndDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'EndDt',
    'NotReqXML': '0',
    'Description': 'End date of a financing deal, i.e. the date the seller reimburses the buyer and takes back control of the collateral',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '918',
    'Name': 'AgreementCurrency',
    'Type': 'Currency',
    'AbbrName': 'AgmtCcy',
    'NotReqXML': '0',
    'Description': 'Contractual currency forming the basis of a financing agreement and associated transactions. Usually, but not always, the same as the trade currency.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '919',
    'Name': 'DeliveryType',
    'Type': 'int',
    'AbbrName': 'DlvryTyp',
    'NotReqXML': '0',
    'Description': 'Identifies type of settlement',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '920',
    'Name': 'EndAccruedInterestAmt',
    'Type': 'Amt',
    'AbbrName': 'EndAcrdIntAmt',
    'NotReqXML': '0',
    'Description': 'Accrued Interest Amount applicable to a financing transaction on the End Date.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '921',
    'Name': 'StartCash',
    'Type': 'Amt',
    'AbbrName': 'StartCsh',
    'NotReqXML': '0',
    'Description': 'Starting dirty cash consideration of a financing deal, i.e. paid to the seller on the Start Date.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '922',
    'Name': 'EndCash',
    'Type': 'Amt',
    'AbbrName': 'EndCsh',
    'NotReqXML': '0',
    'Description': 'Ending dirty cash consideration of a financing deal. i.e. reimbursed to the buyer on the End Date.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '923',
    'Name': 'UserRequestID',
    'Type': 'String',
    'AbbrName': 'UserReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a User Request.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '924',
    'Name': 'UserRequestType',
    'Type': 'int',
    'AbbrName': 'UserReqTyp',
    'NotReqXML': '0',
    'Description': 'Indicates the action required by a User Request Message',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '925',
    'Name': 'NewPassword',
    'Type': 'String',
    'AbbrName': 'NewPassword',
    'NotReqXML': '0',
    'Description': 'New Password or passphrase',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '926',
    'Name': 'UserStatus',
    'Type': 'int',
    'AbbrName': 'UserStat',
    'NotReqXML': '0',
    'Description': 'Indicates the status of a user',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '927',
    'Name': 'UserStatusText',
    'Type': 'String',
    'AbbrName': 'UserStatText',
    'NotReqXML': '0',
    'Description': 'A text description associated with a user status.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '928',
    'Name': 'StatusValue',
    'Type': 'int',
    'AbbrName': 'StatValu',
    'NotReqXML': '0',
    'Description': 'Indicates the status of a network connection',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '929',
    'Name': 'StatusText',
    'Type': 'String',
    'AbbrName': 'StatText',
    'NotReqXML': '0',
    'Description': 'A text description associated with a network status.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '930',
    'Name': 'RefCompID',
    'Type': 'String',
    'AbbrName': 'RefCompID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify a firm.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '931',
    'Name': 'RefSubID',
    'Type': 'String',
    'AbbrName': 'RefSubID',
    'NotReqXML': '0',
    'Description': 'Assigned value used to identify specific elements within a firm.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '932',
    'Name': 'NetworkResponseID',
    'Type': 'String',
    'AbbrName': 'NtwkRspID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a network response.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '933',
    'Name': 'NetworkRequestID',
    'Type': 'String',
    'AbbrName': 'NtwkReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a network resquest.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '934',
    'Name': 'LastNetworkResponseID',
    'Type': 'String',
    'AbbrName': 'LastNtwkRspID',
    'NotReqXML': '0',
    'Description': 'Identifier of the previous Network Response message sent to a counterparty, used to allow incremental updates.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '935',
    'Name': 'NetworkRequestType',
    'Type': 'int',
    'AbbrName': 'NtwkReqTyp',
    'NotReqXML': '0',
    'Description': 'Indicates the type and level of details required for a Network Status Request Message\nBoolean logic applies EG If you want to subscribe for changes to certain id\'s then UserRequestType =0 (8+2), Snapshot for certain ID\'s = 9 (8+1)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '936',
    'Name': 'NoCompIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoCompIDs',
    'NotReqXML': '1',
    'Description': 'Number of CompID entries in a repeating group.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '937',
    'Name': 'NetworkStatusResponseType',
    'Type': 'int',
    'AbbrName': 'NtwkStatRspTyp',
    'NotReqXML': '0',
    'Description': 'Indicates the type of Network Response Message.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '938',
    'Name': 'NoCollInquiryQualifier',
    'Type': 'NumInGroup',
    'AbbrName': 'NoCollInqQual',
    'NotReqXML': '1',
    'Description': 'Number of CollInquiryQualifier entries in a repeating group.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '939',
    'Name': 'TrdRptStatus',
    'Type': 'int',
    'AbbrName': 'TrdRptStat',
    'NotReqXML': '0',
    'Description': 'Trade Report Status',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '940',
    'Name': 'AffirmStatus',
    'Type': 'int',
    'AbbrName': 'AffirmStat',
    'NotReqXML': '0',
    'Description': 'Identifies the status of the ConfirmationAck.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '941',
    'Name': 'UnderlyingStrikeCurrency',
    'Type': 'Currency',
    'AbbrName': 'StrkCcy',
    'NotReqXML': '0',
    'Description': 'Currency in which the strike price of an underlying instrument is denominated',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '942',
    'Name': 'LegStrikeCurrency',
    'Type': 'Currency',
    'AbbrName': 'StrkCcy',
    'NotReqXML': '0',
    'Description': 'Currency in which the strike price of a instrument leg of a multileg instrument is denominated',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '943',
    'Name': 'TimeBracket',
    'Type': 'String',
    'AbbrName': 'TmBkt',
    'NotReqXML': '0',
    'Description': 'A code that represents a time interval in which a fill or trade occurred.\nRequired for US futures markets.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '944',
    'Name': 'CollAction',
    'Type': 'int',
    'AbbrName': 'Actn',
    'NotReqXML': '0',
    'Description': 'Action proposed for an Underlying Instrument instance.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '945',
    'Name': 'CollInquiryStatus',
    'Type': 'int',
    'AbbrName': 'Stat',
    'NotReqXML': '0',
    'Description': 'Status of Collateral Inquiry',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '946',
    'Name': 'CollInquiryResult',
    'Type': 'int',
    'AbbrName': 'Rslt',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Result returned in response to Collateral Inquiry\n4000+ Reserved and available for bi-laterally agreed upon user-defined values',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '947',
    'Name': 'StrikeCurrency',
    'Type': 'Currency',
    'AbbrName': 'StrkCcy',
    'NotReqXML': '0',
    'Description': 'Currency in which the StrikePrice is denominated.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '948',
    'Name': 'NoNested3PartyIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNst3PtyIDs',
    'NotReqXML': '1',
    'Description': 'Number of Nested3PartyID (949), Nested3PartyIDSource (950), and Nested3PartyRole (95) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '949',
    'Name': 'Nested3PartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within a \'third instance\' Nested repeating group.\nSame values as PartyID (448)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '950',
    'Name': 'Nested3PartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within a \'third instance\' Nested repeating group.\nSame values as PartyIDSource (447)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '951',
    'Name': 'Nested3PartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within a \'third instance\' Nested repeating group.\nSame values as PartyRole (452)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '952',
    'Name': 'NoNested3PartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNst3PtySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of Nested3PartySubIDs (953) entries',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '953',
    'Name': 'Nested3PartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartySubID value within a \'third instance\' Nested repeating group.\nSame values as PartySubID (523)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '954',
    'Name': 'Nested3PartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'PartySubIDType value within a \'third instance\' Nested repeating group.\nSame values as PartySubIDType (803)',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '955',
    'Name': 'LegContractSettlMonth',
    'Type': 'MonthYear',
    'AbbrName': 'CSetMo',
    'NotReqXML': '0',
    'Description': 'Specifies when the contract (i.e. MBS/TBA) will settle.',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '956',
    'Name': 'LegInterestAccrualDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'IntAcrl',
    'NotReqXML': '0',
    'Description': 'The start date used for calculating accrued interest on debt instruments which are being sold between interest payment dates. Often but not always the same as the Issue Date and the Dated Date',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '957',
    'Name': 'NoStrategyParameters',
    'Type': 'NumInGroup',
    'AbbrName': 'NoStrtPrm',
    'NotReqXML': '1',
    'Description': 'Indicates number of strategy parameters',
    'Added': 'FIX.4.4',
    'AddedEP': '2'
  },
  {
    'Tag': '958',
    'Name': 'StrategyParameterName',
    'Type': 'String',
    'AbbrName': 'StrtPrmNme',
    'NotReqXML': '0',
    'Description': 'Name of parameter',
    'Added': 'FIX.4.4',
    'AddedEP': '2'
  },
  {
    'Tag': '959',
    'Name': 'StrategyParameterType',
    'Type': 'int',
    'AbbrName': 'StrtPrmTyp',
    'NotReqXML': '0',
    'Description': 'Datatype of the parameter',
    'Added': 'FIX.4.4',
    'AddedEP': '2'
  },
  {
    'Tag': '960',
    'Name': 'StrategyParameterValue',
    'Type': 'String',
    'AbbrName': 'StrtPrmVal',
    'NotReqXML': '0',
    'Description': 'Value of the parameter',
    'Added': 'FIX.4.4',
    'AddedEP': '2'
  },
  {
    'Tag': '961',
    'Name': 'HostCrossID',
    'Type': 'String',
    'AbbrName': 'HstCxID',
    'NotReqXML': '0',
    'Description': 'Host assigned entity ID that can be used to reference all components of a cross; sides + strategy + legs. Used as the primary key with which to refer to the Cross Order for cancellation and replace. The HostCrossID will also be used to link together components of the Cross Order. For example, each individual Execution Report associated with the order will carry HostCrossID in order to tie back to the original cross order.',
    'Added': 'FIX.4.4',
    'AddedEP': '3'
  },
  {
    'Tag': '962',
    'Name': 'SideTimeInForce',
    'Type': 'UTCTimestamp',
    'AbbrName': 'SideTmFrc',
    'NotReqXML': '0',
    'Description': 'Indicates how long the order as specified in the side stays in effect. SideTimeInForce allows a two-sided cross order to specify order behavior separately for each side. Absence of this field indicates that TimeInForce should be referenced. SideTimeInForce will override TimeInForce if both are provided.',
    'Added': 'FIX.4.4',
    'AddedEP': '3'
  },
  {
    'Tag': '963',
    'Name': 'MDReportID',
    'Type': 'int',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for the Market Data Report.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '964',
    'Name': 'SecurityReportID',
    'Type': 'int',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Identifies a Security List message.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '87',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '965',
    'Name': 'SecurityStatus',
    'Type': 'String',
    'AbbrName': 'Status',
    'NotReqXML': '0',
    'Description': 'Used for derivatives. Denotes the current state of the Instrument.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '966',
    'Name': 'SettleOnOpenFlag',
    'Type': 'String',
    'AbbrName': 'SettlOnOpenFlag',
    'NotReqXML': '0',
    'Description': 'Indicator to determine if instrument is settle on open',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '967',
    'Name': 'StrikeMultiplier',
    'Type': 'float',
    'AbbrName': 'StrkMult',
    'NotReqXML': '0',
    'Description': 'Used for derivatives. Multiplier applied to the strike price for the purpose of calculating the settlement value.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '968',
    'Name': 'StrikeValue',
    'Type': 'float',
    'AbbrName': 'StrkValu',
    'NotReqXML': '0',
    'Description': 'Used for derivatives. The number of shares/units for the financial instrument involved in the option trade.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '969',
    'Name': 'MinPriceIncrement',
    'Type': 'float',
    'AbbrName': 'MinPxIncr',
    'NotReqXML': '0',
    'Description': 'Minimum price increase for a given exchange-traded Instrument',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '970',
    'Name': 'PositionLimit',
    'Type': 'int',
    'AbbrName': 'PosLmt',
    'NotReqXML': '0',
    'Description': 'Position Limit for a given exchange-traded product.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '971',
    'Name': 'NTPositionLimit',
    'Type': 'int',
    'AbbrName': 'NTPosLmt',
    'NotReqXML': '0',
    'Description': 'Position Limit in the near-term contract for a given exchange-traded product.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '972',
    'Name': 'UnderlyingAllocationPercent',
    'Type': 'Percentage',
    'AbbrName': 'AllocPct',
    'NotReqXML': '0',
    'Description': 'Percent of the Strike Price that this underlying represents.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '973',
    'Name': 'UnderlyingCashAmount',
    'Type': 'Amt',
    'AbbrName': 'CashAmt',
    'NotReqXML': '0',
    'Description': 'Cash amount associated with the underlying component.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '974',
    'Name': 'UnderlyingCashType',
    'Type': 'String',
    'AbbrName': 'CashTyp',
    'NotReqXML': '0',
    'Description': 'Used for derivatives that deliver into cash underlying.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '975',
    'Name': 'UnderlyingSettlementType',
    'Type': 'int',
    'AbbrName': 'SettlTyp',
    'NotReqXML': '0',
    'Description': 'Indicates order settlement period for the underlying instrument.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '976',
    'Name': 'QuantityDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'QtyDt',
    'NotReqXML': '0',
    'Description': 'Date associated to the quantity that is being reported for the position.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '977',
    'Name': 'ContIntRptID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for the Contrary Intention report',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '978',
    'Name': 'LateIndicator',
    'Type': 'Boolean',
    'AbbrName': 'LateInd',
    'NotReqXML': '0',
    'Description': 'Indicates if the contrary intention was received after the exchange imposed cutoff time',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '979',
    'Name': 'InputSource',
    'Type': 'String',
    'AbbrName': 'InptSrc',
    'NotReqXML': '0',
    'Description': 'Source of the contrary intention',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '980',
    'Name': 'SecurityUpdateAction',
    'Type': 'char',
    'AbbrName': 'UpdActn',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '981',
    'Name': 'NoExpiration',
    'Type': 'NumInGroup',
    'AbbrName': 'NoExpiration',
    'NotReqXML': '1',
    'Description': 'Number of Expiration Qty entries',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '982',
    'Name': 'ExpirationQtyType',
    'Type': 'int',
    'AbbrName': 'ExpTyp',
    'NotReqXML': '0',
    'Description': 'Expiration Quantity type',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '983',
    'Name': 'ExpQty',
    'Type': 'Qty',
    'AbbrName': 'ExpQty',
    'NotReqXML': '0',
    'Description': 'Expiration Quantity associated with the Expiration Type',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '984',
    'Name': 'NoUnderlyingAmounts',
    'Type': 'NumInGroup',
    'AbbrName': 'NoUnderlyingAmounts',
    'NotReqXML': '1',
    'Description': 'Total number of occurrences of Amount to pay in order to receive the underlying instrument',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '985',
    'Name': 'UnderlyingPayAmount',
    'Type': 'Amt',
    'AbbrName': 'PayAmt',
    'NotReqXML': '0',
    'Description': 'Amount to pay in order to receive the underlying instrument',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '986',
    'Name': 'UnderlyingCollectAmount',
    'Type': 'Amt',
    'AbbrName': 'ColAmt',
    'NotReqXML': '0',
    'Description': 'Amount to collect in order to deliver the underlying instrument',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '987',
    'Name': 'UnderlyingSettlementDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'StlDt',
    'NotReqXML': '0',
    'Description': 'Date the underlying instrument will settle. Used for derivatives that deliver into more than one underlying instrument. Settlement dates can vary across underlying instruments.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '988',
    'Name': 'UnderlyingSettlementStatus',
    'Type': 'String',
    'AbbrName': 'SetStat',
    'NotReqXML': '0',
    'Description': 'Settlement status of the underlying instrument. Used for derivatives that deliver into more than one underlying instrument. Settlement can be delayed for an underlying instrument.',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '989',
    'Name': 'SecondaryIndividualAllocID',
    'Type': 'String',
    'AbbrName': 'IndAllocID2',
    'NotReqXML': '0',
    'Description': 'Will allow the intermediary to specify an allocation ID generated by their system.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '990',
    'Name': 'LegReportID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Additional attribute to store the Trade ID of the Leg.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '991',
    'Name': 'RndPx',
    'Type': 'Price',
    'AbbrName': 'RndPx',
    'NotReqXML': '0',
    'Description': 'Specifies average price rounded to quoted precision.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '992',
    'Name': 'IndividualAllocType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Identifies whether the allocation is to be sub-allocated or allocated to a third party',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '993',
    'Name': 'AllocCustomerCapacity',
    'Type': 'String',
    'AbbrName': 'CustCpcty',
    'NotReqXML': '0',
    'Description': 'Capacity of customer in the allocation block.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '994',
    'Name': 'TierCode',
    'Type': 'String',
    'AbbrName': 'TierCD',
    'NotReqXML': '0',
    'Description': 'The Tier the trade was matched by the clearing system.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '996',
    'Name': 'UnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'UOM',
    'NotReqXML': '0',
    'Description': 'The unit of measure of the underlying commodity upon which the contract is based. Two groups of units of measure enumerations are supported.\nFixed Magnitude UOMs are primarily used in energy derivatives and specify a magnitude (such as, MM, Kilo, M, etc.) and the dimension (such as, watt hours, BTU\'s) to produce standard fixed measures (such as MWh - Megawatt-hours, MMBtu - One million BTUs).\nThe second group, Variable Quantity UOMs, specifies the dimension as a single unit without a magnitude (or more accurately a magnitude of one) and uses the UnitOfMeasureQty(1147) field to define the quantity of units per contract. Variable Quantity UOMs are used for both commodities (such as lbs of lean cattle, bushels of corn, ounces of gold) and financial futures.\nExamples:\nFor lean cattle futures contracts, a UnitOfMeasure of \'lbs\' with a UnitOfMeasureQty(1147) of 40,000, means each lean cattle futures contract represents 40,000 lbs of lean cattle.\nFor Eurodollars futures contracts, a UnitOfMeasure of USD with a UnitOfMeasureQty(1147) of 1,000,000, means a Eurodollar futures contract represents 1,000,000 USD.\nFor gold futures contracts, a UnitOfMeasure is oz_tr (Troy ounce) with a UnitOfMeasureQty(1147) of 1,000, means each gold futures contract represents 1,000 troy ounces of gold.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '997',
    'Name': 'TimeUnit',
    'Type': 'String',
    'AbbrName': 'TmUnit',
    'NotReqXML': '0',
    'Description': 'Unit of time associated with the contract.\nNOTE: Additional values may be used by mutual agreement of the counterparties',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '998',
    'Name': 'UnderlyingUnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'UOM',
    'NotReqXML': '0',
    'EnumDatatype': '996',
    'Description': 'Refer to defintion of UnitOfMeasure(996)',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '999',
    'Name': 'LegUnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'UOM',
    'NotReqXML': '0',
    'EnumDatatype': '996',
    'Description': 'Refer to defintion of UnitOfMeasure(996)',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1000',
    'Name': 'UnderlyingTimeUnit',
    'Type': 'String',
    'AbbrName': 'TmUnit',
    'NotReqXML': '0',
    'EnumDatatype': '997',
    'Description': 'Same as TimeUnit.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1001',
    'Name': 'LegTimeUnit',
    'Type': 'String',
    'AbbrName': 'TmUnit',
    'NotReqXML': '0',
    'EnumDatatype': '997',
    'Description': 'Same as TimeUnit.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1002',
    'Name': 'AllocMethod',
    'Type': 'int',
    'AbbrName': 'Meth',
    'NotReqXML': '0',
    'Description': 'Specifies the method under which a trade quantity was allocated.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1003',
    'Name': 'TradeID',
    'Type': 'String',
    'AbbrName': 'TrdID',
    'NotReqXML': '0',
    'Description': 'The unique ID assigned to the trade entity once it is received or matched by the exchange or central counterparty.',
    'Added': 'FIX.4.4',
    'AddedEP': '11'
  },
  {
    'Tag': '1005',
    'Name': 'SideTradeReportID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Used on a multi-sided trade to designate the ReportID',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1006',
    'Name': 'SideFillStationCd',
    'Type': 'String',
    'AbbrName': 'FillStationCd',
    'NotReqXML': '0',
    'Description': 'Used on a multi-sided trade to convey order routing information',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1007',
    'Name': 'SideReasonCd',
    'Type': 'String',
    'AbbrName': 'RsnCD',
    'NotReqXML': '0',
    'Description': 'Used on a multi-sided trade to convey reason for execution',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1008',
    'Name': 'SideTrdSubTyp',
    'Type': 'int',
    'AbbrName': 'TrdSubTyp',
    'NotReqXML': '0',
    'EnumDatatype': '829',
    'Description': 'Used on a multi-sided trade to specify the type of trade for a given side. Same values as TrdSubType (829).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1009',
    'Name': 'SideLastQty',
    'Type': 'int',
    'AbbrName': 'SideQty',
    'NotReqXML': '0',
    'Description': 'Used to indicate the quantity on one of a multi-sided Trade Capture Report',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '77',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1011',
    'Name': 'MessageEventSource',
    'Type': 'String',
    'AbbrName': 'MsgEvtSrc',
    'NotReqXML': '0',
    'Description': 'Used to identify the event or source which gave rise to a message.\nValid values will be based on an exchange\'s implementation.\nExample values are:\n\'MQM\' (originated at Firm Back Office)\n\'Clear\' (originated in Clearing System)\n\'Reg\' (static data generated via Register request)',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1012',
    'Name': 'SideTrdRegTimestamp',
    'Type': 'UTCTimestamp',
    'AbbrName': 'TS',
    'NotReqXML': '0',
    'Description': 'Will be used in a multi-sided message.\nTraded Regulatory timestamp value Use to store time information required by government regulators or self regulatory organizations such as an exchange or clearing house',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1013',
    'Name': 'SideTrdRegTimestampType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '770',
    'Description': 'Same as TrdRegTimeStampType',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '77',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1014',
    'Name': 'SideTrdRegTimestampSrc',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'Description': 'Same as TrdRegTimestampOrigin\nText which identifies the origin i.e. system which was used to generate the time stamp for the Traded Regulatory timestamp value',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1015',
    'Name': 'AsOfIndicator',
    'Type': 'char',
    'AbbrName': 'AsOfInd',
    'NotReqXML': '0',
    'Description': 'Used to indicate that a floor-trade was originally submitted \'as of\' a specific trade date which is earlier than its clearing date.',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1016',
    'Name': 'NoSideTrdRegTS',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSideTrdRegTS',
    'NotReqXML': '1',
    'Description': 'Indicates number of SideTimestamps contained in group',
    'Added': 'FIX.4.4',
    'AddedEP': '5'
  },
  {
    'Tag': '1017',
    'Name': 'LegOptionRatio',
    'Type': 'float',
    'AbbrName': 'LegOptionRatio',
    'NotReqXML': '0',
    'Description': 'Expresses the risk of an option leg\nValue must be between -1 and 1.\nA Call Option will require a ratio value between 0 and 1\nA Put Option will require a ratio value between -1 and 0',
    'Added': 'FIX.4.4',
    'AddedEP': '18'
  },
  {
    'Tag': '1018',
    'Name': 'NoInstrumentParties',
    'Type': 'NumInGroup',
    'AbbrName': 'NoInstrmntPty',
    'NotReqXML': '1',
    'Description': 'Identifies the number of parties identified with an instrument',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1019',
    'Name': 'InstrumentPartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within an instrument party repeating group. Same values as PartyID (448)',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1020',
    'Name': 'TradeVolume',
    'Type': 'Qty',
    'AbbrName': 'TrdVol',
    'NotReqXML': '0',
    'Description': 'Used to report volume with a trade',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1021',
    'Name': 'MDBookType',
    'Type': 'int',
    'AbbrName': 'MDBkTyp',
    'NotReqXML': '0',
    'Description': 'Describes the type of book for which the feed is intended. Used when multiple feeds are provided over the same connection',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1022',
    'Name': 'MDFeedType',
    'Type': 'String',
    'AbbrName': 'MDFeedTyp',
    'NotReqXML': '0',
    'Description': 'Describes a class of service for a given data feed, ie Regular and Market Maker, Bandwidth Intensive or Bandwidth Conservative',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1023',
    'Name': 'MDPriceLevel',
    'Type': 'int',
    'AbbrName': 'MDPxLvl',
    'NotReqXML': '0',
    'Description': 'Integer to convey the level of a bid or offer at a given price level. This is in contrast to MDEntryPositionNo which is used to convey the position of an order within a Price level',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1024',
    'Name': 'MDOriginType',
    'Type': 'int',
    'AbbrName': 'MDOrigTyp',
    'NotReqXML': '0',
    'Description': 'Used to describe the origin of an entry in the book',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1025',
    'Name': 'FirstPx',
    'Type': 'Price',
    'AbbrName': 'FirstPx',
    'NotReqXML': '0',
    'Description': 'Indicates the first trade price of the day/session',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1026',
    'Name': 'MDEntrySpotRate',
    'Type': 'float',
    'AbbrName': 'MDEntrySpotRt',
    'NotReqXML': '0',
    'Description': 'The spot rate for an FX entry',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1027',
    'Name': 'MDEntryForwardPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'MDEntryFwdPnts',
    'NotReqXML': '0',
    'Description': 'Used for an F/X entry. The forward points to be added to or subtracted from the spot rate to get the \'all-in\' rate in MDEntryPx. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1028',
    'Name': 'ManualOrderIndicator',
    'Type': 'Boolean',
    'AbbrName': 'ManOrdInd',
    'NotReqXML': '0',
    'Description': 'Indicates if the order was initially received manually (as opposed to electronically)',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1029',
    'Name': 'CustDirectedOrder',
    'Type': 'Boolean',
    'AbbrName': 'CustDrctdOrd',
    'NotReqXML': '0',
    'Description': 'Indicates if the customer directed this order to a specific execution venue \'Y\' or not \'N\'.\nA default of \'N\' customer did not direct this order should be used in the case where the information is both missing and essential.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1030',
    'Name': 'ReceivedDeptID',
    'Type': 'String',
    'AbbrName': 'RcvdDptID',
    'NotReqXML': '0',
    'Description': 'Identifies the Broker / Dealer Department that first took the order.',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1031',
    'Name': 'CustOrderHandlingInst',
    'Type': 'MultipleStringValue',
    'AbbrName': 'CustOrdHdlInst',
    'NotReqXML': '0',
    'Description': 'Codes that apply special information that the Broker / Dealer needs to report, as specified by the customer.\nNOTE: This field and its values have no bearing on the ExecInst and TimeInForce fields. These values should not be used instead of ExecInst or TimeInForce. This field and its values are intended for compliance reporting only.\nValid values are grouped by OrderHandlingInstSource(1032).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1032',
    'Name': 'OrderHandlingInstSource',
    'Type': 'int',
    'AbbrName': 'OrdHndlInstSrc',
    'NotReqXML': '0',
    'Description': 'Identifies the class or source of the \'OrderHandlingInst\' values. Scope of this will apply to both CustOrderHandlingInst and DeskOrderHandlingInst fields.\nRequired if CustOrderHandlingInst and/or DeskOrderHandlingInst is specified.',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1033',
    'Name': 'DeskType',
    'Type': 'String',
    'AbbrName': 'DskTyp',
    'NotReqXML': '0',
    'Description': 'Type of trading desk.  Valid values are grouped by DeskTypeSource(1034).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1034',
    'Name': 'DeskTypeSource',
    'Type': 'int',
    'AbbrName': 'DskTypSrc',
    'NotReqXML': '0',
    'Description': 'Identifies the class or source of DeskType(1033) values. Required if DeskType(1033) is specified.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1035',
    'Name': 'DeskOrderHandlingInst',
    'Type': 'MultipleStringValue',
    'AbbrName': 'DskOrdHndlInst',
    'NotReqXML': '0',
    'EnumDatatype': '1031',
    'Description': 'Codes that apply special information that the Broker / Dealer needs to report.\nNOTE: This field and its values have no bearing on the ExecInst and TimeInForce fields. These values should not be used instead of ExecInst or TimeInForce. This field and its values are intended for compliance reporting only.\nValid values are grouped by OrderHandlingInstSource(1032).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '9'
  },
  {
    'Tag': '1036',
    'Name': 'ExecAckStatus',
    'Type': 'char',
    'AbbrName': 'ExecAckStat',
    'NotReqXML': '0',
    'Description': 'The status of this execution acknowledgement message.',
    'Added': 'FIX.4.4',
    'AddedEP': '10'
  },
  {
    'Tag': '1037',
    'Name': 'UnderlyingDeliveryAmount',
    'Type': 'Amt',
    'AbbrName': 'UndlyDlvAmt',
    'NotReqXML': '0',
    'Description': 'Indicates the underlying position amount to be delivered',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1038',
    'Name': 'UnderlyingCapValue',
    'Type': 'Amt',
    'AbbrName': 'CapValu',
    'NotReqXML': '0',
    'Description': 'Maximum notional value for a capped financial instrument',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1039',
    'Name': 'UnderlyingSettlMethod',
    'Type': 'String',
    'AbbrName': 'SetMeth',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1040',
    'Name': 'SecondaryTradeID',
    'Type': 'String',
    'AbbrName': 'TrdID2',
    'NotReqXML': '0',
    'Description': 'Used to carry an internal trade entity ID which may or may not be reported to the firm',
    'Added': 'FIX.4.4',
    'AddedEP': '11'
  },
  {
    'Tag': '1041',
    'Name': 'FirmTradeID',
    'Type': 'String',
    'AbbrName': 'FirmTrdID',
    'NotReqXML': '0',
    'Description': 'The ID assigned to a trade by the Firm to track a trade within the Firm system. This ID can be assigned either before or after submission to the exchange or central counterpary',
    'Added': 'FIX.4.4',
    'AddedEP': '11'
  },
  {
    'Tag': '1042',
    'Name': 'SecondaryFirmTradeID',
    'Type': 'String',
    'AbbrName': 'FirmTrdID2',
    'NotReqXML': '0',
    'Description': 'Used to carry an internal firm assigned ID which may or may not be reported to the exchange or central counterpary',
    'Added': 'FIX.4.4',
    'AddedEP': '11'
  },
  {
    'Tag': '1043',
    'Name': 'CollApplType',
    'Type': 'int',
    'AbbrName': 'ApplTyp',
    'NotReqXML': '0',
    'Description': 'conveys how the collateral should be/has been applied',
    'Added': 'FIX.4.4',
    'AddedEP': '12'
  },
  {
    'Tag': '1044',
    'Name': 'UnderlyingAdjustedQuantity',
    'Type': 'Qty',
    'AbbrName': 'AdjQty',
    'NotReqXML': '0',
    'Description': 'Unit amount of the underlying security (shares) adjusted for pending corporate action not yet allocated.',
    'Added': 'FIX.4.4',
    'AddedEP': '12'
  },
  {
    'Tag': '1045',
    'Name': 'UnderlyingFXRate',
    'Type': 'float',
    'AbbrName': 'FxRate',
    'NotReqXML': '0',
    'Description': 'Foreign exchange rate used to compute UnderlyingCurrentValue(885) (or market value) from UnderlyingCurrency(318) to Currency(15).',
    'Added': 'FIX.4.4',
    'AddedEP': '12'
  },
  {
    'Tag': '1046',
    'Name': 'UnderlyingFXRateCalc',
    'Type': 'char',
    'AbbrName': 'FxRateCalc',
    'NotReqXML': '0',
    'Description': 'Specifies whether the UnderlyingFxRate(1045) should be multiplied or divided.',
    'Added': 'FIX.4.4',
    'AddedEP': '12'
  },
  {
    'Tag': '1047',
    'Name': 'AllocPositionEffect',
    'Type': 'char',
    'AbbrName': 'AllocPosEfct',
    'NotReqXML': '0',
    'Description': 'Indicates whether the resulting position after a trade should be an opening position or closing position. Used for omnibus accounting - where accounts are held on a gross basis instead of being netted together.',
    'Added': 'FIX.4.4',
    'AddedEP': '17'
  },
  {
    'Tag': '1048',
    'Name': 'DealingCapacity',
    'Type': 'char',
    'AbbrName': 'DealingCpcty',
    'NotReqXML': '0',
    'Description': 'Identifies role of dealer; Agent, Principal, RisklessPrincipal',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1049',
    'Name': 'InstrmtAssignmentMethod',
    'Type': 'char',
    'AbbrName': 'AsgnMeth',
    'NotReqXML': '0',
    'Description': 'Method under which assignment was conducted',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1050',
    'Name': 'InstrumentPartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within an instrument partyrepeating group.\nSame values as PartyIDSource (447)',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1051',
    'Name': 'InstrumentPartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within an instrument partyepeating group.\nSame values as PartyRole (452)',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1052',
    'Name': 'NoInstrumentPartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoInstrmntPtySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of InstrumentPartySubID (1053) and InstrumentPartySubIDType (1054) entries',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1053',
    'Name': 'InstrumentPartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartySubID value within an instrument party repeating group.\nSame values as PartySubID (523)',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1054',
    'Name': 'InstrumentPartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Type of InstrumentPartySubID (1053) value.\nSame values as PartySubIDType (803)',
    'Added': 'FIX.4.4',
    'AddedEP': '4'
  },
  {
    'Tag': '1055',
    'Name': 'PositionCurrency',
    'Type': 'String',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'The Currency in which the position Amount is denominated',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1056',
    'Name': 'CalculatedCcyLastQty',
    'Type': 'Qty',
    'AbbrName': 'CalcCcyLastQty',
    'NotReqXML': '0',
    'Description': 'Used for the calculated quantity of the other side of the currency trade. Can be derived from LastQty and LastPx.',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1057',
    'Name': 'AggressorIndicator',
    'Type': 'Boolean',
    'AbbrName': 'AgrsrInd',
    'NotReqXML': '0',
    'Description': 'Used to identify whether the order initiator is an aggressor or not in the trade.',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1058',
    'Name': 'NoUndlyInstrumentParties',
    'Type': 'NumInGroup',
    'AbbrName': 'NoInstrmntPty',
    'NotReqXML': '1',
    'Description': 'Identifies the number of parties identified with an underlying instrument',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1059',
    'Name': 'UnderlyingInstrumentPartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within an underlying instrument party repeating group.\nSame values as PartyID (448)',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1060',
    'Name': 'UnderlyingInstrumentPartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within an underlying instrument partyrepeating group.\nSame values as PartyIDSource (447)',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1061',
    'Name': 'UnderlyingInstrumentPartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within an underlying instrument partyepeating group.\nSame values as PartyRole (452)',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1062',
    'Name': 'NoUndlyInstrumentPartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoInstrmntPtySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of Underlying InstrumentPartySubID (1053) and InstrumentPartySubIDType (1054) entries',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1063',
    'Name': 'UnderlyingInstrumentPartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartySubID value within an underlying instrument party repeating group.\nSame values as PartySubID (523)',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1064',
    'Name': 'UnderlyingInstrumentPartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Type of underlying InstrumentPartySubID (1053) value.\nSame values as PartySubIDType (803)',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '8'
  },
  {
    'Tag': '1065',
    'Name': 'BidSwapPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'BidSwapPnts',
    'NotReqXML': '0',
    'Description': 'The bid FX Swap points for an FX Swap. It is the \'far bid forward points - near offer forward point\'. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1066',
    'Name': 'OfferSwapPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'OfrSwapPnts',
    'NotReqXML': '0',
    'Description': 'The offer FX Swap points for an FX Swap. It is the \'far offer forward points - near bid forward points\'. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1067',
    'Name': 'LegBidForwardPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'LegBidFwdPnts',
    'NotReqXML': '0',
    'Description': 'The bid FX forward points for the leg of an FX Swap. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1068',
    'Name': 'LegOfferForwardPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'LegOfrFwdPnts',
    'NotReqXML': '0',
    'Description': 'The offer FX forward points for the leg of an FX Swap. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1069',
    'Name': 'SwapPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'SwapPnts',
    'NotReqXML': '0',
    'Description': 'For FX Swap, this is used to express the differential between the far leg\'s bid/offer and the near leg\'s bid/offer. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1070',
    'Name': 'MDQuoteType',
    'Type': 'int',
    'AbbrName': 'MDQteTyp',
    'NotReqXML': '0',
    'Description': 'Identifies market data quote type.',
    'Added': 'FIX.4.4',
    'AddedEP': '7'
  },
  {
    'Tag': '1071',
    'Name': 'LastSwapPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'LastSwapPnts',
    'NotReqXML': '0',
    'Description': 'For FX Swap, this is used to express the last market event for the differential between the far leg\'s bid/offer and the near leg\'s bid/offer in a fill or partial fill. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1072',
    'Name': 'SideGrossTradeAmt',
    'Type': 'Amt',
    'AbbrName': 'SideGrossTradeAmt',
    'NotReqXML': '0',
    'Description': 'The gross trade amount for this side of the trade. See also GrossTradeAmt (381) for additional definition.',
    'Added': 'FIX.4.4',
    'AddedEP': '25'
  },
  {
    'Tag': '1073',
    'Name': 'LegLastForwardPoints',
    'Type': 'PriceOffset',
    'AbbrName': 'LegLastFwdPnts',
    'NotReqXML': '0',
    'Description': 'The forward points for this leg\'s fill event. Value can be negative. Expressed in decimal form. For example, 61.99 points is expressed and sent as 0.006199',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1074',
    'Name': 'LegCalculatedCcyLastQty',
    'Type': 'Qty',
    'AbbrName': 'LegCalcCcyLastQty',
    'NotReqXML': '0',
    'Description': 'Used for the calculated quantity of the other side of the currency for this leg. Can be derived from LegQty and LegLastPx.',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1075',
    'Name': 'LegGrossTradeAmt',
    'Type': 'Amt',
    'AbbrName': 'LegGrossTrdAmt',
    'NotReqXML': '0',
    'Description': 'The gross trade amount of the leg. For FX Futures this is used to express the notional value of a fill when LegLastQty and other quantity fields are express in terms of contract size.',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1079',
    'Name': 'MaturityTime',
    'Type': 'TZTimeOnly',
    'AbbrName': 'MatTm',
    'NotReqXML': '0',
    'Description': 'Time of security\'s maturity expressed in local time with offset to UTC specified',
    'Added': 'FIX.4.4',
    'AddedEP': '21'
  },
  {
    'Tag': '1080',
    'Name': 'RefOrderID',
    'Type': 'String',
    'AbbrName': 'RefOrdID',
    'NotReqXML': '0',
    'Description': 'The ID reference to the order being hit or taken',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1081',
    'Name': 'RefOrderIDSource',
    'Type': 'char',
    'AbbrName': 'RefOrdIDSrc',
    'NotReqXML': '0',
    'Description': 'Used to specify what identifier, provided in order depth market data, to use when hitting (taking) a specific order.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1082',
    'Name': 'SecondaryDisplayQty',
    'Type': 'Qty',
    'AbbrName': 'SecDspQty',
    'NotReqXML': '0',
    'Description': 'Used for reserve orders when DisplayQty applies to the primary execution market (e.g.an ECN) and another quantity is to be shown at other markets (e.g. the exchange). On orders specifies the qty to be displayed, on execution reports the currently displayed quantity.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1083',
    'Name': 'DisplayWhen',
    'Type': 'char',
    'AbbrName': 'DspWhn',
    'NotReqXML': '0',
    'Description': 'Instructs when to refresh DisplayQty (1138).',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1084',
    'Name': 'DisplayMethod',
    'Type': 'char',
    'AbbrName': 'DspMthd',
    'NotReqXML': '0',
    'Description': 'Defines what value to use in DisplayQty (1138). If not specified the default DisplayMethod is \'1\'',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1085',
    'Name': 'DisplayLowQty',
    'Type': 'Qty',
    'AbbrName': 'DsplLwQty',
    'NotReqXML': '0',
    'Description': 'Defines the lower quantity limit to a randomized refresh of DisplayQty.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1086',
    'Name': 'DisplayHighQty',
    'Type': 'Qty',
    'AbbrName': 'DisplayHighQty',
    'NotReqXML': '0',
    'Description': 'Defines the upper quantity limit to a randomized refresh of DisplayQty.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1087',
    'Name': 'DisplayMinIncr',
    'Type': 'Qty',
    'AbbrName': 'DspMinIncr',
    'NotReqXML': '0',
    'Description': 'Defines the minimum increment to be used when calculating a random refresh of DisplayQty. A user specifies this when he wants a larger increment than the standard provided by the market (e.g. the round lot size).',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1088',
    'Name': 'RefreshQty',
    'Type': 'Qty',
    'AbbrName': 'RfrshQty',
    'NotReqXML': '0',
    'Description': 'Defines the quantity used to refresh DisplayQty.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1089',
    'Name': 'MatchIncrement',
    'Type': 'Qty',
    'AbbrName': 'MtchInc',
    'NotReqXML': '0',
    'Description': 'Allows orders to specify a minimum quantity that applies to every execution (one execution could be for multiple counter-orders). The order may still fill against smaller orders, but the cumulative quantity of the execution must be in multiples of the MatchIncrement.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1090',
    'Name': 'MaxPriceLevels',
    'Type': 'int',
    'AbbrName': 'MxPxLvls',
    'NotReqXML': '0',
    'Description': 'Allows an order to specify a maximum number of price levels to trade through. Only valid for aggressive orders and during continuous (autoexecution) trading sessions. Property lost when order is put on book. A partially filled order is assigned last trade price as limit price. Non-filled order behaves as ordinary Market or Limit.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1091',
    'Name': 'PreTradeAnonymity',
    'Type': 'Boolean',
    'AbbrName': 'PrTrdAnon',
    'NotReqXML': '0',
    'Description': 'Allows trader to explicitly request anonymity or disclosure in pre-trade market data feeds. Anonymity is relevant in markets where counterparties are regularly disclosed in order depth feeds. Disclosure is relevant when counterparties are not normally visible.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1092',
    'Name': 'PriceProtectionScope',
    'Type': 'char',
    'AbbrName': 'PxPrtScp',
    'NotReqXML': '0',
    'Description': 'Defines the type of price protection the customer requires on their order.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1093',
    'Name': 'LotType',
    'Type': 'char',
    'AbbrName': 'LotTyp',
    'NotReqXML': '0',
    'Description': 'Defines the lot type assigned to the order.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1094',
    'Name': 'PegPriceType',
    'Type': 'int',
    'AbbrName': 'PegPxTyp',
    'NotReqXML': '0',
    'Description': 'Defines the type of peg.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1095',
    'Name': 'PeggedRefPrice',
    'Type': 'Price',
    'AbbrName': 'PggdRefPx',
    'NotReqXML': '0',
    'Description': 'The value of the reference price that the order is pegged to. PeggedRefPrice + PegOffsetValue (211) = PeggedPrice (839) unless the limit price (44, Price) is breached. The values may not be exact due to rounding.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1096',
    'Name': 'PegSecurityIDSource',
    'Type': 'String',
    'AbbrName': 'PegSecurityIDSource',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Defines the identity of the security off whose prices the order will peg. Same values as SecurityIDSource (22)',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1097',
    'Name': 'PegSecurityID',
    'Type': 'String',
    'AbbrName': 'PegSecID',
    'NotReqXML': '0',
    'Description': 'Defines the identity of the security off whose prices the order will peg.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1098',
    'Name': 'PegSymbol',
    'Type': 'String',
    'AbbrName': 'PgSymbl',
    'NotReqXML': '0',
    'Description': 'Defines the common, \'human understood\' representation of the security off whose prices the order will Peg.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1099',
    'Name': 'PegSecurityDesc',
    'Type': 'String',
    'AbbrName': 'PegSecDesc',
    'NotReqXML': '0',
    'Description': 'Security description of the security off whose prices the order will Peg.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1100',
    'Name': 'TriggerType',
    'Type': 'char',
    'AbbrName': 'TrgrTyp',
    'NotReqXML': '0',
    'Description': 'Defines when the trigger will hit, i.e. the action specified by the trigger instructions will come into effect.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1101',
    'Name': 'TriggerAction',
    'Type': 'char',
    'AbbrName': 'TrgrActn',
    'NotReqXML': '0',
    'Description': 'Defines the type of action to take when the trigger hits.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1102',
    'Name': 'TriggerPrice',
    'Type': 'Price',
    'AbbrName': 'TrgrPx',
    'NotReqXML': '0',
    'Description': 'The price at which the trigger should hit.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1103',
    'Name': 'TriggerSymbol',
    'Type': 'String',
    'AbbrName': 'TrgrSym',
    'NotReqXML': '0',
    'Description': 'Defines the common, \'human understood\' representation of the security whose prices will be tracked by the trigger logic.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1104',
    'Name': 'TriggerSecurityID',
    'Type': 'String',
    'AbbrName': 'TrgrSecID',
    'NotReqXML': '0',
    'Description': 'Defines the identity of the security whose prices will be tracked by the trigger logic.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1105',
    'Name': 'TriggerSecurityIDSource',
    'Type': 'String',
    'AbbrName': 'TrgrSecIDSrc',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Defines the identity of the security whose prices will be tracked by the trigger logic. Same values as SecurityIDSource (22).',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1106',
    'Name': 'TriggerSecurityDesc',
    'Type': 'String',
    'AbbrName': 'TrgrSecDesc',
    'NotReqXML': '0',
    'Description': 'Defines the security description of the security whose prices will be tracked by the trigger logic.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1107',
    'Name': 'TriggerPriceType',
    'Type': 'char',
    'AbbrName': 'TrgrPxTyp',
    'NotReqXML': '0',
    'Description': 'The type of price that the trigger is compared to.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1108',
    'Name': 'TriggerPriceTypeScope',
    'Type': 'char',
    'AbbrName': 'TrgrPxTypScp',
    'NotReqXML': '0',
    'Description': 'Defines the type of price protection the customer requires on their order.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1109',
    'Name': 'TriggerPriceDirection',
    'Type': 'char',
    'AbbrName': 'TrgrPxDir',
    'NotReqXML': '0',
    'Description': 'The side from which the trigger price is reached.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1110',
    'Name': 'TriggerNewPrice',
    'Type': 'Price',
    'AbbrName': 'TrgrNewPx',
    'NotReqXML': '0',
    'Description': 'The Price that the order should have after the trigger has hit. Could be applicable for any trigger type, but must be specified for Trigger Type 1.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1111',
    'Name': 'TriggerOrderType',
    'Type': 'char',
    'AbbrName': 'TrgrOrdTyp',
    'NotReqXML': '0',
    'Description': 'The OrdType the order should have after the trigger has hit. Required to express orders that change from Limit to Market. Other values from OrdType (40) may be used if appropriate and bilaterally agreed upon.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1112',
    'Name': 'TriggerNewQty',
    'Type': 'Qty',
    'AbbrName': 'TrgrNewQty',
    'NotReqXML': '0',
    'Description': 'The Quantity the order should have after the trigger has hit.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1113',
    'Name': 'TriggerTradingSessionID',
    'Type': 'String',
    'AbbrName': 'TrgrTrdSessID',
    'NotReqXML': '0',
    'Description': 'Defines the trading session at which the order will be activated.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1114',
    'Name': 'TriggerTradingSessionSubID',
    'Type': 'String',
    'AbbrName': 'TrgrTrdSessSubID',
    'NotReqXML': '0',
    'Description': 'Defines the subordinate trading session at which the order will be activated.',
    'Added': 'FIX.5.0',
    'AddedEP': '-1'
  },
  {
    'Tag': '1115',
    'Name': 'OrderCategory',
    'Type': 'char',
    'AbbrName': 'OrdCat',
    'NotReqXML': '0',
    'Description': 'Defines the type of interest behind a trade (fill or partial fill).',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1116',
    'Name': 'NoRootPartyIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoRootPartyIDs',
    'NotReqXML': '1',
    'Description': 'Number of RootPartyID (1117), RootPartyIDSource (1118), and RootPartyRole (1119) entries',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1117',
    'Name': 'RootPartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within a root parties component. Same values as PartyID (448)',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1118',
    'Name': 'RootPartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within a root parties component. Same values as PartyIDSource (447)',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1119',
    'Name': 'RootPartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within a root parties component. Same values as PartyRole (452)',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1120',
    'Name': 'NoRootPartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoRootPartySubIDs',
    'NotReqXML': '1',
    'Description': 'Number of RootPartySubID (1121) and RootPartySubIDType (1122) entries',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1121',
    'Name': 'RootPartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartySubID value within a root parties component. Same values as PartySubID (523)',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1122',
    'Name': 'RootPartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Type of RootPartySubID (1121) value. Same values as PartySubIDType (803)',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1123',
    'Name': 'TradeHandlingInstr',
    'Type': 'char',
    'AbbrName': 'TrdHandlInst',
    'NotReqXML': '0',
    'Description': 'Specified how the Trade Capture Report should be handled by the Respondent.',
    'Added': 'FIX.4.4',
    'AddedEP': '23'
  },
  {
    'Tag': '1124',
    'Name': 'OrigTradeHandlingInstr',
    'Type': 'char',
    'AbbrName': 'OrigTrdHandlInst',
    'NotReqXML': '0',
    'EnumDatatype': '1123',
    'Description': 'Optionally used with TradeHandlingInstr = 0 to relay the trade handling instruction used when reporting the trade to the marketplace. Same values as TradeHandlingInstr (1123)',
    'Added': 'FIX.4.4',
    'AddedEP': '23'
  },
  {
    'Tag': '1125',
    'Name': 'OrigTradeDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'OrigTrdDt',
    'NotReqXML': '0',
    'Description': 'Used to preserve original trade date when original trade is being referenced in a subsequent trade transaction such as a transfer',
    'Added': 'FIX.4.4',
    'AddedEP': '23'
  },
  {
    'Tag': '1126',
    'Name': 'OrigTradeID',
    'Type': 'String',
    'AbbrName': 'OrigTrdID',
    'NotReqXML': '0',
    'Description': 'Used to preserve original trade id when original trade is being referenced in a subsequent trade transaction such as a transfer',
    'Added': 'FIX.4.4',
    'AddedEP': '23'
  },
  {
    'Tag': '1127',
    'Name': 'OrigSecondaryTradeID',
    'Type': 'String',
    'AbbrName': 'OrignTrdID2',
    'NotReqXML': '0',
    'Description': 'Used to preserve original secondary trade id when original trade is being referenced in a subsequent trade transaction such as a transfer',
    'Added': 'FIX.4.4',
    'AddedEP': '23'
  },
  {
    'Tag': '1128',
    'Name': 'ApplVerID',
    'Type': 'String',
    'AbbrName': 'ApplVerID',
    'NotReqXML': '0',
    'Description': 'Specifies the service pack release being applied at message level. Enumerated field with values assigned at time of service pack release',
    'Added': 'FIX.4.4',
    'AddedEP': '16'
  },
  {
    'Tag': '1129',
    'Name': 'CstmApplVerID',
    'Type': 'String',
    'AbbrName': 'CstmApplVerID',
    'NotReqXML': '1',
    'Description': 'Specifies a custom extension to a message being applied at the message level. Enumerated field',
    'Added': 'FIX.4.4',
    'AddedEP': '16'
  },
  {
    'Tag': '1130',
    'Name': 'RefApplVerID',
    'Type': 'String',
    'AbbrName': 'RefApplVerID',
    'NotReqXML': '0',
    'EnumDatatype': '1128',
    'Description': 'Specifies the service pack release being applied to a message at the session level. Enumerated field with values assigned at time of service pack release. Uses same values as ApplVerID',
    'Added': 'FIX.4.4',
    'AddedEP': '16'
  },
  {
    'Tag': '1131',
    'Name': 'RefCstmApplVerID',
    'Type': 'String',
    'AbbrName': 'RefCstmApplVerID',
    'NotReqXML': '0',
    'Description': 'Specifies a custom extension to a message being applied at the session level.',
    'Added': 'FIX.4.4',
    'AddedEP': '16'
  },
  {
    'Tag': '1132',
    'Name': 'TZTransactTime',
    'Type': 'TZTimestamp',
    'AbbrName': 'TZTransactTime',
    'NotReqXML': '0',
    'Description': 'Transact time in the local date-time stamp with a TZ offset to UTC identified',
    'Added': 'FIX.4.4',
    'AddedEP': '26'
  },
  {
    'Tag': '1133',
    'Name': 'ExDestinationIDSource',
    'Type': 'char',
    'AbbrName': 'ExDestIDSrc',
    'NotReqXML': '0',
    'Description': 'The ID source of ExDestination',
    'Added': 'FIX.4.4',
    'AddedEP': '26'
  },
  {
    'Tag': '1134',
    'Name': 'ReportedPxDiff',
    'Type': 'Boolean',
    'AbbrName': 'ReportedPxDiff',
    'NotReqXML': '0',
    'Description': 'Indicates that the reported price that is different from the market price. The price difference should be stated by using field 828 TrdType and, if required, field 829 TrdSubType',
    'Added': 'FIX.4.4',
    'AddedEP': '26'
  },
  {
    'Tag': '1135',
    'Name': 'RptSys',
    'Type': 'String',
    'AbbrName': 'RptSys',
    'NotReqXML': '0',
    'Description': 'Indicates the system or medium on which the report has been published',
    'Added': 'FIX.4.4',
    'AddedEP': '26'
  },
  {
    'Tag': '1136',
    'Name': 'AllocClearingFeeIndicator',
    'Type': 'String',
    'AbbrName': 'ClrFeeInd',
    'NotReqXML': '0',
    'Description': 'ClearingFeeIndicator(635) for Allocation, see ClearingFeeIndicator(635) for permitted values.',
    'Added': 'FIX.4.4',
    'AddedEP': '25'
  },
  {
    'Tag': '1137',
    'Name': 'DefaultApplVerID',
    'Type': 'String',
    'AbbrName': 'DefApplVerID',
    'NotReqXML': '0',
    'EnumDatatype': '1128',
    'Description': 'Specifies the service pack release being applied, by default, to message at the session level. Enumerated field with values assigned at time of service pack release. Uses same values as ApplVerID',
    'Added': 'FIX.4.4',
    'AddedEP': '16'
  },
  {
    'Tag': '1138',
    'Name': 'DisplayQty',
    'Type': 'Qty',
    'AbbrName': 'DisplayQty',
    'NotReqXML': '0',
    'Description': 'The quantity to be displayed . Required for reserve orders. On orders specifies the qty to be displayed, on execution reports the currently displayed quantity.',
    'Added': 'FIX.4.4',
    'AddedEP': '22'
  },
  {
    'Tag': '1139',
    'Name': 'ExchangeSpecialInstructions',
    'Type': 'String',
    'AbbrName': 'ExchSpeclInstr',
    'NotReqXML': '0',
    'Description': 'Free format text string related to exchange.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.4.4',
    'AddedEP': '29'
  },
  {
    'Tag': '1213',
    'Name': 'UnderlyingMaturityTime',
    'Type': 'TZTimeOnly',
    'AbbrName': 'MatTm',
    'NotReqXML': '0',
    'Description': 'Time of security\'s maturity expressed in local time with offset to UTC specified',
    'Added': 'FIX.5.0',
    'AddedEP': '41'
  },
  {
    'Tag': '1212',
    'Name': 'LegMaturityTime',
    'Type': 'TZTimeOnly',
    'AbbrName': 'MatTm',
    'NotReqXML': '0',
    'Description': 'Time of security\'s maturity expressed in local time with offset to UTC specified',
    'Added': 'FIX.5.0',
    'AddedEP': '41'
  },
  {
    'Tag': '1140',
    'Name': 'MaxTradeVol',
    'Type': 'Qty',
    'AbbrName': 'MaxTrdVol',
    'NotReqXML': '0',
    'Description': 'The maximum order quantity that can be submitted for a security.',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1141',
    'Name': 'NoMDFeedTypes',
    'Type': 'NumInGroup',
    'AbbrName': 'NoMDFeedTypes',
    'NotReqXML': '1',
    'Description': 'The number of feed types and corresponding book depths associated with a security',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1142',
    'Name': 'MatchAlgorithm',
    'Type': 'String',
    'AbbrName': 'MtchAlgo',
    'NotReqXML': '0',
    'Description': 'The types of algorithm used to match orders in a specific security. Possilbe value types are FIFO, Allocation, Pro-rata, Lead Market Maker, Currency Calender.',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1143',
    'Name': 'MaxPriceVariation',
    'Type': 'float',
    'AbbrName': 'MxPxVar',
    'NotReqXML': '0',
    'Description': 'The maximum price variation of an execution from one event to the next for a given security.',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1144',
    'Name': 'ImpliedMarketIndicator',
    'Type': 'int',
    'AbbrName': 'ImpldMktInd',
    'NotReqXML': '0',
    'Description': 'Indicates that an implied market should be created for either the legs of a multi-leg instrument (Implied-in) or for the multi-leg instrument based on the existence of the legs (Implied-out). Determination as to whether implied markets should be created is generally done at the level of the multi-leg instrument. Commonly used in listed derivatives.',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1145',
    'Name': 'EventTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'Tm',
    'NotReqXML': '0',
    'Description': 'Specific time of event. To be used in combination with EventDate [866]',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1146',
    'Name': 'MinPriceIncrementAmount',
    'Type': 'Amt',
    'AbbrName': 'MinPxIncrAmt',
    'NotReqXML': '0',
    'Description': 'Minimum price increment amount associated with the MinPriceIncrement ( tag 969). For listed derivatives, the value can be calculated by multiplying MinPriceIncrement by ContractValueFactor(231).',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1147',
    'Name': 'UnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'UOMQty',
    'NotReqXML': '0',
    'Description': 'Used to indicate the quantity of the underlying commodity unit of measure on which the contract is based, such as, 2500 lbs of lean cattle, 1000 barrels of crude oil, 1000 bushels of corn, etc. UnitOfMeasureQty is required for UnitOfMeasure(996) Variable Quantity UOMs enumerations. Refer to the definition of UnitOfMeasure(996) for more information on the use of UnitOfMeasureQty.',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1148',
    'Name': 'LowLimitPrice',
    'Type': 'Price',
    'AbbrName': 'LowLmtPx',
    'NotReqXML': '0',
    'Description': 'Allowable low limit price for the trading day. A key parameter in validating order price. Used as the lower band for validating order prices. Orders submitted with prices below the lower limit will be rejected',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1149',
    'Name': 'HighLimitPrice',
    'Type': 'Price',
    'AbbrName': 'HiLmtPx',
    'NotReqXML': '0',
    'Description': 'Allowable high limit price for the trading day. A key parameter in validating order price. Used as the upper band for validating order prices. Orders submitted with prices above the upper limit will be rejected',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '76',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1150',
    'Name': 'TradingReferencePrice',
    'Type': 'Price',
    'AbbrName': 'TrdgRefPx',
    'NotReqXML': '0',
    'Description': 'Reference price for the current trading price range usually representing the mid price between the HighLimitPrice and LowLimitPrice. The value may be the settlement price or closing price of the prior trading day.',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1151',
    'Name': 'SecurityGroup',
    'Type': 'String',
    'AbbrName': 'SecGrp',
    'NotReqXML': '0',
    'Description': 'An exchange specific name assigned to a group of related securities which may be concurrently affected by market events and actions.',
    'Added': 'FIX.5.0',
    'AddedEP': '42'
  },
  {
    'Tag': '1152',
    'Name': 'LegNumber',
    'Type': 'int',
    'AbbrName': 'LegNo',
    'NotReqXML': '0',
    'Description': 'Allow sequencing of Legs for a Strategy to be captured',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1153',
    'Name': 'SettlementCycleNo',
    'Type': 'int',
    'AbbrName': 'CycleNo',
    'NotReqXML': '0',
    'Description': 'Settlement cycle in which the settlement obligation was generated',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1154',
    'Name': 'SideCurrency',
    'Type': 'Currency',
    'AbbrName': 'Ccy',
    'NotReqXML': '0',
    'Description': 'Used to identify the trading currency on the Trade Capture Report Side',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1155',
    'Name': 'SideSettlCurrency',
    'Type': 'Currency',
    'AbbrName': 'SettlCcy',
    'NotReqXML': '0',
    'Description': 'Used to identify the settlement currency on the Trade Capture Report Side',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1157',
    'Name': 'CcyAmt',
    'Type': 'Amt',
    'AbbrName': 'CcyAmt',
    'NotReqXML': '0',
    'Description': 'Net flow of Currency 1',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1158',
    'Name': 'NoSettlDetails',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSettlDetails',
    'NotReqXML': '1',
    'Description': 'Used to group Each Settlement Party',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1159',
    'Name': 'SettlObligMode',
    'Type': 'int',
    'AbbrName': 'SettlMode',
    'NotReqXML': '0',
    'Description': 'Used to identify the reporting mode of the settlement obligation which is either preliminary or final',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1160',
    'Name': 'SettlObligMsgID',
    'Type': 'String',
    'AbbrName': 'SettlMsgID',
    'NotReqXML': '0',
    'Description': 'Message identifier for Settlement Obligation Report',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1161',
    'Name': 'SettlObligID',
    'Type': 'String',
    'AbbrName': 'SettlID',
    'NotReqXML': '0',
    'Description': 'Unique ID for this settlement instruction.',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1162',
    'Name': 'SettlObligTransType',
    'Type': 'char',
    'AbbrName': 'SettlTransTyp',
    'NotReqXML': '0',
    'Description': 'Transaction Type - required except where SettlInstMode is 5=Reject SSI request',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1163',
    'Name': 'SettlObligRefID',
    'Type': 'String',
    'AbbrName': 'SettlRefID',
    'NotReqXML': '0',
    'Description': 'Required where SettlInstTransType is Cancel or Replace',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1164',
    'Name': 'SettlObligSource',
    'Type': 'char',
    'AbbrName': 'SettlSrc',
    'NotReqXML': '0',
    'Description': 'Used to identify whether these delivery instructions are for the buyside or the sellside.',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1165',
    'Name': 'NoSettlOblig',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSettlOblig',
    'NotReqXML': '1',
    'Description': 'Number of settlement obligations',
    'Added': 'FIX.5.0',
    'AddedEP': '44'
  },
  {
    'Tag': '1166',
    'Name': 'QuoteMsgID',
    'Type': 'String',
    'AbbrName': 'QtMsgID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a quote message.',
    'Added': 'FIX.5.0',
    'AddedEP': '45'
  },
  {
    'Tag': '1167',
    'Name': 'QuoteEntryStatus',
    'Type': 'int',
    'AbbrName': 'QtEntSts',
    'NotReqXML': '0',
    'Description': 'Identifies the status of an individual quote. See also QuoteStatus(297) which is used for single Quotes.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '95',
    'Added': 'FIX.5.0',
    'AddedEP': '45'
  },
  {
    'Tag': '1168',
    'Name': 'TotNoCxldQuotes',
    'Type': 'int',
    'AbbrName': 'TotNoCxldQts',
    'NotReqXML': '0',
    'Description': 'Specifies the number of canceled quotes',
    'Added': 'FIX.5.0',
    'AddedEP': '45'
  },
  {
    'Tag': '1169',
    'Name': 'TotNoAccQuotes',
    'Type': 'int',
    'AbbrName': 'TotNoAccQts',
    'NotReqXML': '0',
    'Description': 'Specifies the number of accepted quotes',
    'Added': 'FIX.5.0',
    'AddedEP': '45'
  },
  {
    'Tag': '1170',
    'Name': 'TotNoRejQuotes',
    'Type': 'int',
    'AbbrName': 'TotNoRejQts',
    'NotReqXML': '0',
    'Description': 'Specifies the number of rejected quotes',
    'Added': 'FIX.5.0',
    'AddedEP': '45'
  },
  {
    'Tag': '1171',
    'Name': 'PrivateQuote',
    'Type': 'Boolean',
    'AbbrName': 'PrvtQt',
    'NotReqXML': '0',
    'Description': 'Specifies whether a quote is public, i.e. available to the market, or private, i.e. available to a specified counterparty only.',
    'Added': 'FIX.5.0',
    'AddedEP': '46'
  },
  {
    'Tag': '1172',
    'Name': 'RespondentType',
    'Type': 'int',
    'AbbrName': 'RspdntTyp',
    'NotReqXML': '0',
    'Description': 'Specifies the type of respondents requested.',
    'Added': 'FIX.5.0',
    'AddedEP': '46'
  },
  {
    'Tag': '1173',
    'Name': 'MDSubBookType',
    'Type': 'int',
    'AbbrName': 'MDSubBkTyp',
    'NotReqXML': '0',
    'Description': 'Describes a class of sub book, e.g. for the separation of various lot types. The Sub Book Type indicates that the following Market Data Entries belong to a non-integrated Sub Book. Whenever provided the Sub Book must be used together with MDPriceLevel and MDEntryPositionNo in order to sort the order properly.\nValues are bilaterally agreed.',
    'Added': 'FIX.5.0',
    'AddedEP': '47'
  },
  {
    'Tag': '1174',
    'Name': 'SecurityTradingEvent',
    'Type': 'int',
    'AbbrName': 'SecTrdEvnt',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies an event related to a SecurityTradingStatus(326). An event occurs and is gone, it is not a state that applies for a period of time.',
    'Added': 'FIX.5.0',
    'AddedEP': '47'
  },
  {
    'Tag': '1175',
    'Name': 'NoStatsIndicators',
    'Type': 'NumInGroup',
    'AbbrName': 'NoStatsInds',
    'NotReqXML': '1',
    'Description': 'Number of statistics indicator repeating group entries',
    'Added': 'FIX.5.0',
    'AddedEP': '47'
  },
  {
    'Tag': '1176',
    'Name': 'StatsType',
    'Type': 'int',
    'AbbrName': 'StatsTyp',
    'NotReqXML': '0',
    'Description': 'Type of statistics',
    'Added': 'FIX.5.0',
    'AddedEP': '47'
  },
  {
    'Tag': '1177',
    'Name': 'NoOfSecSizes',
    'Type': 'NumInGroup',
    'AbbrName': 'NoSecSzs',
    'NotReqXML': '1',
    'Description': 'The number of secondary sizes specifies in this entry',
    'Added': 'FIX.5.0',
    'AddedEP': '47'
  },
  {
    'Tag': '1178',
    'Name': 'MDSecSizeType',
    'Type': 'int',
    'AbbrName': 'MDSecSizeType',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Specifies the type of secondary size.',
    'Added': 'FIX.5.0',
    'AddedEP': '47'
  },
  {
    'Tag': '1179',
    'Name': 'MDSecSize',
    'Type': 'Qty',
    'AbbrName': 'MDSecSize',
    'NotReqXML': '0',
    'Description': 'A part of the MDEntrySize(271) that represents secondary interest as specified by MDSecSizeType(1178).',
    'Added': 'FIX.5.0',
    'AddedEP': '47'
  },
  {
    'Tag': '1180',
    'Name': 'ApplID',
    'Type': 'String',
    'AbbrName': 'ApplID',
    'NotReqXML': '0',
    'Description': 'Identifies the application with which a message is associated. Used only if application sequencing is in effect.',
    'Added': 'FIX.5.0',
    'AddedEP': '48'
  },
  {
    'Tag': '1181',
    'Name': 'ApplSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'ApplSeqNum',
    'NotReqXML': '0',
    'Description': 'Data sequence number to be used when FIX session is not in effect',
    'Added': 'FIX.5.0',
    'AddedEP': '48'
  },
  {
    'Tag': '1182',
    'Name': 'ApplBegSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'ApplBegSeqNum',
    'NotReqXML': '0',
    'Description': 'Beginning range of application sequence numbers',
    'Added': 'FIX.5.0',
    'AddedEP': '48'
  },
  {
    'Tag': '1183',
    'Name': 'ApplEndSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'ApplEndSeq',
    'NotReqXML': '0',
    'Description': 'Ending range of application sequence numbers',
    'Added': 'FIX.5.0',
    'AddedEP': '48'
  },
  {
    'Tag': '1184',
    'Name': 'SecurityXMLLen',
    'Type': 'Length',
    'AssociatedDataTag': '1185',
    'AbbrName': 'SecXMLLen',
    'NotReqXML': '1',
    'Description': 'Lenght of the SecurityXML data block.',
    'Added': 'FIX.5.0',
    'AddedEP': '49'
  },
  {
    'Tag': '1185',
    'Name': 'SecurityXML',
    'Type': 'XMLData',
    'AbbrName': 'SecXML',
    'NotReqXML': '1',
    'Description': 'Actual XML data stream describing a security, normally FpML.',
    'Added': 'FIX.5.0',
    'AddedEP': '49'
  },
  {
    'Tag': '1186',
    'Name': 'SecurityXMLSchema',
    'Type': 'String',
    'AbbrName': 'Schema',
    'NotReqXML': '0',
    'Description': 'The schema used to validate the contents of SecurityXML',
    'Added': 'FIX.5.0',
    'AddedEP': '49'
  },
  {
    'Tag': '1187',
    'Name': 'RefreshIndicator',
    'Type': 'Boolean',
    'AbbrName': 'RefInd',
    'NotReqXML': '0',
    'Description': 'Set by the sender to tell the receiver to perform an immediate refresh of the book due to disruptions in the accompanying real-time feed\n\'Y\' - Mandatory refresh by all participants\n\'N\' - Process as required',
    'Added': 'FIX.5.0',
    'AddedEP': '50'
  },
  {
    'Tag': '1188',
    'Name': 'Volatility',
    'Type': 'float',
    'AbbrName': 'Vol',
    'NotReqXML': '0',
    'Description': 'Annualized volatility for option model calculations',
    'Added': 'FIX.5.0',
    'AddedEP': '51'
  },
  {
    'Tag': '1189',
    'Name': 'TimeToExpiration',
    'Type': 'float',
    'AbbrName': 'TmToExp',
    'NotReqXML': '0',
    'Description': 'Time to expiration in years calculated as the number of days remaining to expiration divided by 365 days per year.',
    'Added': 'FIX.5.0',
    'AddedEP': '51'
  },
  {
    'Tag': '1190',
    'Name': 'RiskFreeRate',
    'Type': 'float',
    'AbbrName': 'RFR',
    'NotReqXML': '0',
    'Description': 'Interest rate. Usually some form of short term rate.',
    'Added': 'FIX.5.0',
    'AddedEP': '51'
  },
  {
    'Tag': '1191',
    'Name': 'PriceUnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'PxUOM',
    'NotReqXML': '0',
    'EnumDatatype': '996',
    'Description': 'Used to express the UOM of the price if different from the contract. In futures, this can be different for cross-rate products in which the price is quoted in units differently from the contract',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1192',
    'Name': 'PriceUnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'PxUOMQty',
    'NotReqXML': '0',
    'Description': 'Used to express the UOM Quantity of the price if different from the contract. In futures, this can be different for physically delivered products in which price is quoted in a unit size different from the contract, i.e. a Cattle Future contract has a UOMQty of 40,000 and a PriceUOMQty of 100.',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1193',
    'Name': 'SettlMethod',
    'Type': 'char',
    'AbbrName': 'SettlMeth',
    'NotReqXML': '0',
    'Description': 'Settlement method for a contract. Can be used as an alternative to CFI Code value',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1194',
    'Name': 'ExerciseStyle',
    'Type': 'int',
    'AbbrName': 'ExerStyle',
    'NotReqXML': '0',
    'Description': 'Type of exercise of a derivatives security',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1419',
    'Name': 'UnderlyingExerciseStyle',
    'Type': 'int',
    'AbbrName': 'ExerStyle',
    'NotReqXML': '0',
    'EnumDatatype': '1194',
    'Description': 'Type of exercise of a derivatives security',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1420',
    'Name': 'LegExerciseStyle',
    'Type': 'int',
    'AbbrName': 'ExerStyle',
    'NotReqXML': '0',
    'EnumDatatype': '1194',
    'Description': 'Type of exercise of a derivatives security',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1195',
    'Name': 'OptPayoutAmount',
    'Type': 'Amt',
    'AbbrName': 'OptPayAmt',
    'NotReqXML': '0',
    'Description': 'Cash amount indicating the pay out associated with an option. For binary options this is a fixed amount. \nConditionally required if OptPayoutType(1482) is set to binary.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '92',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1196',
    'Name': 'PriceQuoteMethod',
    'Type': 'String',
    'AbbrName': 'PxQteMeth',
    'NotReqXML': '0',
    'Description': 'Method for price quotation',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1197',
    'Name': 'ValuationMethod',
    'Type': 'String',
    'AbbrName': 'ValMeth',
    'NotReqXML': '0',
    'Description': 'Specifies the type of valuation method applied.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '83',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1198',
    'Name': 'ListMethod',
    'Type': 'int',
    'AbbrName': 'ListMeth',
    'NotReqXML': '0',
    'Description': 'Indicates whether instruments are pre-listed only or can also be defined via user request',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1199',
    'Name': 'CapPrice',
    'Type': 'Price',
    'AbbrName': 'CapPx',
    'NotReqXML': '0',
    'Description': 'Used to express the ceiling price of a capped call',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1200',
    'Name': 'FloorPrice',
    'Type': 'Price',
    'AbbrName': 'FlrPx',
    'NotReqXML': '0',
    'Description': 'Used to express the floor price of a capped put',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1201',
    'Name': 'NoStrikeRules',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of strike rule entries. This block specifies the rules for determining how new strikes should be listed within the stated price range of the underlying instrument',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1202',
    'Name': 'StartStrikePxRange',
    'Type': 'Price',
    'AbbrName': 'StartStrkPxRng',
    'NotReqXML': '0',
    'Description': 'Starting price for the range to which the StrikeIncrement applies. Price refers to the price of the underlying',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1203',
    'Name': 'EndStrikePxRange',
    'Type': 'Price',
    'AbbrName': 'EndStrkPxRng',
    'NotReqXML': '0',
    'Description': 'Ending price of the range to which the StrikeIncrement applies. Price refers to the price of the underlying',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1204',
    'Name': 'StrikeIncrement',
    'Type': 'float',
    'AbbrName': 'StrkIncr',
    'NotReqXML': '0',
    'Description': 'Value by which strike price should be incremented within the specified price range.',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1205',
    'Name': 'NoTickRules',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of tick rules. This block specifies the rules for determining how a security ticks, i.e. the price increments at which it can be quoted and traded, depending on the current price of the security',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1206',
    'Name': 'StartTickPriceRange',
    'Type': 'Price',
    'AbbrName': 'StartTickPxRng',
    'NotReqXML': '0',
    'Description': 'Starting price range for specified tick increment',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1207',
    'Name': 'EndTickPriceRange',
    'Type': 'Price',
    'AbbrName': 'EndTickPxRng',
    'NotReqXML': '0',
    'Description': 'Ending price range for the specified tick increment',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1208',
    'Name': 'TickIncrement',
    'Type': 'Price',
    'AbbrName': 'TickIncr',
    'NotReqXML': '0',
    'Description': 'Tick increment for stated price range. Specifies the valid price increments at which a security can be quoted and traded',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1209',
    'Name': 'TickRuleType',
    'Type': 'int',
    'AbbrName': 'TickRuleTyp',
    'NotReqXML': '0',
    'Description': 'Specifies the type of tick rule which is being described',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1210',
    'Name': 'NestedInstrAttribType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '871',
    'Description': 'Code to represent the type of instrument attribute',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1211',
    'Name': 'NestedInstrAttribValue',
    'Type': 'String',
    'AbbrName': 'Val',
    'NotReqXML': '0',
    'Description': 'Attribute value appropriate to the NestedInstrAttribType field',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1214',
    'Name': 'DerivativeSymbol',
    'Type': 'String',
    'AbbrName': 'Sym',
    'NotReqXML': '0',
    'Description': 'Refer to definition for Symbol(55)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1215',
    'Name': 'DerivativeSymbolSfx',
    'Type': 'String',
    'AbbrName': 'Sfx',
    'NotReqXML': '0',
    'EnumDatatype': '65',
    'Description': 'Refer to definition for SymbolSfx(65)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1216',
    'Name': 'DerivativeSecurityID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityID(48)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1217',
    'Name': 'DerivativeSecurityIDSource',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Refer to definition for SecurityIDSoruce(22)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1218',
    'Name': 'NoDerivativeSecurityAltID',
    'Type': 'NumInGroup',
    'AbbrName': 'NoDerivativeSecurityAltID',
    'NotReqXML': '1',
    'Description': 'Refer to definition for NoSecurityAltID(454)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1219',
    'Name': 'DerivativeSecurityAltID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityAltID(455)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1220',
    'Name': 'DerivativeSecurityAltIDSource',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '22',
    'Description': 'Refer to definition for SecurityAltIDSource(456)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1221',
    'Name': 'SecondaryLowLimitPrice',
    'Type': 'Price',
    'AbbrName': 'LowLmtPx',
    'NotReqXML': '0',
    'Description': 'Refer to definition of LowLimitPrice(1148)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1230',
    'Name': 'SecondaryHighLimitPrice',
    'Type': 'Price',
    'AbbrName': 'HiLmtPx',
    'NotReqXML': '0',
    'Description': 'Refer to definition of HighLimitPrice(1149)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1222',
    'Name': 'MaturityRuleID',
    'Type': 'String',
    'AbbrName': 'MatRuleID',
    'NotReqXML': '0',
    'Description': 'Allows maturity rule to be referenced via an identifier so that rules do not need to be explicitly enumerated',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1223',
    'Name': 'StrikeRuleID',
    'Type': 'String',
    'AbbrName': 'StrkRule',
    'NotReqXML': '0',
    'Description': 'Allows strike rule to be referenced via an identifier so that rules do not need to be explicitly enumerated',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1225',
    'Name': 'DerivativeOptPayAmount',
    'Type': 'Amt',
    'AbbrName': 'OptPayAmt',
    'NotReqXML': '0',
    'Description': 'Cash amount indicating the pay out associated with an option. For binary options this is a fixed amount',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1226',
    'Name': 'EndMaturityMonthYear',
    'Type': 'MonthYear',
    'AbbrName': 'EndMMY',
    'NotReqXML': '0',
    'Description': 'Ending maturity month year for an option class',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1227',
    'Name': 'ProductComplex',
    'Type': 'String',
    'AbbrName': 'ProdCmplx',
    'NotReqXML': '0',
    'Description': 'Identifies an entire suite of products for a given market. In Futures this may be \'interest rates\', \'agricultural\', \'equity indexes\', etc.',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1228',
    'Name': 'DerivativeProductComplex',
    'Type': 'String',
    'AbbrName': 'ProdCmplx',
    'NotReqXML': '0',
    'Description': 'Refer to ProductComplex(1227)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1229',
    'Name': 'MaturityMonthYearIncrement',
    'Type': 'int',
    'AbbrName': 'MMYIncr',
    'NotReqXML': '0',
    'Description': 'Increment between successive maturities for an option class',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1231',
    'Name': 'MinLotSize',
    'Type': 'Qty',
    'AbbrName': 'MinLotSz',
    'NotReqXML': '0',
    'Description': 'Minimum lot size allowed based on lot type specified in LotType(1093)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1232',
    'Name': 'NoExecInstRules',
    'Type': 'NumInGroup',
    'AbbrName': 'NoExecInstRules',
    'NotReqXML': '1',
    'Description': 'Number of execution instructions',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1234',
    'Name': 'NoLotTypeRules',
    'Type': 'NumInGroup',
    'AbbrName': 'NoLotTypeRules',
    'NotReqXML': '1',
    'Description': 'Number of Lot Type Rules',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1235',
    'Name': 'NoMatchRules',
    'Type': 'NumInGroup',
    'AbbrName': 'NoMatchRules',
    'NotReqXML': '1',
    'Description': 'Number of Match Rules',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1236',
    'Name': 'NoMaturityRules',
    'Type': 'NumInGroup',
    'AbbrName': 'NoMaturityRules',
    'NotReqXML': '1',
    'Description': 'Number of maturity rules in MarurityRules component block',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1237',
    'Name': 'NoOrdTypeRules',
    'Type': 'NumInGroup',
    'AbbrName': 'NoOrdTypeRules',
    'NotReqXML': '1',
    'Description': 'Number of order types',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1239',
    'Name': 'NoTimeInForceRules',
    'Type': 'NumInGroup',
    'AbbrName': 'NoTimeInForceRules',
    'NotReqXML': '1',
    'Description': 'Number of time in force techniques',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1240',
    'Name': 'SecondaryTradingReferencePrice',
    'Type': 'Price',
    'AbbrName': 'TrdgRefPx',
    'NotReqXML': '0',
    'Description': 'Refer to definition for TradingReferencePrice(1150)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1241',
    'Name': 'StartMaturityMonthYear',
    'Type': 'MonthYear',
    'AbbrName': 'StartMMY',
    'NotReqXML': '0',
    'Description': 'Starting maturity month year for an option class',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1242',
    'Name': 'FlexProductEligibilityIndicator',
    'Type': 'Boolean',
    'AbbrName': 'FlexProdElig',
    'NotReqXML': '0',
    'Description': 'Used to indicate if a product or group of product supports the creation of flexible securities',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1243',
    'Name': 'DerivFlexProductEligibilityIndicator',
    'Type': 'Boolean',
    'AbbrName': 'FlexProdElig',
    'NotReqXML': '0',
    'Description': 'Refer to FlexProductEligibilityIndicator(1242)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1244',
    'Name': 'FlexibleIndicator',
    'Type': 'Boolean',
    'AbbrName': 'FlexInd',
    'NotReqXML': '0',
    'Description': 'Used to indicate a derivatives security that can be defined using flexible terms. The terms commonly permitted to be defined by market participants are expiration date and strike price. FlexibleIndicator is an alternative CFICode(461) Standard/Non-standard attribute.',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1245',
    'Name': 'TradingCurrency',
    'Type': 'Currency',
    'AbbrName': 'TrdCcy',
    'NotReqXML': '0',
    'Description': 'Used when the trading currency can differ from the price currency',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1246',
    'Name': 'DerivativeProduct',
    'Type': 'int',
    'AbbrName': 'Prod',
    'NotReqXML': '0',
    'EnumDatatype': '460',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1247',
    'Name': 'DerivativeSecurityGroup',
    'Type': 'String',
    'AbbrName': 'SecGrp',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1248',
    'Name': 'DerivativeCFICode',
    'Type': 'String',
    'AbbrName': 'CFI',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1249',
    'Name': 'DerivativeSecurityType',
    'Type': 'String',
    'AbbrName': 'SecTyp',
    'NotReqXML': '0',
    'EnumDatatype': '167',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1250',
    'Name': 'DerivativeSecuritySubType',
    'Type': 'String',
    'AbbrName': 'SecSubTyp',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1251',
    'Name': 'DerivativeMaturityMonthYear',
    'Type': 'MonthYear',
    'AbbrName': 'MMY',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1252',
    'Name': 'DerivativeMaturityDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'MatDt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1253',
    'Name': 'DerivativeMaturityTime',
    'Type': 'TZTimeOnly',
    'AbbrName': 'MatTm',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1254',
    'Name': 'DerivativeSettleOnOpenFlag',
    'Type': 'String',
    'AbbrName': 'OpenCloseSettlFlag',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1255',
    'Name': 'DerivativeInstrmtAssignmentMethod',
    'Type': 'char',
    'AbbrName': 'AsgnMeth',
    'NotReqXML': '0',
    'EnumDatatype': '1049',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1256',
    'Name': 'DerivativeSecurityStatus',
    'Type': 'String',
    'AbbrName': 'Status',
    'NotReqXML': '0',
    'EnumDatatype': '965',
    'Description': '',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '76',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1257',
    'Name': 'DerivativeInstrRegistry',
    'Type': 'String',
    'AbbrName': 'Rgstry',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1258',
    'Name': 'DerivativeCountryOfIssue',
    'Type': 'Country',
    'AbbrName': 'Ctry',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1259',
    'Name': 'DerivativeStateOrProvinceOfIssue',
    'Type': 'String',
    'AbbrName': 'StPrv',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1260',
    'Name': 'DerivativeLocaleOfIssue',
    'Type': 'String',
    'AbbrName': 'Lcl',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1261',
    'Name': 'DerivativeStrikePrice',
    'Type': 'Price',
    'AbbrName': 'StrkPx',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1262',
    'Name': 'DerivativeStrikeCurrency',
    'Type': 'Currency',
    'AbbrName': 'StrkCcy',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1263',
    'Name': 'DerivativeStrikeMultiplier',
    'Type': 'float',
    'AbbrName': 'StrkMult',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1264',
    'Name': 'DerivativeStrikeValue',
    'Type': 'float',
    'AbbrName': 'StrkValu',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1265',
    'Name': 'DerivativeOptAttribute',
    'Type': 'char',
    'AbbrName': 'OptAt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1266',
    'Name': 'DerivativeContractMultiplier',
    'Type': 'float',
    'AbbrName': 'Mult',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1267',
    'Name': 'DerivativeMinPriceIncrement',
    'Type': 'float',
    'AbbrName': 'MinPxIncr',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1268',
    'Name': 'DerivativeMinPriceIncrementAmount',
    'Type': 'Amt',
    'AbbrName': 'MinPxIncrAmt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1269',
    'Name': 'DerivativeUnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'UOM',
    'NotReqXML': '0',
    'EnumDatatype': '996',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1270',
    'Name': 'DerivativeUnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'UOMQty',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1271',
    'Name': 'DerivativeTimeUnit',
    'Type': 'String',
    'AbbrName': 'TmUnit',
    'NotReqXML': '0',
    'EnumDatatype': '997',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1272',
    'Name': 'DerivativeSecurityExchange',
    'Type': 'Exchange',
    'AbbrName': 'Exch',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1273',
    'Name': 'DerivativePositionLimit',
    'Type': 'int',
    'AbbrName': 'PosLmt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1274',
    'Name': 'DerivativeNTPositionLimit',
    'Type': 'int',
    'AbbrName': 'NTPosLmt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1275',
    'Name': 'DerivativeIssuer',
    'Type': 'String',
    'AbbrName': 'Issr',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1276',
    'Name': 'DerivativeIssueDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'IssDt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1277',
    'Name': 'DerivativeEncodedIssuerLen',
    'Type': 'Length',
    'AbbrName': 'EncIssrLen',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1278',
    'Name': 'DerivativeEncodedIssuer',
    'Type': 'data',
    'AbbrName': 'EncIssr',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1279',
    'Name': 'DerivativeSecurityDesc',
    'Type': 'String',
    'AbbrName': 'Desc',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1280',
    'Name': 'DerivativeEncodedSecurityDescLen',
    'Type': 'Length',
    'AbbrName': 'EncSecDescLen',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1281',
    'Name': 'DerivativeEncodedSecurityDesc',
    'Type': 'data',
    'AbbrName': 'EncSecDesc',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1282',
    'Name': 'DerivativeSecurityXMLLen',
    'Type': 'Length',
    'AssociatedDataTag': '1283',
    'AbbrName': 'SecXMLLen',
    'NotReqXML': '1',
    'Description': 'Refer to definition SecurityXMLLen(1184)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1283',
    'Name': 'DerivativeSecurityXML',
    'Type': 'data',
    'AbbrName': 'SecXML',
    'NotReqXML': '1',
    'Description': 'Refer to definition of SecurityXML(1185)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1284',
    'Name': 'DerivativeSecurityXMLSchema',
    'Type': 'String',
    'AbbrName': 'Schema',
    'NotReqXML': '0',
    'Description': 'Refer to definition of SecurityXMLSchema(1186)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1285',
    'Name': 'DerivativeContractSettlMonth',
    'Type': 'MonthYear',
    'AbbrName': 'CSetMo',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1286',
    'Name': 'NoDerivativeEvents',
    'Type': 'NumInGroup',
    'AbbrName': 'NoDerivativeEvents',
    'NotReqXML': '1',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1287',
    'Name': 'DerivativeEventType',
    'Type': 'int',
    'AbbrName': 'EventTyp',
    'NotReqXML': '0',
    'EnumDatatype': '865',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1288',
    'Name': 'DerivativeEventDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'Dt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1289',
    'Name': 'DerivativeEventTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'Tm',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1290',
    'Name': 'DerivativeEventPx',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1291',
    'Name': 'DerivativeEventText',
    'Type': 'String',
    'AbbrName': 'Txt',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1292',
    'Name': 'NoDerivativeInstrumentParties',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Refer to definition of NoParties(453)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1293',
    'Name': 'DerivativeInstrumentPartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Refer to definition of PartyID(448)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1294',
    'Name': 'DerivativeInstrumentPartyIDSource',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'Refer to definition of PartyIDSource(447)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1295',
    'Name': 'DerivativeInstrumentPartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'REfer to definition of PartyRole(452)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1296',
    'Name': 'NoDerivativeInstrumentPartySubIDs',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Refer to definition for NoPartySubIDs(802)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1297',
    'Name': 'DerivativeInstrumentPartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Refer to definition for PartySubID(523)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1298',
    'Name': 'DerivativeInstrumentPartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Refer to definition for PartySubIDType(803)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1299',
    'Name': 'DerivativeExerciseStyle',
    'Type': 'char',
    'AbbrName': 'ExerStyle',
    'NotReqXML': '0',
    'EnumDatatype': '1194',
    'Description': 'Type of exercise of a derivatives security',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1300',
    'Name': 'MarketSegmentID',
    'Type': 'String',
    'AbbrName': 'MktSegID',
    'NotReqXML': '0',
    'Description': 'Identifies the market segment',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1301',
    'Name': 'MarketID',
    'Type': 'Exchange',
    'AbbrName': 'MktID',
    'NotReqXML': '0',
    'Description': 'Identifies the Market',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1302',
    'Name': 'MaturityMonthYearIncrementUnits',
    'Type': 'int',
    'AbbrName': 'MMYIncrUnits',
    'NotReqXML': '0',
    'Description': 'Unit of measure for the Maturity Month Year Increment',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1303',
    'Name': 'MaturityMonthYearFormat',
    'Type': 'int',
    'AbbrName': 'MMYFmt',
    'NotReqXML': '0',
    'Description': 'Format used to generate the MaturityMonthYear for each option',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1304',
    'Name': 'StrikeExerciseStyle',
    'Type': 'int',
    'AbbrName': 'StrkExrStyle',
    'NotReqXML': '0',
    'EnumDatatype': '1194',
    'Description': 'Expiration Style for an option class:',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1305',
    'Name': 'SecondaryPriceLimitType',
    'Type': 'int',
    'AbbrName': 'PxLmtTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1306',
    'Description': 'Describes the how the price limits are expressed',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1306',
    'Name': 'PriceLimitType',
    'Type': 'int',
    'AbbrName': 'PxLmtTyp',
    'NotReqXML': '0',
    'Description': 'Describes the how the price limits are expressed',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1308',
    'Name': 'ExecInstValue',
    'Type': 'char',
    'AbbrName': 'ExecInstValu',
    'NotReqXML': '0',
    'EnumDatatype': '18',
    'Description': 'Indicates execution instructions that are valid for the specified market segment',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1309',
    'Name': 'NoTradingSessionRules',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Allows trading rules to be expressed by trading session',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1310',
    'Name': 'NoMarketSegments',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of Market Segments on which a security may trade.',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1311',
    'Name': 'NoDerivativeInstrAttrib',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1312',
    'Name': 'NoNestedInstrAttrib',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1313',
    'Name': 'DerivativeInstrAttribType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '871',
    'Description': 'Refer to definition of InstrAttribType(871)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1314',
    'Name': 'DerivativeInstrAttribValue',
    'Type': 'String',
    'AbbrName': 'Val',
    'NotReqXML': '0',
    'Description': 'Refer to definition of InstrAttribValue(872)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1315',
    'Name': 'DerivativePriceUnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'PxUOM',
    'NotReqXML': '0',
    'EnumDatatype': '996',
    'Description': 'Refer to definition for PriceUnitOfMeasure(1191)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1316',
    'Name': 'DerivativePriceUnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'PxUOMQty',
    'NotReqXML': '0',
    'Description': 'Refer to definition of PriceUnitOfMeasureQty(1192)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1317',
    'Name': 'DerivativeSettlMethod',
    'Type': 'char',
    'AbbrName': 'SettlMeth',
    'NotReqXML': '0',
    'EnumDatatype': '1193',
    'Description': 'Refer to definition of SettlMethod(1193)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1318',
    'Name': 'DerivativePriceQuoteMethod',
    'Type': 'String',
    'AbbrName': 'PxQteMeth',
    'NotReqXML': '0',
    'EnumDatatype': '1196',
    'Description': 'Refer to definition of PriceQuoteMethod(1196)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1319',
    'Name': 'DerivativeValuationMethod',
    'Type': 'String',
    'AbbrName': 'ValMeth',
    'NotReqXML': '0',
    'EnumDatatype': '1197',
    'Description': 'Refer to definition of ValuationMethod(1197).',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '83',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1320',
    'Name': 'DerivativeListMethod',
    'Type': 'int',
    'AbbrName': 'ListMeth',
    'NotReqXML': '0',
    'EnumDatatype': '1198',
    'Description': 'Indicates whether instruments are pre-listed only or can also be defined via user request',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1321',
    'Name': 'DerivativeCapPrice',
    'Type': 'Price',
    'AbbrName': 'CapPx',
    'NotReqXML': '0',
    'Description': 'Refer to definition of CapPrice(1199)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1322',
    'Name': 'DerivativeFloorPrice',
    'Type': 'Price',
    'AbbrName': 'FlrPx',
    'NotReqXML': '0',
    'Description': 'Refer to definition of FloorPrice(1200)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1323',
    'Name': 'DerivativePutOrCall',
    'Type': 'int',
    'AbbrName': 'PutCall',
    'NotReqXML': '0',
    'EnumDatatype': '201',
    'Description': 'Indicates whether an Option is for a put or call',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1324',
    'Name': 'ListUpdateAction',
    'Type': 'char',
    'AbbrName': 'ListUpdActn',
    'NotReqXML': '0',
    'EnumDatatype': '980',
    'Description': 'If provided, then Instrument occurrence has explicitly changed',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1358',
    'Name': 'LegPutOrCall',
    'Type': 'int',
    'AbbrName': 'PutCall',
    'NotReqXML': '0',
    'Description': 'Refer to definition of PutOrCall(201)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1224',
    'Name': 'LegUnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'UOMQty',
    'NotReqXML': '0',
    'Description': 'Refer to definition of UnitOfMeasureQty(1147)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1421',
    'Name': 'LegPriceUnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'PxUOM',
    'NotReqXML': '0',
    'EnumDatatype': '996',
    'Description': 'Refer to definition for PriceUnitOfMeasure(1191)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1422',
    'Name': 'LegPriceUnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'PxUOMQty',
    'NotReqXML': '0',
    'Description': 'Refer to definition of PriceUnitOfMeasureQty(1192)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1423',
    'Name': 'UnderlyingUnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'UOMQty',
    'NotReqXML': '0',
    'Description': 'Refer to definition of UnitOfMeasureQty(1147)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1424',
    'Name': 'UnderlyingPriceUnitOfMeasure',
    'Type': 'String',
    'AbbrName': 'PxUOM',
    'NotReqXML': '0',
    'EnumDatatype': '996',
    'Description': 'Refer to definition for PriceUnitOfMeasure(1191)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1425',
    'Name': 'UnderlyingPriceUnitOfMeasureQty',
    'Type': 'Qty',
    'AbbrName': 'PxUOMQty',
    'NotReqXML': '0',
    'Description': 'Refer to definition of PriceUnitOfMeasureQty(1192)',
    'Added': 'FIX.5.0',
    'AddedEP': '52'
  },
  {
    'Tag': '1393',
    'Name': 'MarketReqID',
    'Type': 'String',
    'AbbrName': 'MktReqID',
    'NotReqXML': '0',
    'Description': 'Unique ID of a Market Definition Request message.',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1394',
    'Name': 'MarketReportID',
    'Type': 'String',
    'AbbrName': 'MktRptID',
    'NotReqXML': '0',
    'Description': 'Market Definition message identifier.',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1395',
    'Name': 'MarketUpdateAction',
    'Type': 'char',
    'AbbrName': 'MktUpdtActn',
    'NotReqXML': '0',
    'EnumDatatype': '980',
    'Description': 'Specifies the action taken for the specified MarketID(1301) + MarketSegmentID(1300).',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1396',
    'Name': 'MarketSegmentDesc',
    'Type': 'String',
    'AbbrName': 'MarketSegmentDesc',
    'NotReqXML': '0',
    'Description': 'Description or name of Market Segment',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1397',
    'Name': 'EncodedMktSegmDescLen',
    'Type': 'Length',
    'AbbrName': 'EncodedMktSegmDescLen',
    'NotReqXML': '0',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedMktSegmDesc(1324) field.',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1398',
    'Name': 'EncodedMktSegmDesc',
    'Type': 'data',
    'AbbrName': 'EncodedMktSegmDesc',
    'NotReqXML': '0',
    'Description': 'Encoded (non-ASCII characters) representation of the MarketSegmDesc(1396) field in the encoded format specified via the MessageEncoding(347) field. If used, the ASCII (English) representation should also be specified in the MarketSegmDesc field.',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1325',
    'Name': 'ParentMktSegmID',
    'Type': 'String',
    'AbbrName': 'ParentMktSegmID',
    'NotReqXML': '0',
    'Description': 'Reference to a parent Market Segment. See MarketSegmentID(1300)',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1326',
    'Name': 'TradingSessionDesc',
    'Type': 'String',
    'AbbrName': 'TradingSessionDesc',
    'NotReqXML': '0',
    'Description': 'Trading Session description',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1327',
    'Name': 'TradSesUpdateAction',
    'Type': 'char',
    'AbbrName': 'TradSesUpdtActn',
    'NotReqXML': '0',
    'EnumDatatype': '980',
    'Description': 'Specifies the action taken for the specified trading sessions.',
    'Added': 'FIX.5.0',
    'AddedEP': '53'
  },
  {
    'Tag': '1328',
    'Name': 'RejectText',
    'Type': 'String',
    'AbbrName': 'RejTxt',
    'NotReqXML': '0',
    'Description': 'Those will be used by Firms to send a reason for rejecting a trade in an allocate claim model.',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1329',
    'Name': 'FeeMultiplier',
    'Type': 'float',
    'AbbrName': 'FeeMult',
    'NotReqXML': '0',
    'Description': 'This is a multiplier that Clearing (Fee system) will use to calculate fees and will be sent to the firms on their confirms.',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1330',
    'Name': 'UnderlyingLegSymbol',
    'Type': 'String',
    'AbbrName': 'Sym',
    'NotReqXML': '0',
    'Description': 'Refer to definition for Symbol(55)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1331',
    'Name': 'UnderlyingLegSymbolSfx',
    'Type': 'String',
    'AbbrName': 'Sfx',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SymbolSfx(65)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1332',
    'Name': 'UnderlyingLegSecurityID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityID(48)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1333',
    'Name': 'UnderlyingLegSecurityIDSource',
    'Type': 'String',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityIDSource(22)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1334',
    'Name': 'NoUnderlyingLegSecurityAltID',
    'Type': 'NumInGroup',
    'AbbrName': 'NoUnderlyingLegSecurityAltID',
    'NotReqXML': '1',
    'Description': 'Refer to definition for NoSecurityAltID(454)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1335',
    'Name': 'UnderlyingLegSecurityAltID',
    'Type': 'String',
    'AbbrName': 'AltID',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityAltID(455)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1336',
    'Name': 'UnderlyingLegSecurityAltIDSource',
    'Type': 'String',
    'AbbrName': 'AltIDSrc',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityAltIDSource(456)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1337',
    'Name': 'UnderlyingLegSecurityType',
    'Type': 'String',
    'AbbrName': 'SecType',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityType(167)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1338',
    'Name': 'UnderlyingLegSecuritySubType',
    'Type': 'String',
    'AbbrName': 'SubType',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecuritySubType(762)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1339',
    'Name': 'UnderlyingLegMaturityMonthYear',
    'Type': 'MonthYear',
    'AbbrName': 'MMY',
    'NotReqXML': '0',
    'Description': 'Refer to definition for MaturityMonthYear(200)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1343',
    'Name': 'UnderlyingLegPutOrCall',
    'Type': 'int',
    'AbbrName': 'PutCall',
    'NotReqXML': '0',
    'Description': 'Refer to definition for PutOrCall(201)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1340',
    'Name': 'UnderlyingLegStrikePrice',
    'Type': 'Price',
    'AbbrName': 'StrkPx',
    'NotReqXML': '0',
    'Description': 'Refer to definition for StrikePrice(202)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1341',
    'Name': 'UnderlyingLegSecurityExchange',
    'Type': 'String',
    'AbbrName': 'Exch',
    'NotReqXML': '0',
    'Description': 'Refer to definition for SecurityExchange(207)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1342',
    'Name': 'NoOfLegUnderlyings',
    'Type': 'NumInGroup',
    'AbbrName': 'NoOfLegUnderlyings',
    'NotReqXML': '1',
    'Description': 'Number of Underlyings, Identifies the Underlying of the Leg',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1344',
    'Name': 'UnderlyingLegCFICode',
    'Type': 'String',
    'AbbrName': 'CFI',
    'NotReqXML': '0',
    'Description': 'Refer to definition for CFICode(461)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1345',
    'Name': 'UnderlyingLegMaturityDate',
    'Type': 'LocalMktDate',
    'AbbrName': 'MatDt',
    'NotReqXML': '0',
    'Description': 'Date of maturity.',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1405',
    'Name': 'UnderlyingLegMaturityTime',
    'Type': 'TZTimeOnly',
    'AbbrName': 'MatTm',
    'NotReqXML': '0',
    'Description': 'Time of security\'s maturity expressed in local time with offset to UTC specified',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1391',
    'Name': 'UnderlyingLegOptAttribute',
    'Type': 'char',
    'AbbrName': 'OptAt',
    'NotReqXML': '0',
    'Description': 'Refer to definition of OptAttribute(206)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1392',
    'Name': 'UnderlyingLegSecurityDesc',
    'Type': 'String',
    'AbbrName': 'Desc',
    'NotReqXML': '0',
    'Description': 'Refer to definition of SecurityDesc(107)',
    'Added': 'FIX.5.0',
    'AddedEP': '55'
  },
  {
    'Tag': '1400',
    'Name': 'EncryptedPasswordMethod',
    'Type': 'int',
    'AbbrName': 'EncPwdMethod',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Enumeration defining the encryption method used to encrypt password fields.\nAt this time there are no encryption methods defined by FPL.',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1401',
    'Name': 'EncryptedPasswordLen',
    'Type': 'Length',
    'AssociatedDataTag': '1402',
    'AbbrName': 'EncPwdLen',
    'NotReqXML': '1',
    'Description': 'Length of the EncryptedPassword(1402) field',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1402',
    'Name': 'EncryptedPassword',
    'Type': 'data',
    'AbbrName': 'EncPwd',
    'NotReqXML': '0',
    'Description': 'Encrypted password - encrypted via the method specified in the field EncryptedPasswordMethod(1400)',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1403',
    'Name': 'EncryptedNewPasswordLen',
    'Type': 'Length',
    'AssociatedDataTag': '1404',
    'AbbrName': 'EncNewPwdLen',
    'NotReqXML': '1',
    'Description': 'Length of the EncryptedNewPassword(1404) field',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1404',
    'Name': 'EncryptedNewPassword',
    'Type': 'data',
    'AbbrName': 'EncNewPwd',
    'NotReqXML': '0',
    'Description': 'Encrypted new password - encrypted via the method specified in the field EncryptedPasswordMethod(1400)',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1156',
    'Name': 'ApplExtID',
    'Type': 'int',
    'AbbrName': 'ApplExtID',
    'NotReqXML': '1',
    'Description': 'The extension pack number associated with an application message.',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1406',
    'Name': 'RefApplExtID',
    'Type': 'int',
    'AbbrName': 'RefApplExtID',
    'NotReqXML': '0',
    'Description': 'The extension pack number associated with an application message.',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1407',
    'Name': 'DefaultApplExtID',
    'Type': 'int',
    'AbbrName': 'DfltApplExtID',
    'NotReqXML': '0',
    'Description': 'The extension pack number that is the default for a FIX session.',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1408',
    'Name': 'DefaultCstmApplVerID',
    'Type': 'String',
    'AbbrName': 'DefaultCstmApplVerID',
    'NotReqXML': '1',
    'Description': 'The default custom application version ID that is the default for a session.',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1409',
    'Name': 'SessionStatus',
    'Type': 'int',
    'AbbrName': 'SessStat',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Status of a FIX session',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '1410',
    'Name': 'DefaultVerIndicator',
    'Type': 'Boolean',
    'AbbrName': 'DfltVerInd',
    'NotReqXML': '0',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '56'
  },
  {
    'Tag': '809',
    'Name': 'NoUsernames',
    'Type': 'NumInGroup',
    'AbbrName': 'NoUsers',
    'NotReqXML': '1',
    'Description': 'Number of Usernames to which this this response is directed',
    'Added': 'FIX.4.4'
  },
  {
    'Tag': '1367',
    'Name': 'LegAllocSettlCurrency',
    'Type': 'Currency',
    'AbbrName': 'AllocSettlCcy',
    'NotReqXML': '0',
    'Description': 'Identifies settlement currency for the leg level allocation.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1361',
    'Name': 'TotNoFills',
    'Type': 'int',
    'AbbrName': 'TotNoFills',
    'NotReqXML': '0',
    'Description': 'Total number of fill entries across all messages. Should be the sum of all NoFills(1362) in each message that has repeating list of fill entries related to the same ExecID(17). Used to support fragmentation.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1362',
    'Name': 'NoFills',
    'Type': 'NumInGroup',
    'AbbrName': 'NoFills',
    'NotReqXML': '1',
    'Description': '',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1363',
    'Name': 'FillExecID',
    'Type': 'String',
    'AbbrName': 'FillExecID',
    'NotReqXML': '0',
    'Description': 'Refer to ExecID(17). Used when multiple partial fills are reported in single Execution Report. ExecID and FillExecID should not overlap,',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1364',
    'Name': 'FillPx',
    'Type': 'Price',
    'AbbrName': 'FillPx',
    'NotReqXML': '0',
    'Description': 'Price of Fill. Refer to LastPx(31).',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1365',
    'Name': 'FillQty',
    'Type': 'Qty',
    'AbbrName': 'FillQty',
    'NotReqXML': '0',
    'Description': 'Quantity of Fill. Refer to LastQty(32).',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1366',
    'Name': 'LegAllocID',
    'Type': 'String',
    'AbbrName': 'LegAllocID',
    'NotReqXML': '0',
    'Description': 'The AllocID(70) of an individual leg of a multileg order.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1368',
    'Name': 'TradSesEvent',
    'Type': 'int',
    'AbbrName': 'TradSesEvent',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies an event related to a TradSesStatus(340). An event occurs and is gone, it is not a state that applies for a period of time.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1369',
    'Name': 'MassActionReportID',
    'Type': 'String',
    'AbbrName': 'MassActionReportID',
    'NotReqXML': '0',
    'Description': 'Unique identifier of Order Mass Cancel Report or Order Mass Action Report message as assigned by sell-side (broker, exchange, ECN)',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1370',
    'Name': 'NoNotAffectedOrders',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNotAffectedOrders',
    'NotReqXML': '1',
    'Description': 'Number of not affected orders in the repeating group of order ids.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1371',
    'Name': 'NotAffectedOrderID',
    'Type': 'String',
    'AbbrName': 'NotAffectedOrderID',
    'NotReqXML': '0',
    'Description': 'OrderID(37) of an order not affected by a mass cancel request.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1372',
    'Name': 'NotAffOrigClOrdID',
    'Type': 'String',
    'AbbrName': 'NotAffOrigClOrdID',
    'NotReqXML': '0',
    'Description': 'ClOrdID(11) of the previous order (NOT the initial order of the day) as assigned by the institution, used to identify the previous order in cancel and cancel/replace requests.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1373',
    'Name': 'MassActionType',
    'Type': 'int',
    'AbbrName': 'MassActionType',
    'NotReqXML': '0',
    'Description': 'Specifies the type of action requested',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1374',
    'Name': 'MassActionScope',
    'Type': 'int',
    'AbbrName': 'MassActionScope',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Specifies scope of Order Mass Action Request.',
    'Updated': 'FIX.5.0SP1',
    'UpdatedEP': '85',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1375',
    'Name': 'MassActionResponse',
    'Type': 'int',
    'AbbrName': 'MassActionResponse',
    'NotReqXML': '0',
    'Description': 'Specifies the action taken by counterparty order handling system as a result of the action type indicated in MassActionType of the Order Mass Action Request.',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1376',
    'Name': 'MassActionRejectReason',
    'Type': 'int',
    'AbbrName': 'MassActionRejectReason',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason Order Mass Action Request was rejected',
    'Added': 'FIX.5.0',
    'AddedEP': '58'
  },
  {
    'Tag': '1377',
    'Name': 'MultilegModel',
    'Type': 'int',
    'AbbrName': 'MlegModel',
    'NotReqXML': '0',
    'Description': 'Specifies the type of multileg order.',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1378',
    'Name': 'MultilegPriceMethod',
    'Type': 'int',
    'AbbrName': 'MlegPxMeth',
    'NotReqXML': '0',
    'Description': 'Code to represent how the multileg price is to be interpreted when applied to the legs.\n(See Volume : \'Glossary\' for further value definitions)',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1379',
    'Name': 'LegVolatility',
    'Type': 'float',
    'AbbrName': 'LegVolatility',
    'NotReqXML': '0',
    'Description': 'Specifies the volatility of an instrument leg.',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1380',
    'Name': 'DividendYield',
    'Type': 'Percentage',
    'AbbrName': 'DividendYield',
    'NotReqXML': '0',
    'Description': 'The continuously-compounded annualized dividend yield of the underlying(s) of an option. Used as a parameter to theoretical option pricing models.',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1381',
    'Name': 'LegDividendYield',
    'Type': 'Percentage',
    'AbbrName': 'LegDividendYield',
    'NotReqXML': '0',
    'Description': 'Refer to definition for DividendYield(1380).',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1382',
    'Name': 'CurrencyRatio',
    'Type': 'float',
    'AbbrName': 'CurrencyRatio',
    'NotReqXML': '0',
    'Description': 'Specifies the currency ratio between the currency used for a multileg price and the currency used by the outright book defined by the leg. Example: Multileg quoted in EUR, outright leg in USD and 1 EUR = 0,7 USD then CurrencyRatio = 0.7',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1383',
    'Name': 'LegCurrencyRatio',
    'Type': 'float',
    'AbbrName': 'LegCurrencyRatio',
    'NotReqXML': '0',
    'Description': 'Specifies the currency ratio between the currency used for a multileg price and the currency used by the outright book defined by the leg. Example: Multileg quoted in EUR, outright leg in USD and 1 EUR = 0,7 USD then LegCurrencyRatio = 0.7',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1384',
    'Name': 'LegExecInst',
    'Type': 'MultipleCharValue',
    'AbbrName': 'LegExecInst',
    'NotReqXML': '0',
    'EnumDatatype': '18',
    'Description': 'Refer to ExecInst(18)\nSame values as ExecInst(18)',
    'Added': 'FIX.5.0',
    'AddedEP': '59'
  },
  {
    'Tag': '1385',
    'Name': 'ContingencyType',
    'Type': 'int',
    'AbbrName': 'ContingencyType',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Defines the type of contingency.',
    'Added': 'FIX.5.0',
    'AddedEP': '60'
  },
  {
    'Tag': '1386',
    'Name': 'ListRejectReason',
    'Type': 'int',
    'AbbrName': 'ListRejectReason',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Identifies the reason for rejection of a New Order List message. Note that OrdRejReason(103) is used if the rejection is based on properties of an individual order part of the List.',
    'Added': 'FIX.5.0',
    'AddedEP': '60'
  },
  {
    'Tag': '1387',
    'Name': 'NoTrdRepIndicators',
    'Type': 'NumInGroup',
    'AbbrName': 'NoTrdRepIndicators',
    'NotReqXML': '1',
    'Description': 'Number of trade reporting indicators',
    'Added': 'FIX.5.0',
    'AddedEP': '61'
  },
  {
    'Tag': '1388',
    'Name': 'TrdRepPartyRole',
    'Type': 'int',
    'AbbrName': 'PtyRole',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'Identifies the type of party for trade reporting. Same values as PartyRole(452).',
    'Added': 'FIX.5.0',
    'AddedEP': '61'
  },
  {
    'Tag': '1389',
    'Name': 'TrdRepIndicator',
    'Type': 'Boolean',
    'AbbrName': 'TrdRepInd',
    'NotReqXML': '0',
    'Description': 'Specifies whether the trade should be reported (or not) to parties of the provided TrdRepPartyRole(1388). Used to override standard reporting behavior by the receiver of the trade report and thereby complements the PublTrdIndicator( tag1390).',
    'Added': 'FIX.5.0',
    'AddedEP': '61'
  },
  {
    'Tag': '1390',
    'Name': 'TradePublishIndicator',
    'Type': 'int',
    'AbbrName': 'TrdPubInd',
    'NotReqXML': '0',
    'Description': 'Indicates if a trade should be reported via a market reporting service. The indicator governs all reporting services of the recipient. Replaces PublishTrdIndicator(852).',
    'Added': 'FIX.5.0',
    'AddedEP': '61'
  },
  {
    'Tag': '1346',
    'Name': 'ApplReqID',
    'Type': 'String',
    'AbbrName': 'ApplReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for request',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1347',
    'Name': 'ApplReqType',
    'Type': 'int',
    'AbbrName': 'ApplReqTyp',
    'NotReqXML': '0',
    'Description': 'Type of Application Message Request being made.',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1348',
    'Name': 'ApplResponseType',
    'Type': 'int',
    'AbbrName': 'ApplRespTyp',
    'NotReqXML': '0',
    'Description': 'Used to indicate the type of acknowledgement being sent.',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1349',
    'Name': 'ApplTotalMessageCount',
    'Type': 'int',
    'AbbrName': 'ApplTotMsgCnt',
    'NotReqXML': '0',
    'Description': 'Total number of messages included in transmission.',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1350',
    'Name': 'ApplLastSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'ApplLastSeqNum',
    'NotReqXML': '0',
    'Description': 'Application sequence number of last message in transmission',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1351',
    'Name': 'NoApplIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoApplIDs',
    'NotReqXML': '1',
    'Description': 'Specifies number of application id occurrences',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1352',
    'Name': 'ApplResendFlag',
    'Type': 'Boolean',
    'AbbrName': 'ApplResendFlag',
    'NotReqXML': '0',
    'Description': 'Used to indicate that a message is being sent in response to an Application Message Request. It is possible for both ApplResendFlag and PossDupFlag to be set on the same message if the Sender\'s cache size is greater than zero and the message is being resent due to a session level resend request',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1353',
    'Name': 'ApplResponseID',
    'Type': 'String',
    'AbbrName': 'ApplRespID',
    'NotReqXML': '0',
    'Description': 'Identifier for the Applicaton Message Request Ack',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1354',
    'Name': 'ApplResponseError',
    'Type': 'int',
    'AbbrName': 'ApplRespErr',
    'NotReqXML': '0',
    'Description': 'Used to return an error code or text associated with a response to an Application Request.',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1355',
    'Name': 'RefApplID',
    'Type': 'String',
    'AbbrName': 'RefApplID',
    'NotReqXML': '0',
    'Description': 'Reference to the unique application identifier which corresponds to ApplID(1180) from the Application Sequence Group component',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1356',
    'Name': 'ApplReportID',
    'Type': 'String',
    'AbbrName': 'ApplRptID',
    'NotReqXML': '0',
    'Description': 'Identifier for the Application Sequence Reset',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1357',
    'Name': 'RefApplLastSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'RefApplLastSeqNum',
    'NotReqXML': '0',
    'Description': 'Application sequence number of last message in transmission.',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1399',
    'Name': 'ApplNewSeqNum',
    'Type': 'SeqNum',
    'AbbrName': 'ApplNewSeqNum',
    'NotReqXML': '0',
    'Description': 'Used to specify a new application sequence number.',
    'Added': 'FIX.5.0',
    'AddedEP': '63'
  },
  {
    'Tag': '1426',
    'Name': 'ApplReportType',
    'Type': 'int',
    'AbbrName': 'ApplRptTyp',
    'NotReqXML': '0',
    'Description': 'Type of report',
    'Added': 'FIX.5.0SP2'
  },
  {
    'Tag': '1411',
    'Name': 'Nested4PartySubIDType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'EnumDatatype': '803',
    'Description': 'Refer to definition of PartySubIDType(803)',
    'Added': 'FIX.5.0',
    'AddedEP': '69'
  },
  {
    'Tag': '1412',
    'Name': 'Nested4PartySubID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Refer to definition of PartySubID(523)',
    'Added': 'FIX.5.0',
    'AddedEP': '69'
  },
  {
    'Tag': '1413',
    'Name': 'NoNested4PartySubIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNested4PartySubIDs',
    'NotReqXML': '0',
    'Description': 'Refer to definition of NoPartySubIDs(802)',
    'Added': 'FIX.5.0',
    'AddedEP': '69'
  },
  {
    'Tag': '1414',
    'Name': 'NoNested4PartyIDs',
    'Type': 'NumInGroup',
    'AbbrName': 'NoNested4PartyIDs',
    'NotReqXML': '0',
    'Description': 'Refer to definition of NoPartyIDs(453)',
    'Added': 'FIX.5.0',
    'AddedEP': '69'
  },
  {
    'Tag': '1415',
    'Name': 'Nested4PartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Refer to definition of PartyID(448)',
    'Added': 'FIX.5.0',
    'AddedEP': '69'
  },
  {
    'Tag': '1416',
    'Name': 'Nested4PartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'Refer to definition of PartyIDSource(447)',
    'Added': 'FIX.5.0',
    'AddedEP': '69'
  },
  {
    'Tag': '1417',
    'Name': 'Nested4PartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'Refer to definition of PartyRole(452)',
    'Added': 'FIX.5.0',
    'AddedEP': '69'
  },
  {
    'Tag': '1418',
    'Name': 'LegLastQty',
    'Type': 'Qty',
    'AbbrName': 'LastQty',
    'NotReqXML': '0',
    'Description': 'Fill quantity for the leg instrument',
    'Added': 'FIX.5.0',
    'AddedEP': '72'
  },
  {
    'Tag': '1427',
    'Name': 'SideExecID',
    'Type': 'String',
    'AbbrName': 'SideExecID',
    'NotReqXML': '0',
    'Description': 'When reporting trades, used to reference the identifier of the execution (ExecID) being reported if different ExecIDs were assigned to each side of the trade.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '77'
  },
  {
    'Tag': '1428',
    'Name': 'OrderDelay',
    'Type': 'int',
    'AbbrName': 'OrdDelay',
    'NotReqXML': '0',
    'Description': 'Time lapsed from order entry until match, based on the unit of time specified in OrderDelayUnit.  Default is seconds if OrderDelayUnit is not specified. Value = 0, indicates the aggressor (the initiating side of the trade).',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '77'
  },
  {
    'Tag': '1429',
    'Name': 'OrderDelayUnit',
    'Type': 'int',
    'AbbrName': 'OrdDelayUnit',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Time unit in which the OrderDelay(1428) is expressed',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '77'
  },
  {
    'Tag': '1430',
    'Name': 'VenueType',
    'Type': 'char',
    'AbbrName': 'VenuTyp',
    'NotReqXML': '0',
    'Description': 'Identifies the type of venue where a trade was executed',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '77'
  },
  {
    'Tag': '1431',
    'Name': 'RefOrdIDReason',
    'Type': 'int',
    'AbbrName': 'RefOrdIDRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'The reason for updating the RefOrdID',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '77'
  },
  {
    'Tag': '1432',
    'Name': 'OrigCustOrderCapacity',
    'Type': 'int',
    'AbbrName': 'OrigCustOrdCpcty',
    'NotReqXML': '0',
    'Description': 'The customer capacity for this trade at the time of the order/execution.\nPrimarily used by futures exchanges to indicate the CTICode (customer type indicator) as required by the US CFTC (Commodity Futures Trading Commission).',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '77'
  },
  {
    'Tag': '1433',
    'Name': 'RefApplReqID',
    'Type': 'String',
    'AbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Used to reference a previously submitted ApplReqID (1346) from within a subsequent ApplicationMessageRequest(MsgType=BW)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '78'
  },
  {
    'Tag': '1434',
    'Name': 'ModelType',
    'Type': 'int',
    'AbbrName': 'ModelTyp',
    'NotReqXML': '0',
    'Description': 'Type of pricing model used',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '79'
  },
  {
    'Tag': '1435',
    'Name': 'ContractMultiplierUnit',
    'Type': 'int',
    'AbbrName': 'MultTyp',
    'NotReqXML': '0',
    'Description': 'Indicates the type of multiplier being applied to the contract. Can be optionally used to further define what unit ContractMultiplier(tag 231) is expressed in.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1436',
    'Name': 'LegContractMultiplierUnit',
    'Type': 'int',
    'AbbrName': 'MultTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1435',
    'Description': '\'Indicates the type of multiplier being applied to the contract. Can be optionally used to further define what unit LegContractMultiplier(tag 614) is expressed in.\n',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1437',
    'Name': 'UnderlyingContractMultiplierUnit',
    'Type': 'int',
    'AbbrName': 'MultTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1435',
    'Description': 'Indicates the type of multiplier being applied to the contract. Can be optionally used to further define what unit UndlyContractMultiplier(tag 436) is expressed in.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1438',
    'Name': 'DerivativeContractMultiplierUnit',
    'Type': 'int',
    'AbbrName': 'MultTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1435',
    'Description': 'Indicates the type of multiplier being applied to the contract. Can be optionally used to further define what unit DerivativeContractMultiplier(tag 1266)is expressed in.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1439',
    'Name': 'FlowScheduleType',
    'Type': 'int',
    'AbbrName': 'FlowSchedTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'The industry standard flow schedule by which electricity or natural gas is traded. Schedules exist by regions and on-peak and off-peak status, such as \'Western Peak\'.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1440',
    'Name': 'LegFlowScheduleType',
    'Type': 'int',
    'AbbrName': 'FlowSchedTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1439',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'The industry standard flow schedule by which electricity or natural gas is traded. Schedules exist by regions and on-peak and off-peak status, such as \'Western Peak\'.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1441',
    'Name': 'UnderlyingFlowScheduleType',
    'Type': 'int',
    'AbbrName': 'FlowSchedTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1439',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'The industry standard flow schedule by which electricity or natural gas is traded. Schedules exist by regions and on-peak and off-peak status, such as \'Western Peak\'.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1442',
    'Name': 'DerivativeFlowScheduleType',
    'Type': 'int',
    'AbbrName': 'FlowSchedTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1439',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'The industry standard flow schedule by which electricity or natural gas is traded. Schedules exist by regions and on-peak and off-peak status, such as \'Western Peak\'.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '80'
  },
  {
    'Tag': '1443',
    'Name': 'FillLiquidityInd',
    'Type': 'int',
    'AbbrName': 'LqdtyInd',
    'NotReqXML': '0',
    'EnumDatatype': '851',
    'Description': 'Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity. Applicable only for OrdStatus of Partial or Filled',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '81'
  },
  {
    'Tag': '1444',
    'Name': 'SideLiquidityInd',
    'Type': 'int',
    'AbbrName': 'LqdtyInd',
    'NotReqXML': '0',
    'EnumDatatype': '851',
    'Description': 'Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity. Applicable only for OrdStatus of Partial or Filled.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '81'
  },
  {
    'Tag': '1445',
    'Name': 'NoRateSources',
    'Type': 'NumInGroup',
    'AbbrName': 'NoRtSrc',
    'NotReqXML': '1',
    'Description': 'Number of rate sources being specified.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '82'
  },
  {
    'Tag': '1446',
    'Name': 'RateSource',
    'Type': 'int',
    'AbbrName': 'RtSrc',
    'NotReqXML': '0',
    'Description': 'Identifies the source of rate information.\nFor FX, the reference source to be used for the FX spot rate.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '82'
  },
  {
    'Tag': '1447',
    'Name': 'RateSourceType',
    'Type': 'int',
    'AbbrName': 'RtSrcTyp',
    'NotReqXML': '0',
    'Description': 'Indicates whether the rate source specified is a primary or secondary source.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '82'
  },
  {
    'Tag': '1448',
    'Name': 'ReferencePage',
    'Type': 'String',
    'AbbrName': 'RefPg',
    'NotReqXML': '0',
    'Description': 'Identifies the reference \'page\' from the rate source.\nFor FX, the reference page to the spot rate to be used for the reference FX spot rate.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '82'
  },
  {
    'Tag': '1449',
    'Name': 'RestructuringType',
    'Type': 'String',
    'AbbrName': 'RestrctTyp',
    'NotReqXML': '0',
    'Description': 'A category of CDS credit even in which the underlying bond experiences a restructuring.\nUsed to define a CDS instrument.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1450',
    'Name': 'Seniority',
    'Type': 'String',
    'AbbrName': 'Snrty',
    'NotReqXML': '0',
    'Description': 'Specifies which issue (underlying bond) will receive payment priority in the event of a default.\nUsed to define a CDS instrument.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1451',
    'Name': 'NotionalPercentageOutstanding',
    'Type': 'Percentage',
    'AbbrName': 'NotlPctOut',
    'NotReqXML': '0',
    'Description': 'Indicates the notional percentage of the deal that is still outstanding based on the remaining components of the index.\nUsed to calculate the true value of a CDS trade or position.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1452',
    'Name': 'OriginalNotionalPercentageOutstanding',
    'Type': 'Percentage',
    'AbbrName': 'OrigNotlPctOut',
    'NotReqXML': '0',
    'Description': 'Used to reflect the Original value prior to the application of a credit event. See NotionalPercentageOutstanding(1451).',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1453',
    'Name': 'UnderlyingRestructuringType',
    'Type': 'String',
    'AbbrName': 'RestrctTyp',
    'NotReqXML': '0',
    'EnumDatatype': '1449',
    'Description': 'See RestructuringType(1449)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1454',
    'Name': 'UnderlyingSeniority',
    'Type': 'String',
    'AbbrName': 'Snrty',
    'NotReqXML': '0',
    'EnumDatatype': '1450',
    'Description': 'See Seniority(1450)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1455',
    'Name': 'UnderlyingNotionalPercentageOutstanding',
    'Type': 'Percentage',
    'AbbrName': 'NotlPctOut',
    'NotReqXML': '0',
    'Description': 'See NotionalPercentageOutstanding(1451)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1456',
    'Name': 'UnderlyingOriginalNotionalPercentageOutstanding',
    'Type': 'Percentage',
    'AbbrName': 'OrigNotlPctOut',
    'NotReqXML': '0',
    'Description': 'See OriginalNotionalPercentageOutstanding(1452)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1457',
    'Name': 'AttachmentPoint',
    'Type': 'Percentage',
    'AbbrName': 'AttchPnt',
    'NotReqXML': '0',
    'Description': 'Lower bound percentage of the loss that the tranche can endure.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1458',
    'Name': 'DetachmentPoint',
    'Type': 'Percentage',
    'AbbrName': 'DetchPnt',
    'NotReqXML': '0',
    'Description': 'Upper bound percentage of the loss the tranche can endure.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1459',
    'Name': 'UnderlyingAttachmentPoint',
    'Type': 'Percentage',
    'AbbrName': 'AttchPnt',
    'NotReqXML': '0',
    'Description': 'See AttachmentPoint(1457).',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1460',
    'Name': 'UnderlyingDetachmentPoint',
    'Type': 'Percentage',
    'AbbrName': 'DetchPnt',
    'NotReqXML': '0',
    'Description': 'See DetachmentPoint(1458).',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '83'
  },
  {
    'Tag': '1461',
    'Name': 'NoTargetPartyIDs',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Identifies the number of target parties identified in a mass action.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '85'
  },
  {
    'Tag': '1462',
    'Name': 'TargetPartyID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'PartyID value within an target party repeating group.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '85'
  },
  {
    'Tag': '1463',
    'Name': 'TargetPartyIDSource',
    'Type': 'char',
    'AbbrName': 'Src',
    'NotReqXML': '0',
    'EnumDatatype': '447',
    'Description': 'PartyIDSource value within an target party repeating group.\nSame values as PartyIDSource (447)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '85'
  },
  {
    'Tag': '1464',
    'Name': 'TargetPartyRole',
    'Type': 'int',
    'AbbrName': 'R',
    'NotReqXML': '0',
    'EnumDatatype': '452',
    'Description': 'PartyRole value within an target party repeating group.\nSame values as PartyRole (452)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '85'
  },
  {
    'Tag': '1465',
    'Name': 'SecurityListID',
    'Type': 'String',
    'AbbrName': 'ListID',
    'NotReqXML': '0',
    'Description': 'Specifies an identifier for a Security List',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '87'
  },
  {
    'Tag': '1466',
    'Name': 'SecurityListRefID',
    'Type': 'String',
    'AbbrName': 'ListRefID',
    'NotReqXML': '0',
    'Description': 'Specifies a reference from one Security List to another. Used to support a hierarchy of Security Lists.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '87'
  },
  {
    'Tag': '1467',
    'Name': 'SecurityListDesc',
    'Type': 'String',
    'AbbrName': 'ListDesc',
    'NotReqXML': '0',
    'Description': 'Specifies a description or name of a Security List.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '87'
  },
  {
    'Tag': '1468',
    'Name': 'EncodedSecurityListDescLen',
    'Type': 'Length',
    'AssociatedDataTag': '1469',
    'NotReqXML': '1',
    'Description': 'Byte length of encoded (non-ASCII characters) EncodedSecurityListDesc (tbd) field.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '87'
  },
  {
    'Tag': '1469',
    'Name': 'EncodedSecurityListDesc',
    'Type': 'data',
    'NotReqXML': '1',
    'Description': 'Encoded (non-ASCII characters) representation of the SecurityListDesc (1467) field in the encoded format specified via the MessageEncoding (347) field. If used, the ASCII (English) representation should also be specified in the SecurityListDesc field.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '87'
  },
  {
    'Tag': '1470',
    'Name': 'SecurityListType',
    'Type': 'int',
    'AbbrName': 'ListTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Specifies a type of Security List.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '87'
  },
  {
    'Tag': '1471',
    'Name': 'SecurityListTypeSource',
    'Type': 'int',
    'AbbrName': 'LstTypSrc',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Specifies a specific source for a SecurityListType. Relevant when a certain type can be provided from various sources.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '87'
  },
  {
    'Tag': '1472',
    'Name': 'NewsID',
    'Type': 'String',
    'AbbrName': 'ID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for a News message',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '90'
  },
  {
    'Tag': '1473',
    'Name': 'NewsCategory',
    'Type': 'int',
    'AbbrName': 'NewsCatgy',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Category of news mesage.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '90'
  },
  {
    'Tag': '1474',
    'Name': 'LanguageCode',
    'Type': 'Language',
    'AbbrName': 'LangCd',
    'NotReqXML': '0',
    'Description': 'The national language in which the news item is provided.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '90'
  },
  {
    'Tag': '1475',
    'Name': 'NoNewsRefIDs',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of News reference items',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '90'
  },
  {
    'Tag': '1476',
    'Name': 'NewsRefID',
    'Type': 'String',
    'AbbrName': 'RefID',
    'NotReqXML': '0',
    'Description': 'Reference to another News message identified by NewsID(1474).',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '90'
  },
  {
    'Tag': '1477',
    'Name': 'NewsRefType',
    'Type': 'int',
    'AbbrName': 'RefTyp',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Type of reference to another News Message item. Defines if the referenced news item is a replacement, is in a different language, or is complimentary.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '90'
  },
  {
    'Tag': '1478',
    'Name': 'StrikePriceDeterminationMethod',
    'Type': 'int',
    'AbbrName': 'StrkPxDtrmnMeth',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Specifies how the strike price is determined at the point of option exercise. The strike may be fixed throughout the life of the option, set at expiration to the value of the underlying, set to the average value of the underlying , or set to the optimal value of the underlying.  \nConditionally, required if value is other than \'fixed\'.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1479',
    'Name': 'StrikePriceBoundaryMethod',
    'Type': 'int',
    'AbbrName': 'StrkPxBndryMeth',
    'NotReqXML': '0',
    'Description': 'Specifies the boundary condition to be used for the strike price relative to the underlying price at the point of option exercise.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1480',
    'Name': 'StrikePriceBoundaryPrecision',
    'Type': 'Percentage',
    'AbbrName': 'StrkPxBndryPrcsn',
    'NotReqXML': '0',
    'Description': 'Used in combination with StrikePriceBoundaryMethod to specify the percentage of the strike price in relation to the  underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1481',
    'Name': 'UnderlyingPriceDeterminationMethod',
    'Type': 'int',
    'AbbrName': 'PxDtrmnMeth',
    'NotReqXML': '0',
    'Description': 'Specifies how the underlying price is determined at the point of option exercise. The underlying price may be set to the current settlement price, set to a special reference, set to the optimal value of the underlying during the defined period (\'Look-back\') or set to the average value of the underlying during the defined period (\'Asian option\').',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1482',
    'Name': 'OptPayoutType',
    'Type': 'int',
    'AbbrName': 'OptPayoutTyp',
    'NotReqXML': '0',
    'Description': 'Indicates the type of payout that will result from an in-the-money option.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1483',
    'Name': 'NoComplexEvents',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of complex event occurrences.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1484',
    'Name': 'ComplexEventType',
    'Type': 'int',
    'AbbrName': 'Typ',
    'NotReqXML': '0',
    'Description': 'Identifies the type of complex event.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1485',
    'Name': 'ComplexOptPayoutAmount',
    'Type': 'Amt',
    'AbbrName': 'OptPayAmt',
    'NotReqXML': '0',
    'Description': 'Cash amount indicating the pay out associated with an event. For binary options this is a fixed amount.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1486',
    'Name': 'ComplexEventPrice',
    'Type': 'Price',
    'AbbrName': 'Px',
    'NotReqXML': '0',
    'Description': 'Specifies the price at which the complex event takes effect. Impact of the event price is determined by the ComplexEventType(1484).',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1487',
    'Name': 'ComplexEventPriceBoundaryMethod',
    'Type': 'int',
    'AbbrName': 'PxBndryMeth',
    'NotReqXML': '0',
    'Description': 'Specifies the boundary condition to be used for the event price relative to the underlying price at the point the complex event outcome takes effect as determined by the ComplexEventPriceTimeType.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1488',
    'Name': 'ComplexEventPriceBoundaryPrecision',
    'Type': 'Percentage',
    'AbbrName': 'PxBndryPrcsn',
    'NotReqXML': '0',
    'Description': 'Used in combination with ComplexEventPriceBoundaryMethod to specify the percentage of the strike price in relation to the  underlying price. The percentage is generally 100 or greater for puts and 100 or less for calls.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1489',
    'Name': 'ComplexEventPriceTimeType',
    'Type': 'int',
    'AbbrName': 'PxTmTyp',
    'NotReqXML': '0',
    'Description': 'Specifies when the complex event outcome takes effect. The outcome of a complex event is a payout or barrier action as specified by the ComplexEventType.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1490',
    'Name': 'ComplexEventCondition',
    'Type': 'int',
    'AbbrName': 'Cond',
    'NotReqXML': '0',
    'Description': 'Specifies the condition between complex events when more than one event is specified.  \nMultiple barrier events would use an \'or\' condition since only one can be effective at a given time. A set of digital range events would use an \'and\' condition since both conditions must be in effect for a payout to result.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1491',
    'Name': 'NoComplexEventDates',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of complex event date occurrences for a given complex event.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1492',
    'Name': 'ComplexEventStartDate',
    'Type': 'UTCTimestamp',
    'AbbrName': 'StartDt',
    'NotReqXML': '0',
    'Description': 'Specifies the start date of the date range on which a complex event is effective. The start date will be set equal to the end date for single day events such as Bermuda options\nComplexEventStartDate must always be less than or equal to ComplexEventEndDate.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1493',
    'Name': 'ComplexEventEndDate',
    'Type': 'UTCTimestamp',
    'AbbrName': 'EndDt',
    'NotReqXML': '0',
    'Description': 'Specifies the end date of the date range on which a complex event is effective. The start date will be set equal to the end date for single day events such as Bermuda options\nComplexEventEndDate must always be greater than or equal to ComplexEventStartDate.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1494',
    'Name': 'NoComplexEventTimes',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of complex event time occurrences for a given complex event date\nThe default in case of an absence of time fields is 00:00:00-23:59:59.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1495',
    'Name': 'ComplexEventStartTime',
    'Type': 'UTCTimeOnly',
    'AbbrName': 'StartTm',
    'NotReqXML': '0',
    'Description': 'Specifies the start time of the time range on which a complex event date is effective. \nComplexEventStartTime must always be less than or equal to ComplexEventEndTime.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1496',
    'Name': 'ComplexEventEndTime',
    'Type': 'UTCTimeOnly',
    'AbbrName': 'EndTm',
    'NotReqXML': '0',
    'Description': 'Specifies the end time of the time range on which a complex event date is effective.\nComplexEventEndTime must always be greater than or equal to ComplexEventStartTime.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '92'
  },
  {
    'Tag': '1497',
    'Name': 'StreamAsgnReqID',
    'Type': 'String',
    'AbbrName': 'ReqID',
    'NotReqXML': '0',
    'Description': 'Unique identifier for the stream assignment request provided by the requester.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1498',
    'Name': 'StreamAsgnReqType',
    'Type': 'int',
    'AbbrName': 'AsgnReqTyp',
    'NotReqXML': '0',
    'Description': 'Type of stream assignment request.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1499',
    'Name': 'NoAsgnReqs',
    'Type': 'NumInGroup',
    'NotReqXML': '1',
    'Description': 'Number of assignment requests.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1500',
    'Name': 'MDStreamID',
    'Type': 'String',
    'AbbrName': 'MDStrmID',
    'NotReqXML': '0',
    'Description': 'The identifier or name of the price stream.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1501',
    'Name': 'StreamAsgnRptID',
    'Type': 'String',
    'AbbrName': 'RptID',
    'NotReqXML': '0',
    'Description': 'Unique identifier of the stream assignment report provided by the respondent.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1502',
    'Name': 'StreamAsgnRejReason',
    'Type': 'int',
    'AbbrName': 'RejRsn',
    'NotReqXML': '0',
    'UnionDataType': 'Reserved100Plus',
    'Description': 'Reason code for stream assignment request reject.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1503',
    'Name': 'StreamAsgnAckType',
    'Type': 'int',
    'AbbrName': 'ActTyp',
    'NotReqXML': '0',
    'Description': 'Type of acknowledgement.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1617',
    'Name': 'StreamAsgnType',
    'Type': 'int',
    'AbbrName': 'AsgnTyp',
    'NotReqXML': '0',
    'Description': 'The type of assignment being affected in the Stream Assignment Report.',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '93'
  },
  {
    'Tag': '1504',
    'Name': 'RelSymTransactTime',
    'Type': 'UTCTimestamp',
    'AbbrName': 'TxnTm',
    'NotReqXML': '0',
    'Description': 'See TransactTime(60)',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '94'
  },
  {
    'Tag': '2300',
    'Name': 'AllocGrossTradeAmt',
    'Type': 'Amt',
    'AbbrName': 'GrossTrdAmt',
    'NotReqXML': '0',
    'Description': 'Total amount traded for this account (i.e. quantity * price) expressed in units of currency.',
    'Added': 'FIX.5.0SP2',
    'AddedEP': '170'
  }
];
