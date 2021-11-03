import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Place } from '../domain/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
})
export class PlaceDetailComponent implements OnInit, OnDestroy {
  place?: Place;
  cargando = false;
  sub?: Subscription;

  constructor(
    private placeService: PlaceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('Componente construido');
  }

  ngOnInit(): void {
    console.log('Componente init');
    this.sub = this.route.params.subscribe((data) => {
      const id = data.id;
      console.log('Campio de parametros: id', id);
      if (id) {
        this.cargando = true;
        this.placeService.getPlaceById(id).subscribe({
          next: (place) => {
            this.cargando = false;

            this.place = place;
          },
          error: (err) => {
            this.cargando = false;
            this.place = undefined;
          },
        });
      } else {
        this.place = undefined;
      }
    });
  }
  ngOnDestroy(): void {
    console.log('Componente destruido');
    this.sub?.unsubscribe();
  }
}
