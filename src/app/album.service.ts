import { Injectable } from '@angular/core';
import { Album,List,SortAlbumCallback } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS;// _convention private et protected

  private _albumLists: List[] = ALBUM_LISTS;
 
  constructor() { }
  
  /**
  * fonction de recherche de tous les  albums
  * @returns retourne la liste de ts les albums
  */
  getAlbums(): Album[] {
    return this._albums //.sort((a:Album, b:Album) => b.duration - a.duration);
  }
// paginate(start: number, end: number):Album[]{
//   return this._albums.slice(start,end).sort((a:Album, b:Album) => b.duration - a.duration);
// }
  /**
  * fonction de recherche  d'un album en particulier
  * @returns retourne la liste de ts les albums
  */
  getAlbum(id: string): Album | undefined {

    return this._albums.find(album => album.id === id);
  }

 /**
  * fonction de recherche des sons d'un albums
  * 
  */

  getAlbumList(id:string): List | undefined{
    return this._albumLists.find(List=>List.id === id)
  }

  count(){
    return this._albums.length;
  }

  order(callback: SortAlbumCallback):AlbumService{
    this._albums.sort(callback)
    return this;
  }

  limit(start:number, end:number): AlbumService {
    this._albums =this._albums.slice(start,end)
    return this;
  }

  search(word:string):Album[]{
    return this._albums.filter(album => { 
      return album.title
      .toLowerCase()
      .includes(word.trim().toLowerCase()); // .trim() enleve l espace à gauche et à droite
  });
}
}

