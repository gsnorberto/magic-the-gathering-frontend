import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() name: string = '';
  @Input() manaCost: any;
  @Input() colorIdentity: any;
  @Input() text: any;
  @Input() imageUrl: any;
}
