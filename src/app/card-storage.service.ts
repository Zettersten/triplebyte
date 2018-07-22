import { Injectable } from '@angular/core';
import { Card } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class CardStorageService {

  public getOrCreate(): Card[] {
    const cardJson = localStorage.getItem('cards');

    if (cardJson !== null) {
      return <Card[]>JSON.parse(cardJson);
    }

    localStorage.setItem('cards', JSON.stringify([]));

    return [];
  }

  public addItem(card: Card): void {
    const cardsJson = localStorage.getItem('cards');
    const cards = JSON.parse(cardsJson);

    cards.push(card);

    localStorage.setItem('cards', JSON.stringify(cards));
  }

  public removeItem(card: Card): void {
    const cardsJson = localStorage.getItem('cards');
    let cards = JSON.parse(cardsJson);

    cards = cards.filter(x => x.cardId !== card.cardId);

    localStorage.setItem('cards', JSON.stringify(cards));
  }

}
