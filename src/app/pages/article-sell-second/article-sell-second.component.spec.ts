import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleSellSecondComponent } from './article-sell-second.component';


describe('ArticleSellComponent', () => {
  let component: ArticleSellSecondComponent;
  let fixture: ComponentFixture<ArticleSellSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSellSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSellSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
