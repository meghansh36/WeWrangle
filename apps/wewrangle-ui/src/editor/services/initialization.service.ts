import { Injectable } from '@angular/core'
import { Component } from 'rete'
import { NumComponent } from '../components/toolComponents/inputCSV.component'

export interface ToolGroup {

    groupLabel: string,
    tools: Array<{toolName: string, style: {}}>

}

@Injectable()
export class InitializationService {

    nodeComponents: {[key: string]: Component} = {
        inputCSV: new NumComponent()
    }

    toolGroups: ToolGroup[] = [
        {
            groupLabel: 'Input',
            tools: [
                {
                    toolName: 'inputCSV',
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
                    toolName: 'Filter',
                    style: {
                        'background-color': '#666',
                        'width': '40px',
                        'height': '40px',
                    }
                },
                {
                    toolName: 'Function',
                    style: {
                        'background-color': '#666',
                        'width': '40px',
                        'height': '40px',
                    }
                }
            ]
        }, 

        {
            groupLabel: 'Output',
            tools: [
                {
                    toolName: 'CSV Output',
                    style: {
                        'background-color': '#83ff73',
                        'width': '40px',
                        'height': '40px',
                    }
                }
            ]
        }
    ]


    constructor() {}


}