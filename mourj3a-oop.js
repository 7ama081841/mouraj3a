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
console.log(user.name - )  // ta3mali SyntaxError ken n7ot el (-)

// Braket Notation
console.log(user["name"]) // hethi el Braket Notation
console.log(user["age-"])  // t7otli undefined
// _________________________________________________________________________
let user = {

    1 : "one", // nejem a3mel el key kima haka
    2 : "two"

};

// Dot Notation
console.log(user.1) // ta3mali SyntaxError

// Braket Notation
console.log(user[1]) // tedem normal
// ______________________________________________________________
let x = "name";

let user = {
    name: "mohamed"
};

// Dot Notation
console.log(user.x) // t7otli undefined

// Braket Notation
console.log(user[myVariable]) // te5dem normal

// New Keyword
let user = new Object() // nejem na3mel el Object haka 

user.firstName = "mohamed" // nejem na3mel set haka

user["lastName"] = "chaabeni" // nejem na3mel set bel method hethi

user.getFulName =  () => { // nejem na3mel function lel Objcet haka
    return `this is full nama ${user.firstName} ${user.lastName} `
}

// Object.create
let mainObj = {
    hasDecount : false , 
    Message : function () {
        return `you${mainObj.hasDecount ? "" : " don't"} hav Decount`; // nejem na3mel condition el mo5tasra
    }
}

let obj1 = Object.create(mainObj) // nejem na3mel object mn object e5er

obj1.hasDecount = true // w nejem na3malou set value 5asa bih

// Object.assign

const target = {
    prop : "value" 
}

Object.assign(target, obj1 , or-more, {object : "e5er"} ); // ycopili el les object w y7othomli fel object ell 7ajti bih

Object.assign( {} , target, {object : "e5er"} ); // nejem na3mel object jdid wn7ot fih object el 9dim

// Delete Operator
delete user.name // delete props not object
delete user["name"] // nejem na3mel bel brackets notation

