import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumComponent } from './admin/album/album.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactifComponent } from './form-reactif/form-reactif.component';


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
  {
  path: 'oc',
  component: OpenCloseComponent
  },

  {
  path: 'admin',
  component:  AlbumComponent
  },
  {
  path: 'template',
  component:  FormTemplateComponent
  },
  {
  path: 'reactif',
  component:  FormReactifComponent
  },
  
   

  // une chose qu'on fait à la fin des routes , on crée un path qui sera une page 404 note found
  {
    path:'**' , 
  component: PageNotFoundComponent
  },
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     //   forRout est une méthode utilisé pour définir les routes à  utiliser dans le modele de routage
    RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
