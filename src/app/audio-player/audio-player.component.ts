import { Component } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
 /** Variable permettant d'afficher ou non , le composant audio-player */
 showplayer: boolean = false;
 /**Variable representant l'album joué */
 playedAlbum! : Album;
 /**Variable representant le nombre total de sons dans l'album */
 total: number = 1
 /**Variable representant le numero  du son joué actuellement (1/4) */
 currentSongNumber: number = 1;
 /**Variable représentant le pourcentage de sons joué (25% pour 1/4 , 50ù pour 2/4 , 75% pour 3/4 et 100% pour 4/4) */
 ratio: number = 0;

 constructor(private albumService: AlbumService){}

 ngOnInit(): void {
  // souscrire au Sujet "subject album" pour recevoir les notifications
  this.albumService.subjectAlbum.subscribe({
    next: (a:Album) => {
      this.playedAlbum = a
      //afficher le composant
      this.showplayer = true;
      //le son joué en 1er est le n°1
      this.currentSongNumber = 1;
      //durée total de l'album
      let duration: number = this.playedAlbum.duration ;
      this.total = Math.floor(duration / 120);
      //
      this.ratio = (100 / (this.total + this.total - (duration/ 120)));
      /**Variable représentant le % à ajouter après chaque son dans la barre de progression */
      let step = this.ratio; // il faut à chaque augmenter le ratio %
      //augmenter le niveau de la barre de progression chaque 2min (et donc chaque 1000 * 120 millisecond)
      // nb : le const intervalId permet d arreter le setInterval a la fin du decompte 
      const intervalId = setInterval(() => {  
        this.currentSongNumber++;
       this.ratio+=step;
       if(this.ratio > 100 ) {
        clearInterval (intervalId);
        this.showplayer = false;
        this.albumService.switcheOff(this.playedAlbum);
       }

      },1000)
    }
  })
 }
}
