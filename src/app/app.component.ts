import { Component } from '@angular/core';
import { EstadoCielo, TemperatureInfo } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app Jaen1';

  nombre = 'Ana';
  surname = 'Zamora';

  d1 = new Date();

  ciudades = [
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
