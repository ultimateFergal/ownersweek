import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSellComponent } from './article-sell.component';

describe('ArticleSellComponent', () => {
  let component: ArticleSellComponent;
  let fixture: ComponentFixture<ArticleSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
