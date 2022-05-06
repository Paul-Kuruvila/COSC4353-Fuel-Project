createApp = require('./app.js');
database = require('./database.js');
const app = createApp(database);
const supertest = require('supertest');
const requestWithSupertest = supertest(app);

//testing setup by David, Paul, and Eric

describe("Unit Tests", () => {

    it('GET /', async () => {
        const res = await requestWithSupertest.get('/');
        jest.useFakeTimers()
        expect(res.status).toEqual(200);
    })

    it('GET /loginstatus', async () => {
        const res = await requestWithSupertest.get('/loginstatus');
        jest.useFakeTimers()
        expect(res.status).toEqual(200);
    })

    it('POST /register Either Username/Password Not Entered', async () => {
        const res = await requestWithSupertest.post('/register')
        jest.useFakeTimers()
        expect(res.status).toEqual(200);
    })

    it('POST /register Unsuccessful POST', async () => {
        const res = await requestWithSupertest.post('/register')
        .send({     // sending in test parameters to receive an unsuccessful response due to internal server error
            username: 'paul',
            password: '123123',
        });
        jest.useFakeTimers()
        expect(res.status).toEqual(500);
    })

    it('POST /auth No Username/Password Inputted', async () => {
        const res = await requestWithSupertest.post('/auth')
        jest.useFakeTimers();
        expect(res.status).toEqual(401);
    })

    it('POST /auth Unsuccessful POST', async () => {
        const res = await requestWithSupertest.post('/auth')
        .send({     // sending in test parameters to receive an unsuccessful response due to internal server error
            username: 'paul',
            password: '123123',
        });
        jest.useFakeTimers();
        expect(res.status).toEqual(500);
    })

    it('POST /logout', async () => {
        const res = await requestWithSupertest.post('/logout');
        jest.useFakeTimers()
        expect(res.status).toEqual(200);
        expect(res.body.status).toEqual("Successfully logged out (FROM BACKEND)");
    })

    it('GET /profiledata Unsuccessful GET', async () => {
        const res = await requestWithSupertest.get('/profiledata')
        .send({
            username: 'paul',
            password: '123123',
            loggedin: 'yes'
        });
        jest.useFakeTimers()
        expect(res.status).toEqual(500);
    });

    it('GET /profiledata User Not Logged In', async () => {
        const res = await requestWithSupertest.get('/profiledata')
        jest.useFakeTimers()
        expect(res.status).toEqual(401);
    });

    it('POST /profile', async () => {
        const data = {
            login: true
        };
        const res = await requestWithSupertest.post('/profile')
        .send(data);
        jest.useFakeTimers()
        expect(res.status).toEqual(401);
    })

    it('POST /pricingmodulecost', async () => {
        const res = await requestWithSupertest.post('/pricingmodulecost');
        jest.useFakeTimers()
        expect(res.status).toEqual(401);
    })

    it('POST /fuelquotemodule', async () => {
        const res = await requestWithSupertest.post('/fuelquotemodule');
        jest.useFakeTimers()
        expect(res.status).toEqual(403);
    })

    it('GET /fuelquotehist', async () => {
        const res = await requestWithSupertest.get('/fuelquotehist');
        jest.useFakeTimers()
        expect(res.status).toEqual(400);
    })
})


