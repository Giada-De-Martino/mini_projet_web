import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SujetComponent } from './components/sujet/sujet.component';
import { PostComponent } from './components/post/post.component';
import { CoursComponent } from './components/cours/cours.component';
import { AddCoursComponent } from './components/cours/add-cours.component';
import { UpdateCoursComponent } from './components/cours/update-cours.component';
import { AddPostComponent } from './components/post/add-post.component';
import { UpdatePostComponent } from './components/post/update-post.component';
import { AddSujetComponent } from './components/sujet/add-sujet.component';
import { UpdateSujetComponent } from './components/sujet/update-sujet.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
    { path: 'login', component: LoginComponent },

    { path: 'cours', component: CoursComponent },
    { path: 'add-cours', component: AddCoursComponent },
    { path: 'update-cours/:id', component: UpdateCoursComponent },

    { path: 'sujet/:idCours', component: SujetComponent },
    { path: 'add-sujet', component: AddSujetComponent },
    { path: 'update-sujet/:id', component: UpdateSujetComponent },

    { path: 'post/:sujetId', component: PostComponent },
    { path: 'add-post', component: AddPostComponent },
    { path: 'update-post/:id', component: UpdatePostComponent },
];
