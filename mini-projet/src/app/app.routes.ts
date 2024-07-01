import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}, //default route
    {path: 'liste', component: ListeComponent},
    {path: 'login', component: LoginComponent},
];
