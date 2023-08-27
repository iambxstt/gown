import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrregisterComponent } from './uesrregister.component';

describe('UesrregisterComponent', () => {
  let component: UesrregisterComponent;
  let fixture: ComponentFixture<UesrregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UesrregisterComponent]
    });
    fixture = TestBed.createComponent(UesrregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
