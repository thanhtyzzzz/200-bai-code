import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai104ListPublicApisComponent } from './bai104-list-public-apis.component';

describe('Bai104ListPublicApisComponent', () => {
  let component: Bai104ListPublicApisComponent;
  let fixture: ComponentFixture<Bai104ListPublicApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai104ListPublicApisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai104ListPublicApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
