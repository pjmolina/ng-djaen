import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { ResaltarDirective } from './directives/resaltar.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { CityFilterPipe } from './pipes/city-filter.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { Logger2Service, LoggerService } from './services/logger.service';
import { WeatherComponent } from './weather/weather.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BooleanPipe,
    CurrencyPipe,
    CityFilterPipe,
    ResaltarDirective,
    PlaceTableComponent,
    WelcomeComponent,
    AboutComponent,
    PlaceDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: LoggerService,
      useClass: Logger2Service,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
