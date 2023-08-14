import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginateComponent } from './paginate/paginate.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import{HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { initial } from 'lodash';
import { environment } from 'src/environments/environment';
import { ShareModule } from './share/share.module';
import { AddAlbumComponent } from './admin/add-album/add-album.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactifComponent } from './form-reactif/form-reactif.component';
 





@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumDescriptionComponent,
    AudioPlayerComponent,
    SearchComponent,
    LoginComponent,
    PageNotFoundComponent,
    // PaginateComponent,
    OpenCloseComponent,
    FormTemplateComponent,
    FormReactifComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // importez le module
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
