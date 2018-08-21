const functions = require('./functions');
const startTests = () => console.log('start tests');
const endTests = () => console.log('end tests');
const initDB = () => console.log('DB init');
const closeDB = () => console.log('DB close');
const nameCheck = () => console.log('Checking name');

beforeAll(() => startTests()); 
afterAll(() => endTests()); 
beforeEach(() => initDB()); 
afterEach(() => closeDB()); 


describe('Checking names', () => {
    beforeEach(() => nameCheck());
    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });
    test('User is Mary', () => {
        const user = 'Mary';
        expect(user).toBe('Mary');
    });
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should return null', () => {
   expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Brad Smith', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Smith' });
});

test('Load should be under 16', () => {
    const load1 = 8;
    const load2 = 7;
    expect(load1 + load2).toBeLessThan(16);
});

test('Test there is no I in team', () => {    
    expect('team').not.toMatch(/i/);
});

test('name should be in array', () => {
    const usernames = ['John', 'Mike', 'Dan'];
    expect(usernames).toContain('Mike');
});

test('name should return Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');        
});