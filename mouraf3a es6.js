// var : global scope el var nejem n3ayatlou mn ay scope
var x = 1;
var x = 2;  // nejem na3malou declaration martin
onsole.log(y)
var y = 1; // undefined
console.log(this.x) // ye5dem m3a el window 5ater globel scope ya3mel property fel window
function test() {
    var x = 1; // ye5dem fi scope el kol el de5leni wel barani 

    if (true) {
        var x = 2; // ye5dem fi scope el kol el de5leni wel barani 
        console.log(x);
    }

    console.log(x);

    return "done"
}

// let : block scope : menejemch n3ayatlou mn scope barani  
let x = 1;
let x = 2; // menejemch na3malou declaration martin
let x = 1;
x = 2;     // ama nejem na3malou assin kima haka  

onsole.log(y)
let y = 1; // ReferenceError
console.log(this.y) // t7otli undefined 5ater el let local scope
function test() {
    let x = 1; // ye5dem fi scope wa7adou 

    if (true) {
        let x = 2; // ye5dem fi scope wa7adou 
        console.log(x);
    }

    console.log(x);

    return "done"
}

// const : block scope
const x = 1;
const x = 2; // menejemch na3malou declaration martin
const x = 1;
x = 2;     // menejemch na3malou assin kima haka ama nejem na3malou poush ken howa Array
onsole.log(y)
const y = 1; // t7otli ReferenceError
console.log(this.y) // t7otli ReferenceError 5ater el const local scope
const x; // menejemch n5ali le const fer8a 
function test() {
    const x = 1; // ye5dem fi scope wa7adou 

    if (true) {
        const x = 2; // ye5dem fi scope wa7adou 
        console.log(x);
    }

    console.log(x);

    return "done"
}

// Arrow function
let test = () => 2; // if one stetment

let test = pram => 2; // if one parameter

let test = _ => 2; // nejem na3malha hake ken mn8ir parameter

let test = () => { // if multy stetment
    console.log("")
    console.log("")
    console.log("")
};

// Spread Operator 
let all = [...one, ...tow]; // ...Array ta3mali concatination lel Array wel object w tfarakli le Array

// default parameter
function user(userName, rel, them) { // nejem ma3mel default value lel parameter
    userName = userName === undefined ? 'default user' : userName;
    rel = rel === undefined ? 'default rel' : rel;
    them = them === undefined ? 'default them' : them;
    return `${userName} ${rel} ${them}`;
} // hethi kenet le methode 1 el 9dima bech na3mel default value

function user(userName, rel, them) {
    userName = userName || 'default user';
    rel = rel || 'default rel';
    them = them || 'default them';
    return `${userName} ${rel} ${them}`;
} // hethi el methode 2 el 9dima 

function user(userName = "default user", rel = "default rel", them = "default them") {
    return `${userName} ${rel} ${them}`;
} // hethi el mothode mta3 es6

// Rest Parameter
function sum(a, b, c, ...pram) { // nejem na3mel prams infinity 

}
sum(5, 9, 7, 42, 928);

// StartWith , EndsWith
let x = "mohamed chabeni "
console.log(x.startsWith("m", 5)) // ya3tini ken le esem yebda bhetheka wala nn
console.log(x.endsWith("m", 4)) // ya3tini ken le esem youfa bhetheka wala nn

// includes , repeat
console.log(x.includes("ch", 5)) // ya3tini ken el jomla feha el kelma hethika wala nn . te5dem boolean

console.log(x.repeat(10000)) // ta3mali repeat lel string

// Destructuring
// Destructuring object
const user = {
    name: 'mohamed',
    age: 25,
    city: "tunis",
    tel: 58129031,
    gender: 'male'
}
let n = user.name,
    a = user.age,
    c = user.city,
    t = user.tel,
    g = user.gender
    console.log(`i am ${n}, my age ${a}, `); // hethi el methode el 9dima

const { name, age } = user; // hethi el methode el jdida fel es6
 ({ name, age } = user); // hethi el methode el jdida fel es6
// __________________________________
let name = "dfault",
    age = "dfault"; // fel 3adi ytala3li erer y9oli rak 3amel declaration 9bal 

const user = { 
    name: 'mohamed',
    age: 25,
    city: "tunis",
    tel: 58129031,
    gender: 'male',
    thim : "red"
}; // <= el semi colomn lezma

({ name, age } = user); // ama bel methode hethi temchi normal 

const {name , age , thim = "default" } = user ; // nejem na3mel default value ken mathamech el variable fel object

const { name: n, age : a , thim : t = "default" } = user; // nejem nbadel el name el 7aja o5ra 

const { name: n, age, langes: { html, css, js } } = user; // nejem nejbed object eli f wost object kima hake 

