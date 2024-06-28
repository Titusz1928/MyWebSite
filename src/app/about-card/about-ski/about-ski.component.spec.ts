import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSkiComponent } from './about-ski.component';

describe('AboutSkiComponent', () => {
  let component: AboutSkiComponent;
  let fixture: ComponentFixture<AboutSkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
