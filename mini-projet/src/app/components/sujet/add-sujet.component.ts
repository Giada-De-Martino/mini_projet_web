// src/app/components/cours/cours.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Include Router here
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { SujetService } from '../../services/sujet.service';

@Component({
  selector: 'app-sujet',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-sujet.component.html', // Corrected the template URL to match the component name
  styleUrls: ['../../../styles.css']
})

export class AddSujetComponent implements OnInit {
  contenu: string = "";
  titre: string = "";

  ngOnInit(): void { }

  constructor(private sujetService: SujetService, private loginService: LoginService, private router: Router) { }

  create(): void {
    const newSujet = {
      contenu: this.contenu,
      auteurId: this.loginService.userId as string,
    };

    this.sujetService.addSujet(newSujet).then(() => {
      this.router.navigateByUrl('/sujet/{{cour.id}}');
    }).catch(error => {
      console.error('Error adding sujet:', error);
      alert('Failed to add sujet. Please try again.');
    });
  }
}
