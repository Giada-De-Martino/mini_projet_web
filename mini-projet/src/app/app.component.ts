import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import PocketBase from "pocketbase";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, LoginComponent], // Add HttpClientModule here
  styleUrls: ['../styles.css', './app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-app';
}