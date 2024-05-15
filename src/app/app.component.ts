import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/card/card.component';
import { CollectionComponent } from './components/collection/collection.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FiltersComponent, CardComponent, CollectionComponent, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'magic-the-gathering-frontend';
  // public sets: any;

  // constructor(private http: HttpClient){ }

  // public getSets(block: string, name?: string){
  //   this.http.get(`https://api.magicthegathering.io/v1?block=${block}&name=${name}`).subscribe(response => {
  //     console.log('response: ', response);
  //     this.sets = response;
  //   })
  // }
}