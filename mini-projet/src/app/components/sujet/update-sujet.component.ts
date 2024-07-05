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
  sujetId: string = "";
  coursId: string = "";

  constructor(
    private sujetService: SujetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sujetId = this.route.snapshot.paramMap.get('id') || "";
    this.coursId = this.getCoursIdFromStorage();
  }

  updateSujet(): void {
    const updatedSujet = {
      titre: this.titre
    };

    this.sujetService.updateSujet(this.sujetId, updatedSujet).then(() => {
      this.router.navigateByUrl(`/sujet/${this.coursId}`);
    }).catch(error => {
      console.error('Error updating sujet:', error);
      alert('Failed to update sujet. Please try again.');
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
}
