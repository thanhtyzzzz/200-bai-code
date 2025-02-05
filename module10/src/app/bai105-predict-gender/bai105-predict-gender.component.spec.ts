import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai105PredictGenderComponent } from './bai105-predict-gender.component';

describe('Bai105PredictGenderComponent', () => {
  let component: Bai105PredictGenderComponent;
  let fixture: ComponentFixture<Bai105PredictGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai105PredictGenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai105PredictGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
