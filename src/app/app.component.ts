import { Component, Input } from '@angular/core';
import { CardService, Card } from './card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private cardService: CardService) { }

  getCards(columnId: number): Observable<Card[]> {
    return this.cardService.getCardsByColumnId(columnId);
  }

  addItem(columnId: number): void {

    const description = window.prompt('Please provide a card description');

    if (description) {
      this.cardService.addCard({
        description: description,
        columnId: columnId,
        cardId: (new Date()).getTime()
      });
    }

  }
}
