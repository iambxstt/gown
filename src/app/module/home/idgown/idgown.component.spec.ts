import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdgownComponent } from './idgown.component';

describe('IdgownComponent', () => {
  let component: IdgownComponent;
  let fixture: ComponentFixture<IdgownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdgownComponent]
    });
    fixture = TestBed.createComponent(IdgownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
