import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SujetComponent } from './components/sujet/sujet.component';
import { PostComponent } from './components/post/post.component';
import { CoursComponent } from './components/cours/cours.component';
import { AddCoursComponent } from './components/cours/add-cours.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
    { path: 'login', component: LoginComponent },
    { path: 'sujet', component: SujetComponent },
    { path: 'post', component: PostComponent },
    { path: 'cours', component: CoursComponent },
    { path: 'add-cours', component: AddCoursComponent }
];
