// src/app/components/cours/cours.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Include Router here
import { FormsModule } from '@angular/forms';
import { CoursService } from '../../services/cours.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-cours.component.html', // Corrected the template URL to match the component name
  styleUrls: ['../../../styles.css']
})

export class AddCoursComponent implements OnInit {
  auteur: string = "";
  titre: string = "";

  ngOnInit(): void { }

  constructor(private coursService: CoursService, private loginService: LoginService, private router: Router) { }

  create(): void {
    const newCours = {
      titre: this.titre,
      auteurId: this.loginService.userId as string,
    };

    this.coursService.addCours(newCours).then(() => {
      this.router.navigateByUrl('/cours');
    }).catch(error => {
      console.error('Error adding course:', error);
      alert('Failed to add course. Please try again.');
    });
  }
}
