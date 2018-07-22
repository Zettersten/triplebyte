import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardStorageService } from './card-storage.service';

export interface Card {
  description: string;
  columnId: number;
  cardId: number;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cards: Card[];

  constructor(private cardStorageService: CardStorageService) {
    this.cards = cardStorageService.getOrCreate();
  }

  public addCard(card: Card): Observable<Card[]> {
    this.cards.push(card);
    this.cardStorageService.addItem(card);
    return of(this.cards);
  }

  public removeCard(card: Card): Observable<Card[]> {
    this.cards.splice(this.cards.indexOf(card), 1);
    this.cardStorageService.removeItem(card);
    return of(this.cards);
  }

  public getCardsByColumnId(columnId: number): Observable<Card[]> {
    return of(this.cards.filter(x => x.columnId === columnId) || []);
  }
}
