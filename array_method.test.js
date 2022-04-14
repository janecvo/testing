const users = require('array_method.js');

describe('Test the user array for values', () => {
    test('test to see if userJose is Jose', () => {
        expect(users[4].firstName).toBe('Jose');
    });
    test('test to see if the array length is 8', () => {
        expect(users).toHaveLength(8);
    });
    test('test to see if users are premium members', () =>{
        expect(users.isPremiumMember).toBeTruthy();
    });
    
    // 'toHaveBeenCalled()'

    // 'toHaveReturned()'
});

    //toHaveBeenCalled()

    //toHaveReturned()