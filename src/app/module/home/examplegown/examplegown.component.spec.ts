import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplegownComponent } from './examplegown.component';

describe('ExamplegownComponent', () => {
  let component: ExamplegownComponent;
  let fixture: ComponentFixture<ExamplegownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplegownComponent]
    });
    fixture = TestBed.createComponent(ExamplegownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
