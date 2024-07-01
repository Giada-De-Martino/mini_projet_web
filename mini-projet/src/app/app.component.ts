import { Component } from '@angular/core';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ListeComponent, LoginComponent],
  styleUrls: ['../styles.css', './app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'homes';
}
