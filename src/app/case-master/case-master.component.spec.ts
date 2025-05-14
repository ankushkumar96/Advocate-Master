import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseMasterComponent } from './case-master.component';

describe('CaseMasterComponent', () => {
  let component: CaseMasterComponent;
  let fixture: ComponentFixture<CaseMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseMasterComponent]
    });
    fixture = TestBed.createComponent(CaseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
