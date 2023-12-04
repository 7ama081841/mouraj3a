// Defining Object
let user = {
    // hehta el object

    // Properties
    firsName: "mohamed",
    lastName: "chaabeni",
    adresses: {
        // nejem na3mel nested Object
        manouba: "tborba",
        tounes: "zahrouni",
    },

    // Methodes
    getFoullName: function () {
        return `${user.firsName} ${user.lastName}`;
    },

    getFoullNameArrow: () => `${this.firsName} ${this.lastName}`, // nejem na3malha Arrow function
};

// Dot Notation vs Braket Notation

const myObj = {
    "one": 1,
    "two-": 2,
    1: "one", // temchi 3adi
    2: "two", // temchi 3adi
    three-: 3, // ta3tini SyntaxError
};

let myVar = "name"

let myName = {
    name : "mohamed"
};

// Dot Notation
console.log(myObj.one);
console.log(myObj.two-); // ta3tini SyntaxError
console.log(myObj.1); // ta3tini SyntaxError
console.log(myName.myVar) // ta3tini undefined

// Braket Notation
console.log(myObj["one"]); // hethi el Braket Notation
console.log(myObj["two-"]); // el mothode hethi temchi 3adi 
console.log(myObj["2"]); // temchi 3adi
console.log(myName[myVar]) // nejem n7ot variable fi3outh el string
console.log(myName["name"])

// _______________________________ new object => New Keyword ___________________________________
let obj = new Object(); // nejem na3mel el Object haka

obj.firstName = "mohamed"; // nejem na3mel set haka

obj["lastName"] = "chaabeni"; // nejem na3mel set bel Braket Notation

obj.getFulName = () => {
    // nejem na3mel function lel Objcet haka
    return `this is full name ${user.firstName} ${user.lastName} `;
};

// _________________________________ Object.create _____________________________________________

let mainObj = {
    hasDecount: false,
    Message: function () {
        return `you${mainObj.hasDecount ? "" : " don't"} hav Decount`; // nejem na3mel condition el mo5tasra
    },
    thisMessage: function () {
        return `you${this.hasDecount ? "" : " don't"} hav Decount`; // yelzemni n7ot this
    },
};

let obj1 = Object.create(mainObj); // nejem na3mel object mn object e5er

obj1.hasDecount = true; // w nejem na3malou set value 5asa bih

// Object.assign
const target = {
    prop: "value",
};

Object.assign(target, obj1, or - more, { object: "e5er" }); // ycopili el les object w y7othomli fel object ell 7ajti bih

Object.assign({}, target, { object: "e5er" }); // nejem na3mel object jdid wn7ot fih object el 9dim

// Delete Operator
delete user.name; // delete props not object
delete user["name"]; // nejem na3mel bel brackets notation
