import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocketBaseService {
  private apiUrl = 'http://127.0.0.1:8090'; // Replace with your PocketBase API URL

  constructor(private http: HttpClient) { }

  getUtilisateur(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/utilisateur`);
  }

  getItem(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/items`, item);
  }

  updateItem(id: string, item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, item);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`);
  }
}
