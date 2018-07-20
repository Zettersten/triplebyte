import { Component, Input } from '@angular/core';
import { CardService, Card } from './card-service.service';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private cardService: CardService) { }

  moveLeft(card: Card) {

    this.cardService.removeCard(card);

    if (card.columnId == 1) {
      card.columnId = 4;
    } else {
      card.columnId = card.columnId - 1;
    }

    this.cardService.addCard(card);

  }

  moveRight(card: Card) {

    this.cardService.removeCard(card);

    if (card.columnId == 4) {
      card.columnId = 1;
    } else {
      card.columnId = card.columnId + 1;
    }

    this.cardService.addCard(card);
  }

  getCards(columnId: number) : Observable<Card[]> {
    return this.cardService.getCardsByColumnId(columnId);
  }

  addItem(columnId: number): void {

    let description = window.prompt("Please provide a card description");

    if (description) {
      this.cardService.addCard({
        description: description,
        columnId: columnId,
        cardId: (new Date()).getTime()
      });
    }

  }
}
