import { Component } from '@angular/core';
import { TemperatureInfo } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app Jaen1';

  notificarCambioTemperatura(event: TemperatureInfo): void {
    console.log(event);
  }
}
