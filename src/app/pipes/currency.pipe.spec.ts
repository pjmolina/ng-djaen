import { CurrencyPipe } from './currency.pipe';

/**
 * Requistos:
123.4   | currency              ->    123,40 EUR
123.409 | currency:USD          ->    USD 123.41
 *
 */
describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  describe('tests EUR', () => {
    it('when passing 123.4 as EUR should return 123,40 EUR', () => {
      const pipe = new CurrencyPipe();
      expect(pipe.transform(123.4, 'EUR')).toBe('123,40 EUR');
    });
    it('when passing 123.4 withou currency should assume EUR', () => {
      const pipe = new CurrencyPipe();
      expect(pipe.transform(123.4)).toBe('123,40 EUR');
    });

    it('when passing 123.409 as EUR should return 123,41 EUR (round)', () => {
      const pipe = new CurrencyPipe();
      expect(pipe.transform(123.409, 'EUR')).toBe('123,41 EUR');
    });
    it('when passing null as EUR should return - EUR', () => {
      const pipe = new CurrencyPipe();
      expect(pipe.transform(null, 'EUR')).toBe('- EUR');
    });
  });
  it('when passing 123.4 as USD should return  $123.40', () => {
    const pipe = new CurrencyPipe();
    expect(pipe.transform(123.4, 'USD')).toBe('$123.40');
  });
  it('when passing "abc" ->  not a number', () => {
    const pipe = new CurrencyPipe();
    expect(pipe.transform('abc', 'USD')).toBe('not a number');
  });
});
