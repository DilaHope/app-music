import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  albumForm!: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private router:Router) { };
  ngOnInit() {
    this.albumForm = this.fb.group({
      id: '',

      name: ['', [
        Validators.required,
        Validators.minLength(5)]], /** Validators.minLength(5) signale que dans le champ concerné il faudrait au moins 5 caractère */

      title: ['', [
        Validators.required
      ]],

      ref: ['', [// 20 FTX 
        Validators.required,
        Validators.pattern('\\w{5}') // doit avoir 5 caractères 
        //Validators.pattern('[A-Z0-9]{5}') 
      ]],

      duration: ['', [
        Validators.required,
        Validators.pattern('[0-9]*'),// doit avoir une suite de chiffres 
        Validators.max(900)
      ]],

      description: ['', [
        Validators.required
      ]],
       tags:this.fb.array([this.fb.control('')]),

     // tags:new FormArray([new FormControl('')]), //ecriture pour ajout des tags au formulaire,ecriture detaillé

      status: 'off',
    });

  };

  get name(){
    return this.albumForm.get('name')
  };
  get ref(){
    return this.albumForm.get('ref')
  };
  get title(){
    return this.albumForm.get('title')
  };
  get duration(){
    return this.albumForm.get('duration')
  };
  get description(){
    return this.albumForm.get('description')
  };
  get tags(){
    return this.albumForm.get('tags') as FormArray 
  };

  onSubmit() {
    console.log(this.albumForm.value);
    //Rediriger sur la page admin
    this.router.navigate(['/admin']),{
      queryParams: {
        message: "album ajouté avec succès",
        model:"text-davinci-002-render-sha"
      }}
  }

  addTag(){
   this.tags.push(this.fb.control(''));
  }
}

