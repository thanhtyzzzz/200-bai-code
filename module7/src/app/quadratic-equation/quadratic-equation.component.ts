import { Component } from '@angular/core';
class Quadratic {
  constructor(public a: number, public b: number, public c: number) {}

  findSolution() {
    const discriminant = this.b * this.b - 4 * this.a * this.c;
    if (discriminant > 0) {
      const x1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
      const x2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
      return `x1=${x1}; x2=${x2}`;
    } else if (discriminant === 0) {
      const x = -this.b / (2 * this.a);
      return `x=${x}`;
    } else {
      return 'Phương trình vô nghiệm';
    }
  }
}

@Component({
  selector: 'app-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrl: './quadratic-equation.component.css'
})
export class QuadraticEquationComponent {
  public a: number = 0;
  public b: number = 0;
  public c: number = 0;
  public result: string = '';

  solve() {
    const quadratic = new Quadratic(this.a, this.b, this.c);
    this.result = quadratic.findSolution();
  }

  clear() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.result = '';
  }
}