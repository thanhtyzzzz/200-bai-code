import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';

import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FashionComponent,
    FashionDeleteComponent,
    FashionDetailComponent,
    FashionNewComponent,
    FashionUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
