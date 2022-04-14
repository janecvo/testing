const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

//Find a user named 'Jose'  find()

const userJose = users. find(user => user.firstName =='Jose');

console.log(userJose);

//Get an array of all the premium members   filter()


let premiumMembers = users.filter(function (user){
    return user.isPremiumMember;
}
)
console.log(premiumMembers);

//Get an array of all the user last names

let lastNames = users.map(function(user){
    return user["lastName"];
})

console.log(lastNames)

//Get an array of the full names who have logged in more than 10 times
//filter to get >10; map to return first and last

let logins10 = users.filter(function(user){
    return user.logins > 10;       
    }
)
console.log(logins10);


let fullNames = logins10.map(user => user.firstName + " " + user.lastName);
console.log(fullNames)


//Get the total number of logins for the list of users - reduce()

let loginsList = users.map(function(user){
    return user.logins;
    }
)
// console.log(loginsList);

let totalLogins = loginsList.reduce(function(loginsList, total) {
    return total + loginsList;})


console.log("Total logins is " + totalLogins);

module.exports = users;

