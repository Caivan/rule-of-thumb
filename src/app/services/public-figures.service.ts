import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IPublicFigure } from '../models/public-figure.model';

const publicFiguresEndPoint = 'public-figure';

@Injectable({
  providedIn: 'root',
})
export class PublicFiguresService {
  constructor(private httpClient: HttpClient) {}

  getAllPublicFigures(): Observable<IPublicFigure[]> {
    console.log(environment.urlApiRulesOfThumb);
    return this.httpClient.get<IPublicFigure[]>(
      `${environment.urlApiRulesOfThumb}/${publicFiguresEndPoint}/`
    );
  }

  updatePublicFigureData(publicFigure: IPublicFigure) {
    console.log('hello', publicFigure);
    const updateObject = {
        qtyLikes: publicFigure.qtyLikes,
        qtyDisikes: publicFigure.qtyDislikes,
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient
      .patch<IPublicFigure>(
        `${environment.urlApiRulesOfThumb}/${publicFiguresEndPoint}/${publicFigure._id}`,
        updateObject,
        { headers }
      ).subscribe (
        val => { console.log ('val', val)}
      );
  }
}
