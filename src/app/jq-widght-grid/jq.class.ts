

export class JqWidghtModel {
    width?: number | any;
    source?: SourceModel;
    columns?: Array<ColumnDetailModel>;
    isPageable?: boolean;
    isAutoheight?: boolean;
    isSortable?: boolean;
    selectionmode?: string;
    columngroups?: Array<ColumngroupModel>;
    isAltRow?: boolean;
    isenabletooltips?: boolean;
    iseditable?: boolean;
    sourceId?: string;
    typeOfData?: string;
    actualData?: Array<any>;
    dataField?: Array<DataFieldsModel>;
    actionsArray?: Array<ActionModel>;
    isShowToolbar?: boolean;
    isShowStatusBar?: boolean;
    actionsIn?: string;
    isFilterable?: boolean;
    isSortbackGroungColor?: boolean;
    isautoshowfiltericon?: boolean;
    isshowfilterrow?: boolean;
    pagermode?: string;
    isGroupable?:boolean
}

export class SourceModel {
    datatype?: string;
    datafields?: Array<DataFieldsModel>;
    id?: string;
    localdata?: any;
}
export class DataFieldsModel {
    name?: string;
    type?: string;

}
export class ColumnDetailModel {
    text?: string;
    dataField?: string;
    width?: number;
    cellsalign?: string;
    cellsformat?: string;
    columnType?: string;
    columnGroup?: string;
    cellsrenderer?: any;
    editable?: boolean;
    buttonclick?: any;
    renderer?: any;
    columntype?: string;
    filtertype?: string;

}
export class ColumngroupModel {
    text?: string;
    align?: string;
    name?: string;
}

export class ActionModel {
    name?: string;
    imgSrc?: string;
    buttonWidth?: number;
    buttonHeight?: number;
    buttonValue?: string;
    imgPosition?: string;
    textPosition?: string;
    textImageRelation?: string;
}