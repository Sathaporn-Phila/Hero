import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@src/app/in-memory-data.service';

import { AppRoutingModule } from '@src/app/app-routing.module';

import { AppComponent } from '@src/app/app.component';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { HeroDetailComponent } from '@src/app/hero-detail/hero-detail.component';
import { HeroesComponent } from '@src/app/heroes/heroes.component';
import { HeroSearchComponent } from '@src/app/hero-search/hero-search.component';
import { TestMockComponent } from '@src/app/test-mock/test-mock.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    TestMockComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }