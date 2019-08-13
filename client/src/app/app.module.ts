import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlicktzCommonModule } from 'src/common';
import { HomeViewComponent } from './views';
import { GalleryModule } from 'src/features/gallery/gallery.module';
import { ImageDataService } from './services/image-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlicktzCommonModule,
    GalleryModule
  ],
  providers: [
    ImageDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
