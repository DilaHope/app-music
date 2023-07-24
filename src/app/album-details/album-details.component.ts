import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';
import { ALBUM_LISTS} from '../mock-albums'

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  Tabs: Array<string> = [];
  @Input() album!: Album;
  
  constructor() { };

  onSelect(album:Album){
     
    // console.log(this.selectedAlbum)
    // console.log("bonjour");

    let Tabs: Array<string> = [];
      if(album!== undefined){
        for (let i = 0; i < ALBUM_LISTS.length; i++) {
          if( ALBUM_LISTS[i].id === album.id){
            this.Tabs =  ALBUM_LISTS[i].list;
            console.log(this.Tabs);
  
          for (let e = 0; e <  this.Tabs.length; e++) {
            
            console.log(this.Tabs[e]);
          }
          }
        }
        console.log(this.Tabs);
      }else{console.log("vous n'avez encore de playlist qui match")}
    };
   

  ngOnInit() {
  console.log(this.album); // pour l'instant c'est undefined ... C'est normal
  }
   
}
