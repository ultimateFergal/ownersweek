import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-sell-second',
  templateUrl: './article-sell-second.component.html',
  styleUrls: ['./article-sell-second.component.scss']
})
export class ArticleSellSecondComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    scrollTo(0, 0)
  }

  goHireAdvisor() {
    
  }

  goArticleHire() {
    this.router.navigate(['article-hire']);
    window.scrollTo(0, 0);
  }

  goArticleSell() {
    this.router.navigate(['article-sell']);
    window.scrollTo(0, 0);
  }

  goArticleBroker() {
    this.router.navigate(['article-broker']);
    window.scrollTo(0, 0);
  }

}
