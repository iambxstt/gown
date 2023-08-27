import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGowmComponent } from './admin-gowm.component';

describe('AdminGowmComponent', () => {
  let component: AdminGowmComponent;
  let fixture: ComponentFixture<AdminGowmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGowmComponent]
    });
    fixture = TestBed.createComponent(AdminGowmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
