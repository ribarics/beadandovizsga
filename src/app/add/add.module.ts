import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPageComponent } from './add-page/add-page.component'
import { AddRoutingModule } from './add.routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPageComponent
  ],
  imports: [
    AddRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class AddModule { }
