import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalentamientoGlobalService {
  temperaturaGlobal = 15;

  constructor() {}

  incrementar(): void {
    this.temperaturaGlobal++;
  }
}
