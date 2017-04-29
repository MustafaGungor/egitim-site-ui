import React from "react";
import {ShallowComponent,Store,AjaxRequest,Assertions} from "robe-react-commons";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
import DataForm from "robe-react-ui/lib/form/DataForm";

export default class DersEkle extends ShallowComponent{
    static idField = "oid";
    constructor(props){
        super(props);
        let store = new Store({
            endPoint:new RemoteEndPoint({
                url:""
            }),
            idField:DersEkle.idField
        });
        this.state = {
            store:store
        }
    }
    render(){

    }
}