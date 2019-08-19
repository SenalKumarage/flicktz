const request = require("request-promise");
const Flickr = require('flickr-sdk');
const config = require('../config');

/**
 * This file is responsible for the business logic of the images from
 * flickr api
 */
const imageService = class ImageService {

    constructor() {

        this.flickr = new Flickr(config.flickrApi);
    }

    /**
     * This will return the public feed of flickr
     */
    async getPublicFeed() {

        let options = {
            url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&safe_search=1',
            method: 'GET',
            json: true
        }

        const data =  await request(options);

        return this.parsePublicFeed(data.items);
    }


    /**
     * This will search photos which has the tags passed by the user
     * @param {string} searchTerm A comma separated string
     */
    async searchByString(searchTerm) {

        const searchRes = await this.flickr.photos.search({
            tags: searchTerm,
            safe_search : 1 
        });

        return this.parseSearchResult(searchRes.body);
    }

    /**
     * This will convert the flicker search result into an array of image links
     * @param {object} res 
     */
    parseSearchResult(res) {

        if(res.photos && res.photos.photo && res.photos.photo.length > 0) {

            // parsing into thumbnail and full image
            return res.photos.photo.map(item => {
                return {
                    thumbnail: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`,
                    fullImage: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_z.jpg`
                }
            });
        } else {
            return [];
        }
    }

    /**
     * This will parse the public feed into thumbnails and
     * full images so that the response to the front end will be
     * consistent
     * @param {array} publicFeed 
     */
    parsePublicFeed(publicFeed) {

        return publicFeed.map(item => {

            if(item.media && item.media.m) {

                let imgLink = item.media.m.slice(0, -5);

                return {
                    thumbnail: `${imgLink}n.jpg`,
                    fullImage: `${imgLink}z.jpg`
                };
            }
        });
    }
}

module.exports = imageService;