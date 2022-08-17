import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrProfileComponent } from './hr-profile.component';

describe('HrProfileComponent', () => {
  let component: HrProfileComponent;
  let fixture: ComponentFixture<HrProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
