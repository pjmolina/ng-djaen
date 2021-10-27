import { Component, OnInit } from '@angular/core';
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

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    // this.places = this.service.getPlaces();
    this.placeService
      .getPlaces()
      .then((respuesta) => {
        this.places = respuesta;
        this.error = '';
      })
      .catch((error) => {
        console.error(error);
        this.error = error.message;
      });
  }
}
