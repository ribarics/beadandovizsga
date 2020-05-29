import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DetailsPageComponent} from './details-page/details-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule {
}
