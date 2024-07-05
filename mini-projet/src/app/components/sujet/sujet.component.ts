// src/app/components/sujet/sujet.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SujetService } from '../../services/sujet.service';
import { SharedService } from '../../services/shared.service';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sujet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sujet.component.html',
  styleUrls: ['../../../styles.css']
})
export class SujetComponent implements OnInit {
  sujets: any[] = [];
  idCours: string | null = null;
  currentUserId: string | null = null; // Add currentUserId property

  constructor(
    private sujetService: SujetService,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private loginService: LoginService // Inject LoginService
  ) {}

  ngOnInit(): void {
    this.idCours = this.route.snapshot.paramMap.get('idCours');
    if (this.idCours) {
      this.sharedService.setCoursId(this.idCours);
      this.loadSujets();
    } else {
      console.error('Course ID is missing');
      // Handle the missing course ID scenario
    }

    this.currentUserId = this.loginService.userId; // Initialize currentUserId
    this.idCours = this.route.snapshot.paramMap.get('idCours') || "";
    localStorage.setItem('idCours', this.idCours);
  }

  async loadSujets(): Promise<void> {
    if (!this.idCours) return;
    try {
      this.sujets = await this.sujetService.getSujetsByCoursId(this.idCours);
    } catch (error) {
      console.error('Error fetching sujets by cours ID', error);
    }
  }

  async deleteSujet(idSujet: string): Promise<void> {
    try {
      await this.sujetService.deleteSujet(idSujet);
      this.loadSujets(); // Reload sujets after deletion
    } catch (error) {
      console.error('Error deleting sujet', error);
    }
  }
}
