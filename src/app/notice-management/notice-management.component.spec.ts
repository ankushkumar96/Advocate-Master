import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeManagementComponent } from './notice-management.component';

describe('NoticeManagementComponent', () => {
  let component: NoticeManagementComponent;
  let fixture: ComponentFixture<NoticeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeManagementComponent]
    });
    fixture = TestBed.createComponent(NoticeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
