import { Component, OnInit } from '@angular/core';
import { PublicFigure } from '../models/public-figure.model';

@Component({
  selector: 'rothumb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publicFigureTest1: PublicFigure;
  publicFigureTest2: PublicFigure;
  publicFigureTest3: PublicFigure;
  publicFigureTest4: PublicFigure;

  constructor() { 
    this.publicFigureTest1 = new PublicFigure (
      "Kanye West", 
      new Date (),
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
      32,
      18,
      "/assets/images/west-cut.jpg",
      "Entertainment"
      );
    this.publicFigureTest2 = new PublicFigure (
        "Mark Zuckenberg", 
        new Date (),
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
        18,
        32,
        "/assets/images/mark.jpg",
        "Business"
        );
    this.publicFigureTest3 = new PublicFigure (
          "Cristina Fernandéz de Kirchner", 
          new Date (),
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
          40,
          250,
          "/assets/images/mark.jpg",
          "Business"
          );
    this.publicFigureTest4 = new PublicFigure (
            "Malala Yousafzai", 
            new Date (),
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus voluptates magni.",
            334,
            150,
            "/assets/images/mark.jpg",
            "Business"
            );
  }

  ngOnInit(): void {
  }

}
