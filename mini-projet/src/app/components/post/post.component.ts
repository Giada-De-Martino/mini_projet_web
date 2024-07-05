import { Component } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrls: ['../../../styles.css']
})
export class PostComponent {
  cours: PostModel[] = [];
  currentUserId: string | null = null;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  async loadPosts(): Promise<void> {
    //to doooooooooooooooo
    // this.cours = await this.postService.getPostBySujet();
  }

  async deletePost(idPost: string){
      await this.postService.deletePost(idPost);
      location.reload();
  }
}
