import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PocketBaseService } from '../../services/pocketbase.service';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent implements OnInit {

  @Input()
  public username: string = '';

  @Input()
  public password: string = '';

  @Input()
  public listePost: Array<String> = [];

  @Input()
  public listeSujet: Array<String> = [];

  constructor(private pocketBaseService: PocketBaseService) { }

  ngOnInit(): void {
    this.pocketBaseService.getUtilisateur().subscribe(
      (data: any) => {
        this.username = data.username;
        this.password = data.password;
        this.listePost = data.listePost;
        this.listeSujet = data.listeSujet;
      },
      (error: any) => {
        console.error('Error fetching items', error);
      }
    );
  }
}
