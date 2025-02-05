import { Component } from '@angular/core';
import { Gender } from '../interfaces/Gender';
import { PredictGenderService } from '../services/predict-gender.service';

@Component({
  selector: 'app-bai105-predict-gender',
  templateUrl: './bai105-predict-gender.component.html',
  styleUrls: ['./bai105-predict-gender.component.css']
})
export class Bai105PredictGenderComponent {
  name: string = ''
  person = new Gender()
  errMessage: string = ''
  constructor(private _service: PredictGenderService)  {  }

  getGender(name: string) {
    this._service.getGender(name).subscribe({
      next: (data) => { this.person = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
