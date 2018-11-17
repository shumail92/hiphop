import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHelperComponent } from './dashboard-helper.component';

describe('DashboardHelperComponent', () => {
  let component: DashboardHelperComponent;
  let fixture: ComponentFixture<DashboardHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