console.log(`i am ${n}, my age ${age}, ${html} , ${css} , ${js} `); // nejem na5tar kol 7aja wa7adha

const { html, css, js } = user.langes; // nejem nejbed object mn wost object kima haka 

// Destructuring Array
const food = ["loubya", "jolbena", "ma9rouna"]

const [l, j, m] = food ; // nejem kol 7aja eli fel Array n7otha f variable 
// _____________________________________________________________
let l = "lm"; // fel 3adi ytala3li erer y9oli rak 3amel declaration 9bal 

const food = ["loubya", "jolbena", "ma9rouna"]; // <= el semi colomn lezma 

[l, j, m] = food; // ama bel methode hethi temchi normal ama fel Destructuring Array me8ir a9wes

[l = "default", j, m] = food; // nejem na3mel default value kima Destructuring object

[l, , m] = food; // nejem na3mel skeep el 7aja fel Array 

const food = ["loubya", "jolbena", "ma9rouna", ["orange", "romen", "banan"]]; // nejem na3mel Array f wost Array 

const [l, j, m, [fr1, fr2, fr3]] = food; // w hethi el Destructuring mte3ha 

const [l, j, m, ...elbe9i] = food; // ken el Array feha barcha items na3mel el methode hethi

[vedio, boock] = [boock, vedio]; // nejem na3mel change bin el variabels

// Destructuring Mixed Content
const { name, age, city, skills: { html, css, js: [R, j, n] }, } = user;

console.log(` i am ${name} my age ${age} i am from ${city} my skills html : ${html} ,
css : ${css} , ${R} , ${j} and ${n} `) // this is output

//  Destructuring Function Parameter
function myUser({ name, age, city, skills: { html, css, js: { ReactJs, jquery, nodeJs } } } = user) { // nafs eli 3maltou el fou9 na3mlou fel paramerer ama mn 8ir mn 7ot const

    console.log(` i am ${name} my age ${age} i am from ${city} my skills html : ${html} ,
    css : ${css} ReactJs : ${ReactJs} jquery ${jquery} and nodeJs : ${nodeJs} `)

}

// Enhaance Object Literals
const rirsName = "mohamed",
    lastName = "chaabeni";

const user = {
    rirsName, // ki yebda el name mta3 el key kima el name mta3 el variable mn 8ir mn 7ot el value mta3 el key 
    lastName ,

    // methode 
    myMethode : function (pram) { //heti el methode mn 8ir el e5tsar
        return pram 
    } ,
    myMethode (pram) { // heha el e5tisar mta3 methode
        return pram 
    } 
}

let myVar = "key";
const myObj = {
    myProp: "value",
}

myObj["myVar"] = myVar // hethi el methode el 9dima 9bal ES6 


let myVar = "key";
const myObj = {
    myProp: "value",
    [myVar]: "salim" // hethi el mothode el jdida fel ES6
}

// Set vs Array
const mySet = new Set([/* Element Iterable loop */])
const mySet = new Set([1, 2, 3, 3, 5, 5]) // el far9 binha w bin el Array ki n7otelha number wala string m3awdin met3awedhomch fel console

console.log(mySet[1]) // el Set mete5demch bel index

const myArray = [1, 2 , 3]

const mySet = new Set(myArray) // nejem nrod el Array le Set 

let myArray2 = [...mySet] // nejem nraja3 el Set el Array

// Set methode 
mySet.add("mohamed").add("chaabeni") // nejem nzid 7aja lel Set

let mySet = new Set("mohamed") // return { 'm', 'o', 'h', 'a', 'e', 'd' }

mySet.add("chaameni") // return { 'm', 'o', 'h', 'a', 'e', 'd', 'chaameni' }

mySet.delete("m") // ta3mali delete

mySet.size // ta3tini 9adech thama mn Element

mySet.clear() // tna7ili eli fel Set el kol

mySet.has("Chaabeni".toLowerCase()) // nejem na3mel check w nejem n7ot methode m3aha

// Map vs Object
let myMap = new Map(); // hethi el declaration mta3 el Map

// hethi el method 1
// bech na3mel set lel value lezem el key bin ("") nejem n7ot bolean mn8ir ("")
myMap.set("firstName", "mohamed").set("lastName", "chaabeni").set("age", "30").set(false , 'bolean')

//nejem na3mel haka 
myMap.set("firstName", "mohamed")
    .set("lastName", "chaabeni")
    .set("age", "30")
    .set(false , 'bolean')

// w haka
myMap.set("firstName", "mohamed")
myMap.set("lastName", "chaabeni")
myMap.set("age", "30")
myMap.set(false , 'bolean')

