import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hire-advisor',
  templateUrl: './hire-advisor.component.html',
  styleUrls: ['./hire-advisor.component.scss']
})
export class HireAdvisorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
