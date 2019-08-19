import { ImageDataService } from './image-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

describe('ImageDataService', () => {

    let injector: TestBed;
    let service: ImageDataService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ImageDataService]
        });
        injector = getTestBed();
        service = injector.get(ImageDataService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('#getPublicFeed', () => {
        it('should return an Observable<FlicktzImage[]>', () => {
            const dummyImages = [
                { fullImage: 'image1full', thumbnail: 'image1thumb' },
                { fullImage: 'image2full', thumbnail: 'image2thumb' }
            ];

            service.getPublicFeed().subscribe(images => {
                expect(images.length).toBe(2);
                expect(images).toEqual(dummyImages);
            });

            const req = httpMock.expectOne(`api/public-feed`);
            expect(req.request.method).toBe('GET');
            req.flush(dummyImages);

        });
    });

    describe('#searchImages', () => {
        it('should return an Observable<FlicktzImage[]>', () => {
            const dummyImages = [
                { fullImage: 'image1full', thumbnail: 'image1thumb' },
                { fullImage: 'image2full', thumbnail: 'image2thumb' }
            ];

            service.search('test,tag').subscribe(images => {
                expect(images.length).toBe(2);
                expect(images).toEqual(dummyImages);
            });

            const req = httpMock.expectOne(`api/search?text=test,tag`);
            expect(req.request.method).toBe('GET');
            req.flush(dummyImages);

        });
    });

});
