import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, LoginComponent, CommonModule],
  styleUrls: ['../styles.css', './app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-app';
}