import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from '../../environments/environment.development';
import { CoursModel } from '../models/cours.model';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  async getCours(): Promise<CoursModel[]>{
    const pb = new PocketBase(environment.baseUrl);
    const records:CoursModel[] = await pb.collection('Cours').getFullList({
      sort: '-created',
  });
  return records;
  }

  async getCoursById(idCours: string){
    const pb = new PocketBase(environment.baseUrl);
    const record = await pb.collection('Cours').getOne(idCours);
    return record;
  }

  async addCours(data: { titre: string; auteurId: string }) {
    const pb = new PocketBase(environment.baseUrl);
    const record = await pb.collection('Cours').create(data);
  }

  async updateCours(idCours: string, data: { titre: string, auteurId: string }){
    const pb = new PocketBase(environment.baseUrl);
    const record = await pb.collection('Cours').update(idCours, data);
  }

  async deleteCours(idCours: string){
    const pb = new PocketBase(environment.baseUrl);
    await pb.collection('Cours').delete(idCours);
  }

  constructor() { }
}
