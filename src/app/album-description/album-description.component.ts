import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
 
@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations:[fadeInAnimation],
})
export class AlbumDescriptionComponent implements OnInit {
  album!: Album;
  constructor(
    private route :ActivatedRoute,
    private aS: AlbumService // récupérez le service

    ){}
  ngOnInit(): void {
    
    // permet de récuperer l'identifiant 
    // const id = this.route.snapshot.params["id"];

      // TODO récurérer le détail d'un album
      // this.album = this.aS.getAlbum(id);
      // console.log(this.album);
      
      
      this.route.snapshot.paramMap.get("albumId")
      console.log(this.route.snapshot.paramMap.get("albumId"));
      const id = this.route.snapshot.params["albumId"];

      this.aS.getAlbum(this.route.snapshot.params["id"])?.subscribe(album =>{
        this.album = album;
      })
      
      
  }
}

