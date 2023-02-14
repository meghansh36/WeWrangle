import { Injectable } from '@angular/core'
import { Component } from 'rete'
import { FilterComponent } from '../components/toolComponents/filter.component'
import { FunctionComponent } from '../components/toolComponents/function.component'
import { InputCSVComponent } from '../components/toolComponents/inputCSV.component'
import { OutputCSVComponent } from '../components/toolComponents/outputCSV.component'

export interface ToolGroup {

    groupLabel: string,
    tools: Array<{toolName: string, style: {}, toolLabel: string}>

}

@Injectable()
export class InitializationService {

    nodeComponents: {[key: string]: Component} = {
        inputCSV: new InputCSVComponent,
        outputCSV: new OutputCSVComponent,
        function: new FunctionComponent,
        filter: new FilterComponent

    }

    toolGroups: ToolGroup[] = [
        {
            groupLabel: 'Input',
            tools: [
                {
                    toolName: 'inputCSV',
                    toolLabel: "CSV Input",
                    style: {
                        'background-color': '#83ff73',
                        'width': '40px',
                        'height': '40px',
                    }
                }
            ]
        }, 

        {
            groupLabel: 'Transform',
            tools: [
                {
                    toolName: 'filter',
                    style: {
                        'background-color': '#666',
                        'width': '40px',
                        'height': '40px',
                    },
                    toolLabel: "Filter",
                },
                {
                    toolName: 'function',
                    style: {
                        'background-color': '#666',
                        'width': '40px',
                        'height': '40px',
                    },
                    toolLabel: "Function",
                }
            ]
        }, 

        {
            groupLabel: 'Output',
            tools: [
                {
                    toolName: 'outputCSV',
                    style: {
                        'background-color': '#83ff73',
                        'width': '40px',
                        'height': '40px',
                    },
                    toolLabel: "CSV Output",
                }
            ]
        }
    ]


    constructor() {}


}