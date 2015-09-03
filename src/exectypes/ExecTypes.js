export class ExecTypes {
    constructor() {
        this.execTypes = [
            {'execType':'0', 'description':'New'},
            {'execType':'1', 'description':'Partial fill (Replaced)'},
            {'execType':'2', 'description':'Fill (Replaced)'},
            {'execType':'3', 'description':'Done for day'},
            {'execType':'4', 'description':'Canceled'},
            {'execType':'5', 'description':'Replace'},
            {'execType':'6', 'description':'Pending Cancel (e.g. result of Order Cancel Request <F>)'},
            {'execType':'7', 'description':'Stopped'},
            {'execType':'8', 'description':'Rejected'},
            {'execType':'9', 'description':'Suspended'},
            {'execType':'A', 'description':'Pending New'},
            {'execType':'B', 'description':'Calculated'},
            {'execType':'C', 'description':'Expired'},
            {'execType':'D', 'description':'Restated (ExecutionRpt sent unsolicited by sellside, with ExecRestatementReason <378> (378) set)'},
            {'execType':'E', 'description':'Pending Replace (e.g. result of Order Cancel/Replace Request <G>)'},
            {'execType':'F', 'description':'Trade (partial fill or fill)'},
            {'execType':'G', 'description':'Trade Correct (formerly an ExecTransType <20> (20))'},
            {'execType':'H', 'description':'Trade Cancel (formerly an ExecTransType <20>)'},
            {'execType':'I', 'description':'Order Status (formerly an ExecTransType <20>)'}
        ];
    }

    find(execType) {
        return this.execTypes.find(item => item.execType === execType);
    }

    process(item, tag, value) {
        if(tag === 150) {
            let execType = this.find(value);
            if(execType) {
                item.execTypeDetail = execType;
            }
        }
    }
}