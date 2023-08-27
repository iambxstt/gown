import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBComponent } from './example-b.component';

describe('ExampleBComponent', () => {
  let component: ExampleBComponent;
  let fixture: ComponentFixture<ExampleBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleBComponent]
    });
    fixture = TestBed.createComponent(ExampleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
