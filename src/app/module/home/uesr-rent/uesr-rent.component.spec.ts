import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrRentComponent } from './uesr-rent.component';

describe('UesrRentComponent', () => {
  let component: UesrRentComponent;
  let fixture: ComponentFixture<UesrRentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UesrRentComponent]
    });
    fixture = TestBed.createComponent(UesrRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
