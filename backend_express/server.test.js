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

const costtest = require('./server.js')
describe("Pricing Module Tests", () => {

    test('Calculates the cost of fuel for in state ', () => {
        expect(costtest(1500, true, true, 'TX')).toEqual(2542.5);
    })

    test('Calculates the cost of fuel for out of state ', () => {
        expect(costtest(1500, true, true, 'CA')).toEqual(2587.5);
    })

    test('Calculates the cost of fuel if client has request previously ', () => {
        expect(costtest(1500, true, true, 'TX')).toEqual(2542.5);
    })

    test('Calculates the cost of fuel if client hasnt request previously ', () => {
        expect(costtest(1500, true, false, 'TX')).toEqual(2565);
    })

    test('Calculates the cost of fuel if gallons are more than 1000 ', () => {
        expect(costtest(1500, true, true, 'TX')).toEqual(2542.5);
    })

    test('Calculates the cost of fuel if gallons are less than 1000 ', () => {
        expect(costtest(200, true, true, 'TX')).toEqual(342);
    })
    
    test('Successfully create users profile', () => {
        expect(testprof(true)).toBe("Information saved.");
    })

    
})


