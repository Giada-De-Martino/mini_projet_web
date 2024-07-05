import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, LoginComponent],
  styleUrls: ['../styles.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-app';

  constructor(private loginService: LoginService) {}

  logout(): void {
    this.loginService.logout();
  }
  
}