import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rothumb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc: string;

  constructor() { 
    // Default image
    this.imageSrc = '/assets/images/pope-francis.jpg';
  }

  ngOnInit(): void {
  }

  heroImageChange (image: string) {
    if (image){
      this.imageSrc = image;
    } 
  }

}
