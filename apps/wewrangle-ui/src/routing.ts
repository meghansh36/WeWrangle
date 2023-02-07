import { Routes } from '@angular/router'
import { HomeComponent} from "./app/components/home/home.component"

const routes : Routes = [
     {
         path: "",
         component: HomeComponent,

     }, 
     {
         path: "editor",
         loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule),
     }
]

export default routes