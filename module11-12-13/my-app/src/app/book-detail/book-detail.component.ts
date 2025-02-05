import { Component } from '@angular/core';
import { BookAPIService } from '../service/book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  book:any;
  errMessage:string=''
  constructor(private _service: BookAPIService){
  }
  searchBook(bookId:string)
  {
    this._service.getBook(bookId).subscribe({
      next:(data)=>{this.book=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
