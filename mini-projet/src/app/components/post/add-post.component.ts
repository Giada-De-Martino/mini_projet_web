// src/app/components/cours/cours.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Include Router here
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-post.component.html', // Corrected the template URL to match the component name
  styleUrls: ['../../../styles.css']
})

export class AddPostComponent implements OnInit {
  contenu: string = "";
  titre: string = "";
  idCours: string = "";

  ngOnInit(): void { 
    this.idCours = this.getCoursIdFromStorage();
  }

  constructor(private postService: PostService, private loginService: LoginService, private router: Router) { }

  create(): void {
    const newCours = {
      contenu: this.contenu,
      auteurId: this.loginService.userId as string,
    };

    this.postService.addPost(newCours).then(() => {
      this.router.navigateByUrl('/post/:sujetId');
    }).catch(error => {
      console.error('Error adding post:', error);
      alert('Failed to add post. Please try again.');
    });
  }

  private getCoursIdFromStorage(): string {
    const idCours = localStorage.getItem('idCours');
    if (idCours) {
      return idCours;
    } else {
      console.error('idCours not found in localStorage');
      return "";
    }
  }
}
