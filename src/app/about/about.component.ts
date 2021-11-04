import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  @Input() titulo = 'Hola';
  @Input() color = 'rojo';

  cache: number[] = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ];

  numero = 1;
  contadorLlamadas = 0;

  private loading = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cd.detach();
    // 100 propiedades
    this.titulo = 'jkljk';
    this.color = 'verde';
    //....
    this.cd.reattach();
  }

  time(a: number): number {
    this.contadorLlamadas = 0;
    const t0 = performance.now();
    const f = this.fib2(a);
    const t1 = performance.now();
    console.log(
      'fib de',
      a,
      ' es ',
      f,
      ' tiempo: ',
      t1 - t0,
      'ms  llamadas:',
      this.contadorLlamadas
    );
    return f;
  }

  fib2(a: number): number {
    const cache = this.cache[a];
    if (cache != -1) {
      return cache;
    }
    const r = this.fib(a); // lento
    this.cache[a] = r;
    return r;
  }

  fib(a: number): number {
    this.contadorLlamadas++;
    if (a === 0) {
      return 1;
    }
    if (a === 1) {
      return 1;
    }
    return this.fib2(a - 1) + this.fib2(a - 2);
  }
}
