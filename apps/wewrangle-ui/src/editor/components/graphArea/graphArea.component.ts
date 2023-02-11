import { Component, OnInit } from '@angular/core';
import * as cy from 'cytoscape'
import { DndDropEvent } from 'ngx-drag-drop';
import { InitializationService } from '../../services/initialization.service';

const edgehandles = require('cytoscape-edgehandles')
const popper = require('cytoscape-popper');

cy.use(edgehandles)
cy.use(popper)

@Component({
    selector: 'graph-area',
    templateUrl: 'graphArea.component.html',
    styleUrls: ['./graphArea.component.css']
})

export class GraphAreaComponent implements OnInit {
    
    cytoscape:any = cy({})
    nodeCount = 1
    public eh: any;
    
    constructor(private initializationService: InitializationService) { }

    ngOnInit() { 

        this.cytoscape = cy({
            ...this.initializationService.initialGraphSettings,
            container: document.getElementById('cytoscape-container')
        })

        this.eh = this.cytoscape.edgehandles({
            canConnect: function( sourceNode: any, targetNode: any ){
              // whether an edge can be created between source and target
              return !sourceNode.same(targetNode); // e.g. disallow loops
            },
            edgeParams: function( sourceNode: any, targetNode: any){
              // for edges between the specified source and target
              // return element object to be passed to cy.add() for edge
              return {};
            },
            hoverDelay: 0, // time spent hovering over a target node before it is considered selected
            snap: true, // when enabled, the edge can be drawn by just moving close to a target node (can be confusing on compound graphs)
            snapThreshold: 10, // the target node must be less than or equal to this many pixels away from the cursor/finger
            snapFrequency: 15, // the number of times per second (Hz) that snap checks done (lower is less expensive)
            noEdgeEventsInDraw: true, // set events:no to edges during draws, prevents mouseouts on compounds
            disableBrowserGestures: true, // during an edge drawing gesture, disable browser gestures such as two-finger trackpad swipe and pinch-to-zoom
            preview: false
        })

        // eh.enableDrawMode()
        console.log(this.eh)

    }

    onDrop(event: DndDropEvent) {
        console.log(event)

        let addedNode = this.cytoscape.add({
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
            },
            
            style: {
                'background-color': event.data.style['background-color']
            }
        });

        this.nodeCount++


        let popper = addedNode.popper({
            content: () => {
                let popperDiv = document.createElement('div');
                popperDiv.classList.add('popper-handle');
                popperDiv.addEventListener('mousedown', () => this.eh.start(addedNode));
                document.body.appendChild(popperDiv);
            
                return popperDiv;
              },
              popper: {
                  placement: 'right'
              }
        })

        let update = () => {
            popper.update()
        }

        addedNode.on('position', update)
        this.cytoscape.on('pan zoom resize', update)

    }
}