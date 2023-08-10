import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album,List } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

// import { ALBUM_LISTS} from '/mok';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [fadeInAnimation],
})
export class AlbumDetailsComponent implements OnInit, OnChanges {
  @Input() album!: Album; // propriété liée qui sera passée par le parent à l enfant tres important
  @Output() onPlay: EventEmitter<Album>=new EventEmitter(); //propriete emetrice
  
  constructor(  
    private albumService: AlbumService,
    private http: HttpClient
    ) {};
  
  Tabs: Array<string> = [];
  albumLists!:List[];
  ngOnChanges():void {
    //1first methode
    if(this.album!== undefined){
      for (let i = 0; i <  this.albumLists.length; i++) {
        if(  this.albumLists[i].id === this.album.id){
          this.Tabs =  this.albumLists[i].list;
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

   this.http.get<Array<List>>(environment.albumListUrl).subscribe(alb =>{
   this.albumLists = alb
   })
  }
   

  play(album:Album){
    console.log("Jouer l'album", album.name);
    this.onPlay.emit(album) ;//émettre un album vers le parent
    this.albumService.switcheOn(album)
  }

   Aleatoire(Tabs:string[]=[]){
    const alea =this.Tabs;
     
  console.log(alea);
  
   }
}
