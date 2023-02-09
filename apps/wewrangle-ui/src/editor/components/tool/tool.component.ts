import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tool',
    templateUrl: 'tool.component.html',
    styleUrls: ['./tool.component.css']
})

export class ToolComponent implements OnInit {

    @Input('toolName') toolName: string | undefined = undefined;
    @Input('styleObj') style: object | undefined = undefined;

    constructor() { }

    ngOnInit() { }
}