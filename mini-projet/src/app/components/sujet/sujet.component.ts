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
  coursId: string | null = null;
  currentUserId: string | null = null; // Add currentUserId property

  constructor(
    private sujetService: SujetService,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private loginService: LoginService // Inject LoginService
  ) {}

  ngOnInit(): void {
    this.coursId = this.route.snapshot.paramMap.get('coursId');
    if (this.coursId) {
      this.sharedService.setCoursId(this.coursId);
      this.loadSujets();
    } else {
      console.error('Course ID is missing');
      // Handle the missing course ID scenario
    }

    this.currentUserId = this.loginService.userId; // Initialize currentUserId
    this.coursId = this.route.snapshot.paramMap.get('coursId') || "";
    localStorage.setItem('coursId', this.coursId);
  }

  async loadSujets(): Promise<void> {
    if (!this.coursId) return;
    try {
      this.sujets = await this.sujetService.getSujetsByCoursId(this.coursId);
    } catch (error) {
      console.error('Error fetching sujets by cours ID', error);
    }
  }

  async deleteSujet(sujetId: string): Promise<void> {
    try {
      await this.sujetService.deleteSujet(sujetId);
      this.loadSujets(); // Reload sujets after deletion
    } catch (error) {
      console.error('Error deleting sujet', error);
    }
  }
}
