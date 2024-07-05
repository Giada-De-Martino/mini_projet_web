// src/app/services/sujet.service.ts
import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase(environment.baseUrl);
  }

  async getSujetsByCoursId(coursId: string): Promise<any[]> {
    try {
      const records = await this.pb.collection('Sujet').getList(1, 50, {
        filter: `coursId = "${coursId}"`,
        sort: '-created',
      });
      return records.items;
    } catch (error) {
      console.error('Error fetching sujets by cours ID', error);
      throw error;
    }
  }

  async getSujetById(id: string): Promise<any> {
    try {
      const record = await this.pb.collection('Sujet').getOne(id);
      return record;
    } catch (error) {
      console.error('Error fetching sujet by ID', error);
      throw error;
    }
  }

  async addSujet(data: { titre: string; auteurId: string; coursId: string }): Promise<void> {
    try {
      await this.pb.collection('Sujet').create(data);
    } catch (error) {
      console.error('Error adding sujet:', error);
      throw error;
    }
  }

  async updateSujet(id: string, updatedData: { titre: string }): Promise<void> {
    try {
      await this.pb.collection('Sujet').update(id, updatedData);
    } catch (error) {
      console.error('Error updating sujet:', error);
      throw error;
    }
  }

  async deleteSujet(id: string): Promise<void> {
    try {
      await this.pb.collection('Sujet').delete(id);
    } catch (error) {
      console.error('Error deleting sujet:', error);
      throw error;
    }
  }
}
