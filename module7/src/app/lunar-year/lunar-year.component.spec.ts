import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunarYearComponent } from './lunar-year.component';

describe('LunarYearComponent', () => {
  let component: LunarYearComponent;
  let fixture: ComponentFixture<LunarYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunarYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunarYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});