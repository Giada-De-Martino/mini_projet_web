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

  async addCours(cours: CoursModel) {
    const pb = new PocketBase(environment.baseUrl);
    const response:CoursModel = await pb.collection('cours').create(cours);
  }

  constructor() { }
}
