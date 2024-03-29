

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';

import { FormarrayComponent } from './formarray.component';

@NgModule({
  declarations: [FormarrayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule, // Import MatButtonModule
    MatInputModule, // Import MatInputModule
    MatFormFieldModule, // Import MatFormFieldModule
    MatCardModule, // Import MatCardModule
    MatCardModule,
    RouterModule.forChild([
      { path: '', component: FormarrayComponent }
    ])
  ]
})
export class FormarrayModule { }

