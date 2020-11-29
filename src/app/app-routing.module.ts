import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentNameComponent } from './component/component-name/component-name.component';


const routes: Routes = [
{path:'component',component: ComponentNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
