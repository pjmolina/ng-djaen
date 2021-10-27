import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(
    value: number | string | null | undefined,
    currency?: string
  ): string {
    if (!value) {
      return '- EUR';
    }
    if (typeof value === 'string') {
      return 'not a number';
    }
    const v = value.toFixed(2);

    switch (currency?.toLowerCase()) {
      case 'usd':
        return `$${v}`;
      case 'eur':
      default:
        const v2 = v.replace('.', ',');
        return `${v2} EUR`;
    }
  }
}
