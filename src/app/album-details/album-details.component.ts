import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Album } from '../album';
import { ALBUM_LISTS} from '../mock-albums'

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit, OnChanges {
  @Input() album!: Album; // propriété liée qui sera passée par le parent à l enfant tres important
  @Output() onPlay: EventEmitter<Album>=new EventEmitter(); //propriete emetrice
  
  constructor() { };
  
  Tabs: Array<string> = [];
  
  ngOnChanges():void {
    //1first methode
    if(this.album!== undefined){
      for (let i = 0; i < ALBUM_LISTS.length; i++) {
        if( ALBUM_LISTS[i].id === this.album.id){
          this.Tabs =  ALBUM_LISTS[i].list;
        }
      }
      
    }

 //2first methode
//  albumLists: List[]=ALBUM_LISTS;
//  songs:string[] | undefined=[];// tableau qui stock la liste des chansons de l'abum
//  if(this.album){
//   this.songs=this.albumLists.find(elem =>elem.id === this.album.id)?.list; // tres important une maniere de parcourir un tableau pour et renvoye les elements cibles
//  }
  }

  ngOnInit():void  {
  // console.log(this.album); // pour l'instant c'est undefined ... C'est normal
  }
   

  play(album:Album){
    console.log("Jouer l'album", album.name);
    this.onPlay.emit(album) ;//émettre un album vers le parent
  }

   Aleatoire(Tabs:string[]=[]){
    const alea =this.Tabs;
     
  console.log(alea);
  
   }
}
