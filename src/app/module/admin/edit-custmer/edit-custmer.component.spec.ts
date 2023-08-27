import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustmerComponent } from './edit-custmer.component';

describe('EditCustmerComponent', () => {
  let component: EditCustmerComponent;
  let fixture: ComponentFixture<EditCustmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCustmerComponent]
    });
    fixture = TestBed.createComponent(EditCustmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
