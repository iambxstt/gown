import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustmerComponent } from './admin-custmer.component';

describe('AdminCustmerComponent', () => {
  let component: AdminCustmerComponent;
  let fixture: ComponentFixture<AdminCustmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCustmerComponent]
    });
    fixture = TestBed.createComponent(AdminCustmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
