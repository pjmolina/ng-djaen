import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean',
})
export class BooleanPipe implements PipeTransform {
  transform(value: boolean | null | undefined): string {
    if (value === null || value === undefined) {
      return '-';
    }
    if (value) {
      return 'Sí';
    } else {
      return 'No';
    }
  }
}
