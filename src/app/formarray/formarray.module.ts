import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormarrayComponent } from './formarray.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormarrayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: FormarrayComponent }
    ])
  ]
})
export class FormarrayModule { }
