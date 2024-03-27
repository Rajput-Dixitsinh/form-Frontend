import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UsersService) 
  const isLoggedIn = authService.isLoggedIn();

  if(isLoggedIn){
    return true;
  } 
 
  else{
    alert("Please Provide Valide Detail")
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }
};
