import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai88Component } from './bai88.component';

describe('Bai88Component', () => {
  let component: Bai88Component;
  let fixture: ComponentFixture<Bai88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai88Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
