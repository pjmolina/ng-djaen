import { Pipe, PipeTransform } from '@angular/core';
import { Ciudad } from '../ciudad';

@Pipe({
  name: 'cityFilter',
})
export class CityFilterPipe implements PipeTransform {
  transform(datos: Ciudad[], searchString: string): Ciudad[] {
    if (!searchString) {
      return datos;
    }
    // v1. lambda en linea
    return datos.filter(
      (c) =>
        c.ciudad.toLowerCase().includes(searchString.toLowerCase()) ||
        c.cielo.toString().toLowerCase().includes(searchString.toLowerCase()) ||
        c.temperatura.toString().includes(searchString.toLowerCase())
    );

    // V2. con bloque explicito
    // return datos.filter((c) => {
    //   return c.ciudad.toLowerCase().includes(searchString.toLowerCase());
    // });
  }
}
