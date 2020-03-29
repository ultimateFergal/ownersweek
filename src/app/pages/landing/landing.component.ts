import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  showItems;

  trustedList = ['irbnb.png', 'shopify.png', 'hpe.svg', 'netapp.png', 'thumbtack.png', 'zendesk.png'];
  trustedPeople = ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png', 'p6.png', 'p7.png']
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHireAdvisor() {
    this.router.navigate(['hire-advisor']);
  }


}
