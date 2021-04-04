import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@src/app/in-memory-data.service';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { HeroDetailComponent } from '@src/app/hero-detail/hero-detail.component';
import { HeroesComponent } from '@src/app/heroes/heroes.component';
import { HeroSearchComponent } from '@src/app/hero-search/hero-search.component';
import { MessageComponent } from '@src/app/message/message.component';


// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { TestMockComponent } from '@src/app/test-mock/test-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    MessageComponent,
    TestMockComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
