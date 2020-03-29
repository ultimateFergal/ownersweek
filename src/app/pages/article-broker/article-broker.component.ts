import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-broker',
  templateUrl: './article-broker.component.html',
  styleUrls: ['./article-broker.component.scss']
})
export class ArticleBrokerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHireAdvisor() {
    
  }

  goSellSecond() {
    // this.router.navigate([']);
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
