import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'add-animal',
  template: `
    <h1>Add an Animal</h1>
    <div>
      <label>Species: </label>
      <input #species>
      <br>
      <label>Name: </label>
      <input #name>
      <br>
      <label>Age: </label>
      <input #age>
      <br>
      <label>Diet: </label>
      <input #diet>
      <br>
      <label>Location: </label>
      <input #location>
      <br>
      <label>Number of Caretakers: </label>
      <input #caretakers>
      <br>
      <label>Sex: </label>
      <input #sex>
      <br>
      <label>Likes: </label>
      <input #likes>
      <br>
      <label>Dislikes: </label>
      <input #dislikes>
      <br>
    </div>
    <div>
      <button (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Add</button>
    </div>
  `
})

export class AddAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
