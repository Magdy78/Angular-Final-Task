import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  goToRegistration() {
    this.router.navigate(['/register']); // Replace 'register' with the actual route for your registration page
  }
  
}
