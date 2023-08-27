import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentgownComponent } from './rentgown.component';

describe('RentgownComponent', () => {
  let component: RentgownComponent;
  let fixture: ComponentFixture<RentgownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentgownComponent]
    });
    fixture = TestBed.createComponent(RentgownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
