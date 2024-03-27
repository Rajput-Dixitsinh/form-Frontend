import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
        constructor(private UserService : UsersService) {}

        logout() {
                this.UserService.Logout().subscribe((data: any)=>{
                  console.log(data);
                  
                });
        }
}
