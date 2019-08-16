const request = require('request');
const bodyParser = require('body-parser');

const imageService = class ImageService {

    async getPublicFeed() {
        console.log('Getting public feed');

        // Set the headers
        let headers = {
            'Content-Type': 'application/json'
        }

        // Configure the request
        let options = {
            url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
            method: 'GET',
            headers: headers
        }

        return await request(options,
            (error, response, body) => {
                if (error) return error;

                console.log(typeof body);
                function jsonFlickrFeed(data) {

                    console.log(data);
                }
                return { body, response };
            })
    }


}



module.exports = imageService;