import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactif',
  templateUrl: './form-reactif.component.html',
  styleUrls: ['./form-reactif.component.css']
})
export class FormReactifComponent {

  /**
   * On a fait appel à FormBuilder
   * parce qu'on ne voulait plus use formGroup
   * @param fb 
   */

  constructor(private fb:FormBuilder){}

  genres = ['Jazz', 'Hip-Hop', 'Zouk', 'Salsa', 'Rumba', 'Bacha'];

  musicForm =this.fb.group({
    name:['',[ Validators.required,Validators.minLength(4)]],
    auteur:['', Validators.required],
    style:[this.genres[0]]
  });


  get name(){
    return this.musicForm.get('name');
  }
  get auteur(){
    return this.musicForm.get('auteur');
  }
  get style(){
    return this.musicForm.get('style');
  }
  onSubmit(){
    console.warn(this.musicForm.value)
  }
  search = new FormControl(''); //instanciation  pour les inputs qui ne sont pas dans les formGroup
}
