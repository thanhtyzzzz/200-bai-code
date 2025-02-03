import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way',
  templateUrl: './binding-two-way.component.html',
  styleUrl: './binding-two-way.component.css'
})
export class BindingTwoWayComponent {
  public name: string = '';
  public address: string = '';
  public email: string = '';
  public phone: string = '';

  setDefaultAddress() {
    this.address = '13 đường Hùng Vương';
  }
}
