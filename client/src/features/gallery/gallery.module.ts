import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    NgxMasonryModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
