import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GownComponent } from './gown.component';

describe('GownComponent', () => {
  let component: GownComponent;
  let fixture: ComponentFixture<GownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GownComponent]
    });
    fixture = TestBed.createComponent(GownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
