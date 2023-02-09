import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { InitializationService, ToolGroup } from '../../services/initialization.service';

@Component({
    selector: 'toolPane',
    templateUrl: 'toolPane.component.html',
    styleUrls: ['./toolPane.component.css']
})
export class ToolPaneComponent implements OnInit {
    
    toolGroups: ToolGroup[] = []
    selectedToolGroup: ToolGroup = {groupLabel: "", tools: []}
    selectedToolGroupIndex = 0

    constructor(private initializationService: InitializationService) { }

    ngOnInit() { 
        this.toolGroups = this.initializationService.toolGroups
        this.selectedToolGroup = this.toolGroups[this.selectedToolGroupIndex]
    }

    tabChangeHandler(event: MatTabChangeEvent) {
        this.selectedToolGroupIndex = event.index
        this.selectedToolGroup = this.toolGroups[this.selectedToolGroupIndex]
    }
}