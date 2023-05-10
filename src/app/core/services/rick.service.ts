import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RickService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAboutCharacter(page : number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character?page=${page}`)
  }
  getCharacterById(id: number): Observable<any> {
    const url = `${this.baseUrl}/character/${id}`;
    return this.http.get<any>(url);
  }

}
