import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CHARACTERS } from '../mock-info/mock-public-figures.mock';
import { IPublicFigure } from '../models/public-figure.model';

@Injectable({
  providedIn: 'root'
})
export class PublicFiguresService {

  constructor(private httpClient: HttpClient) { }

  getAllPublicFigures (): Observable<IPublicFigure[]> {
      console.log (environment.urlApiRulesOfThumb);
      return this.httpClient.get <IPublicFigure[]>(environment.urlApiRulesOfThumb);
  }

}
