import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {
    console.log('Constructor del LoggerService');
  }

  log(msg: string) {
    const hora = new Date().toISOString();
    console.log(hora + ': ' + msg);
  }
  warn(msg: string) {
    const hora = new Date().toISOString();
    console.warn(hora + ': ' + msg);
  }
  error(msg: string) {
    const hora = new Date().toISOString();
    console.error(hora + ': ' + msg);
  }
}

@Injectable()
export class Logger2Service {
  constructor() {
    console.log('Constructor del LoggerService');
  }

  log(msg: string) {
    const hora = new Date().toISOString();
    console.log(`V2 ${hora}: ${msg}`);
  }
  warn(msg: string) {
    const hora = new Date().toISOString();
    console.warn('V2' + hora + ': ' + msg);
  }
  error(msg: string) {
    const hora = new Date().toISOString();
    console.error('V2' + hora + ': ' + msg);
  }
}

@Injectable()
export class DummyLoggerService {
  log(msg: string) {}
  warn(msg: string) {}
  error(msg: string) {}
}
