import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
