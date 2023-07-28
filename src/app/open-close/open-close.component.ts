import { Component, OnInit } from '@angular/core';
import { Observable,Observer } from 'rxjs'; //reacive extension JavaScript
import { Album } from '../album';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations:[fadeInAnimation],
})
export class OpenCloseComponent implements OnInit {
  ngOnInit(): void {

    // on s'abonne à l'observable
   this.myObservable.subscribe((album) =>{console.log(album)});// le subscrible prend les paramettre coe next et autre 
  }
  
  // Observable: produit|objet|message qui sera diffusé
  // Observer : lélément qui souscrit pour un produit |objet|message donné
  myObservable = new Observable((observer:Observer<string>) => {

    // le codes à exécuter quand on récupère la donnée
    setTimeout(() => {observer.next("album 1");}, 1000);
    setTimeout(() => {observer.next("album 2");}, 2000);
    setTimeout(() => {observer.next("album 3");}, 3000);
    setTimeout(() => {observer.next("album 4");}, 4000);
    setTimeout(() => {observer.next("album 5");}, 5000);
     // ici cest ds string 

  });

 isOpen : boolean = true;
 toggle(){
  this.isOpen = !this.isOpen;
 }
}
