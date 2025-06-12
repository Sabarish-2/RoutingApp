import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeIdComponent } from './view-employee-id.component';

describe('ViewEmployeeIdComponent', () => {
  let component: ViewEmployeeIdComponent;
  let fixture: ComponentFixture<ViewEmployeeIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeeIdComponent]
    });
    fixture = TestBed.createComponent(ViewEmployeeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
