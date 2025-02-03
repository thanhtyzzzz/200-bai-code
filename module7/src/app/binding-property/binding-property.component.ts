import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  templateUrl: './binding-property.component.html',
  styleUrl: './binding-property.component.css'
})
export class BindingPropertyComponent {
  public name: string = "Trần Duy Thanh";
  public email: string = "thanhtd@uel.edu.vn";
  public nameid: string = "nameid";
  public emailid: string = "emailid";
  public isDisabled: boolean = true;

  toggleDisable() {
    this.isDisabled = !this.isDisabled;
  }
}
