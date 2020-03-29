import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireAdvisorComponent } from './hire-advisor.component';

describe('HireAdvisorComponent', () => {
  let component: HireAdvisorComponent;
  let fixture: ComponentFixture<HireAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
