import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['../../styles.css', './login.component.css'],
  imports: [FormsModule, RouterModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'toto' && this.password === 'toto') {
      this.router.navigateByUrl('/utilisateur');
    } else {
      alert('Invalid username or password');
    }
  }
}
