import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router'
import routes from './editor.routing'

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorModule { }
