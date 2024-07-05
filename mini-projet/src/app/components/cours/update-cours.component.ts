import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../services/cours.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-update-cours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-cours.component.html',
  styleUrls: ['../../../styles.css']
})
export class UpdateCoursComponent implements OnInit {
  titre: string = "";
  auteurId: string = "";
  idCours: string = "";

  constructor(
    private coursService: CoursService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idCours = this.route.snapshot.paramMap.get('id') as string;
    if (this.idCours) {
      this.coursService.getCoursById(this.idCours).then(cours => {
        this.titre = cours['titre'];
        this.auteurId = cours['auteurId'];
      }).catch(error => {
        console.error('Error loading course:', error);
        alert('Failed to load course. Please try again.');
      });
    } else {
      console.error("Missing course ID");
    }
  }

  updateCours(): void {
    const updatedCours = {
      titre: this.titre,
      auteurId: this.loginService.userId || "",
    };

    if (!updatedCours.auteurId) {
      console.log("Missing userId");
      return;
    }

    this.coursService.updateCours(this.idCours, updatedCours).then(() => {
      this.router.navigateByUrl('/cours');
    }).catch(error => {
      console.error('Error updating course:', error);
      alert('Failed to update course. Please try again.');
    });
  }
}
