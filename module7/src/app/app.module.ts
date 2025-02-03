import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponent } from './binding-property/binding-property.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import { BindingStyleComponent } from './binding-style/binding-style.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { BindingTwoWayComponent } from './binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './lunar-year/lunar-year.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    QuadraticEquationComponent,
    LunarYearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
