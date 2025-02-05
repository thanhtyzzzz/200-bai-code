import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai106UsDataComponent } from './bai106-us-data.component';

describe('Bai106UsDataComponent', () => {
  let component: Bai106UsDataComponent;
  let fixture: ComponentFixture<Bai106UsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai106UsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai106UsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
