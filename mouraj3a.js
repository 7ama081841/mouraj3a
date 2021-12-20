                                // start javaScript
                                // data type
// boolean: (true , false) ma3neha s7i7 wala 8alet 

// array: ["mohamed" , "yessin" , "ahmed"] ne5demha haka 
var esemi = ["mohamed" , "ahmed" , "emna" ];

// object: {model: 2020 color: yellow type: ferrary} na3malha haka 
var car = {model: "2020", color: "red" , type: "firrary"};

// ken n7eb netba3ha wnetba3ha nekteb esm el vdaryable .el 7aja eli bech netba3ha mn object
document.getElementById("test").innerHTML = car.type ; 

// string: ya3ni text ay 7aja tji bin "" tkoun string 

// number: ya3ni nwamer yetketbou me8ir ""

// undefined el defolde value ya3ni variable fere8

// ken n7eb nchouf el data type mta3 el variable na3mel typeof fel console

                            // conditional operators
/* 
  ( = ) n7ot beha el value 
  ( == ) n9aren beha el value akahaw
  ( === ) n9aren beha el value w data type 
  ( ! ) ma3neha you5alef ya3ni mouch 
  ( != ) ki n7ot m3aha tousewi t5alef el value akahaw 
  ( !== ) wki n7ot m3aha doble tousewi t5alef el vlue wel data type
  ( && ) and 
  ( || ) or 
 */
 
                            // if / else
 if (/* el chart eli 7ajti bih */ ){
   // el code bech na3mlou 
}  // w ken n7eb neid chart e5er na3meml  
else if (/* el chart eli 7ajti bih */ ){
    //  el code bech na3mlou
} //we5er 7aja 
else {
    // el code le5reni
}

                            // function

    function esm-el-func(parametrs-function){
        // code function
    }
    esm-el-func()// bech te5dem wnejem n5adamha bel button

                        // return
function syhi(){

    var hi = "hellow";

    return hi; // ken n7eb n5arej 7aja mn function yelzem return w esm el varyable
}

document.getElementById("test").innerHTML = syhi() ; // wba3d n7ot esm el funtion fel innerHTML

                            // function parameters 
function func(pram1, pram2, pram2){

    return pram1 ; // n7ot esm el parametre f return wken n7eb n5arej 3 parametrs na3mel 3 return

};

document.getElementById("test").innerHTML= func("esm el parametre");

                            // self invoke
(function hellow(){

    var hi = "hellow";

    alert(hi);

}()); // ki na3mel el a9wes hethouma el function te5dem wa7adha 

                            // switch / case
var season = prompt("chneya a7sen fasen 3andek ?"); // yelzemni na3mel variable fih promrpt

switch(esm-el-variable-eli-n9aren-bih) // wyelzemni n7el el brakets {w fi wostha nekteb el mo9arna }

