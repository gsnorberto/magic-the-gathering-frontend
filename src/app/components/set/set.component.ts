import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-set',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './set.component.html',
  styleUrl: './set.component.scss',
})
export class SetComponent {
  @Input() setName: string = '';
  @Input() setBlock: any;
  @Input() setDate: any;
  @Input() setId: any;

  constructor() {}
}
