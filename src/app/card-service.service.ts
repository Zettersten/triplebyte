import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Card {
  description: string,
  columnId: number,
  cardId: number
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { 

      let cards = localStorage.getItem("cards");

      if (cards != undefined) {
        return;
      }

      localStorage.setItem("cards", JSON.stringify([]));
  }

  public addCard(card: Card) : Observable<Card[]> {
    
    let cardsJson = localStorage.getItem("cards");
    let cards = JSON.parse(cardsJson);

    cards.push(card);

    localStorage.setItem("cards", JSON.stringify(cards));

    return of(cards);
  }

  public removeCard(card: Card) : Observable<Card[]> {
    
    let cardsJson = localStorage.getItem("cards");
    let cards = JSON.parse(cardsJson);

    cards = cards.filter(x => x.cardId != card.cardId);

    localStorage.setItem("cards", JSON.stringify(cards));

    return of(cards);
  }

  public getCardsByColumnId(columnId: number) : Observable<Card[]> {

    let cardsJson = localStorage.getItem("cards");
    let cards = JSON.parse(cardsJson);

    return of(cards.filter(x => x.columnId == columnId) || []);
  }
}
