// src/app/components/sujet/add-sujet.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Include Router here
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { SujetService } from '../../services/sujet.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-add-sujet',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-sujet.component.html', // Corrected the template URL to match the component name
  styleUrls: ['../../../styles.css']
})
export class AddSujetComponent implements OnInit {
  contenu: string = "";
  titre: string = "";
  coursId: string | null = null;

  constructor(
    private sujetService: SujetService,
    private loginService: LoginService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.coursId = this.sharedService.getCoursId();
    if (!this.coursId) {
      console.error('Course ID is missing');
      // Handle the missing course ID scenario
    }
  }

  create(): void {
    if (!this.coursId) {
      console.error('Course ID is missing');
      return;
    }

    const newSujet = {
      contenu: this.contenu,
      titre: this.titre,
      auteurId: this.loginService.userId as string,
      coursId: this.coursId,
    };

    this.sujetService.addSujet(newSujet).then(() => {
      this.router.navigateByUrl(`/sujet/${this.coursId}`);
    }).catch(error => {
      console.error('Error adding sujet:', error);
      alert('Failed to add sujet. Please try again.');
    });
  }
}
