import { Injectable } from '@angular/core'
import { CytoscapeOptions } from 'cytoscape'

@Injectable()
export class InitializationService {

    initialGraphSettings: CytoscapeOptions = {
        elements: [ // list of graph elements to start with
            { // node a
              data: { id: 'a' }
            },
            { // node b
              data: { id: 'b' }
            },
            { // edge ab
              data: { id: 'ab', source: 'a', target: 'b' }
            }
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
                'background-color': '#666',
                'label': 'data(id)',
                'shape': 'round-rectangle'
                }
            },
        
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'taxi'
                }
            }
          ],
        
        selectionType: 'single'


    }

    toolGroups = [
        {
            label: 'Input',
        }, 

        {
            label: 'Transform'
        }, 

        {
            label: 'Output'
        }
    ]


    constructor() {}


}