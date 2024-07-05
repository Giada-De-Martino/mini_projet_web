// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private pb: PocketBase;
  private _userId: string | null = null;

  constructor() {
    this.pb = new PocketBase(environment.baseUrl);
    this.loadUserId(); // Load user ID from localStorage on initialization
  }

  get userId(): string | null {
    return this._userId;
  }

  // Method to set the user ID after login
  setUserId(id: string): void {
    this._userId = id;
  }

  async login(password: string, username: string): Promise<boolean> {
    try {
      const authData = await this.pb.collection('utilisateur').authWithPassword(username, password);

      if (this.pb.authStore.isValid) {
        this._userId = authData.record.id;  // Accessing the user's ID from the record
        this.saveUserId(); // Save user ID to localStorage
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  logout(): void {
    this.pb.authStore.clear();
    this._userId = null;
    this.clearUserId(); // Clear user ID from localStorage on logout
  }

  private saveUserId(): void {
    localStorage.setItem('userId', this._userId || ''); // Save user ID to localStorage
  }

  private loadUserId(): void {
    const storedUserId = localStorage.getItem('userId');
    this._userId = storedUserId ? storedUserId : null; // Load user ID from localStorage
  }

  private clearUserId(): void {
    localStorage.removeItem('userId'); // Clear user ID from localStorage
  }
}