// nejem n7ot ebject
myMap.set( {firsName : "mohemed" , age : 30 } , 'object')
// nejem n7ot function
myMap.set( function myFunc() {} , 'function')
// nejem n7ot Array 
myMap.set([1, 2, 3], 'Array')

// hethi method 2
myMap = new Map([
    ["firstName", "mohamed"],
    ["lastName", "chaabeni"],
    ["age", "30"],
]);

// Map Methods
myMap.size // ta3tini el size mta3 el Map 

myMap.get("firstName") // ya3tini el value mta3 el kay

myMap.has('mohamed') // ta3meli check 3al key w traja3li bolean

myMap.delete("firstName") // ya3meli delete lel key 

myMap.clear() // ya3mali clear lel Map 

// Symbols
const mySymbol1 = Symbol("testing"); // hethi el declaration mta3 Symbol w data type mta3ha Symbol w heya Uniqe

const mySymbol2 = Symbol("testing"); // nejem na3mel description feha

console.log(mySymbol1 === mySymbol2); // return false 5ater uniqe

const myObj = {
    firsName : "mohamed",
    lastName : "chaabeni",
    age : 30 ,
    [mySymbol] : "this is symbol" // el Sembol privet fel Object
}

console.log(myObj.mySymbol); // ama tetla3li fel console

for (let val of Object.entries(myObj)){
    console.log(val) // me tetla3lich fel loop 
}

console.log(Object.getOwnPropertyNames(myObj)) // me tetla3lich houni
console.log(Object.keys(myObj)) // me tetla3lich houni
console.log(Object.getOwnPropertySymbols(myObj)) // ama houni tetla3

// Symbols Methods
const mySymbol1 = Symbol.for("testing"); // ya3mali creation Sembol 
const mySymbol2 = Symbol.for("testing"); // ya3mali select lel Sembol 

console.log(mySymbol1 === mySymbol2); // return true

onsole.log(Symbol.keyFor(mySymbol2)); // return key for Symbol mete5dem ken ki na3mel Symbol.fol()

// moula7tha
p.innerHTML = mySymbol2; // menejemch na3malou affichage 5ater mahouch string
alert(mySymbol2); // w hetha kifou 

// ama nejem na3mel affichage bel keyFor kima haka
p.innerHTML = Symbol.keyFor(mySymbol2);
alert(Symbol.keyFor(mySymbol2));

console.log(mySymbol2.description); // nejem ntala3 el description

// forEach
let arr = [1,2,3,,5]

for (i = 0 ; i < arr.length ; i ++) { // hethi el loop el 3adiya 

    console.log(` ${i} ${arr[i]} `) // meta3malch skeep lel empty value tjini undefined 

}

arr.forEach(( element , index ) => { // hethi el forEach 

    console.log(` ${h} ${el} `) // ta3mali skeep lel empty value

})

function loop (el , i ) {
    console.log(` ${i} ${el} `)
}

arr.forEach(loop) // nejem na3mel function w n7otha fel forEach

// forEach with Set & Map
const set = new Set([1,2,2,5])

set.forEach((set ) => { // meyelzemch n7ot m3aha el index 5ater el Set mete5demch bel index
    console.log(` ${set} `)
})

const myMap = new Map([["mohamed","chaabeni"],["sara","chaabeni"],["emna","cjaabeni"]])

myMap.forEach((key , value ) => { // nejem n7ot key w value bark
    console.log(` ${key} ${value} `) 
})

// Set vs WeakSet
const myWeakSet = new WeakSet() // hethi el declaration mta3 el Weaklset

// hetha el deferance bin el Set wel WeakSet
myWeakSet.size // return undefined 
myWeakSet.keys() // return TypeError: myWeak.keysSet is not a function
myWeakSet.add("string") // return TypeError: Invalid value 

myWeakSet.forEach(el => { // menejemch na3mel forEach
    console.log(el)
}); // return TypeError: myWeakSet.forEach is not a function

// Map vs WeakMap
let myWeakMap = new WeakMap() // hethi el declaration mta3 WeakMap 

myWeakMap.set( "a" , 1) // return  TypeError: Invalid value 5aterha te9bel ken object

myWeakMap.size // return undefined

// Symbol Iterator / And For ... Of Loop
let myArray = ["mohamed"] // Iterator
let myName = "mohamed" // Iterator
let myNumber = 5000 // not Iterator
let myObject = {} // not Iterator

console.log( typeof( myArray[Symbol.iterator])) // haka nchouf ken el element Iterator wala nn

console.log( myArray[Symbol.iterator]()) // wki nzidha el () twali t5arajli object

// Array wala String .next() 
console.log(itr.next()) // { value: 'm', done: false }
console.log(itr.next()) // { value: 'o', done: false }
console.log(itr.next()) // { value: 'h', done: false }
console.log(itr.next()) // { value: 'a', done: false }
console.log(itr.next()) // { value: 'm', done: false }
console.log(itr.next()) // { value: 'e', done: false }
console.log(itr.next()) // { value: 'd', done: false }
console.log(itr.next()) // { value: undefined , done: true } 5ater el loop ye9ef houni

