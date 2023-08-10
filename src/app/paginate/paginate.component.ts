import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlbumService } from '../album.service';
// import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  total: number = 0;  // Nombre total d'album
  /**
   * Nombre d'album(s) par page (stocké dans les variables d'environnement)
   */
  perPage: number;

  /**
   * nombre de boutons à générer 
   */
  numberPage: number = 0;

  /**
   * tableau réunissant le label de chaque page
   */
  pages: number[] = []

  /**
   * Emetteur d'évènements
   */
  @Output() setPaginate: EventEmitter<{ start: number, end: number }> = new EventEmitter();
  /** variable stockant la page actuelle */
  currentPage: number = 1;

  constructor(
    private albumService: AlbumService,
  ) {
    // this.perPage = environment.numberPage
    this.perPage = this.albumService.paginateNumberPage();

  }

  ngOnInit(): void {
    this.albumService.count().subscribe(num => {
      this.total = num
      this.numberPage = Math.ceil(this.total / this.perPage);
      for (let i = 1; i <= this.numberPage; i++) {
        this.pages.push(i);
      }
    });
  }
  // ngOnInit(): void {
  //     this.total = this.albumService.count();
  //     this.numberPage = Math.ceil(this.total / this.perPage); 
  //     for (let i = 1; i <= this.numberPage; i++) {
  //       this.pages.push(i);
  //     }

  //   }
  next() {
    // si nous avons déjà atteint la dernière page de pagination 
    if (this.currentPage >= this.numberPage) {
      // this.currentPage = 1; // revenir à la dernière page
      return;
    } else { // sinon
      this.currentPage++;  // incrémenter
    }
    //  Demander au parent d'afficher les albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }

  previous() {
    // si nous avons déjà atteint la dernière page de pagination 
    if (this.currentPage <= 1) {
      // this.currentPage = 1; // revenir à la dernière page
      return;
    } else { // sinon
      this.currentPage--;  // incrémenter
    }
    //  Demander au parent d'afficher les albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }

  // previous ( ) {
  //   if (this.currentPage <= 1) {
  //     // this.currentPage = 1;
  //     return;
  //   } else {
  //     this.currentPage--;
  //   }
  // }

  /**
   * Fonction qui retourne le sous ensemble d'albums à afficher
   * @param page page courante
   * @returns un sous-ensemble du tableau en fonction de la page courante
   */
  setAlbums(page: number): { start: number, end: number } {
    let start = (page - 1) * this.perPage;
    let end = start + this.perPage;

    // return {start: start, end: end}
    return { start, end }
  }

  changePage(page: number) {
    this.currentPage = page;
    //  Demander au parent d'afficher les albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }
}
