import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocateFeeManagementComponent } from './advocate-fee-management.component';

describe('AdvocateFeeManagementComponent', () => {
  let component: AdvocateFeeManagementComponent;
  let fixture: ComponentFixture<AdvocateFeeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvocateFeeManagementComponent]
    });
    fixture = TestBed.createComponent(AdvocateFeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
