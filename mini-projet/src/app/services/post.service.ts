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

  async getPostBySujet(sujetId: string): Promise<any[]> {
    try {
      const records = await this.pb.collection('Post').getList(1, 50, {
        filter: `sujetId = "${sujetId}"`,
        sort: '-created',
      });
      return records.items;
    } catch (error) {
      console.error('Error fetching posts by cours ID', error);
      throw error;
    }
  }

  async getPostById(postId: string): Promise<PostModel> {
    try {
      const record = await this.pb.collection('Post').getOne(postId);
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

  async updatePost(postId: string, data: { contenu: string, auteurId: string }): Promise<PostModel> {
    try {
      const record = await this.pb.collection('Post').update(postId, data);
      return record as unknown as PostModel;
    } catch (error) {
      console.error('Error updating post', error);
      throw error;
    }
  }

  async deletePost(postId: string): Promise<void> {
    try {
      await this.pb.collection('Post').delete(postId);
    } catch (error) {
      console.error('Error deleting post', error);
      throw error;
    }
  }
}
