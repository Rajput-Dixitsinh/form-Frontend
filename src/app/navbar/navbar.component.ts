import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
// import { authGuard } from './authentication/auth.guard'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:any = false;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit():any {
    this.isLoggedIn = this.userService.isLoggedIn();
  }
  
  logout(): void {
    this.userService.Logout().subscribe(() => {
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    });
  }
}
