import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumDetailsComponent } from '../album-details/album-details.component';
import { ALBUMS } from '../mock-albums';
import { ALBUM_LISTS} from '../mock-albums'

@Component({
  selector: 'app-albums',  // sélecteur à mettre dans le parent
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  titlePage: string ="Page principale Albms Music";
  title : string = "App-music";
  albums: Album[] = ALBUMS;
  // Tabs: Array<string> = [];

  selectedAlbum!:Album;
   
  onSelect(album:Album){
    this.selectedAlbum = album;
  //   // console.log(this.selectedAlbum)
  //   // console.log("bonjour");
  //   if(album!== undefined){
  //     for (let i = 0; i < ALBUM_LISTS.length; i++) {
  //       if( ALBUM_LISTS[i].id === album.id){
  //         this.Tabs =  ALBUM_LISTS[i].list;
  //         // console.log(this.Tabs);

  //       for (let e = 0; e <  this.Tabs.length; e++) {
          
  //         // console.log(this.Tabs[e]);
  //       }
  //       }
  //     }
  //     console.log(this.Tabs);
  //   }else{console.log("vous n'avez encore de playlist qui match")}
  };
 
  constructor() { }
  ngOnInit() {
  }

}


