import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai87Component } from './bai87.component';

describe('Bai87Component', () => {
  let component: Bai87Component;
  let fixture: ComponentFixture<Bai87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai87Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
