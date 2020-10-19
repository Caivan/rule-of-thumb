import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPublicFigure } from '../models/public-figure.model';
import { PublicFiguresService } from '../services/public-figures.service';

@Component({
  selector: 'rothumb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publicFigures: Observable<IPublicFigure[]>;
  
  constructor(private publicFiguresService: PublicFiguresService) { 
    this.getListOfPublicFigures();
  }

  ngOnInit(): void {
  }

  getListOfPublicFigures () {
      this.publicFigures = this.publicFiguresService.getAllPublicFigures ();
  }
}