{

case "el 5rif": // houni nekteb el 7aja eli n7eb n9aranha 

    alert("tetsa3et fih awra9 el achjar"); // el code eli bich na3mlou ken yetla3 el code s7i7 

    break; // hethi nwa9ef beha el code 

case "el chte": // w nejem n7ot 2 case ymachiw nafs el code
case "el rbi3":

    alert("a7sen fasl fihom");

    break ;

case "el sif":

    alert("el fasl mta3 tcha5li3");

    break ; 

default: // w hethi e5er 7aja te5dem kima el else

    alert("ekteb el ta9s eli t7ebou");

    break; 

                            // Scope 

var x = "mohemed" // global scope 

// eli fel global ynejem yod5ol lel local

        function local(){ // local scope

            var  x = "ahmed" ;   //  ki ena7i el var twali tbadel el value lel global scope
            
            // w ki ena7i el variable bkolha twali te5ou el value mta3 global scope 

            // eli fel local meynejemch yo5rej lel global ken me na3mel el return

            return x ; // n5arej beha eli fel local

            console.log(x) // yetba3 el local scope 

            function wostElfunc(){

                var x = 50;

                console.log(x)


            }
            
            return wostElfunc() // yelzemni na3mel return el function el de5lenya 
        }

local() // yelzemni n3ayet el function bech yjibli mn local

console.log(local()) ; // yelzemni n7ot esm el function bech n5arej eli f local bel return  

console.log(x); // hethi tetba3 el global scope

                            // Events
 <script>  // nejem na3mal el script hetha fel html 
window.onload = function (){   // winow.onload ken n7eb na3mel el event lel page el kol el event heya onload ya3ni oa9tli telichargi el page wyelzem temchi m3a el function  
document.getElementById("test").innerHTML = "jari el ta7mil"
}
</script>

.onloawd // wa9teli telicharga el page

.onclick // wa9tli el we7ed yenzel nazla wa7da 

.ondblclick // watli el we7ed yenzel martin

.onkeydown // ki nebda nenzel 

.onkeyup // wa9tli na7i sob3e 3al nutton 

.onkeypress // wa9tli nenzel 3al button

.onmouseover // wa9li n7ot el sori 3al element

.onmouseout // wa9tli ena7i el sori 3al element

.onchange // kif tetbadel el 7aja laktharya te5dem m3a select 

                            // array
var so7ab = ["mohamed", "yassine", "hamdi", ]; // teta3mal haka 

console.log(so7ab[2]); // ken n7eb nejbed 7aja bark mn array n7ot [ra9m el index] el index yebda mn 0 

if (Array.isArray(esm-el-variable)){ /* ken n7eb netfa9ed el variable Array wala le na3mel 
    Array.isArray(esm el variable ) wthama tari9a o5ra 
    esm el variable.constructor === Array */

    console.log("hetha Array")

}else{
    console.log("mahouch Array")
}

console.log(so7ab.length); // 3andi .length tala3li 9adech thama mn 7aja ama azyed b ra9m mn index 

so7ab.length = 1 ; // nejem net7akem 9adeh thama mn 7aja fel Array 

console.log(so7ab.toString()); // bech nrod el Array el string na3mel el  Array.toString() el a9wes ethoukom lezmin

so7ab = so7ab.toLocaleString() ; // kif eli 9balha ama el far9 eli bnethom temchi 3ala 7adb el parameter mta3 kol we7ed fel pc

so7ab = so7ab.join(" - ") ; // trod el Array string wnejem n7ot 7aja bin el a9wes ama yelzemni el 7aja eli bech n7otha bin ("",'') len me n7ot chay el defold value mte3ha t7ot (,)

so7ab[3] = "farah"; // ken n7eb nzid 7aja lel Array wnejem n7ot el variable fi3outh el ra9m kima haka 

so7ab[so7ab.length] = "farah"; // hetha ken mana3rafch 9ade feha mn lenght fel Array 

so7ab.push("fathi") ; // tzidli el 7aja mn le5er ama meritch 7ata far9 binha wbin [so7ab.length]

so7ab.unshift("sahar"); // tzidli el 7aja mn loul 

so7ab.splice(/* el ra9m el index eli n7eb nebda bih */,/* 9adech n7eb ena7i mn 7aja  */,/*" el 7ajet eli n7eb nzidhom "*/); // .splice t5alini nzid wala ena7i el 7ajet eli 7ajti bihom 7ata ken mn wost el Array mouch mn loul wala mn le5er akahaw */

so7ab.pop() // yna7ili el 7aja mn le5er ama .splice 5ir menha b barha 

console.log(so7ab.pop()); // wli n7ot el .pop() fel console tzid tond5ol b3athha w tna7ili 9bal le5raneya 
so7ab.shift() ; // 3aks el .unshift tfasa5li el7aja mn loul 

console.log(so7ab.shift()); // ki n7ot el .shift() fel console twarili el 7aja el loulaneya eli na7atha ama tod5el b3athha twali tna7i el zouz el wela 

so7ab.sort() ; // tnathamli el alfabe wel nwamer ama el mochkla fel nwamer 3adi t7ot el 100 9bal 2 5ater feha 1 as8er mn 2 

so7ab.reverse() // tnathamli el alfabe kima sort ama bel 3aks

var cheri7a = so7ab.slice(/* numero de start */,/* numero de fin ken me nektbouch tkamel el e5er el Array */); // .slice tejbedli parti mel Array ama lezem el Array n7otha fi variable wnejem bel seleb (-4,-1) w menejemch ne5dem -0

var damj = damj.concat(el-variable-El-Oula,el-variable-el-thenya); // .concat t5alini na3mel melonge lel Array w yelzemni na3mel variable bech na3mel feha el melonge 

console.log(damj.indexOf("esm eli 7ajti bih fel Array",/* start de index ken menektbech yebda mn index 0 ken menektebhech normal */ )); // .indexOf y5alini na3mel seatrch 3al eli fi wost el Array w y5arajli ra9m el index 

jklm.lastIndexOf(); // hethi tebda tlawej mn e5er el Array ya3ni tabde tlawej mn louta el fou9   ken n7ot index 9bal el 7aja eli 7jti beha tetla3 el fou9 wt5aleha metahbatch elouta    

console.log(damj[9]); // ken n7eb nejbed eli fel Array bel ra9m el index 

var a7senSo7ab = damj.indexOf("hana"); // w nejam n7otha fi variable o5ra wnejbed el variable fi3outh menekteb ra9m el index kima hake : 

console.log(damj[a7senSo7ab]); 

                                // strings 
ht = html.indexOf(/*nekteb el kelma eli 7jti beha*/,/*ra9m el index mnin yebda*/); // .indexOf te5dem kima eli fel Array 

fhk.lastIndexOf(); // te5dem kima eli fel Array 

higr.search("") // te5dem kima eli fel Array 

him = hjk.String(esm-el-variable) // te5dem kima .toString eli fel Array yelzem el 7arf el louleni capital kima haka (.String)

fhi= jiu.search(/LOVE/i); // .search tlawej bel kelma kemla ama el .indexOf tlawej bel 7arf akahaw fel .search thama far9 bin el 7rouf haka (a , A) thama option t5ali le search metfara9ch binethom fi3outh nekteb haka ("mohamed")nekteb haka (/Mohamed/i) el (i) hethika ma3neha el 7rouf mouch 7asesa lel capital wel smul

fhi= jiu.split(/*el 7arf mta3 string eli nektbou yrodou coma*/,/*9adech n7eb n5arej mn kelma*/); // .split() trodli el string el Array el a9wes hethoukom yet7at feha ("") we ela na3mel espace (" ") 

fhi= jiu.slice(/*start index*/,/*end index*/); // te5dem kima el slice mta3 el Array 

fhi= jiu.substr(/*start de index*/,/*length mta3 el kelma*/); // te5dem kima el slice ama 8ir n7ot el length mta3 el kelma eli bdit menha 

fhi= jiu.substring(10,7); // kima .substr

fhi = jiu.charAt(/*ra3m el index*/); // ntala3li el 7arf bel index w ken n7eb ntala3 e5er 7arf na3mel (variable.length -5)

fhi = jiu.charCodeAt(/*ra3m el index*/); // ntala3li el uniCode mta3 el 7arf wala el ra9m

fhi = String.fromCharCode(/*ra9m el uniCode*/) // t5alini nekteb bel uniCode moula7tha el String.fromCharCode el String tahi tetba3 el .fromCharCode mahouch esm variable

fhi = jiu.replace(/*el kelma eli bech nbadalha*/,/*al kelma el jdida*/); // nbadel beha el kelma b kelma o5ra w ki n7ot el kelma m3aha g kima haka (/javascript/g) ya3ni ki yel9a kelma o5ra kifha y3awed ybadalha wel capital mouch kima el smul ken n7eb nrodha me tfara9ch bin el capital wel dsmul na3mel haka (/el-kelma/i) w ki b7eb el zouz m3a b3athhom ma3mel haka (/gi/) w hetha mithel :
fhi = jiu.replace(/javascript/g) // ken n7eb nlawej 3ala barcha kelmet mn nafs el naw3

fhi = jiu.replace(/javascript/i) // ken n7enb me tfara9ch bin el capital wel smul 

fhi = jiu.replace(/javascript/gi) // ken n7eb na3malhom el zouz m3a b3athhom  

fhi = jiu.concat( /*nejem nekteb sring*/,/*wala varianle*/); // ta3mali damj lel string wel variable 

fhi = jiu.toLowerCase(); // trodli el 7rouf smul 

i = jiu.toUpperCase(); // trodli el 7rouf capital 

fhi = jiu.trim(); // .trim tna7li el espace mn loul w le5er ama mn wost le 

fhi = jiu.link(/*n7ot el lian*/); // .link ta3mali lian lel string 
                            // string => methods chain
// nejem n7ot el methods m3a b3athhom kma haka: .toString().replace().split()

                                // loops
                               // loop for
var i // yelzemni n7ather variable lel for loop 9bal 

for ( /*vat countor*/;/*7ad el win bech yousel*/; variable ++ /*weela variable +=*/  /*w nejem bel -- w thama tari9a o5ra eli heya varivable = variable nafsou + 2 wala 9ade n7eb*/ ) {
    // el code eli n7ebou yeta3meal moula7tha ken n7eb el loop ye5dem fel Element html yelzemni na3mel (+=) ma3neha zid 3leha 
}
// w nejem na3mel el loop for 3al Array kima haka 
var esemi = [ "mohamed", "saleh", "soha", "hamza" ]

var h

for ( h = 0 ; h < esemi.length; h++ ) { /*yelzemni na3mel (< var.length) mouch (<=) 5ater el length azyed mn index b 1 */
       document.getElementById("test").innerHTML += esemi[/*yelzemni n7ot el var coutor fi 3outh el index*/] + "<br>";
}
                            // for in loop
for in // me temchi ken m3a el object 
var prop // yelzemni n3aref el prop
for ( prop in  /*esm el variable*/ ) {
    console.log(/*esm el variable*/[prop]) // el prop ya3ni (property) ma3neha el (model , type , color) el sifet mta3 el object 

    if (mycar.hasOwnProperty(prop))  /* yelzemni na3malha bech ken thama property o5ra me  te7sebhech */ {
        console.log(mycar[prop])
    }
}
                            // while loop 
// el whilemouch kima el for fel syntax 

var i = 0 ; // yelzem n7ot el value mta3 el variable 9bal  
while  (  i <= 10  ) // lehne men7ot ken el chart 
{
        // houni nekteb el code 
        console.log(i)

    i++ // wfele5er el (conour++)
}
                            // do while loop
// el do while kima el while fel syntax

 var i = 0 ;
do { // ama ya9ra el code 9bal 

       console.log(i)

     i++ 
}while  (  i <= 10  ) // wba3d ya9ra le chart 
                            // loop control 
break // nwa3ef beha el code 

continue // t5alefli 7aja eli n7eb 3leha 

mohamed: // ki bech na3mel le label nekteb esem w (:) bech n3aref beha el loop  

                        // moula7tha nejem na3mel loop fi wost loop 
        // w 7aja o5ra ki n7ot el console.log bara mn loop ta3tini el ra9em le5reni

                                // math
var f = Math.ceil(5.01); // Math.ceil dima ta3tini el netija a3la ra9m. ki nekteb (4.1) ta3tini (5) bera8m eli el fasel a9reb le (4) wki na3ti (-4) ta3tini -4 7ata ken nekteb (-4.9) to93od (-4) el ceil maneha s9af   

var x = Math.ceil(5.1); // Math.ceil dima ta3tini el ra9m mn louta ki nekteb (5.9) ta3tini 5 bera8em eli el rasel a9reb lel (6) el floor ma3neha el 9a3a 

var x = Math.round // ta3tini el ra9m kima howa mithel (5.3) yo9rob lel (5) (5.8) yo9rab lel (6)el fasel yemchi leli yel9ah a9reb 

var x = Math.min(10.5 , 50 , 100.4 , 1000); // Math.min ta3tini as8er 3dad fihom Math.max ta3tini akber 3dad fihom

var x = Math.random(); // y5akini na3mel noumrou 3achwe2i 

                            // regular expression 
// regular expression temchi m3a Search | Replace | Math | Split | Test 
// syntax: 
r = h.replace(/ /* n7ot el 7aja eli n7eb na3mel 3leha search wala text */ / /* el attribute  */ ,/* el 7aja eli n7eb n7otha wala na3mel 3leha test */ ); 

// el attribute eli yjiw feha: 
/*  [ i ] => ya3ni el 7rouf mahich 7asesa tebchi capital w smul 
    [ g ] => ya3ni ya3mel search wala test 3al string el kol ama 3ala star we7ed
    [ m ] => te5dem kima le [g] 3ala barcha ostra 

    Brackets Use []:

    [ n7ot el 7aja eli n7eb na3mel 3leha search wala text] te5dem kima [gi]
    
    [^ w ma3dha ( n7ot el 7aja eli n7eb na3mel 3leha search wala text)] ma3neha kolchy ela el 7aha ethika 

    [a-e] ma3neha ybadel el 7rouf mn (a) 7ata el (z)

    [A-Z] wala capital

    [0-9] wala nwamer

    wele nejem na3mel [^1-9], [^a-z], [^A-Z]

    [A-z] ma3neha ma3d me tkamel el cpital tet3ada lel smul

    [4-5A-Z] nejem na3mel el ar9am wel7rouf m3a b3athhom 

    moula7tha el brackers yelzlm tkoun bin slach (/) kima haka ( /[]/ ).

        Quantifiers ( al kamya )
    /e+/ ma3neha mn el 7arf etheka el fou9 ybadlou

    /s{5}/ we2ela n7aded 9adech mn 7arf n7ebou yetbadel

    /s{2,3}/ ma3neha ybadel el 7rouf eli feha 2 wala 3 

    /s{2,}/ ma3neha ybadel mn 2 el wenti tala3
 */

                            // date / time 
var wa9t = new Date(" nekteb el mnli saken lehne") // nejem namel display lel wa9t na3mel variable n7ot fih new Date moula7tha ken nekteb el mili sakin yebdeli el wa9t mn (1/jan/1970) wki menekteb chay ya3tini el wa9t el 3adi 


var wa9t = new Date("october 31,1989,12:00") // nejem nekteb Date string

var wa9t = new Date("el 3am,el chhar,el nhar, el se3a, el d9i9a, el salin, el milisalin") // nejem nekteb Date number moula7th el porgrame yebda ye7seb el bochhra mn (0) ya3ni (0) howa janfier

    // Date Format (tansi9 el Date)
        // Full Format
var wa9t = new Date("october 31,1989,12:00") // mouch lezem nekteb el nhar wala el wa9t 7ata ken nekteb el nhar 9alet ysal7ou 

        // Long Format
var wa9t = new Date("oct 31 1989 12:00:30") // moula7tha 7ata ki men7otech coma (,) normal wnejem nekteb el chhar kemel wala bnel e5tidar mte3ou w temchi capital wala smul fel touro9 le kol w nejem n7ot el nhar 9bal el chhar normal 

        // Short Format
var wa9t = new Date("october 31,1989,12:00") // mola7tha 5asa bel Sort Format normal ken yji el 3am mn loul wala fel le5er ama el mohem el chhar yji 9bnal el nhar

        // Iso Format
var wa9t = new Date("YYYY-MM-DD-hh-mm-ss TZD") // moula7tha yelzem nekteb el Date bel tartib hetha fel Iso Format w 7aja o5ra Time Zon ya3ni 9adech yzid el wa9t 3al grinetch w yetekteb haka (+1:00) nejem nzid 9ad men7eb fem sweye3 

    // Date function 
        // getDate
var nhar = wa9t.getDate() // .getDate tjibli 9adech fel chhar 

        // getDay 
var nhar = wa9t.getDay() // ta3tini ayelm el osbou3 el yebda ye7seb le ayemet mn (0) 

        // getFullYear
var nhar = wa9t.getFullYear() // ta3tini el 3am 9ade

var nhar = wa9t.getHours()

var nhar = wa9t.getMilliseconds()

var nhar = wa9t.getSeconds()


        // getTime
var nhar = wa9t.getTime() // ya3tini mn nhatr eli bde fih el time eli howa (1/jan/1970/00:00) 7ata el taw 

        // getTimezoneOffset
var nhar = wa9t.getTimezoneOffset() // ta3tini el wa9t bin el wa9t fel blesa eli ena feha wel wa9t el grinethch 

// moula7tha el funcstion hethom el kol ken nzid 3leha UTC ya3tini el wa9t bel greinetch kima haka: 
var nhar = wa9t.getUTCHours()

        // setDate
var wa9t = wa9t.setDate(/*ye9bel el nhar [lezem]*/) // nejem n7ot el nhar eli 7ajti bih moula7tha ken n7ot (0) y7otli e5er nhar mta3 chhar eli fet 

wa9t.setFullYear(/* 3am [lezem] chhar [kima n7eb] nhar [kima n7eb] 7ata le se3a w d9i9a [kima n7eb ] */) // moula7tha el chhar wel nhar yebdew mn (0)

wa9t.setHours(/*el se3a [lezem] d9i9a [kima n7eb] sakin [kikma n7eb] milisalin [kima n7eb] */) // t5alini net7akem fel sweya3 

wa9t.setMinutes(/*minutes [lezem] soconds [kima n7eb]*/) // t5alini net7akem bel minutes

wa9t.setSeconds(/*seconds [lezem] miliseconds [kima n7eb] */) // t5alini net7alem bel seconds

wa9t.setMilliseconds(/*Milliseconds [lezem]*/) // t5alini net7alem bel Milliseconds moula7tha el (1000 Milliseconds) = seconds 

wa9t.setMonth(/*chhar [lezem] nhar [kima n7eb]*/) // t5alini net7alem me chhar moula7tha le chhar yabda mn (0) ma3neha (12) awel chhar fel 3am el jdid 

wa9t.setUTCDate(5) // w htama zeda el UTC mta3 el grinetch fel set

var now = Date.now() // tae7sebli bel milisecond mn (1/1/1970) 7ata el taw  

var now = Date.parse("yelzem nekteb el date") // ye7sebli bel milisecond 7ata lel date eli n7otou ena  

var now = wa9t.toISOString() // ya3tini el date bel ar9am 

var now = wa9t.toDateString() // ya3tini el date me8ir wa9t

var now = wa9t.toTimeString() // ya3tini el wa9t akahaw

                            // numbers => Methods
.toString() // trodli el ra9m el text 

.toExponential() // ya3mali ra9m 9owet ra9m 

njio = parseInt("nekteb variable wala ra9m") // trodli el string el ra9m 

.toFixed("ki nekteb ra9m houni ma3neha 9adech n7eb mn ra9m 3achri ytala3li") // ta3tini a9rb ra9m benesba lel ar9am el 3achrya  

                            // and javaScript

                            // start js DOM

    // selector Elements

[1] var mohamed = document.getElementById("nekteb el id") // na3mel selection bel id

[2] var elemenes = document.getElementsByTagName("esm el tag") // na3mal selection bel tag moula7tha yelzem na3mel selection lel tag bel index kima haka : 
elemenes[0].innerHTML = "hellow 7ama" // yelem n7ot ra9m el index bin brackets hethouma []  

[3] var elemenes = document.getElementsByClassName("test") // na3mel selection bel class wyelzem bel index kima el tagName

[4] var elemenes = document.querySelectorAll("nejem nekteb hake (.test)wala (#test) wala (p.test) , (p#test)")  /* moula7tha yelzem na5tar bel index kima haka */ variable[1] 
.querySelector('div') // hethi ta5tar awel Element 

// moula7tha (.getElementsByTagName w .getElementsByClassName) meymachihech internet explorel 8 

    // selector Elements By Object Collection

document.title // ta3tini el titlt mta3 el HTML 

document.images // na3mel beha selection lel inmages ki nekteb .images bark ta3tini type imeges eli heya object wki nzidha .length ta3tini 9adech thama mn image wki nzidha .src ta3tini el source mta3 el image moula7tha yelzem n7ot el index mta3 el image kima haka [2] 

document.forms // na3mel beha selection lel forms ki nzidha .lenght ta3tini 9adech thama mn form wnejem n7ot .value .placeholder .type wyelzem na3mel selection bel index led form

document.body // na3mel beha selection lel body ki nzidha .innertext ta3tini el text eli fel body wki nzidha .innerHTML twarili el element eli fel body ama yelzem n7oha haka 
variable.innerText = /* yelzem n7otha .innerText mouch .innerHTML */ document.body.innerHTML

document.anchors // na7awha ma3adech temchi heya tala3li tag el <a></a> eli blech href

document.links // tala3li eli heya object HTML ki neidha .length ta3tini 9adech thama mn <a></a> feha href 

                            // get/set node Element Content
// awel 7aja yelzem na3rafha eli innerText w outerText ma3adech ye5dmou ili yemchou houma: innerHTML w outerHTML w textContent  

.innerHTML // twarili eli fi wost el HTML 7ata ken thama span wala <a></a> 

.textContent // twarili el text akahaw 

.innerHTML = // nejem nbadel beha el 7aha eli 7ajti beha 

.textContent = // nejem zeda n7ot el 7aja eli 7ajti baha fel textContent

                            // change Element Attribute Value 
    // Direcrt Method
variable.id = // nejem n7ot id lel Element 

variable.className = // nejem n7ot class lel Element 

variable.src = // nejem n7ot source lel Element 

variable.alt = // nejem n7ot alt lel img

variable.title = // nejem n7ot title lel Element 

    // get/set Attribute Value
.getAttribute("attricute Name") // ta3tini el value mta3 el attribute 

.setAttribute("Attribute Name" , "value attribute") // t5alini n7ot Attribute wala nbadel el value mte3ou 

    // Has/Remove Attribute
.hasAttribute("Attribute Name") // netfa9ed beha ken thama Attribute wala le moula7tha temchi m3a el if wel else

.removeAttribute("Attribute Name") // nejem na7i beha Attribute

    // Element ClassList
variable.classList // ta3lini el lista mta3 el class 

variable.classList.contains('esm el class') // netfa9ed beha ken thama esm fi lista mta3 class w temchi m3a if w else 

variable.classList.item(ra9m el index) // t5alini net3amel m3a el classList keyeni net3amel m3a Arry

    // Element ClassList | Add , Remove , Toggle
variable.classList.add("class name 1", "class name 2"...) // nzid beha class
variable.className += "safe" , "class name 2 me nejemch nzidou" // moula7tha ken nzid class bel += class el theni me yetzedech ken n7eb n7ot bel 2 class na3mel star jdid b nafs el variable

variable.classList.remove('class name 1','class name 2'...) // nejem nfasa5 beha class 

variable.classList.toggle("class name") // y5alini nbadel el class ken mawjoud yna7ih ken methamech y7otou moula7tha me nejemch n7ot 2 class m3a b3athhom. ken n7eb n7ot 2 class m3a m3athhom na3mel star jdid b nafs el variable moula7tha o5ra 

                            // Element Children |  Children ChildNodes
mydiv.children[index Number] // t5alini nestahdef el child eli fel pitant moula7tha ta3tini el Elements bark 

mydiv.childNodes[index Number] // ta3tini el Element wel comment 7ata el text wel espace ta3tih

    // First/Last Child | First/Last ElementChild
variable.firstChild // y5alini nselectioni awel child eli fel pirant
variable.lastChild // y5alini nselectioni e5er child eli fel pirant moula7tha 7ata mn comment wel espace ytala3hom

variable.fistElementChild // y5alini nselectioni awel Element child eli fel pirant
variable.lastElementChild // y5alini nselectioni e5er Element child eli fel pirant moula7tha ytala3li ken el Element

    // Append child
variable.appendChild("el Element eli n7eb n7otou") // t5alini nzid Element Child lel pirant moula7hta el Element yet7at mn le5er 

.prepend(el Element eli 7ajti bih) // tzid node Element mn loul

    // Insert Before
Element eli bech n7ot fi wostou.insertBefore(el Element eli bech n7otou,el Element eli bech n7ot fi wostou.childNodes[index Number]) // t5alini n7ot el Element fel nlasa eli n7eb 3leha 

    // Remove Child
Element el bou.removeChild(Element el bou.childNodes[0]) // t5alini nfasa5 Element child

    // Node [Name, Value, Type]
https://www.youtube.com/watch?v=Qyjv9hbXzrU&list=PLDoPjvoNmBAxx97QDMOCpzxbu1ZHJ4i7i&index=16

    // Clon node 
variable.cloneNode("by defold false w nejem n7ot true") // t5alini na3mel copy lel Element false ta3mel copy lel Element ama eli fi wostou le | true ta3mel copy lel Element 7ata eli fi wostou ta3malou copy 

    // Perent Node | Perent Element 
.perentElement // tejbedli el parent mta3 el child
.parentNode

    // Next Sibling | Next Element Sibling
.nextElementSibling // tala3li el Element eli ba3d 3amelou ena selection w lezem ykounou 5wet  

.nextSibling // tale3li el node el 5ou eli ba3d 3amelou selection 7ata mn text wel comment

    // Focus , Blour 
.focus() // t5alini na3mel focus lel input

.blur() // tna7ili el focus

    // click
.click() // trod el button tetenzel wa7adha

    // Add Event Listener
variable.addEventListener // te5dem m3a el Events

    // contains
https://www.youtube.com/watch?v=-37OSnU52Ww&list=PLDoPjvoNmBAxx97QDMOCpzxbu1ZHJ4i7i&index=23

    // Client Height | Width
.clientHeight // te7seb el height
clientWidth // te7seb el width 
        /* el 7ajet eli te7sebhom : 
            vue : yes
            padding yes 
            margin no 
            scroll no 
            border no
*/
    // scroll height | scroll widht
.scrollHeight
.scrollWidth // te7seb el scroll mta3 el child 
                  /* el 7ajet eli te7sebhom : 
            vue : yes
            padding yes 
            margin no 
            scroll yes
            border no
*/

    // offset Height | offset Width
offsetwidth
offsetHeight // te7seb width , height mta3 el Element 
              /* el 7ajet eli te7sebhom : 
            vue : yes
            padding yes 
            margin no 
            scroll yes
            border yes
*/

    // scroll left |scroll top
https://www.youtube.com/watch?v=mLLLxmvojQ4&list=PLDoPjvoNmBAxx97QDMOCpzxbu1ZHJ4i7i&index=27

    // Client Left | Client top
.clientTop // ye7seb ken border top
.clientLeft // ye7seb ken border left moula7tha ye7seb el scroll m3a el border ken je fi jiha  mta3 border left

                                // Element style
// sentax style Element.Property= "Value"

                                // Document*
    // Input Encoding , Last Modified , URL
document.inputEncoding // ta3tini el tarmiz mta3 el page kima UTF-8

document.lastModified // ta3tini e5er modifier 3maltou fel HTML

document.URL // ta3tini el link mta3 page

    // Creat Element , Creat Text Node , Creat Comment
document.createElement("div") // t5alini na3mel Element

document.createTextNode("el 7aja eli n7ab nektebh") //  t5alini na3mel text

document.createComment("el 7aja eli n7ab nektebh") // t5alini na3mel comment 

    //  Creat Attibute
document.createAttribute("attribute type") // t5alini na3mel attribute
myAttr.value = "chaabeni" // yelzemni n7ot value lel Attribute 

                        // Events | How To
[1] .onloawd 
[2] .onscroll
[3] .resize // te5dem m3a el respnsev
[4] .onfocus
[5] .onblur
[6] .onsubmit 
function(e){ // el (e) tji fel parametre mta3 el function
e.preventDefault() // temna3 el default 
}

    //  Event | mouse
[1] .onclick
[2] .ondblclick
[3] .oncontextmenu // me5dem bel button right mta3 el mouse
[4] .onmouseenter

    // Event | keyboard
[1] .onkeydown // wa9tli nenzel 3al button
[2] .pnkeypress// wa9tli no93od nezel 3al button
[3] .onkeyup // wa9tli na7i sob3i 3al button
    
console.table() // thama console.table tjibli eli fi wost el Element el kol
                            // end js DOM

                            // start js bom
            // Window
alert("mohamed \n chaabeni") // ken n7eb na3mel star e5er ne3mel (\n) kima el <br>

confirm("te9bel wala le " ) // t5alini na3mel confirm w nejem na3mel el (\n) bech nahbet lel star eli ba3dou

var x = prompt(" message ", " el 7aja eli bech yektebha el user nejem ena nektebha ") ; 

setTimeout(function(){  // t5alini na3mel function ba3d wa9t mo3ayen
    console.log("ahla bik")
}, 4000 ); 

function message () { // nejem na3mal el funtioon 9bal
    console.log("ahla bik") 
}
setTimeout( message , 4000 ); // nejem n7ot name el function bark fel setTimeout


var myTime = setTimeout( message , 4000 ); // yelzemni n7ot el setTimeout fi variable bech ndeklareha fel clearTimeout

document.getElementById("click").onclick = function () {
    clearTimeout(myTime) // elzemni n7ot esm el variable eli feha setTimeout
}


var myTime = setInterval( message , 1000 ); // ta3mali el function kol wa9t mo3ayen

document.getElementById("click").onclick = function () {
    clearInterval(myTime) // clearInterval twa9afli el setInterval
}
window.open('Url','Window Name or target Attribute','Specification','Hitory Replace') ; // t4alini n7el window jdida
window.open("https://www.w3schools.com", "_blank", "top=50,left=50,width=400,height=400,menubar=yes,status=no","true");

window.scrollBy(x,y); // t5alini net7akem bel scroll
window.scrollBy(-200,-500); // nejem n7othom bel seleb 

scrollTo(x,y) // hethi te5dem mara bark wki nenzel mara o5ra me temchich

variable.stop() // twa9afli le lowding

variable.close() // t5alini nsaker el window eli tetla3 mn js 

variable.focus() // ta3mali focus lel window

innerHeight() // te7sebli el height el de5leni mta3 el window

outerHeight() // te7sebli el height el barani mta3 el window

innerWidth() // te7sebli el width el de5leni mta3 el window

outerWidth() // te7sebli el width el barani mta3 el window

pageXOffset() // te7sebli el scroll X 9dech
scrollX() // kiam pageXOffset behtabet

pageYOffset() // te7sebli el scroll Y 9adech
scrollY() // kiam pageYOffset behtabet
        // moula7tha me temchich 3ala internet explorer 8 

location.href // ta3tini el lyan mta3 el site eli ena fih 

location.href = 'https://www.google.com/?hl=fr' // ken n7ebou yhezni lel lyan na3mel haka 

location.href // ye9bel el (URL) w nejem na3mel haka 

location.href = '#mohamed' 

location.href = 'tel:58129031'

location.href = 'mailto:chaabenim318@gmail.com'

location.host // yjibli el hosting w nejem nbadliu 

location.hash // talaa3li el hash w nejem nbadlou 

location.protocol // yjubli el protocol li 3andi 
location.protocol = "https" // nejem nbadlou haka 

location.search = // tjibli quiri sring 
location.search = "?himjosùhfilm558" // w nejem nbadlou 

location.pathname // tjibli el name eli ba3d el (/) w neejem nbadalha

location.assign('https://www.youtube.com/') // yhezni lel luan wi5alih le history

location.replace('https://www.youtube.com/') // te5dem kimael assign ama tna7i el lyan eli 9ablou mn history

location.reload() // ta3mel reload lel page default value (false) ma3neha ta3mel reload mn cash mta3 el pc ken n7eb na3mel reload mn server n7otha (true

history.length // tjibli 9adech 3andi mn lyan fel history

history.forward() // tjibli el lyan eli ba3dou 

history.back() // traja3ni lel lyan eli 9ablou

history.go(-5) // n9adem beha w nwa5ed beha nejem n7otelha ar9am normal wala ar9am bel seleb wala liyan

https://www.youtube.com/watch?v=u8J90PsJIhA&list=PLDoPjvoNmBAy9nFRJgVYgEID8xE2a6q6V&index=16

screen.width // tjibli el width mta3 el Ecron mta3 el pc 
screen.height // tjibli el height mta3 el Ecron mta3 el pc 

screen.availWidth // kima screen.width ama me ye7sebch el tasck barr
screen.availWidth // kima screen.height ama me ye7sebch el tasck barr

screen.colorDepth // tjibli 3om9 el alwen
screen.pixelDepth // tjibli 3om9 el alwen

            // Cookies
document.cookie = "name=value; expires=Date; path" // t5ali el site web yet3aref 3al user

document.cookie // tjibli el cookie eli 3andi
                // moula7tha ken n7eb nfasa5 el coolie n7ot el wa9t 9bal el wa9t eli ena fih 
                            // end js bom