import { Component, Input, OnInit } from '@angular/core';
import { EffectAllowed } from 'ngx-drag-drop';

@Component({
    selector: 'tool',
    templateUrl: 'tool.component.html',
    styleUrls: ['./tool.component.css']
})

export class ToolComponent implements OnInit {

    @Input('toolName') toolName: string | undefined = undefined;
    @Input('styleObj') style: object | undefined = undefined;

    draggable: {data: Object, effectAllowed: EffectAllowed, handle: boolean} = {data: {}, effectAllowed: 'copy', handle: false}

    constructor() { }

    ngOnInit() { 
        this.draggable = {
            data: {toolName: this.toolName, style: this.style},
            effectAllowed: "copy",
            handle: false
          };
    }
}