import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CollectionComponent } from './components/collection/collection.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SetsAreaComponent } from './components/sets-area/sets-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FiltersComponent, CollectionComponent, SetsAreaComponent, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'magic-the-gathering-frontend';
}