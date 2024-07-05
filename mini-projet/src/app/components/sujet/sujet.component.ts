import { Component } from '@angular/core';
import { SujetModel } from '../../models/sujet.model';
import { SujetService } from '../../services/sujet.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sujet/:idCours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sujet.component.html',
 styleUrls: ['../../../styles.css']
})
export class SujetComponent {
  sujets: SujetModel[] = [];
  currentUserId: string | null = null;
  idCours: string = "";

  constructor(private sujetService: SujetService, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loadSujet();
    this.currentUserId = this.loginService.userId;
    this.idCours = this.route.snapshot.paramMap.get('idCours') as string;
  }

  async loadSujet(): Promise<void> {
    this.sujets = await this.sujetService.getSujetByCours(this.idCours);
  }

  async deleteSujet(idSujet: string){
      await this. sujetService.deleteSujet(idSujet);
      location.reload();
  }
}
