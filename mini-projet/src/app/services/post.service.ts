// src/app/services/post.service.ts
import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from '../../environments/environment.development';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private pb: PocketBase;
  
  constructor() {
    this.pb = new PocketBase(environment.baseUrl);
  }

  async getPostBySujet(sujetId: string): Promise<PostModel[]> {
    try {
      const records = await this.pb.collection('Post').getList(1, 50, {
        filter: `sujetId = "${sujetId}"`,
      });
      return records.items as unknown as PostModel[];
    } catch (error) {
      console.error('Error fetching posts by cours ID', error);
      throw error;
    }
  }

  async getPostById(idPost: string): Promise<PostModel> {
    try {
      const record = await this.pb.collection('Post').getOne(idPost);
      return record as unknown as PostModel;
    } catch (error) {
      console.error('Error fetching post by ID', error);
      throw error;
    }
  }

  async addPost(data: { contenu: string; auteurId: string }): Promise<PostModel> {
    try {
      const record = await this.pb.collection('Post').create(data);
      return record as unknown as PostModel;
    } catch (error) {
      console.error('Error adding post', error);
      throw error;
    }
  }

  async updatePost(idPost: string, data: { contenu: string, auteurId: string }): Promise<PostModel> {
    try {
      const record = await this.pb.collection('Post').update(idPost, data);
      return record as unknown as PostModel;
    } catch (error) {
      console.error('Error updating post', error);
      throw error;
    }
  }

  async deletePost(idPost: string): Promise<void> {
    try {
      await this.pb.collection('Post').delete(idPost);
    } catch (error) {
      console.error('Error deleting post', error);
      throw error;
    }
  }
}
