import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() dataEvent = new EventEmitter<any>();

  blocks_list: string[] = ['Amonkhet', 'Ixalan', 'Zendikar', 'Ravnica', 'Onslaught'];
  block_name: string = '';
  set_name: string = '';

  constructor(private taskService: TaskService){}

  onSearch(){
    this.taskService.getSets(this.block_name, this.set_name).subscribe(tasks => {
      console.log('tasks: ', tasks);
      this.dataEvent.emit(tasks)
    })
  }
}
