import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [
  { path: 'fashions', component: FashionComponent },
  { path: 'fashions/new', component: FashionNewComponent },
  { path: 'fashions/edit/:id', component: FashionUpdateComponent},
  { path: 'fashions/detail/:id', component: FashionDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  FashionComponent
]
