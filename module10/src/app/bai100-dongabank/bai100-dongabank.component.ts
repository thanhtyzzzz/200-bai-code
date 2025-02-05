import { Component } from '@angular/core';
import { DongABankService } from '../services/dong-abank.service';

@Component({
  selector: 'app-bai100-dongabank',
  templateUrl: './bai100-dongabank.component.html',
  styleUrls: ['./bai100-dongabank.component.css']
})
export class Bai100DongabankComponent {
  data: any
  errorMessage:string=''
  constructor(_service:DongABankService){
    _service.getDongABankData().subscribe({
      next:(data)=>{
        this.data = data
      },
      error:(err)=>{
        this.errorMessage=err
      }
    })
  }
}
