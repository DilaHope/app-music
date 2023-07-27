import { Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';  // template-driven
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  word: string = " ";

@Output() searchAlbums: EventEmitter<Album []> = new EventEmitter
constructor(
  private albumService:AlbumService
){}

  onSubmit(form:NgForm) //ici NgForm est un objet qui enregiste les infos que nous renseignons
  {
   const results : Album[] = this.albumService.search(form.value.word);// ou  console.log( form.value['word'])
   this.searchAlbums.emit(results)
   console.log(results);
     
  }
  

  onChangeEmit($event:string){
    const results : Album[] = this.albumService.search( $event);// ou  console.log( form.value['word'])
   this.searchAlbums.emit(results)
  }
}
