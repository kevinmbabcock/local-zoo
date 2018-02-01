import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <ul>
      <li *ngFor="let currentAnimal of childAnimalList"> {{currentAnimal.name}}
        <br>
        <ul>
          <li>Species: {{currentAnimal.species}}</li>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Gender: {{currentAnimal.gender}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
        </ul>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();


}
