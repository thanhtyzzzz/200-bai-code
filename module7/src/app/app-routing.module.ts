import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponent } from './binding-property/binding-property.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import { BindingStyleComponent } from './binding-style/binding-style.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { BindingTwoWayComponent } from './binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './lunar-year/lunar-year.component';

const routes: Routes = [
  { path: 'bai 78', component: MyComponentComponent},
  { path: 'bai 79', component: BindingPropertyComponent},
  { path: 'bai 80', component: BindingClassComponent},
  { path: 'bai 81', component: BindingStyleComponent},
  { path: 'bai 82', component: BindingEventComponent},
  { path: 'bai 83', component: BindingTwoWayComponent},
  { path: 'bai 84', component: QuadraticEquationComponent},
  { path: 'bai 85', component: LunarYearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [
  MyComponentComponent,
  BindingPropertyComponent,
  BindingClassComponent,
  BindingStyleComponent,
  BindingEventComponent,
  BindingTwoWayComponent,
  QuadraticEquationComponent,
  LunarYearComponent
]