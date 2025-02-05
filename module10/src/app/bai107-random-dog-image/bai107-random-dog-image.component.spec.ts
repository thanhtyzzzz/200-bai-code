import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai107RandomDogImageComponent } from './bai107-random-dog-image.component';

describe('Bai107RandomDogImageComponent', () => {
  let component: Bai107RandomDogImageComponent;
  let fixture: ComponentFixture<Bai107RandomDogImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai107RandomDogImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai107RandomDogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
