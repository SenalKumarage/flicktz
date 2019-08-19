const app = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app);

it('Gets the public-feed endpoint', async done => {
    // Sends GET Request to /public-feed endpoint
    const res = await request.get('/api/public-feed');

    expect(res.status).toBe(200);
    done();
});

it('Gets the search endpoint', async done => {
    // Sends GET Request to /search endpoint
    const res = await request.get('/api/search?text=dog');

    expect(res.status).toBe(200);
    done();
});

it('Parameterless search', async done => {
    // Sends GET Request to /search endpoint
    const res = await request.get('/api/search');

    expect(res.status).toBe(400);
    done();
});
