// bech na3mel package json n7el cmd ...
npm init // ta3mali package json

// nejem n3ayet el function mn file e5er 
function add (a , b) {
    console.log(a+b)
}

module.exports = add // yelzem na3mel module.exports lel 7aja eli n7eb n3adeha. moula7tha el module t3ayet le function ele5reneya yelzem n7ot les function fi object wna3mel lel object module.exports kima hake

const obj = { // hehta el object eli lezem na3mlou
    add,
    mult
}

module.exports = obj // haka na3malou exports

rez.add( 10 , 10) // haka n3ayet lel function mn object     

const add = require("esm el file") // ki bech n3ayet 7aja mn file e5er yelzemni n7otha fi variable 

add( 10 ,  10)

// bech na3mel server yelzemni na3mel haka
const http = require("http") // yelzemni n3ayet el http w n7otou fi variable

const server = http.createServer(callback) // w ba3d na3mel server w n7ot fih el http


const server = http.createServer( (req , res) => {  // yelzemni na3mel function lel server

    res.end("hellew") // yelzem na3mel req.and() bech na3mel affichage

} )

// bech n5adem el server haka 
server.listen(3000 , '127.207.127.100' ,() => { // el ip lezem yebda b 127 w nwamer eli ba3deou akther 7aja 3 nwamer
    console.log("server runing ...") // nejem na3mel console ki ye5dem el server
})

// ken n7eb na9ra page html fel server na3mel file sistrem kima haka
const fs = require("fs") // n3ayet el fs module

const server = http.createServer( (req , res) => {

    fs.readFile("./index.html", (errer , data) => { // ne5dem bih w fs.readFile

        if(errer){ // na3mel el condtion mte3i ken el file mahouch mawjoud y7ot el klem eli 7ajti bih
            res.end("el page hethi mouch mawjouda")
        }else { // kounchi y7ot el file
            res.end(data)
        }
    })
} )

// nejem n3ayet el module mta3 url 
const url = require("url") // haka n3ayel el url module

const server = http.createServer((req, res) => { // lezem yjiw f wost server

    const path = url.parse(req.url) // url.parse tarajli el url fi object 
    const path = url.parse(req.url).pathname // wki nzidha .pathname nejbed el name eli ba3d el /
    switch(path){ // w nejem ne5dem beha fel switch
        case "/" :
            fs.readFile("./muraj3a.html" , ( err , data) => {res.end(data)}) // nejem na3mel le method hethi
            break
        case '/user' :
            renderFile("./muraj3a.html" , res) // w nejem na3mel method hethi bel function louta 
            break
        default:
            res.end("mathamech el page hethi")
    } 

    function renderFile (file , res) { // nejem na3mel function haka w n7otha el fou9
        fs.readFile(file , (err , data ) => {
            if(err){
                res.end("this page is not found")
            }else {
                res.end(data)
            }
        }) 
    }

})