// src/app/components/cours/cours.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursModel } from '../../models/cours.model';
import { CoursService } from '../../services/cours.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cours.component.html',
  styleUrls: ['../../../styles.css']
})
export class CoursComponent implements OnInit {
  cours: CoursModel[] = [];
  currentUserId: string | null = null;

  constructor(private coursService: CoursService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loadCours();
    this.currentUserId = this.loginService.userId;
  }

  async loadCours(): Promise<void> {
    this.cours = await this.coursService.getCours();
  }

  async deleteCours(idCours: string){
      await this.coursService.deleteCours(idCours);
      location.reload();
  }
}
