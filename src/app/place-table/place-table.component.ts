import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../domain/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place-table',
  templateUrl: './place-table.component.html',
  styleUrls: ['./place-table.component.scss'],
})
export class PlaceTableComponent implements OnInit {
  places: Place[] = [];
  error = '';

  constructor(private placeService: PlaceService, private router: Router) {}

  ngOnInit(): void {
    // version con promesas
    // this.placeService
    // .getPlaces()
    // .then((respuesta) => {
    //   this.places = respuesta;
    //   this.error = '';
    // })
    // .catch((error) => {
    //   console.error(error);
    //   this.error = error.message;
    // });

    this.placeService.getPlaces({}).subscribe({
      next: (respuesta) => {
        this.places = respuesta;
        this.error = '';
      },
      error: (err) => {
        console.error(err);
        this.error = toHumanError(err.message);
      },
      complete: () => {
        console.log('observable cerrado');
      },
    });
  }

  navega(id: string): void {
    this.router.navigate(['/places', id]);
  }
}

const toHumanError = (technicalError: string): string => {
  if (technicalError.includes('401 Unauthorized')) {
    return 'No está autorizado. Verifique su usuario y contraseña.';
  }
  return technicalError;
};
