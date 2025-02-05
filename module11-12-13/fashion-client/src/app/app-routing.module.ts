import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFashionDetailComponent } from './client-fashion-detail/client-fashion-detail.component';
import { ClientFashionStyleComponent } from './client-fashion-style/client-fashion-style.component';
import { ClientFashionComponent } from './client-fashion/client-fashion.component';

const routes: Routes = [
  { path: 'fashions/style', component: ClientFashionComponent },
  { path: 'fashions/style/:style', component: ClientFashionStyleComponent },
  { path: 'fashions/detail/:id', component: ClientFashionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  ClientFashionComponent
]
