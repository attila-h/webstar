import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CharacterData } from '../models/characters.model';
import { sampleCharacterData } from '../constants/sample-data';

@Injectable({
  providedIn: 'root',
})
export class CharacterResolver implements Resolve<CharacterData> {
  resolve(): Observable<CharacterData> {
    return of(sampleCharacterData);
  }
}