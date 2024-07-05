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
  idPost: string = "";
  sujetId: string = "";

  constructor(
    private postService: PostService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idPost = this.route.snapshot.paramMap.get('id') as string;
    if (this.idPost) {
      this.postService.getPostById(this.idPost).then(post => {
        this.contenu = post.contenu;
        this.auteurId = post.auteurId;
      }).catch(error => {
        console.error('Error loading post:', error);
        alert('Failed to load post. Please try again.');
      });
    } else {
      console.error("Missing post ID");
    }
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

    this.postService.updatePost(this.idPost, updatedPost).then(() => {
      this.router.navigateByUrl(`/post/${this.route.snapshot.paramMap.get('sujetId')}`);
    }).catch(error => {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
    });
  }
}
