import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
    selector: 'toolPane',
    templateUrl: 'toolPane.component.html',
    styleUrls: ['./toolPane.component.css']
})
export class ToolPaneComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    tabChangeHandler(event: MatTabChangeEvent) {
        console.log(event)
    }
}