/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
export class Abbreviations {

    constructor() {
        this.abbreviations = [
            {
                "Term": "Account",
                "AbbrTerm": "Acct",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Accrual",
                "AbbrTerm": "Acrl",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Accrued",
                "AbbrTerm": "Acrd",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Acknowledgement",
                "AbbrTerm": "Ack",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Action",
                "AbbrTerm": "Actn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Adjust",
                "AbbrTerm": "Adj",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Adjustment",
                "AbbrTerm": "Adjmt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Advertisement",
                "AbbrTerm": "Adv",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Affected",
                "AbbrTerm": "Afctd",
                "Added": "FIX.5.0",
                "AddedEP": "41"
            },
            {
                "Term": "Algorithm",
                "AbbrTerm": "Algo",
                "Added": "FIX.5.0",
                "AddedEP": "42"
            },
            {
                "Term": "Allocation",
                "AbbrTerm": "Alloc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "AllowableOneSidedness",
                "AbbrTerm": "AOS",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Amount",
                "AbbrTerm": "Amt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Application",
                "AbbrTerm": "Appl",
                "Added": "FIX.5.0",
                "AddedEP": "63"
            },
            {
                "Term": "Assignment",
                "AbbrTerm": "Asgn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Attachment",
                "AbbrTerm": "Attch",
                "Added": "FIX.5.0SP1",
                "AddedEP": "83"
            },
            {
                "Term": "Attribute",
                "AbbrTerm": "Attrb",
                "Added": "FIX.5.0",
                "AddedEP": "41"
            },
            {
                "Term": "Base",
                "AbbrTerm": "Base",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Behalf",
                "AbbrTerm": "Bhf",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Benchmark",
                "AbbrTerm": "Bnchmk",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Booking",
                "AbbrTerm": "Bkng",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Broker",
                "AbbrTerm": "Brkr",
                "Added": "FIX.4.4",
                "Issue": "SPEC-371"
            },
            {
                "Term": "Brokers",
                "AbbrTerm": "Brkrs",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Business",
                "AbbrTerm": "Biz",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Calculation",
                "AbbrTerm": "Calc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Cancel",
                "AbbrTerm": "Cxl",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Capacity",
                "AbbrTerm": "Cpcty",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Capture",
                "AbbrTerm": "Capt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Cash",
                "AbbrTerm": "Csh",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Category",
                "AbbrTerm": "Catgy",
                "Added": "FIX.5.0SP1",
                "AddedEP": "90"
            },
            {
                "Term": "Client",
                "AbbrTerm": "Cl",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Close",
                "AbbrTerm": "Cls",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Code",
                "AbbrTerm": "Cd",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Collateral",
                "AbbrTerm": "Coll",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Commission",
                "AbbrTerm": "Comm",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Common",
                "AbbrTerm": "Cmn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Company",
                "AbbrTerm": "Comp",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Complex",
                "AbbrTerm": "Cmplx",
                "Added": "FIX.5.0SP1",
                "AddedEP": "92"
            },
            {
                "Term": "Condition",
                "AbbrTerm": "Cond",
                "Added": "FIX.5.0SP1",
                "AddedEP": "92"
            },
            {
                "Term": "Confirmation",
                "AbbrTerm": "Cnfm",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Confirmation",
                "AbbrTerm": "Confirm",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Context",
                "AbbrTerm": "Cntxt",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96",
                "Issue": "SPEC-371"
            },
            {
                "Term": "Contra",
                "AbbrTerm": "Cntra",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Control",
                "AbbrTerm": "Ctrl",
                "Added": "FIX.5.0",
                "AddedEP": "63"
            },
            {
                "Term": "Corporate",
                "AbbrTerm": "Corp",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Country",
                "AbbrTerm": "Ctry",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Coupon",
                "AbbrTerm": "Cpn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Cross",
                "AbbrTerm": "Crss",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Cumulative",
                "AbbrTerm": "Cum",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Currency",
                "AbbrTerm": "Ccy",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Curve",
                "AbbrTerm": "Crv",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Data",
                "AbbrTerm": "Data",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Database",
                "AbbrTerm": "Db",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Date",
                "AbbrTerm": "Dt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Definition",
                "AbbrTerm": "Def",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Delete",
                "AbbrTerm": "Del",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Deliver",
                "AbbrTerm": "Dlvr",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Derivative",
                "AbbrTerm": "Deriv",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Description",
                "AbbrTerm": "Desc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Destination",
                "AbbrTerm": "Dest",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Detail",
                "AbbrTerm": "Detl",
                "Added": "FIX.5.0SP1",
                "AddedEP": "77"
            },
            {
                "Term": "Determination",
                "AbbrTerm": "Dtrmn",
                "Added": "FIX.5.0SP1",
                "AddedEP": "92"
            },
            {
                "Term": "Device",
                "AbbrTerm": "Dev",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Discount",
                "AbbrTerm": "Disc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Discretion",
                "AbbrTerm": "Dsctn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Discretionary",
                "AbbrTerm": "Dsctnry",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Don't Know",
                "AbbrTerm": "DK",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Duplicate",
                "AbbrTerm": "Dup",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Effective",
                "AbbrTerm": "Efctv",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Encoded",
                "AbbrTerm": "Enc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Error",
                "AbbrTerm": "Err",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Event",
                "AbbrTerm": "Evnt",
                "Added": "FIX.5.0SP1",
                "AddedEP": "92"
            },
            {
                "Term": "Exchange",
                "AbbrTerm": "Exch",
                "Added": "FIX.4.4"
            },
            {
                "Term": "ExchangeForPhysical",
                "AbbrTerm": "EFP",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Execute",
                "AbbrTerm": "Exct",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Execution",
                "AbbrTerm": "Exctn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Exercise",
                "AbbrTerm": "Exr",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Factor",
                "AbbrTerm": "Fctr",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Feed",
                "AbbrTerm": "Feed",
                "Added": "FIX.5.0",
                "AddedEP": "42"
            },
            {
                "Term": "Foreign Currency",
                "AbbrTerm": "FX",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Forward",
                "AbbrTerm": "Fwd",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Force",
                "AbbrTerm": "Force",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Future",
                "AbbrTerm": "Fut",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Good Till Date",
                "AbbrTerm": "GTD",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Group",
                "AbbrTerm": "Grp",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Handling",
                "AbbrTerm": "Hndl",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Identifier",
                "AbbrTerm": "ID",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Implicit",
                "AbbrTerm": "Implct",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Increment",
                "AbbrTerm": "Incr",
                "Added": "FIX.5.0",
                "AddedEP": "22"
            },
            {
                "Term": "Index",
                "AbbrTerm": "Ndx",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Indication of Interest",
                "AbbrTerm": "IOI",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Indicator",
                "AbbrTerm": "Ind",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Information",
                "AbbrTerm": "Info",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Input",
                "AbbrTerm": "Inpt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Inquiry",
                "AbbrTerm": "Inq",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Institution",
                "AbbrTerm": "Instn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Instruction",
                "AbbrTerm": "Inst",
                "Added": "FIX.5.0",
                "AddedEP": "44"
            },
            {
                "Term": "Instrument",
                "AbbrTerm": "Instrmt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Interest",
                "AbbrTerm": "Int",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Issue",
                "AbbrTerm": "Iss",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Issuer",
                "AbbrTerm": "Issr",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Language",
                "AbbrTerm": "Lang",
                "Added": "FIX.5.0SP1",
                "AddedEP": "90"
            },
            {
                "Term": "Level",
                "AbbrTerm": "Lvl",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Liquidity",
                "AbbrTerm": "Lqdty",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Limit",
                "AbbrTerm": "Lmt",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "List",
                "AbbrTerm": "List",
                "Added": "FIX.5.0",
                "AddedEP": "20"
            },
            {
                "Term": "Locate",
                "AbbrTerm": "Loc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Location",
                "AbbrTerm": "Lctn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Lot",
                "AbbrTerm": "Lot",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Maintenance",
                "AbbrTerm": "Mnt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Margin",
                "AbbrTerm": "Mgn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Market",
                "AbbrTerm": "Mkt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Mass",
                "AbbrTerm": "Mass",
                "Added": "FIX.5.0",
                "AddedEP": "58"
            },
            {
                "Term": "Match",
                "AbbrTerm": "Mtch",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Maturity",
                "AbbrTerm": "Mat",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Maximum",
                "AbbrTerm": "Max",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Message",
                "AbbrTerm": "Msg",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Method",
                "AbbrTerm": "Meth",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Minimum",
                "AbbrTerm": "Min",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Miscellaneous",
                "AbbrTerm": "Misc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Model",
                "AbbrTerm": "Model",
                "Added": "FIX.5.0",
                "AddedEP": "59"
            },
            {
                "Term": "Modification",
                "AbbrTerm": "Mod",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Money",
                "AbbrTerm": "Mny",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Month",
                "AbbrTerm": "Mo",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Multileg",
                "AbbrTerm": "Mleg",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Multiplier",
                "AbbrTerm": "Mult",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Name",
                "AbbrTerm": "Nme",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96"
            },
            {
                "Term": "Nested",
                "AbbrTerm": "Nst",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Network",
                "AbbrTerm": "Ntwk",
                "Added": "FIX.4.4"
            },
            {
                "Term": "News",
                "AbbrTerm": "News",
                "Added": "FIX.5.0SP1",
                "AddedEP": "90"
            },
            {
                "Term": "Notification",
                "AbbrTerm": "Notifctn",
                "Added": "FIX.5.0",
                "AddedEP": "56"
            },
            {
                "Term": "Notional",
                "AbbrTerm": "Notl",
                "Added": "FIX.5.0SP1",
                "AddedEP": "83"
            },
            {
                "Term": "Number",
                "AbbrTerm": "Num",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Number",
                "AbbrTerm": "No",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Obligation",
                "AbbrTerm": "Oblig",
                "Added": "FIX.5.0",
                "AddedEP": "44"
            },
            {
                "Term": "Offer",
                "AbbrTerm": "Ofr",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Operator",
                "AbbrTerm": "Oper",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96"
            },
            {
                "Term": "Option",
                "AbbrTerm": "Opt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Order",
                "AbbrTerm": "Ord",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Original",
                "AbbrTerm": "Orig",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Other",
                "AbbrTerm": "Oth",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Outstanding",
                "AbbrTerm": "Out",
                "Added": "FIX.5.0SP1",
                "AddedEP": "83"
            },
            {
                "Term": "Parameter",
                "AbbrTerm": "Prm",
                "Added": "FIX.5.0"
            },
            {
                "Term": "Party",
                "AbbrTerm": "Pty",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Payment",
                "AbbrTerm": "Pmt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Percent",
                "AbbrTerm": "Pct",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Percentage",
                "AbbrTerm": "Pctg",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Platform",
                "AbbrTerm": "Pltfm",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96"
            },
            {
                "Term": "Point",
                "AbbrTerm": "Pnt",
                "Added": "FIX.5.0SP1",
                "AddedEP": "83"
            },
            {
                "Term": "Position",
                "AbbrTerm": "Pos",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Possible",
                "AbbrTerm": "Psbl",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Preliminary",
                "AbbrTerm": "Prlm",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Precision",
                "AbbrTerm": "Prcsn",
                "Added": "FIX.5.0SP1",
                "AddedEP": "92"
            },
            {
                "Term": "Previous",
                "AbbrTerm": "Prev",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Price",
                "AbbrTerm": "Px",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Priority",
                "AbbrTerm": "Pri",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Priotization",
                "AbbrTerm": "Prtztn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Product",
                "AbbrTerm": "Prod",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Publish",
                "AbbrTerm": "Pub",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Qualifier",
                "AbbrTerm": "Qual",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Quality",
                "AbbrTerm": "Qlty",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Quantity",
                "AbbrTerm": "Qty",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Quote",
                "AbbrTerm": "Quot",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Range",
                "AbbrTerm": "Rng",
                "Added": "FIX.5.0"
            },
            {
                "Term": "Rate",
                "AbbrTerm": "Rt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Rating",
                "AbbrTerm": "Rtng",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Reason",
                "AbbrTerm": "Rsn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Redemption",
                "AbbrTerm": "Red",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Reference",
                "AbbrTerm": "Ref",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Registration",
                "AbbrTerm": "Rgst",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Registry",
                "AbbrTerm": "Rgstry",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Reject",
                "AbbrTerm": "Rej",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Related",
                "AbbrTerm": "Reltd",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Relationship",
                "AbbrTerm": "Rltnshp",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96"
            },
            {
                "Term": "Report",
                "AbbrTerm": "Rpt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Reports",
                "AbbrTerm": "Rpts",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Repurchase",
                "AbbrTerm": "Repo",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Request",
                "AbbrTerm": "Req",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Reset",
                "AbbrTerm": "Reset",
                "Added": "FIX.5.0",
                "AddedEP": "20"
            },
            {
                "Term": "Response",
                "AbbrTerm": "Rsp",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Restatement",
                "AbbrTerm": "Rstmt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Restrict",
                "AbbrTerm": "Rstct",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Restriction",
                "AbbrTerm": "Rstctn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Restrictions",
                "AbbrTerm": "Rstctns",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Restructuring",
                "AbbrTerm": "Rstrct",
                "Added": "FIX.5.0SP1",
                "AddedEP": "83"
            },
            {
                "Term": "Result",
                "AbbrTerm": "Rslt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Risk",
                "AbbrTerm": "Risk",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96"
            },
            {
                "Term": "Roles",
                "AbbrTerm": "R",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Round",
                "AbbrTerm": "Rnd",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Rules",
                "AbbrTerm": "Rules",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Scope",
                "AbbrTerm": "Scope",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96"
            },
            {
                "Term": "Secondary",
                "AbbrTerm": "2",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Security",
                "AbbrTerm": "Sec",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Segment",
                "AbbrTerm": "Seg",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Sender",
                "AbbrTerm": "Snd",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Sending",
                "AbbrTerm": "Sndg",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Seniority",
                "AbbrTerm": "Snrty",
                "Added": "FIX.5.0SP1",
                "AddedEP": "83"
            },
            {
                "Term": "Sequence",
                "AbbrTerm": "Seq",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Service",
                "AbbrTerm": "Svc",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Session",
                "AbbrTerm": "Ses",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Settlement",
                "AbbrTerm": "Settl",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Short",
                "AbbrTerm": "Shrt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Size",
                "AbbrTerm": "Sz",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Source",
                "AbbrTerm": "Src",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Standing",
                "AbbrTerm": "Stand",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Start",
                "AbbrTerm": "Start",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "State",
                "AbbrTerm": "St",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Status",
                "AbbrTerm": "Stat",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Stipulation",
                "AbbrTerm": "Stip",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Strategy",
                "AbbrTerm": "Strt",
                "Added": "FIX.5.0"
            },
            {
                "Term": "Stream",
                "AbbrTerm": "Strm",
                "Added": "FIX.5.0SP1",
                "AddedEP": "93"
            },
            {
                "Term": "Strike",
                "AbbrTerm": "Strk",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Subscription",
                "AbbrTerm": "Sub",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Subsidiary",
                "AbbrTerm": "Subsid",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Suffix",
                "AbbrTerm": "Sfx",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Symbol",
                "AbbrTerm": "Sym",
                "Added": "FIX.4.4"
            },
            {
                "Term": "System",
                "AbbrTerm": "Sys",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Target",
                "AbbrTerm": "Tgt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Term",
                "AbbrTerm": "Trm",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Tick",
                "AbbrTerm": "Tick",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Ticket",
                "AbbrTerm": "Tkt",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Time",
                "AbbrTerm": "Tm",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Timestamp",
                "AbbrTerm": "TS",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Total",
                "AbbrTerm": "Tot",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Tracking",
                "AbbrTerm": "Trkng",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Trade",
                "AbbrTerm": "Trd",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Trading",
                "AbbrTerm": "Trdg",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "TradingSession",
                "AbbrTerm": "TrdgSes",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Transaction",
                "AbbrTerm": "Txn",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Type",
                "AbbrTerm": "Typ",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Underlying",
                "AbbrTerm": "Und",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Update",
                "AbbrTerm": "Upd",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Value",
                "AbbrTerm": "Valu",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Valuation",
                "AbbrTerm": "Val",
                "Added": "FIX.5.0",
                "AddedEP": "52"
            },
            {
                "Term": "Venue",
                "AbbrTerm": "Venu",
                "Added": "FIX.5.0SP1",
                "AddedEP": "77"
            },
            {
                "Term": "Volume",
                "AbbrTerm": "Vol",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Warning",
                "AbbrTerm": "Warn",
                "Added": "FIX.5.0SP1",
                "AddedEP": "96"
            },
            {
                "Term": "Year",
                "AbbrTerm": "Yr",
                "Added": "FIX.4.4"
            },
            {
                "Term": "Yield",
                "AbbrTerm": "Yld",
                "Added": "FIX.4.4"
            }
        ]
    }
}