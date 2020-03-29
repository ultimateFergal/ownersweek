import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHireComponent } from './article-hire.component';

describe('ArticleHireComponent', () => {
  let component: ArticleHireComponent;
  let fixture: ComponentFixture<ArticleHireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleHireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
