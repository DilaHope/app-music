import { Component } from '@angular/core';
import { Music } from '../Music';
 

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  genres = ['Jazz', 'Hip-Hop', 'Zouk', 'Salsa', 'Rumba', 'Bacha'];

  //instance de la classe music dans music.ts
  musicModel = new Music('', '', this.genres[0]);

  submitted = true;

  onSubmit(from: any) {
    console.log(from);

  }
  // name ='Joie de vivre';
  // auteur = 'Arthur DRILL';
  //  updateName(albumName:string){
  //   this.name = albumName;
  //  }
}
/**
 * visité: touched | untouched
 * changé: dirty | pristine
 * valid: valid | invalid
 */