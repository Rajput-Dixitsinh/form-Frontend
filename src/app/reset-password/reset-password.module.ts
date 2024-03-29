import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password.component';


@NgModule({
    declarations: [ResetPasswordComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatInput,
    MatButton,
    MatFormFieldModule,
      RouterModule.forChild([
        { path: '', component: ResetPasswordComponent }
      ])
    ]
  })

  export class ResetPasswordModule { }