import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import { MaterialModule } from '../material';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {
}

@NgModule({
  declarations: [ListComponent],
  imports: [
    ListRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class ListModule {
}
