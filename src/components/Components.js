export class Components {
    constructor() {
        this.components = [
            {
                'Name':'ApplicationSequenceControl',
                'FIXML name':'ApplSeqCtrl',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The ApplicationSequenceControl is used for application sequencing and recovery. Consisting of ApplSeqNum (1181), ApplID (1180), ApplLastSeqNum (1350), and ApplResendFlag (1352), FIX application messages that carries this component block will be able to use application level sequencing. ApplID, ApplSeqNum and ApplLastSeqNum fields identify the application id, application sequence number and the previous application sequence number (in case of intentional gaps) on each application message that carries this block.',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'CommissionData',
                'FIXML name':'Comm',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The CommissionDate component block is used to carry commission information such as the type of commission and the rate.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'DiscretionInstructions',
                'FIXML name':'DiscInstr',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The presence of DiscretionInstructions component block on an order indicates that the trader wishes to display one price but will accept trades at another price.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'DisplayInstruction',
                'FIXML name':'DsplyInstr',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The DisplayInstruction component block is used to convey instructions on how a reserved order is to be handled in terms of when and how much of the order quantity is to be displayed to the market.',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'FinancingDetails',
                'FIXML name':'FinDetls',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'Component block is optionally used only for financing deals to identify the legal agreement under which the deal was made and other unique characteristics of the transaction. The AgreementDesc field refers to base standard documents such as MRA 1996 Repurchase Agreement, GMRA 2000 Bills Transaction (U.K.), MSLA 1993 Securities Loan – Amended 1998, for example.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'Instrument',
                'FIXML name':'Instrmt',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The Instrument component block contains all the fields commonly used to describe a security or instrument. Typically the data elements in this component block are considered the static data of a security, data that may be commonly found in a security master database. The Instrument component block can be used to describe any asset type supported by FIX.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'InstrumentExtension',
                'FIXML name':'InstrmtExt',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The InstrumentExtension component block identifies additional security attributes that are more commonly found for Fixed Income securities.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrumentLeg',
                'FIXML name':'Leg',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The InstrumentLeg component block, like the Instrument component block, contains all the fields commonly used to describe a security or instrument. In the case of the InstrumentLeg component block it describes a security used in multileg-oriented messages.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'LegBenchmarkCurveData',
                'FIXML name':'BnchmkCurve',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The LegBenchmarkCurveData is used to convey the benchmark information used for pricing in a multi-legged Fixed Income security.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'OrderQtyData',
                'FIXML name':'OrdQty',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The OrderQtyData component block contains the fields commonly used for indicating the amount or quantity of an order. Note that when this component block is marked as \'required\' in a message either one of these three fields must be used to identify the amount: OrderQty, CashOrderQty or OrderPercent (in the case of CIV).',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'PegInstructions',
                'FIXML name':'PegInstr',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The Peg Instructions component block is used to tie the price of a security to a market event such as opening price, mid-price, best price. The Peg Instructions block may also be used to tie the price to the behavior of a related security.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SecurityTradingRules',
                'FIXML name':'SecTrdgRules',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'Ths SecurityTradingRules component block is used as part of security definition to specify the specific security\'s standard trading parameters such as trading session eligibility and other attributes of the security.',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'SettlInstructionsData',
                'FIXML name':'SetInstr',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The SettlInstructionsData component block is used to convey key information regarding standing settlement and delivery instructions. It also provides a reference to standing settlement details regarding the source, delivery instructions, and settlement parties',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SpreadOrBenchmarkCurveData',
                'FIXML name':'SprdBnchmkCurve',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The SpreadOrBenchmarkCurveData component block is primarily used for Fixed Income to convey spread to a benchmark security or curve.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'StandardHeader',
                'FIXML name':'BaseHeader',
                'Category':'Session',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The standard FIX message header',
                'Added':'FIX.4.0',
                'Deprecated':''
            },
            {
                'Name':'StandardTrailer',
                'FIXML name':'',
                'Category':'Session',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The standard FIX message trailer',
                'Added':'FIX.4.0',
                'Deprecated':''
            },
            {
                'Name':'TriggeringInstruction',
                'FIXML name':'TrgrInstr',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The TriggeringInstruction component block specifies the conditions under which an order will be triggered by related market events as well as the behavior of the order in the market once it is triggered.',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'UnderlyingInstrument',
                'FIXML name':'Undly',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The UnderlyingInstrument component block, like the Instrument component block, contains all the fields commonly used to describe a security or instrument. In the case of the UnderlyingInstrument component block it describes an instrument which underlies the primary instrument Refer to the Instrument component block comments as this component block mirrors Instrument, except for the noted fields.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'YieldData',
                'FIXML name':'Yield',
                'Category':'Common',
                'Repeating':'0',
                'Type':'Block',
                'Description':'The YieldData component block conveys yield information for a given Fixed Income security.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'ExpirationQty',
                'FIXML name':'Qty',
                'Category':'PositionMaintenance',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The ExpirationQty component block identified the expiration quantities and type of expiration.',
                'Added':'FIX.4.4  EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'InstrumentParties',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The use of this component block is restricted to instrument definition only and is not permitted to contain transactional information. Only a specified subset of party roles will be supported within the InstrumentParty block.',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'LegStipulations',
                'FIXML name':'Stip',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The LegStipulations component block has the same usage as the Stipulations component block, but for a leg instrument in a multi-legged security.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'NestedParties',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The NestedParties component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message.. Use of NestedParties under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'NestedParties2',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The NestedParties2 component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message.. Use of NestedParties2 under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'NestedParties3',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The NestedParties3 component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message.. Use of NestedParties3 under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'NestedParties4',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The NestedParties4 component block is identical to the Parties Block. It is used in other component blocks and repeating groups when nesting will take place resulting in multiple occurrences of the Parties block within a single FIX message. Use of NestedParties4 under these conditions avoids multiple references to the Parties block within the same message which is not allowed in FIX tag/value syntax.',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'Parties',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The Parties component block is used to identify and convey information on the entities both central and peripheral to the financial transaction represented by the FIX message containing the Parties Block. The Parties block allows many different types of entites to be expressed through use of the PartyRole field and identifies the source of the PartyID through the the PartyIDSource.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'PositionAmountData',
                'FIXML name':'Amt',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The PositionAmountData component block is used to report netted amounts associated with position quantities. In the listed derivatives market the amount is generally expressing a type of futures variation or option premium. In the equities market this may be the net pay or collect on a given position.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'PositionQty',
                'FIXML name':'Qty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The PositionQty component block specifies the various types of position quantity in the position life-cycle including start-of-day, intraday, trade, adjustments, and end-of-day position quantities. Quantities are expressed in terms of long and short quantities.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'RateSource',
                'FIXML name':'RtSrc',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'',
                'Added':'FIX.5.0SP1  EP82',
                'Deprecated':''
            },
            {
                'Name':'RootParties',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The RootParties component block is a version of the Parties component block used to provide root information regarding the owning and entering parties of a transaction.',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'SettlParties',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The SettlParties component block is used in a similar manner as Parties Block within the context of settlement instruction messages to distinguish between parties involved in the settlement and parties who are expected to execute the settlement process.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SideTrdRegTS',
                'FIXML name':'TrdRegTS',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The SideTrdRegTS component block is used to convey regulatory timestamps associated with one side of a multi-sided trade event.',
                'Added':'FIX.4.4  EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'Stipulations',
                'FIXML name':'Stip',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The Stipulations component block is used in Fixed Income to provide additional information on a given security. These additional information are usually not considered static data information.',
                'Added':'FIX.4.3',
                'Deprecated':''
            },
            {
                'Name':'TargetParties',
                'FIXML name':'TgtPty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'',
                'Added':'FIX.5.0SP1  EP85',
                'Deprecated':''
            },
            {
                'Name':'TrdRegTimestamps',
                'FIXML name':'TrdRegTS',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The TrdRegTimestamps component block is used to express timestamps for an order or trade that are required by regulatory agencies These timesteamps are used to identify the timeframes for when an order or trade is received on the floor, received and executed by the broker, etc.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'UnderlyingAmount',
                'FIXML name':'UndDlvAmt',
                'Category':'PositionMaintenance',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The UnderlyingAmount component block is used to supply the underlying amounts, dates, settlement status and method for derivative positions.',
                'Added':'FIX.4.4  EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'UnderlyingStipulations',
                'FIXML name':'Stip',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The UnderlyingStipulations component block has the same usage as the Stipulations component block, but for an underlying security.',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'UndlyInstrumentParties',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'BlockRepeating',
                'Description':'The use of this component block is restricted to instrument definition only and is not permitted to contain transactional information. Only a specified subset of party roles will be supported within the InstrumentParty block.',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'BaseTradingRules',
                'FIXML name':'BaseTrdgRules',
                'Category':'Common',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'DerivativeInstrument',
                'FIXML name':'DerivInstrmt',
                'Category':'Common',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'DerivativeSecurityDefinition',
                'FIXML name':'DerivSecDef',
                'Category':'Common',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'PriceLimits',
                'FIXML name':'PxLmts',
                'Category':'Common',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'SecondaryPriceLimits',
                'FIXML name':'PxLmts2',
                'Category':'Common',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'TradeReportOrderDetail',
                'FIXML name':'TrdRptOrdDetl',
                'Category':'TradeCapture',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0SP1  EP77',
                'Deprecated':''
            },
            {
                'Name':'TradingSessionRules',
                'FIXML name':'TrdgSesRules',
                'Category':'Common',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'UnderlyingLegInstrument',
                'FIXML name':'Instrmt',
                'Category':'TradeCapture',
                'Repeating':'0',
                'Type':'ImplicitBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'AffectedOrdGrp',
                'FIXML name':'AffectOrd',
                'Category':'OrderMassHandling',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'AllocAckGrp',
                'FIXML name':'AllocAck',
                'Category':'Allocation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'AllocGrp',
                'FIXML name':'Alloc',
                'Category':'Allocation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ApplIDReportGrp',
                'FIXML name':'ApplIDRptGrp',
                'Category':'Application',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'ApplIDRequestAckGrp',
                'FIXML name':'ApplIDReqAckGrp',
                'Category':'Application',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'ApplIDRequestGrp',
                'FIXML name':'ApplIDReqGrp',
                'Category':'Application',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'AttrbGrp',
                'FIXML name':'Attrb',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'BidCompReqGrp',
                'FIXML name':'CompReq',
                'Category':'ProgramTrading',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'BidCompRspGrp',
                'FIXML name':'CompRsp',
                'Category':'ProgramTrading',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'BidDescReqGrp',
                'FIXML name':'DescReq',
                'Category':'ProgramTrading',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ClrInstGrp',
                'FIXML name':'ClrInst',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'CollInqQualGrp',
                'FIXML name':'Qual',
                'Category':'CollateralManagement',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'CompIDReqGrp',
                'FIXML name':'CIDReq',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'CompIDStatGrp',
                'FIXML name':'CIDStat',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ComplexEventDates',
                'FIXML name':'EvntDts',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'The ComplexEventDate and ComplexEventTime components are used to constrain a complex event to a specific date range or time range. If specified the event is only effective on or within the specified dates and times.',
                'Added':'FIX.5.0SP1  EP92',
                'Deprecated':''
            },
            {
                'Name':'ComplexEventTimes',
                'FIXML name':'EvntTms',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'The ComplexEventTime component is nested within the ComplexEventDate in order to further qualify any dates placed on the event and is used to specify time ranges for which a complex event is effective. It is always provided within the context of start and end dates. The time range is assumed to be in effect for the entirety of the date or date range specified.',
                'Added':'FIX.5.0SP1  EP92',
                'Deprecated':''
            },
            {
                'Name':'ComplexEvents',
                'FIXML name':'CmplxEvnt',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'The ComplexEvent Group is a repeating block which allows an unlimited number and types of events in the lifetime of an option to be specified.',
                'Added':'FIX.5.0SP1  EP92',
                'Deprecated':''
            },
            {
                'Name':'ContAmtGrp',
                'FIXML name':'ContAmt',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ContraGrp',
                'FIXML name':'Contra',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'CpctyConfGrp',
                'FIXML name':'Cpcty',
                'Category':'Confirmation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'DerivativeEventsGrp',
                'FIXML name':'Evnt',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'DerivativeInstrumentAttribute',
                'FIXML name':'Attrb',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'DerivativeInstrumentParties',
                'FIXML name':'Pty',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'DerivativeInstrumentPartySubIDsGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'DerivativeSecurityAltIDGrp',
                'FIXML name':'AID',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'DlvyInstGrp',
                'FIXML name':'DlvInst',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'EvntGrp',
                'FIXML name':'Evnt',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ExecAllocGrp',
                'FIXML name':'AllExc',
                'Category':'Allocation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ExecCollGrp',
                'FIXML name':'CollExc',
                'Category':'CollateralManagement',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ExecInstRules',
                'FIXML name':'ExecInstRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'FillsGrp',
                'FIXML name':'FillsGrp',
                'Category':'SingleGeneralOrderHandling',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'HopGrp',
                'FIXML name':'Hop',
                'Category':'Session',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1 Updated  FIX.5.0SP1  EP95',
                'Deprecated':''
            },
            {
                'Name':'IOIQualGrp',
                'FIXML name':'Qual',
                'Category':'Indication',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrmtGrp',
                'FIXML name':'Inst',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrmtLegExecGrp',
                'FIXML name':'Exec',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrmtLegIOIGrp',
                'FIXML name':'IOI',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrmtLegSecListGrp',
                'FIXML name':'SecL',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrmtMDReqGrp',
                'FIXML name':'InstReq',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrmtStrkPxGrp',
                'FIXML name':'StrkPX',
                'Category':'ProgramTrading',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'InstrumentPtysSubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'LegOrdGrp',
                'FIXML name':'Ord',
                'Category':'MultilegOrders',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'LegPreAllocGrp',
                'FIXML name':'PreAll',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'LegQuotGrp',
                'FIXML name':'Quot',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'LegQuotStatGrp',
                'FIXML name':'QuoteStat',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'LegSecAltIDGrp',
                'FIXML name':'LegAID',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'LinesOfTextGrp',
                'FIXML name':'TxtLn',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'ListOrdGrp',
                'FIXML name':'Ord',
                'Category':'ProgramTrading',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'LotTypeRules',
                'FIXML name':'LotTypeRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'MDFullGrp',
                'FIXML name':'Full',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'MDIncGrp',
                'FIXML name':'Inc',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'MDReqGrp',
                'FIXML name':'Req',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'MDRjctGrp',
                'FIXML name':'Rjct',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'MarketDataFeedTypes',
                'FIXML name':'MDFeedTyps',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'MarketSegmentGrp',
                'FIXML name':'MktSegGrp',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'MatchRules',
                'FIXML name':'MtchRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'MaturityRules',
                'FIXML name':'MatRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'MiscFeesGrp',
                'FIXML name':'MiscFees',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'MsgTypeGrp',
                'FIXML name':'MsgTypeGrp',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'NestedInstrumentAttribute',
                'FIXML name':'Attrb',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'NewsRefGrp',
                'FIXML name':'Refs',
                'Category':'EventCommunication',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0SP1  EP90',
                'Deprecated':''
            },
            {
                'Name':'NotAffectedOrdersGrp',
                'FIXML name':'NotAffectedOrdersGrp',
                'Category':'OrderMassHandling',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'NstdPtys2SubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'NstdPtys3SubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'NstdPtys4SubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'NstdPtysSubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'OrdAllocGrp',
                'FIXML name':'OrdAlloc',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'OrdListStatGrp',
                'FIXML name':'ListStat',
                'Category':'ProgramTrading',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'OrdTypeRules',
                'FIXML name':'OrdTypRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'PosUndInstrmtGrp',
                'FIXML name':'PosUnd',
                'Category':'PositionMaintenance',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'PreAllocGrp',
                'FIXML name':'PreAll',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'PreAllocMlegGrp',
                'FIXML name':'PreAllocMleg',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'PtysSubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotCxlEntriesGrp',
                'FIXML name':'QuotCxlEntry',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotEntryAckGrp',
                'FIXML name':'QuotEntryAck',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotEntryGrp',
                'FIXML name':'QuotEntry',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotQualGrp',
                'FIXML name':'QuotQual',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotReqGrp',
                'FIXML name':'QuotReq',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotReqLegsGrp',
                'FIXML name':'Leg',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotReqRjctGrp',
                'FIXML name':'QuotReqRej',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotSetAckGrp',
                'FIXML name':'QuotSetAck',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'QuotSetGrp',
                'FIXML name':'QuotSet',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'RFQReqGrp',
                'FIXML name':'RFQReq',
                'Category':'QuotationNegotiation',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'RelSymDerivSecGrp',
                'FIXML name':'RelSym',
                'Category':'SecuritiesReferenceData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'RelSymDerivSecUpdGrp',
                'FIXML name':'RelSym',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'RgstDistInstGrp',
                'FIXML name':'RgDtlInst',
                'Category':'RegistrationInstruction',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'RgstDtlsGrp',
                'FIXML name':'RgDtl',
                'Category':'RegistrationInstruction',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'RootSubParties',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'RoutingGrp',
                'FIXML name':'Rtg',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SecAltIDGrp',
                'FIXML name':'AID',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SecListGrp',
                'FIXML name':'SecL',
                'Category':'SecuritiesReferenceData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'SecLstUpdRelSymGrp',
                'FIXML name':'SecL',
                'Category':'SecuritiesReferenceData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'SecLstUpdRelSymsLegGrp',
                'FIXML name':'SecLstUpdRelSymsLegGrp',
                'Category':'SecuritiesReferenceData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'SecSizesGrp',
                'FIXML name':'SecSizesGrp',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'SecTypesGrp',
                'FIXML name':'SecT',
                'Category':'SecuritiesReferenceData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'SettlDetails',
                'FIXML name':'SettlDetails',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'SettlInstGrp',
                'FIXML name':'SetInst',
                'Category':'SettlementInstruction',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SettlObligationInstructions',
                'FIXML name':'SettlObligInst',
                'Category':'SettlementInstruction',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'SettlPtysSubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SideCrossOrdCxlGrp',
                'FIXML name':'SideCrossCxl',
                'Category':'CrossOrders',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'SideCrossOrdModGrp',
                'FIXML name':'SideCrossMod',
                'Category':'CrossOrders',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'StatsIndGrp',
                'FIXML name':'StatsIndGrp',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'StrategyParametersGrp',
                'FIXML name':'StrtPrmGrp',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1 Updated  FIX.5.0SP1  EP95',
                'Deprecated':''
            },
            {
                'Name':'StrikeRules',
                'FIXML name':'StrkRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'StrmAsgnReqGrp',
                'FIXML name':'Reqs',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0SP1  EP93',
                'Deprecated':''
            },
            {
                'Name':'StrmAsgnReqInstrmtGrp',
                'FIXML name':'Instrmts',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0SP1  EP93',
                'Deprecated':''
            },
            {
                'Name':'StrmAsgnRptGrp',
                'FIXML name':'Rpts',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0SP1  EP93',
                'Deprecated':''
            },
            {
                'Name':'StrmAsgnRptInstrmtGrp',
                'FIXML name':'Instrmts',
                'Category':'MarketData',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0SP1  EP93',
                'Deprecated':''
            },
            {
                'Name':'TickRules',
                'FIXML name':'TickRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'TimeInForceRules',
                'FIXML name':'TmInForceRules',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'TradeCapLegUnderlyingsGrp',
                'FIXML name':'TradeCapLegUndlyGrp',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'TradingSessionRulesGrp',
                'FIXML name':'TrdgSesRulesGrp',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'TrdAllocGrp',
                'FIXML name':'Alloc',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'TrdCapDtGrp',
                'FIXML name':'TrdCapDt',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'TrdCapRptAckSideGrp',
                'FIXML name':'RptSide',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'TrdCapRptSideGrp',
                'FIXML name':'RptSide',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'TrdCollGrp',
                'FIXML name':'TrdColl',
                'Category':'CollateralManagement',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'TrdInstrmtLegGrp',
                'FIXML name':'TrdLeg',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'TrdRepIndicatorsGrp',
                'FIXML name':'TrdRepIndicatorsGrp',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'TrdSessLstGrp',
                'FIXML name':'TrdSessLstGrp',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'TrdgSesGrp',
                'FIXML name':'TrdSes',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'UndInstrmtCollGrp',
                'FIXML name':'UndColl',
                'Category':'CollateralManagement',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'UndSecAltIDGrp',
                'FIXML name':'UndAID',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'UnderlyingLegSecurityAltIDGrp',
                'FIXML name':'AID',
                'Category':'TradeCapture',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1 Updated  FIX.5.0SP1  EP97',
                'Deprecated':''
            },
            {
                'Name':'UndlyInstrumentPtysSubGrp',
                'FIXML name':'Sub',
                'Category':'Common',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4  EP-1',
                'Deprecated':''
            },
            {
                'Name':'UsernameGrp',
                'FIXML name':'UserGrp',
                'Category':'UserManagement',
                'Repeating':'1',
                'Type':'ImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'InstrmtLegGrp',
                'FIXML name':'Leg',
                'Category':'Common',
                'Repeating':'1',
                'Type':'OptimisedImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4 Updated  FIX.5.0SP1  EP76',
                'Deprecated':''
            },
            {
                'Name':'UndInstrmtGrp',
                'FIXML name':'Undly',
                'Category':'Common',
                'Repeating':'1',
                'Type':'OptimisedImplicitBlockRepeating',
                'Description':'',
                'Added':'FIX.4.4',
                'Deprecated':''
            },
            {
                'Name':'DerivativeSecurityXML',
                'FIXML name':'SecXML',
                'Category':'Common',
                'Repeating':'0',
                'Type':'XMLDataBlock',
                'Description':'',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            },
            {
                'Name':'SecurityXML',
                'FIXML name':'SecXML',
                'Category':'Common',
                'Repeating':'0',
                'Type':'XMLDataBlock',
                'Description':'The SecurityXML component is used for carrying security description or definition in an XML format. See \'Specifying an FpML product specification from within the FIX Instrument Block\' for more information on using this component block with FpML as a guideline.',
                'Added':'FIX.5.0 EP-1',
                'Deprecated':''
            }
        ];
    }

    find(componentName) {
        return this.components.find(item => item.name === componentName);
    }
}