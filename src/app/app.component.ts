import { Component } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Ciudad } from './ciudad';
import { EstadoCielo, TemperatureInfo } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Temperaturas de ciudades';

  nombre = 'Ana';
  surname = 'Zamora';
  cadenaDeBusqueda = '';

  d1 = new Date();

  ciudades: Ciudad[] = [
    {
      ciudad: 'Jaén',
      temperatura: 20,
      cielo: EstadoCielo.Soleado,
    },
    {
      ciudad: 'Baeza',
      temperatura: 21,
      cielo: EstadoCielo.Lluvioso,
    },
    {
      ciudad: 'Linares',
      temperatura: 22,
      cielo: EstadoCielo.Soleado,
    },
    {
      ciudad: 'Cazorla',
      temperatura: -5,
      cielo: EstadoCielo.Nevado,
    },
    {
      ciudad: 'Sevilla',
      temperatura: 30,
      cielo: EstadoCielo.Soleado,
    },
  ];

  notificarCambioTemperatura(event: TemperatureInfo): void {
    console.log(event);
  }

  lanzaObservable(): void {
    const obs$ = from([1, 2, 3, 4, 5]).pipe(
      map((it) => {
        if (it === 4) {
          throw Error('Error en 4');
        } else {
          return it;
        }
      })
    );

    obs$.pipe(filter((x) => x % 2 === 0)).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log('ERROR:', err),
      complete: () => console.log('Se termino'),
    });
  }
}
