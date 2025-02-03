import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai86Component } from './bai86.component';

describe('Bai86Component', () => {
  let component: Bai86Component;
  let fixture: ComponentFixture<Bai86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai86Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
