// src/app/services/shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SharedService {
  private coursId: string | null = null;
  private sujetId: string | null = null;

  setCoursId(id: string): void {
    this.coursId = id;
  }

  getCoursId(): string | null {
    return this.coursId;
  }

  setSujetId(id: string): void {
    this.sujetId = id;
  }

  getSujetId(): string | null {
    return this.sujetId;
  }
}
