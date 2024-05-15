import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  api = 'https://api.magicthegathering.io/v1/sets';

  constructor(private http: HttpClient) {}

  getSets(block: string, name?: string) {
    return this.http.get(`${this.api}?block=${block}&name=${name}`);
  }

  getBooster(id: string): Observable<any> {
    return this.http.get(`${this.api}/${id}/booster`);
  }
}
