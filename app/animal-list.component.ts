import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
    <h4>Select which animals you would like to view:</h4>
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals">Mature Animals</option>
    </select>
    <br>
    <br>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge"> {{currentAnimal.name}}
        <br>
        <ul>
          <li>Species: {{currentAnimal.species}}</li>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Gender: {{currentAnimal.sex}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
          <button (click)="editAnimal(currentAnimal)">Edit Animal</button>
        </ul>
        <br>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  editAnimal(animalToEdit: Animal) {
     this.clickSender.emit(animalToEdit);
   }

   onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
