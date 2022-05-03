const server = require('./server.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

// const { createPool } = require("mysql2/promise");
// const faker = require("@faker-js/faker");

//testing setup by David, Paul, and Eric




/*const testreg = require('./server.js')

test('Properly registers user', () => {
    expect(testreg(true)).toBe("Account created. (BACKEND)");
})*/

/*const testlog = require('./server.js')

test('Checks if user is logged in', () => {
    expect(testlog(true)).toBe("Successfully logged in. (FROM BACKEND)");
})*/

/*const testfuel = require('./server.js')

test('Generates fuel quote form for user', () => {
    expect(testfuel(true)).toBe("Fuel quote form was successfully generated.");
})*/


/*const testlogout = require('./server.js')

test('Successfully logs out the user', () => {
    expect(testlogout(false)).toBe("Successfully logged out (FROM BACKEND)");
})*/


/*const testprof = require('./server.js')

test('Successfully create users profile', () => {
    expect(testprof(true)).toBe("Information saved.");
})*/

//const costtest = require('./server.js')
describe("Unit Tests", () => {
    //jest.setTimeout(100000)
    // test('Calculates the cost of fuel for in state ', () => {
    //     expect(costtest(1500, true, true, 'TX')).toEqual(2542.5);
    // })

    // test('Calculates the cost of fuel for out of state ', () => {
    //     expect(costtest(1500, true, true, 'CA')).toEqual(2587.5);
    // })

    // test('Calculates the cost of fuel if client has request previously ', () => {
    //     expect(costtest(1500, true, true, 'TX')).toEqual(2542.5);
    // })

    // test('Calculates the cost of fuel if client hasnt request previously ', () => {
    //     expect(costtest(1500, true, false, 'TX')).toEqual(2565);
    // })

    // test('Calculates the cost of fuel if gallons are more than 1000 ', () => {
    //     expect(costtest(1500, true, true, 'TX')).toEqual(2542.5);
    // })

    // test('Calculates the cost of fuel if gallons are less than 1000 ', () => {
    //     expect(costtest(200, true, true, 'TX')).toEqual(342);
    // })
    
    // test('Successfully create users profile', () => {
    //     expect(testprof(true)).toBe("Information saved.");
    // })

    // let connection;

    // beforeEach(async () => {
    //     let createTableSQL =
    //     "CREATE TABLE `users` ( `id` INT(2) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";

    //     connection = await createPool({
    //         host     : 'localhost',
    //         user     : 'root',
    //         password : 'admin',
    //         database : 'nodelogin',
    //         port: 5000,
    //     });
    //     console.log("Connected to database");

    //     await connection.query(createTableSQL);
    // });

    // it("Test CREATE and READ", async () => {
    //     try {
    //     const total_test_users = 3;
    //     let insertQueries = [];

    //     for (let i = 0; i < total_test_users; i++) {
    //         let insertSQL = `INSERT INTO users (id, name, email) VALUES (NULL, '${faker.name.findName()}', '${faker.internet.email()}');`;

    //         insertQueries.push(connection.query(insertSQL));
    //     }

    //     await Promise.all(insertQueries);

    //     const [rows, fields] = await connection.query("SELECT * FROM users");

    //     expect(rows.length).toBe(total_test_users);
    //     } catch (error) {
    //     console.log(error);
    //     let dropTableSQL = "DROP TABLE IF EXISTS `users`";
    //     await connection.query(dropTableSQL);
    //     await connection.end();
    //     }
    // }, 60000);

    // afterEach(async () => {
    //     let dropTableSQL = "DROP TABLE IF EXISTS `users`";
    //     await connection.query(dropTableSQL);
    //     await connection.end();
    // });

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


