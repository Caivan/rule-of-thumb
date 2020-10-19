import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IPublicFigure } from '../models/public-figure.model';
import { PublicFiguresService } from '../services/public-figures.service';

@Component({
  selector: 'rothumb-header-trial-box',
  templateUrl: './header-trial-box.component.html',
  styleUrls: ['./header-trial-box.component.css']
})
export class HeaderTrialBoxComponent implements OnInit {

  @Output()
  emmitImageChange: EventEmitter<string>;
  publicFigureHero: IPublicFigure;

  constructor(private publicFiguresService: PublicFiguresService) { 
    this.emmitImageChange = new EventEmitter<string> ();
    this.getRandomPublicFigureToShowcase ();
  }

  ngOnInit(): void {
    
  }

  getRandomPublicFigureToShowcase () {
      this.publicFiguresService.getRandomPublicFigure ().subscribe (
        figureHero => {
          this.publicFigureHero = figureHero;
          this.emmitImageChange.emit (this.publicFigureHero.heroImage);
        }
      );    
  }

}
