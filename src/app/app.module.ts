import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { BooleanPipe } from './pipes/boolean.pipe';
import { CityFilterPipe } from './pipes/city-filter.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PlaceTableComponent } from './place-table/place-table.component';
import { Logger2Service, LoggerService } from './services/logger.service';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BooleanPipe,
    CurrencyPipe,
    CityFilterPipe,
    ResaltarDirective,
    PlaceTableComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: LoggerService,
      useClass: Logger2Service,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
