import { Component, Input, OnInit } from '@angular/core';
import { IPublicFigure } from '../models/public-figure.model';

@Component({
  selector: 'rothumb-public-figure',
  templateUrl: './public-figure.component.html',
  styleUrls: ['./public-figure.component.css']
})
export class PublicFigureComponent implements OnInit {

  @Input ()
  publicFigure: IPublicFigure;

  constructor() { }

  ngOnInit(): void {
  }

}
