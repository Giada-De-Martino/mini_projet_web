import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from '../../environments/environment.development';
import { CoursModel } from '../models/cours.model';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private pb: PocketBase;
    private _userId: string | null = null;
  
    constructor() {
      this.pb = new PocketBase(environment.baseUrl);
    }

    async getPostBySujet(coursId: string): Promise<any[]>{
        try {
            const records = await this.pb.collection('Post').getList(1, 50, {
            filter: `coursId = "${coursId}"`,
            });
            return records.items;
        } catch (error) {
            console.error('Error fetching posts by cours ID', error);
            throw error;
        }
    }

    async getPostById(idPost: string){
        const pb = new PocketBase(environment.baseUrl);
        const record = await pb.collection('Post').getOne(idPost);
        return record;
      }
    
      async addPost(data: { contenu: string; auteurId: string }) {
        const pb = new PocketBase(environment.baseUrl);
        const record = await pb.collection('Post').create(data);
      }
    
      async updatePost(idPost: string, data: { contenu: string, auteurId: string }){
        const pb = new PocketBase(environment.baseUrl);
        const record = await pb.collection('Post').update(idPost, data);
      }
    
      async deletePost(idPost: string){
        const pb = new PocketBase(environment.baseUrl);
        await pb.collection('Post').delete(idPost);
      }
}