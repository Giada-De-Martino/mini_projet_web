// src/app/components/cours/cours.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-cours.component.html',
  styleUrls: ['../../../styles.css']
})
export class AddCoursComponent implements OnInit {
  auteur: string = "";
  titre : string = "";
  date: Date = new Date;

  create(){
    
  }

  ngOnInit(): void {
  }
}
