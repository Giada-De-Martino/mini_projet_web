import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
    private pb: PocketBase;
    private _userId: string | null = null;
  
    constructor() {
      this.pb = new PocketBase(environment.baseUrl);
    }

    async getSujetByCours(coursId: string): Promise<any[]>{
        try {
            const records = await this.pb.collection('Sujet').getList(1, 50, {
            filter: `coursId = "${coursId}"`,
            });
            return records.items;
        } catch (error) {
            console.error('Error fetching posts by cours ID', error);
            throw error;
        }
    }

    async getSujetById(idSujet: string){
        const pb = new PocketBase(environment.baseUrl);
        const record = await pb.collection('Sujet').getOne(idSujet);
        return record;
      }
    
      async addSujet(data: { contenu: string; auteurId: string }) {
        const pb = new PocketBase(environment.baseUrl);
        const record = await pb.collection('Sujet').create(data);
      }
    
      async updateSujet(idSujet: string, data: { contenu: string, auteurId: string }){
        const pb = new PocketBase(environment.baseUrl);
        const record = await pb.collection('Sujet').update(idSujet, data);
      }
    
      async deleteSujet(idSujet: string){
        const pb = new PocketBase(environment.baseUrl);
        await pb.collection('Sujet').delete(idSujet);
      }
}