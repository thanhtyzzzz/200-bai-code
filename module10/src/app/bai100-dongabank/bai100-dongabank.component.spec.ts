import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai100DongabankComponent } from './bai100-dongabank.component';

describe('Bai100DongabankComponent', () => {
  let component: Bai100DongabankComponent;
  let fixture: ComponentFixture<Bai100DongabankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bai100DongabankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai100DongabankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
