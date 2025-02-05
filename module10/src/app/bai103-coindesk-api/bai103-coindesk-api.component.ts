import { Component } from '@angular/core';
import { CoindeskService } from '../services/coindesk.service';

@Component({
  selector: 'app-bai103-coindesk-api',
  templateUrl: './bai103-coindesk-api.component.html',
  styleUrls: ['./bai103-coindesk-api.component.css']
})
export class Bai103CoindeskApiComponent {
  data:any
  errMessage:string=''
  constructor(_service: CoindeskService){
    _service.getCoindeskData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
