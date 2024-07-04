// src/app/components/cours/cours.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursModel } from '../../models/cours.model';
import { CoursService } from '../../services/cours.service';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cours.component.html',
  styleUrls: ['../../../styles.css']
})
export class CoursComponent implements OnInit {
  cours: CoursModel[] = [];

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.loadCours();
  }

  async loadCours(): Promise<void> {
    this.cours = await this.coursService.getCours();
  }
}
