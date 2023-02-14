import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router'
import routes from './editor.routing'
import { ToolPaneComponent } from './components/toolPane/toolPane.component'
import { ConfigSidebarComponent } from './components/configSidebar/configSidebar.component'
import { GraphAreaComponent } from './components/graphArea/graphArea.component'
import { InitializationService } from './services/initialization.service'
import {MatTabsModule} from '@angular/material/tabs';
import { ToolComponent } from './components/tool/tool.component';
import { DndModule } from 'ngx-drag-drop';
import { ReteModule } from "rete-angular-render-plugin";

@NgModule({
  declarations: [EditorComponent, ToolPaneComponent, ConfigSidebarComponent, GraphAreaComponent, ToolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    DndModule,
    ReteModule
  ], 
  providers: [InitializationService],
  entryComponents: []
})
export class EditorModule { }
