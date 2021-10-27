import { Component } from '@angular/core';
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
}
