import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReturnDressComponent } from './admin-return-dress.component';

describe('AdminReturnDressComponent', () => {
  let component: AdminReturnDressComponent;
  let fixture: ComponentFixture<AdminReturnDressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReturnDressComponent]
    });
    fixture = TestBed.createComponent(AdminReturnDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
