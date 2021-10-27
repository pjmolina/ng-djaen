import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { Logger2Service, LoggerService } from './services/logger.service';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  declarations: [AppComponent, WeatherComponent, BooleanPipe, CurrencyPipe],
  imports: [BrowserModule, FormsModule],
  providers: [
    {
      provide: LoggerService,
      useClass: Logger2Service,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
