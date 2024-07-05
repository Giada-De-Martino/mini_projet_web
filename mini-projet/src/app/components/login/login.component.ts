import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['../../../styles.css'],
  imports: [FormsModule, RouterModule]
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
  }

  async connection(): Promise<void> {
    const connected = await this.loginService.login(this.password, this.username)

    if (connected) {
      this.router.navigateByUrl('/cours');
    } else {
      alert('Invalid username or password');
    }
  }
}
