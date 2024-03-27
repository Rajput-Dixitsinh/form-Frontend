import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { authGuard } from './authentication/auth.guard';
// import { HeaderComponent } from './header/header.component';

const routes: Routes = [{
  path:'',
  component: RegistrationComponent
},
{
  path : 'restaurants',
  canActivate : [authGuard],
  component : FormarrayComponent
},
{
  path : "register",
  component:RegistrationComponent
},
{
  path:"login",
  component:LoginComponent
}
// ,
// {
//   path:"header",
//   component:HeaderComponent,
// }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
