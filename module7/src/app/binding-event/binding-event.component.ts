import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrl: './binding-event.component.css'
})
export class BindingEventComponent {
  a: number = 0;
  b: number = 0;
  result: number | null = null;

  onClick(event: any) {
    alert(event.pointerId);
  }

  onSubmit(value: string) {
    alert(value);
  }

  add() {
    this.result = this.a + this.b;
  }

  subtract() {
    this.result = this.a - this.b;
  }

  multiply() {
    this.result = this.a * this.b;
  }

  divide() {
    if (this.b === 0) {
      alert("Cannot divide by zero!");
    } else {
      this.result = this.a / this.b;
    }
  }

  clear() {
    this.a = 0;
    this.b = 0;
    this.result = null;
  }
}
