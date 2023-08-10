import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Album,List,SortAlbumCallback } from './album';
// import { ALBUMS, ALBUM_LISTS } from './mock-albums';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  subjectAlbum = new Subject<Album>();

  private _albumsUrl: string = environment.albumUrl; 

  private _albumListsUrl:string = environment.albumListUrl;

  // Observable qui notifie aux abonnés la page actuelle
  sendCurrentNuberPage = new Subject<number>();
  paginateNumberPage: any;
 
  constructor(private http: HttpClient) { }
  
  /**
  * fonction de recherche de tous les  albums
  * @returns retourne la liste de ts les albums
  */
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
    //ordonner les albums par ordre de durée décroissante 
   map((albums: Album[]) => {
    return albums.sort((a:Album, b:Album) => b.duration - a.duration);
   })
    ); //
  }
// paginate(start: number, end: number):Album[]{
//   return this._albums.slice(start,end).sort((a:Album, b:Album) => b.duration - a.duration);
// }
  /**
  * fonction de recherche  d'un album en particulier
  * @returns retourne la liste de ts les albums
  */
  getAlbum(id: string): Observable <Album> | undefined {

    return this.http.get<Album>(this._albumsUrl + '/' + id)
            .pipe(
              map((album:Album) => album)
            );
  }

 /**
  * fonction de recherche des sons d'un albums
  * 
  */

  getAlbumList(id:string): Observable<List>{
    return this.http.get<List>(this._albumListsUrl + '/' + id)
  }

  count(){
    return  this.http.get<Album[]>(this._albumListsUrl).pipe(
      map((albums:Album[]) => albums.length)
    );
  }

  // order(callback: SortAlbumCallback):AlbumService{
  //   this._albums.sort(callback)
  //   return this;
  // }

  // limit(start:number, end:number): AlbumService {
  //   this._albums =this._albums.slice(start,end)
  //   return this;
  // }
  

  paginate (start:number, end : number):Observable<Album[]>{
    return this.http.get<Album[]>(this._albumListsUrl).pipe(
      map(
        (albums) => albums.sort((a,b) => b.duration - a.duration)
                          .slice(start,end)
        )
    );
  }
  search(word:string):Observable<Album[]>{
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums:Album[]) =>{
        //parcourir le tableau d'albums 
        return albums.filter(album => { 
        //retourner ceux cntenant le string de la variable
          return album.title
          .toLowerCase()
          .includes(word.trim().toLowerCase()); // .trim() enleve l espace à gauche et à droite
      });
      }))}
    

currentPage(numberPage:number): void{
  return this.sendCurrentNuberPage.next(numberPage)
}
/**
 * méthode qui permet d changer le status d'un album à 'on'
 *@param album : l'abum dont le status doit passer à 'on'
 */
switcheOn (album: Album):void {
  album.status ="on";
  //une requete put au ('localhost:3000/albums/1' , album);
  this.http.put<void>(this._albumsUrl + '/' + album.id , album)
            .subscribe({
              next: (e) => console.log(e),
              error: (err) => console.warn(err),
              complete: () => this.subjectAlbum.next(album)
            })
//   // Parcourrir touts les albums
//  this._albums.forEach((a : Album) => {
//   //Si l'album actuel est celui qu'on joue 
//   if (a.id === album.id) {
//     //mettre  le status à 'on'
//    a.status = "on";
//    album.status ="on"
//   }else {
//     //sinon mettre le status à off
//     a.status = "off";
     
//   }
// })
// //send une notification
//   this.subjectAlbum.next(album);
}

/**
 * Méthode qui permet de changer le status d'un album à 'off'
 * @param album : l'album dont le status doit passer à 'off'
 */

switcheOff (album: Album):void {
  album.status = "off";

  // renvoie un observable , et ne s'éxécute donc qu'à la souscription . Du coup, il faut y soucrire , pour l'exécuter
  this.http.put<void>(`${this._albumsUrl}/${album.id}` , album)
            .subscribe(() => {})
 
  // this.subjectAlbum.next(album);
}
}

