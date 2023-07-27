import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; // module des routes et classe de Typage


import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// définission de la constante pour les routes
// on n'utilise jamais de chemin relative(../alr ou ./alt) dans le route 
const albumsRoutes: Routes = [
  {
  path: '',
  redirectTo: '/albums',
  pathMatch: 'full'
  },
  {
  path: 'albums',
  component: AlbumsComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'album/:id',
  component: AlbumDescriptionComponent
  },

  // une chose qu'on fait à la fin des routes , on crée un path qui sera une page 404 note found
  {path:'**' , component: PageNotFoundComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // importez le module
    //   forRout est une méthode utilisé pour définir les routes à  utiliser dans le modele de routage
    RouterModule.forRoot(albumsRoutes) // chargement des routes dans l'application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
