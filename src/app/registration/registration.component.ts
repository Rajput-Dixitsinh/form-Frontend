

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  regisFRM !: FormGroup;

  constructor(private fb : FormBuilder , private UserService : UsersService  , private router : Router) {
   this.createLoginFrm()
  }


  createLoginFrm() {
  this.regisFRM = this.fb.group({
   username : ['' , [Validators.required]],
   email : ['',[Validators.required]],
   password : ['',[Validators.required]],
  })
  }


   onSubmit() {
       console.log("hdhfs");
       
       this.UserService.Signups(this.regisFRM.value).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/login']);
        
       
   },
   
   )
    
   } 

}
