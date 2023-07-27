import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
 
@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css']
})
export class AlbumDescriptionComponent implements OnInit {
  album: Album | undefined;
  constructor(
    private route :ActivatedRoute,
    private aS: AlbumService // récupérez le service

    ){}
  ngOnInit(): void {
    // permet de récuperer l'identifiant 
      const id = this.route.snapshot.params["id"];
      // TODO récurérer le détail d'un album
      this.album = this.aS.getAlbum(id);
      console.log(this.album);
      
  }
}
