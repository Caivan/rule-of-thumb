import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPublicFigure } from '../models/public-figure.model';

@Component({
  selector: 'rothumb-public-figure',
  templateUrl: './public-figure.component.html',
  styleUrls: ['./public-figure.component.css']
})
export class PublicFigureComponent implements OnInit {

  @Input ()
  publicFigure: IPublicFigure;
  @Output() 
  updateVotes: EventEmitter<string>;

  likesPercentage: number;
  dislikesPercentage: number;
  voteSelected: string;
  voted: boolean;

  constructor() {
      this.updateVotes  = new EventEmitter<string>();
      this.voteSelected = 'like';
      this.voted = false; 
  }

  ngOnInit(): void {
    if (this.publicFigure) {
      this.fillPercentages();
      console.log (this.publicFigure);
    }
  }

  addVote () {
      console.log (this.voteSelected);
      if (this.voteSelected === 'like') {
        this.publicFigure.qtyLikes += 1;
      } else if (this.voteSelected === 'dislike') {
        this.publicFigure.qtyDislikes += 1;
      }
      this.fillPercentages ();
      this.voted = true;
      this.updateVotes.emit ('updateVotes');
  }

  resetVoting () {
    this.voted = false;
  }

  private fillPercentages() {
    this.likesPercentage = this.calculatePercentage(this.publicFigure.qtyLikes);
    this.dislikesPercentage = this.calculatePercentage(this.publicFigure.qtyDislikes);
  }

  private calculatePercentage(qtyBase): number {
      return Math.round (((qtyBase * 100) / (this.publicFigure.qtyLikes + this.publicFigure.qtyDislikes)));
  }

}
