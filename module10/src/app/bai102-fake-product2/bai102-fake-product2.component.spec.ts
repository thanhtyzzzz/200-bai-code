import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai102FakeProduct2Component } from './bai102-fake-product2.component';

describe('Bai102FakeProduct2Component', () => {
  let component: Bai102FakeProduct2Component;
  let fixture: ComponentFixture<Bai102FakeProduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai102FakeProduct2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai102FakeProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
