import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNeedyComponent } from './dashboard-needy.component';

describe('DashboardNeedyComponent', () => {
  let component: DashboardNeedyComponent;
  let fixture: ComponentFixture<DashboardNeedyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNeedyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNeedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
