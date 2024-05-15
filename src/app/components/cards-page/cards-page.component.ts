import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { lastValueFrom } from 'rxjs';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-page',
  standalone: true,
  imports: [NgIf, NgFor, CardComponent],
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.scss',
})
export class CardsPageComponent implements OnInit {
  cards: any[] = [];
  id: string = '';
  boosters: any[] = [];
  requestLimit: number = 30;
  requestAmount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];

      this.getBooster();
    });
  }

  async getBooster() {
    if (this.id) {

      while (this.cards.length < 30) {
        if (this.requestAmount >= this.requestLimit) break;
        this.requestAmount += 1;

        console.log('Executando booster...');

        const dataPromise = lastValueFrom(this.taskService.getBooster(this.id));
        const data = await dataPromise;
        const creatureCards = data.cards.filter((c: any) =>
          c.types.includes('Creature')
        );
        if (creatureCards.length > 0) this.cards.push(...creatureCards);
        console.log('cards: ', this.cards);
      }

      if(this.cards.length > 30) this.cards = this.cards.slice(0, 30);
    }
  }
}
