import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CHARACTERS } from '../mock-info/mock-public-figures.mock';

@Injectable({
  providedIn: 'root'
})
export class PublicFiguresService {

  constructor() { }

  getAllPublicFigures () {
      return of (CHARACTERS);
  }

}
