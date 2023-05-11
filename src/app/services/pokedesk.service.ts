import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedeskService {

  constructor(private http: HttpClient) { }

  getPokedesk(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
}
