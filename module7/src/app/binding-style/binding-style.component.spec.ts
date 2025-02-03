import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingStyleComponent } from './binding-style.component';

describe('BindingStyleComponent', () => {
  let component: BindingStyleComponent;
  let fixture: ComponentFixture<BindingStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
