# flicktz

Application to display the public feed of the flickr api and search images from their tags.

Website: [flicktz](http://flicktz.s3-website.us-east-2.amazonaws.com/)

### Documentation
- [Frontend](https://github.com/SenalKumarage/flicktz/tree/develop/client)
- [Backend](https://github.com/SenalKumarage/flicktz/tree/develop/server)

### Deployment

This website is hosted in AWS s3 and ec2.

    - Angular application is hosted as a static website in an s3 bucket
    - Nodejs backend is hosted in an ec2 linux instance (nginx is used as a reverse proxy server) 