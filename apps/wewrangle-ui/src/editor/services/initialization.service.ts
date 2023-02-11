import { Injectable } from '@angular/core'
import { CytoscapeOptions } from 'cytoscape'

export interface ToolGroup {

    groupLabel: string,
    tools: Array<{toolName: string, style: {}}>

}

@Injectable()
export class InitializationService {

    initialGraphSettings: CytoscapeOptions = {
        elements: [ // list of graph elements to start with
        
        ],
        
        layout: {
            name: 'grid',
            rows: 1,
            padding: 0
        },

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                // 'background-color': '#666',
                'label': 'data(id)',
                'shape': 'rectangle',
                'width': '40px',
                'height': '40px',
                }
            },
        
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#666',
                    'target-arrow-color': '#666',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'taxi'
                }
            }
          ],
        
        selectionType: 'single'


    }

    toolGroups: ToolGroup[] = [
        {
            groupLabel: 'Input',
            tools: [
                {
                    toolName: 'CSV Input',
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