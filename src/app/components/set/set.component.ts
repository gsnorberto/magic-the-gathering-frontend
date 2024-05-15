import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-set',
  standalone: true,
  imports: [],
  templateUrl: './set.component.html',
  styleUrl: './set.component.scss'
})
export class SetComponent {
  @Input() setName: string = '';
  @Input() setBlock: any;
  @Input() setDate: any;

  constructor () {}
}
