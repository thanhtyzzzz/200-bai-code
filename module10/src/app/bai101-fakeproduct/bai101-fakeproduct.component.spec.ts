import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai101FakeproductComponent } from './bai101-fakeproduct.component';

describe('Bai101FakeproductComponent', () => {
  let component: Bai101FakeproductComponent;
  let fixture: ComponentFixture<Bai101FakeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai101FakeproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai101FakeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
