import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { Bai100DongabankComponent } from './bai100-dongabank/bai100-dongabank.component';
import { Bai101FakeproductComponent } from './bai101-fakeproduct/bai101-fakeproduct.component';
import { Bai102FakeProduct2Component } from './bai102-fake-product2/bai102-fake-product2.component';
import { Bai103CoindeskApiComponent } from './bai103-coindesk-api/bai103-coindesk-api.component';
import { Bai104ListPublicApisComponent } from './bai104-list-public-apis/bai104-list-public-apis.component';
import { Bai105PredictGenderComponent } from './bai105-predict-gender/bai105-predict-gender.component';
import { Bai106UsDataComponent } from './bai106-us-data/bai106-us-data.component';
import { Bai107RandomDogImageComponent } from './bai107-random-dog-image/bai107-random-dog-image.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    Bai100DongabankComponent,
    Bai101FakeproductComponent,
    Bai102FakeProduct2Component,
    Bai103CoindeskApiComponent,
    Bai104ListPublicApisComponent,
    Bai105PredictGenderComponent,
    Bai106UsDataComponent,
    Bai107RandomDogImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
