import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlicktzCommonModule } from 'src/common';
import { HomeViewComponent } from './views';
import { GalleryModule } from 'src/features/gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlicktzCommonModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
