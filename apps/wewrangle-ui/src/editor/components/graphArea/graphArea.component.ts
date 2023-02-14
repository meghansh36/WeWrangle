import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NodeEditor } from 'rete'
import ConnectionPlugin from "rete-connection-plugin";
import { DndDropEvent } from 'ngx-drag-drop';
import { InitializationService } from '../../services/initialization.service';
import { AngularRenderPlugin } from "rete-angular-render-plugin";
// import { zoomAt } from "rete-area-plugin";

// const edgehandles = require('cytoscape-edgehandles')
// const popper = require('cytoscape-popper');

// cy.use(edgehandles)
// cy.use(popper)



@Component({
    selector: 'graph-area',
    templateUrl: 'graphArea.component.html',
    styleUrls: ['./graphArea.component.css']
})

export class GraphAreaComponent implements OnInit, AfterViewInit{


    @ViewChild("nodeEditor") el: ElementRef | null = null
    editor: any = null;
    
    constructor(private initializationService: InitializationService) { }

    ngOnInit() { }


    async ngAfterViewInit() {
        const container = this.el!.nativeElement;
    
        // const components = [new NumComponent()];
    
        this.editor = new NodeEditor("demo@0.2.0", container);
        this.editor.use(ConnectionPlugin);
        console.log("AngularRenderPlugin", AngularRenderPlugin);
        this.editor.use(AngularRenderPlugin); //, { component: MyNodeComponent });
        // editor.use(ContextMenuPlugin);
    
        // const engine = new Engine("demo@0.2.0");
    
        Object.keys(this.initializationService.nodeComponents).forEach((c: string) => {
          this.editor.register(this.initializationService.nodeComponents[c]);
        });
    
        // const n1 = await components[0].createNode({ num: 2 });
        // const n2 = await components[0].createNode({ num: 0 });
        // // const add = await components[1].createNode();
    
        // n1.position = [80, 200];
        // n2.position = [80, 400];
        // // add.position = [700, 240];
    
        // editor.addNode(n1);
        // editor.addNode(n2);
        // // editor.addNode(add);
    
        // // editor.connect(n1.outputs.get("num"), add.inputs.get("num1"));
        // // editor.connect(n2.outputs.get("num"), add.inputs.get("num2"));
    
        // editor.view.resize();
        // // zoomAt(editor);
      }

    onDragOver(event: DragEvent) {
        event.stopPropagation()
        event.preventDefault()
    }

    async onDrop(event: DragEvent) {
        
        this.editor.view.area.pointermove(event as any as PointerEvent);
        const { x, y } = this.editor.view.area.mouse
        
        let data: {toolName: string, style: object} = JSON.parse(event.dataTransfer?.getData('data') as string)
        console.log(x,y, data)
        
        const newNode = await this.initializationService.nodeComponents[data.toolName].createNode()
        newNode.position = [x, y]
        this.editor.addNode(newNode)
        this.editor.view.resize()
    }
}