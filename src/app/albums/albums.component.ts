import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumDetailsComponent } from '../album-details/album-details.component';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
 

@Component({
  selector: 'app-albums',  // sélecteur à mettre dans le parent
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations:[fadeInAnimation],
})
export class AlbumsComponent implements OnInit ,OnInit{

  titlePage: string ="Page principale Albms Music";
  title : string = "App-music";
  albums!: Album[];
  selectedAlbum!:Album; //Le ! signifie que je suis sûr de lui passer une valeur
  status: string | null = null
  
  
  constructor(
    private albumService: AlbumService
    ) { console.log(`${this.albumService.count()}albums trouvés`)}
    
    onSelect(album:Album){
      this.selectedAlbum = album;
    
    };
    
  // on use un hook d initialisation
  ngOnInit():void {
    // this.albums = this.albumService.paginate(0,this.albumService.count());
     this.albumService.paginate(0,this.albumService.paginateNumberPage)
                       .subscribe({
                        next: (alb: Album[]) => {
                          this.albums = alb
                        }
                       });
     ;
    // 2eme methode 
    // this.albums = this.albumService
    //   .order((a:Album, b:Album)=> a.duration - b.duration) // lui il ordonne
    //   .limit(0,this.albumService.count())// renvoie une sous partie
    //   .getAlbums();//récupère les albums 
  }

  playParent ($event:Album){
    console.log(typeof $event);
    console.log($event);
    this.status=$event.id
  }

  search($event:Album[]){
   if($event){
   this.albums= $event;
   }
   console.log(this.albums)
  }
  

  onSetPaginate($event: {start:number, end:number}){
    this.albumService.paginate($event.start,$event.end)
                      .subscribe({
                        next: (alb:Album[]) => this.albums=alb
                      })
  }
}


