import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router'
import routes from './editor.routing'
import { ToolPaneComponent } from './components/toolPane/toolPane.component'
import { ConfigSidebarComponent } from './components/configSidebar/configSidebar.component'

@NgModule({
  declarations: [EditorComponent, ToolPaneComponent, ConfigSidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorModule { }
