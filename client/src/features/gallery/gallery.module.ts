import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
