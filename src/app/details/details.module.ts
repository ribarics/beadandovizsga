import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsPageComponent} from './details-page/details-page.component';
import {DetailsRoutingModule} from './details.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    DetailsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DetailsModule { }
