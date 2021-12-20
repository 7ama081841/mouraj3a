// Defining Object 
let user = { // hehta el object 
    // Properties
    firsName: "mohamed",
    lastName: "chaabeni",
    adresses: { // nejem na3mel Object f wost Object
        manouba : "tborba",
        tounes : "zahrouni"
    } ,
    // Methodes
    getFoullName: function () {
        return `${user.firsName} ${user.lastName}`
    },

    getFoullName: () =>  `${user.firsName} ${user.lastName}` // nejem na3malha Arrow function
    

};

// Dot Notation vs Braket Notation 
let user = {

    "name": "mohamed",
    "age": 32

};

// Dot Notation
console.log(user.name) // hethi el Dot Notation
console.log(user.name -)  // ta3mali SyntaxError ken n7ot el (-)

// Braket Notation
console.log(user["name"]) // hethi el Dot Notation
console.log(user["age-"])  // t7otli undefined
// _________________________________________________________________________
let user = {

    1 : "one",
    2 : "two"

};

// Dot Notation
console.log(user.1) // ta3mali SyntaxError

// Braket Notation
console.log(user[1]) // tedem normal
// ______________________________________________________________
let = x = "name";

let user = {
    name: "mohamed"
};

// Dot Notation
console.log(user.x) // t7otli undefined

// Braket Notation
console.log(user[myVariable]) // te5dem normal

// New Keyword
