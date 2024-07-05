// src/app/components/post/update-post.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-post.component.html',
  styleUrls: ['../../../styles.css']
})
export class UpdatePostComponent implements OnInit {
  contenu: string = "";
  auteurId: string = "";
  postId: string = "";
  sujetId: string = "";
  coursId: string = "";

  constructor(
    private postService: PostService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id') as string;
    if (this.postId) {
      this.postService.getPostById(this.postId).then(post => {
        this.contenu = post.contenu;
        this.auteurId = post.auteurId;
      }).catch(error => {
        console.error('Error loading post:', error);
        alert('Failed to load post. Please try again.');
      });
    } else {
      console.error("Missing post ID");
    }
    this.coursId = this.getCoursIdFromStorage();
    this.sujetId = this.getSujetIdFromStorage();
  }

  updatePost(): void {
    const updatedPost = {
      contenu: this.contenu,
      auteurId: this.loginService.userId || "",
    };

    if (!updatedPost.auteurId) {
      console.log("Missing userId");
      return;
    }

    this.postService.updatePost(this.postId, updatedPost).then(() => {
      this.router.navigateByUrl(`/post/${this.sujetId}`);
    }).catch(error => {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
    });
  }

  private getCoursIdFromStorage(): string {
    const coursId = localStorage.getItem('coursId');
    if (coursId) {
      return coursId;
    } else {
      console.error('coursId not found in localStorage');
      return "";
    }
  }

  private getSujetIdFromStorage(): string {
    const sujetId = localStorage.getItem('sujetId');
    if (sujetId) {
      return sujetId;
    } else {
      console.error('sujetId not found in localStorage');
      return "";
    }
  }
}
