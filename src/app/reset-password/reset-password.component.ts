import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  restpswFrm! : FormGroup;
  oldpassword : any;
  newpassword : any;

  constructor(private fb : FormBuilder ,  private UserService : UsersService , private router: Router){
       this.createRpswFrm()
  }



  createRpswFrm() {
    this.restpswFrm = this.fb.group({
     oldPassword : ['',[Validators.required]],
     newPassword : ['',[Validators.required]],
    })
    }
   
    token: any = localStorage.getItem('token');
    // const oldPassword = this.restpswFrm.get('oldPassword').value;
    // const newPassword = this.restpswFrm.get('newPassword').value
    onSubmit(){
        if(this.restpswFrm.valid){
            const {oldPassword,newPassword} = this.restpswFrm.value;

             if (!this.token) {
              console.error('Token is missing');
              return;
            }
           this.UserService.resetPassword(this.token , oldPassword , newPassword).subscribe((data)=>{
               console.log("Password Reset Successfully");
               
           })
        }

         
    }



}




