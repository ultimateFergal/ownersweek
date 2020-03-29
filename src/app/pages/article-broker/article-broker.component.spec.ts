import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBrokerComponent } from './article-broker.component';

describe('ArticleSellComponent', () => {
  let component: ArticleBrokerComponent;
  let fixture: ComponentFixture<ArticleBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
