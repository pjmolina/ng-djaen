import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { Logger2Service, LoggerService } from './services/logger.service';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CityFilterPipe } from './pipes/city-filter.pipe';
import { ResaltarDirective } from './directives/resaltar.directive';

@NgModule({
  declarations: [AppComponent, WeatherComponent, BooleanPipe, CurrencyPipe, CityFilterPipe, ResaltarDirective],
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