// Custom Iterable Object
let myObject = {
    name : "mohamed",
    age : 30 ,
    country : "tunis"
}

for (let p of myObject) { // ki na3mel Object w n7eb na3malou loop ya3tini errer : TypeError: myObject is not iterable
    console.log(p)
}

let myObject = {
    name : "mohamed",
    age : 30 ,
    country : "tunis" ,
    [Symbol.iterator] () { // yelzemni na3mel method Symbol.iterator bech nrod el objeft fih iterator

        let step = 0 ; // na3mel counter yebda mn index 0

        let keys = Object.keys(this) // bech tjibli el key mta3 el object eli ena fih

        return { // ba3d nraja3 el method next 

            next() { // w fel next nraja3 value w done

                return{
                    value: keys[step] , // el step heya el index 
                    value : myObject[keys[step]] , // ki n7eb netba3 el value mta3 el key n7ot objectName[] 
                    done: step++ === key.length // w haka to93ed t9adem w te9ef fele5er
                }

            }

        }

    }
}

// Generators
function * generator () { // haka na3mel generator w heya ta3mel iterator

    yield 1 // yhi feha yield w meyjich feha return
    yield 2
    yield 3
    yield 4
    yield 5

}

function* generatorNumber(num) { // nejem na3mel generator ya3mali iterator
    for (let i = 0; i < num.length; i++) {
        yield num[i];
    }
}

function * generatorNumber() {
    yield * [10, 20, 30, 40, 50]; // nejem n7ot Array kima haka
}

// Generators functionality & return
function * generatorBoock () {
    
    window.alert("you clicked on button to order a book")
    console.log("you clicked on button to order a book")
    
    window.alert("you added the book to cart")
    console.log("you added the book to cart");
    
    window.alert("peyment is done")
    console.log("peyment is done")

}

generatorBoock().next(); // el function hethi menejem nmacheha ken haka 

function * scils () {

    yield "html"
    yield "css"
    yield "javascript"
    yield "reactjs"

}

let mySkils = scils();

for (let skil of mySkils) { // haka na3mel loop 3al iterator
    console.log(skil)
}


for (let skil of scils()) { // haka na3mel loop 3al generator
    console.log(skil);
}

// test return
function* scils() {
    yield "html";
    yield "css";
    return "javascript"; // el raturn ken tji fi wost el yield twa3ef el yield eli be3dha 
    yield "reactjs";
}

// Generators Infinite Numbers
function* infinityNumber() {
    let i = 0; // the start

    while (true) { // na3mel while bech to93ed el generator te5dem
        yield i++;
    }
}

for (let num of infinityNumber()) { // hethi el loop eli bech tet3ade 3al generator
    if (num > 20) {
        break;
    }

    console.log(num);
}

// Delegating Generators 
function* numbers() { // generator 1 
    yield 1;
    yield 2;
    yield 3;
}
function* names() { // generator 2
    yield "mohamed";
    yield "sara";
    yield "ahmed";
}

function* generateAll() { // el generator ynoub el generator 1 w generator 2
    yield* names();
    yield* numbers();
}

let all = generateAll();

console.log(all.next())
console.log(all.next())
console.log(all.next())
console.log(all.next())
console.log(all.next())
console.log(all.next())
console.log(all.next())

// promes
const myPromes = new Promise( ( resolfe , reject ) => { // hethi el declaration mta3 el promis el (resolfe) ma3neha el promis t7a9e9 wel (reject) ma3neha met7a9a9ch 
    console.log("welcome to my promis")
}) // typeof promis => object

myPromes.then ( // el then heya eli tchouf eli promis t7a9e9 ou nn
    (resolfed) => console.log(resolfed), // hne ken el promis t7a9e9 
    (rejected) => console.log(rejected) // hne ken el promis met7e9a9ch
) // el then yet7at feha arrow function 

const theResolved = resolved => console.log(resolved); // this is arrow function 
const therejected = rejected => console.log(rejected);

myPromise.then(theResolved , therejected); // nejem na3mel el e5tisar hetha

const myPromise = new Promise( (resolve, reject) => {
    // Only One State Allowed
    resolve("Resolved"); // ya9rali ken el star elouleni 
    reject("Rejected"); // hehta meyeta9rach
})

myPromise.catch( rejected => console.log(rejected) ) // el catch ta9bel ken reject ama el then te9bel el resolve wel reject

myPromes.then(null , (rejected) => console.log(rejected)) // nejem nrodha tre9bel el reject bark

