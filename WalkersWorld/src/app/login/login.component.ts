import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Walkers-World';
  welcomeMsg = 'Welocme To Walkers-World';
  users: any = [];


  constructor(private loginService: LoginService, private router: Router) {
    this.loginService = loginService;
    this.router = router;
  }
  loginFalse: boolean;

  login(username: string, password: string) {
    this.loginService.getUsers().subscribe(
      users => {
        this.users = users['users'];
        console.log(users['users']);
        for (const d of (users['users'] as any)) {
          if (d.username === username && d.password === password) {
            alert('alerting that the right user is logged in');
            this.loginFalse = false;
            this.router.navigate(['/dashboard']);
          }
        }
        if (this.loginFalse !== false) {
          alert('U NEED A PERFECT KEY TO ENTER IN THIS WORLD !!!');
        }
      }
    );
  }

}
