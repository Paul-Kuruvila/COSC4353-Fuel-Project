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


const testprof = require('./server.js')

test('Successfully create users profile', () => {
    expect(testprof(true)).toBe("Information saved.");
})
