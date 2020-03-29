import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() place: number;
  showItems = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    switch (this.place) {
      case 1:
        this.showItems = false;
        break;
      case 2:
        this.showItems = true;
        break;
      default:
        this.showItems = true;
        break;
    }
  }


}
