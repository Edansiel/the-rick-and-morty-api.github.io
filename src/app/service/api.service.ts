import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApiCharacters = 'https://rickandmortyapi.com/api/character';
  private urlApiLocation = 'https://rickandmortyapi.com/api/location';
  private urlApiEpisode = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApiCharacters);
  }

  public getLocation(): Observable<any> {
    return this.http.get<any>(this.urlApiLocation);
  }

  public getEpisode(): Observable<any> {
    return this.http.get<any>(this.urlApiEpisode);
  }
}
