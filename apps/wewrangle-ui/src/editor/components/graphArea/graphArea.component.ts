import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NodeEditor } from 'rete'
import ConnectionPlugin from "rete-connection-plugin";
import { InitializationService } from '../../services/initialization.service';
import { AngularRenderPlugin } from "rete-angular-render-plugin";
import { v4 as uuidv4 } from 'uuid'
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
    
        this.editor = new NodeEditor("workflow@0.1.0", container);
        this.editor.use(ConnectionPlugin);
        this.editor.use(AngularRenderPlugin);
        
    
        Object.keys(this.initializationService.nodeComponents).forEach((c: string) => {
          this.editor.register(this.initializationService.nodeComponents[c]);
        });

        this.editor.on('nodeselected', (e:any) => {
            console.log(e)
        })
        
        
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
        
        newNode.data = {
            toolName: data.toolName,
            id: uuidv4(),
            configs : {}
        }
        newNode.position = [x, y]
        this.editor.addNode(newNode)
        this.editor.view.resize()
    }

    runWorkflow() {
        console.log(this.editor.toJSON())
    }

    

}