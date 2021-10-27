import { EstadoCielo } from './weather/weather.component';

export interface Ciudad {
  ciudad: string;
  temperatura: number;
  cielo: EstadoCielo;
}
