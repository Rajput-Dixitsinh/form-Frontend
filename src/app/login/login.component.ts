import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      
  loginFrm !: FormGroup;

constructor(private fb : FormBuilder , private UserService : UsersService , private router: Router) {
 this.createLoginFrm()
}


createLoginFrm() {
this.loginFrm = this.fb.group({
 email : ['',[Validators.required]],
 password : ['',[Validators.required]],
})
}


 onSubmit() {

     
  if(this.loginFrm.valid) {
    this.UserService.signin(this.loginFrm.value).subscribe(res => {
      console.log("hsdfhh");
      
      console.log(res.accessToken);
      
      localStorage.setItem('token', res.accessToken);
//  console.log('User Logged in successfully:', res);
        this.router.navigate(['/restaurants'])
 this.loginFrm.reset()
    }, err => {
      console.error('Error while logging!', err);
               this.router.navigate(['/login'])
    })

} 
else 
{
console.log("invalid");

}
  
 } 

}








