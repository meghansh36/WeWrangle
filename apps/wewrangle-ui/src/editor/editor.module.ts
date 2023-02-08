import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router'
import routes from './editor.routing'
import { ToolPaneComponent } from './components/toolPane/toolPane.component'
import { ConfigSidebarComponent } from './components/configSidebar/configSidebar.component'
import { GraphAreaComponent } from './components/graphArea/graphArea.component'

@NgModule({
  declarations: [EditorComponent, ToolPaneComponent, ConfigSidebarComponent, GraphAreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorModule { }
