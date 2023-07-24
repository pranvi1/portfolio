import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiilsComponent } from './skiils.component';

describe('SkiilsComponent', () => {
  let component: SkiilsComponent;
  let fixture: ComponentFixture<SkiilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkiilsComponent]
    });
    fixture = TestBed.createComponent(SkiilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
