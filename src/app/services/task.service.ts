import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getSets(block: string, name?: string): Observable<any> {
    return this.http.get(
      `https://api.magicthegathering.io/v1/sets?block=${block}&name=${name}`
    );
  }
}
