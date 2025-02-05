import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'bai114', component: BooksComponent },
  { path: 'bai116', component: BookDetailComponent },
  { path: 'bai118', component: BookNewComponent },
  { path: 'bai120', component: BookUpdateComponent },
  { path: 'bai122', component: BookDeleteComponent },
  { path: 'bai124', component: FileUploadComponent },
  { path: 'bai128', component: FashionComponent },
  { path: 'bai129', component: FashionDetailComponent },
  { path: 'bai130', component: FashionNewComponent },
  { path: 'bai131', component: FashionUpdateComponent },
  { path: 'bai132', component: FashionDeleteComponent },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  BooksComponent,
  BookDetailComponent,
  BookNewComponent,
  BookUpdateComponent,
  BookDeleteComponent,
  FileUploadComponent,
  FashionComponent,
  FashionDetailComponent,
  FashionNewComponent,
  FashionUpdateComponent,
  FashionDeleteComponent
];