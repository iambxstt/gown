import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrCheckReComponent } from './uesr-check-re.component';

describe('UesrCheckReComponent', () => {
  let component: UesrCheckReComponent;
  let fixture: ComponentFixture<UesrCheckReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UesrCheckReComponent]
    });
    fixture = TestBed.createComponent(UesrCheckReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
