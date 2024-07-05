// src/app/components/sujet/update-sujet.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SujetService } from '../../services/sujet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-sujet',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-sujet.component.html',
  styleUrls: ['.../../../styles.css']
})
export class UpdateSujetComponent implements OnInit {
  titre: string = "";
  idSujet: string = "";
  idCours: string = "";

  constructor(
    private sujetService: SujetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idSujet = this.route.snapshot.paramMap.get('id') || "";
    this.idCours = this.getCoursIdFromStorage();
  }

  updateSujet(): void {
    const updatedSujet = {
      titre: this.titre
    };

    this.sujetService.updateSujet(this.idSujet, updatedSujet).then(() => {
      this.router.navigateByUrl(`/sujet/${this.idCours}`);
    }).catch(error => {
      console.error('Error updating sujet:', error);
      alert('Failed to update sujet. Please try again.');
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
