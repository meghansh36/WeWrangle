import { Component, OnInit } from '@angular/core';
import * as cy from 'cytoscape'
import { DndDropEvent } from 'ngx-drag-drop';
import { InitializationService } from '../../services/initialization.service';

@Component({
    selector: 'graph-area',
    templateUrl: 'graphArea.component.html',
    styleUrls: ['./graphArea.component.css']
})

export class GraphAreaComponent implements OnInit {
    
    cy:cy.Core = cy({})
    nodeCount = 1
    
    constructor(private initializationService: InitializationService) { }

    ngOnInit() { 

        this.cy = cy({
            ...this.initializationService.initialGraphSettings,
            container: document.getElementById('cytoscape-container')
        })
    }

    onDrop(event: DndDropEvent) {
        console.log(event)

        this.cy.add({
            group: 'nodes',
            data: { 

                nodeType: event.data.toolName,
                nodeNumber: this.nodeCount,
                label: `(${this.nodeCount}) ${event.data.toolName}`,
                id: `(${this.nodeCount}) ${event.data.toolName}`

            },
            renderedPosition: {
                x: event.event.offsetX - (event.event.target as HTMLElement).offsetLeft,
                y: event.event.offsetY - (event.event.target as HTMLElement).offsetTop,
            }
        });

        this.nodeCount++
    }
}