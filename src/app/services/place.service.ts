import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Place } from '../domain/place';

const urlBase = 'https://openapi3.herokuapp.com/api';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  constructor(private http: HttpClient) {}

  getPlaces(options: any): Observable<Place[]> {
    return this.http
      .get(urlBase + '/places', {
        headers: {
          Accept: 'application/json',
          Authorization: 'Basic ZGVtbzpkZW1v',
        },
      })
      .pipe(map((r) => toPlaces(r as unknown[])));
  }
  getPlaceById(id: string): Observable<Place> {
    return this.http
      .get(urlBase + '/places/' + encodeURIComponent(id), {
        headers: {
          Accept: 'application/json',
          Authorization: 'Basic ZGVtbzpkZW1v',
        },
      })
      .pipe(map((r) => toPlace(r as unknown)));
  }

  // Implementacion con Promesas
  // getPlaces(): Promise<Place[]> {
  //   const p = this.http
  //     .get<Place[]>(this.urlBase, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Basic ZGVtbzpkZW1v',
  //       },
  //     })
  //     .toPromise();
  //   return p;
  // }
  create(place: Place): Observable<Place> {
    return this.http
      .post(urlBase + '/places', place, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ZGVtbzpkZW1v',
        },
      })
      .pipe(map((r) => r as Place));
  }
  update(place: Place): Observable<Place> {
    return this.http
      .put(urlBase + '/places/' + encodeURIComponent(place._id), place, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ZGVtbzpkZW1v',
        },
      })
      .pipe(map((r) => r as Place));
  }
  delete(id: string): Observable<Place> {
    return this.http
      .delete(urlBase + '/places/' + encodeURIComponent(id), {
        headers: {
          Accept: 'application/json',
          Authorization: 'Basic ZGVtbzpkZW1v',
        },
      })
      .pipe(map((r) => r as Place));
  }
}

const toPlaces = (data: unknown[]): Place[] => {
  return data.map((item) => toPlace(item));
};

const toPlace = (data: unknown): Place => {
  const p = data as Place;
  p.image = urlBase + p.image;
  return p;
};
