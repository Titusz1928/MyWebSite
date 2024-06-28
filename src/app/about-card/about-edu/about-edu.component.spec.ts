import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEduComponent } from './about-edu.component';

describe('AboutEduComponent', () => {
  let component: AboutEduComponent;
  let fixture: ComponentFixture<AboutEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
