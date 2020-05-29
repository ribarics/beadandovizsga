import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddPageComponent } from './add-page/add-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: AddPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule {
}
