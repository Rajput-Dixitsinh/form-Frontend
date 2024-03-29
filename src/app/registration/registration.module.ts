import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatFormFieldModule,
    RouterModule.forChild([
      { path: '', component: RegistrationComponent }
    ]) 
  ]
})
export class RegistrationModule { }
