import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGownComponent } from './add-gown.component';

describe('AddGownComponent', () => {
  let component: AddGownComponent;
  let fixture: ComponentFixture<AddGownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGownComponent]
    });
    fixture = TestBed.createComponent(AddGownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
