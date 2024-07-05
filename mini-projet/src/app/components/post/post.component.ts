// src/app/components/post/post.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostModel } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sujetId = this.route.snapshot.paramMap.get('sujetId') as string;
    if (this.sujetId) {
      this.loadPosts();
    } else {
      console.error("Missing subject ID");
    }
    this.coursId = this.getCoursIdFromStorage();
  }

  async loadPosts(): Promise<void> {
    try {
      this.posts = await this.postService.getPostBySujet(this.sujetId);
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }

  async deletePost(idPost: string): Promise<void> {
    try {
      await this.postService.deletePost(idPost);
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
