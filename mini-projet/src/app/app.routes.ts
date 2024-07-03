import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component'; // Import the UtilisateurComponent
import { SujetComponent } from './components/sujet/sujet.component';
import { PostComponent } from './components/post/post.component';
import { CoursComponent } from './components/cours/cours.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
    { path: 'login', component: LoginComponent },
    { path: 'utilisateur', component: UtilisateurComponent },
    { path: 'utilisateur', component: SujetComponent },
    { path: 'utilisateur', component: PostComponent },
    { path: 'utilisateur', component: CoursComponent },
];
