import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumDetailsComponent } from '../album-details/album-details.component';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',  // sélecteur à mettre dans le parent
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  titlePage: string ="Page principale Albms Music";
  title : string = "App-music";
  albums: Album[] = ALBUMS;

  selectedAlbum!:Album;
   

 
  constructor() { }
  ngOnInit() {
  }

}


