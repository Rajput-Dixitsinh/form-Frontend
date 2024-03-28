import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password.component';


@NgModule({
    declarations: [ResetPasswordComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild([
        { path: '', component: ResetPasswordComponent }
      ])
    ]
  })

  export class ResetPasswordModule { }