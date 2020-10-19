import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rothumb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean;

  constructor() { 
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

  openCloseMenu () {
    this.isOpen = !this.isOpen;
  }
}
