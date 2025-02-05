import { Component } from '@angular/core';
import { ListPublicApisService } from '../services/list-public-apis.service';

@Component({
  selector: 'app-bai104-list-public-apis',
  templateUrl: './bai104-list-public-apis.component.html',
  styleUrls: ['./bai104-list-public-apis.component.css']
})
export class Bai104ListPublicApisComponent {
  data:any
  errMessage:string=''
  constructor(_service: ListPublicApisService){
    _service.getListPublicAPIs().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  selectedAPI:any
  showDetail(api:any){
    this.selectedAPI=api
  }
}
