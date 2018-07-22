import { Component, Input } from '@angular/core';
import { Card, CardService } from '../card.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, top: '-30px', position: 'relative' })),
      state('*', style({ opacity: 1, top: 0 })),
      transition('void <=> *', [
        animate('.25s cubic-bezier(0.680, -0.550, 0.265, 1.550)')
      ])
    ])
  ]
})
export class CardComponent {

  @Input() public card: Card;

  constructor(private cardService: CardService) { }

  moveLeft(card: Card) {

    this.cardService.removeCard(card);

    if (card.columnId === 1) {
      card.columnId = 4;
    } else {
      card.columnId = card.columnId - 1;
    }

    this.cardService.addCard(card);

  }

  moveRight(card: Card) {

    this.cardService.removeCard(card);

    if (card.columnId === 4) {
      card.columnId = 1;
    } else {
      card.columnId = card.columnId + 1;
    }

    this.cardService.addCard(card);
  }

}
