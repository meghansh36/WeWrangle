import { Component, OnInit } from '@angular/core';
import * as cy from 'cytoscape'

@Component({
    selector: 'graph-area',
    templateUrl: 'graphArea.component.html',
    styleUrls: ['./graphArea.component.css']
})

export class GraphAreaComponent implements OnInit {
    
    cy:cy.Core = cy({})
    
    constructor() { }

    ngOnInit() { 

    this.cy = cy({
        container: document.getElementById('cytoscape-container'),
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
                'label': 'data(id)'
                }
            },
        
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                }
            }
          ],
        
        selectionType: 'single'


        });

    }
}