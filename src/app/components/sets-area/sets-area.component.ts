import { Component, OnInit } from '@angular/core';
import { SetComponent } from '../set/set.component';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sets-area',
  standalone: true,
  imports: [SetComponent, NgFor],
  templateUrl: './sets-area.component.html',
  styleUrl: './sets-area.component.scss'
})
export class SetsAreaComponent {
  setData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.currentData.subscribe(data => {
      console.log('data: ', data?.sets);
      this.setData = data?.sets;
    })
  }
} 
