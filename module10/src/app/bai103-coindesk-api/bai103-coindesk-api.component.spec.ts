import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai103CoindeskApiComponent } from './bai103-coindesk-api.component';

describe('Bai103CoindeskApiComponent', () => {
  let component: Bai103CoindeskApiComponent;
  let fixture: ComponentFixture<Bai103CoindeskApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai103CoindeskApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai103CoindeskApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
