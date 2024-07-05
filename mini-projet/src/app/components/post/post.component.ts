// src/app/components/post/post.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostModel } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['../../../styles.css']
})
export class PostComponent implements OnInit {
  posts: PostModel[] = [];
  currentUserId: string | null = null;
  sujetId: string = "";
  coursId: string = "";

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private loginService: LoginService 
  ) { }

  ngOnInit(): void {
    this.sujetId = this.route.snapshot.paramMap.get('sujetId') || "";
    this.coursId = this.getCoursIdFromStorage();
    localStorage.setItem('sujetId', this.sujetId);
    this.currentUserId = this.loginService.userId;
    this.loadPosts();
  }

  async loadPosts(): Promise<void> {
    if (!this.sujetId) return;
    try {
      this.posts = await this.postService.getPostBySujet(this.sujetId);
    } catch (error) {
      console.error('Error fetching posts by sujet ID', error);
    }
  }

  async deletePost(postId: string): Promise<void> {
    try {
      await this.postService.deletePost(postId);
      this.loadPosts(); // Reload posts after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
    }
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
}
