import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Output() setsEvent = new EventEmitter<any>();

  blocks_list: string[] = [
    'Amonkhet',
    'Ixalan',
    'Zendikar',
    'Ravnica',
    'Onslaught',
  ];
  block_name: string = '';
  set_name: string = '';

  constructor(private dataService: DataService, private taskService: TaskService) {}

  setsSearch() {
    this.taskService
      .getSets(this.block_name, this.set_name)
      .subscribe((tasks) => {
        this.dataService.changeData(tasks);
      });
  }
}
