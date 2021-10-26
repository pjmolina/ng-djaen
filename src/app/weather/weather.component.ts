import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum EstadoCielo {
  Soleado = 'sol',
  Lluvioso = 'llu',
  Nevado = 'nev',
}

export interface TemperatureInfo {
  ciudad: string;
  current: number;
  newValue: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() ciudad: string = '';
  @Input() temperatura: number = 0;
  @Input() cielo: EstadoCielo = EstadoCielo.Soleado;
  @Output() temperaturaChange = new EventEmitter<TemperatureInfo>();

  incrementar(inc: number): void {
    this.temperatura += inc;

    this.temperaturaChange.emit({
      ciudad: this.ciudad,
      current: this.temperatura - inc,
      newValue: this.temperatura,
    });
  }
  decrementar(dec: number): void {
    this.temperatura -= dec;

    this.temperaturaChange.emit({
      ciudad: this.ciudad,
      current: this.temperatura + dec,
      newValue: this.temperatura,
    });
  }
}
