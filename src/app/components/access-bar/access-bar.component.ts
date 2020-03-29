import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-bar',
  templateUrl: './access-bar.component.html',
  styleUrls: ['./access-bar.component.scss']
})
export class AccessBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSignUp() {
    this.router.navigate(['sign-up']);
  }

}
