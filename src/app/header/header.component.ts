import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rothumb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc: string;
  isOpen: boolean;

  constructor() { 
    // Default image
    this.imageSrc = '/assets/images/pope-francis.jpg';  
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

  heroImageChange (image: string) {
    if (image){
      this.imageSrc = image;
    } 
  }

  openCloseMenu () {
    this.isOpen = !this.isOpen;
  }
}
