import { Component } from '@angular/core';
import { USData } from '../interfaces/USData';
import { UsDataService } from '../services/us-data.service';
@Component({
  selector: 'app-bai106-us-data',
  templateUrl: './bai106-us-data.component.html',
  styleUrls: ['./bai106-us-data.component.css']
})
export class Bai106UsDataComponent {
  data: any
  errMessage: string = ''

  constructor(private _service: UsDataService) {
    this._service.getUSData().subscribe({
      next: (data) => { this.data = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
