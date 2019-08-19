import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewComponent } from './home-view.component';
import { SearchModule } from 'src/features/search/search.module';
import { GalleryModule } from 'src/features/gallery/gallery.module';
import { FlicktzCommonModule } from 'src/common';
import { ImageDataService } from 'src/app/services/image-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeViewComponent],
      imports: [
        HttpClientModule,
        SearchModule,
        GalleryModule,
        FlicktzCommonModule
      ],
      providers: [
        ImageDataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
