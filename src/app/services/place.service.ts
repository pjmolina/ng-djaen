import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../domain/place';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  constructor(private http: HttpClient) {}

  urlBase = 'https://openapi3.herokuapp.com/api/places/';

  getPlaces(): Promise<Place[]> {
    const p = this.http
      .get<Place[]>(this.urlBase, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ZGVtbzpkZW1v',
        },
      })
      .toPromise();
    return p;
  }
  create(place: Place) {}
  update(place: Place) {}
  delete(id: string) {}
}
