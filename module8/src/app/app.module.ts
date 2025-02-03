import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai86Component } from './bai86/bai86.component';
import { Bai87Component } from './bai87/bai87.component';
import { Bai88Component } from './bai88/bai88.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component'
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    Bai86Component,
    Bai87Component,
    Bai88Component,
    ServiceProductImageEventDetailComponent,
    CatalogComponent,
    ServiceProductHttpComponent,
    ServiceProductHttpHandleErrorComponent,
    CustomerDisplayComponent,
    CustomerListComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
