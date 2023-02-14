import { Component, Input, OnInit } from '@angular/core';
import { EffectAllowed } from 'ngx-drag-drop';

@Component({
    selector: 'tool',
    templateUrl: 'tool.component.html',
    styleUrls: ['./tool.component.css']
})

export class ToolComponent implements OnInit {

    @Input('toolName') toolName: string | null = null;
    @Input('styleObj') style: object | null = null;

    data: {toolName: string| null, style: object| null}
    constructor() { }

    ngOnInit() { 
        this.data = {toolName: this.toolName, style: this.style}
    }

    onDragStart(event: DragEvent) {
        event.dataTransfer?.setData('data', JSON.stringify(this.data))
    }
}