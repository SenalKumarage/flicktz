const request = require("request-promise");

const imageService = class ImageService {

    async getPublicFeed() {
        console.log('Getting public feed');

        // Configure the request
        let options = {
            url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
            method: 'GET',
            json: true
        }

        const data =  await request(options);

        return data.items;
    }
}

module.exports = imageService;