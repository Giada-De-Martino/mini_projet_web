import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-update-cours/:id',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-cours.component.html',
  styleUrls: ['../../../styles.css']
})
export class UpdatePostComponent implements OnInit {
  contenu: string = "";
  auteurId: string = "";
  idPost: string = "";

  constructor(
    private postService: PostService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idPost = this.route.snapshot.paramMap.get('id') as string;
    if (this.idPost) {
      this.postService.getPostById(this.idPost).then(posts => {
        this.contenu = posts['contenu'];
        this.auteurId = posts['auteurId'];
      }).catch(error => {
        console.error('Error loading post:', error);
        alert('Failed to load post. Please try again.');
      });
    } else {
      console.error("Missing sujet ID");
    }
  }

  updatePost(): void {
    const updatePost = {
      contenu: this.contenu,
      auteurId: this.loginService.userId || "",
    };

    if (!updatePost.auteurId) {
      console.log("Missing userId");
      return;
    }

    this.postService.updatePost(this.idPost, updatePost).then(() => {
      this.router.navigateByUrl('/post/:idSujet');
    }).catch(error => {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
    });
  }
}
