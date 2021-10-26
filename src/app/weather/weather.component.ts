import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

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
export class WeatherComponent implements OnInit, OnDestroy, OnChanges {
  @Input() ciudad: string = '';
  @Input() temperatura: number = 0;
  @Input() cielo: EstadoCielo = EstadoCielo.Soleado;
  @Output() temperaturaChange = new EventEmitter<TemperatureInfo>();

  EstadoCielo = EstadoCielo;

  constructor() {
    console.log('1. Me construyo:', this.ciudad);
  }

  ngOnInit(): void {
    console.log('2. Me inicializo:', this.ciudad);
  }

  ngOnDestroy(): void {
    console.log('4. Destruir');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('3. Hay cambios:', changes);
  }

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
