import { Component, OnInit } from '@angular/core';
import * as cy from 'cytoscape'
import { InitializationService } from '../../services/initialization.service';

@Component({
    selector: 'graph-area',
    templateUrl: 'graphArea.component.html',
    styleUrls: ['./graphArea.component.css']
})

export class GraphAreaComponent implements OnInit {
    
    cy:cy.Core = cy({})
    
    constructor(private initializationService: InitializationService) { }

    ngOnInit() { 

        this.cy = cy({
            ...this.initializationService.initialGraphSettings,
            container: document.getElementById('cytoscape-container')
        })


    }
}