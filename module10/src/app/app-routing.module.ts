import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai100DongabankComponent } from './bai100-dongabank/bai100-dongabank.component';
import { Bai101FakeproductComponent } from './bai101-fakeproduct/bai101-fakeproduct.component';
import { Bai102FakeProduct2Component } from './bai102-fake-product2/bai102-fake-product2.component';
import { Bai103CoindeskApiComponent } from './bai103-coindesk-api/bai103-coindesk-api.component';
import { Bai104ListPublicApisComponent } from './bai104-list-public-apis/bai104-list-public-apis.component';
import { Bai105PredictGenderComponent } from './bai105-predict-gender/bai105-predict-gender.component';
import { Bai106UsDataComponent } from './bai106-us-data/bai106-us-data.component';
import { Bai107RandomDogImageComponent } from './bai107-random-dog-image/bai107-random-dog-image.component';

const routes: Routes = [
  { path: 'bai 100', component: Bai100DongabankComponent},
  { path: 'bai 101', component: Bai101FakeproductComponent},
  { path: 'bai 102', component: Bai102FakeProduct2Component},
  { path: 'bai 103', component: Bai103CoindeskApiComponent},
  { path: 'bai 104', component: Bai104ListPublicApisComponent},
  { path: 'bai 105', component: Bai105PredictGenderComponent},
  { path: 'bai 106', component: Bai106UsDataComponent},
  { path: 'bai 107', component: Bai107RandomDogImageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  Bai100DongabankComponent,
  Bai101FakeproductComponent,
  Bai102FakeProduct2Component,
  Bai103CoindeskApiComponent,
  Bai104ListPublicApisComponent,
  Bai105PredictGenderComponent,
  Bai106UsDataComponent,
  Bai107RandomDogImageComponent
]