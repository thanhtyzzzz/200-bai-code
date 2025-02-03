import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai86Component } from './bai86/bai86.component';
import { Bai87Component } from './bai87/bai87.component';
import { Bai88Component } from './bai88/bai88.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component'
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'bai86', component: Bai86Component },
  { path: 'bai87', component: Bai87Component },
  { path: 'bai88', component: Bai88Component },
  { path: 'bai88/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'bai89', component: CatalogComponent },
  { path: 'bai90', component: ServiceProductHttpComponent },
  { path: 'bai91', component: ServiceProductHttpHandleErrorComponent },
  { path: 'bai92', component: CustomerDisplayComponent },
  { path: 'bai93', component: CustomerListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
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
]