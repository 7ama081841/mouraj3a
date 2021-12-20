// jquey sintax
$ // ma3neha bech na3mel cod jquery 

                    // events
$(element).click(function(){ // click => onclick
    // your code here
})

$(element).dblclick(function(){ // click => ondblclick
    // your code here
})

$(element).mouseenter(function(){ // mouseenter => onmouseenter
    // your code here
})

$(element).mouseleave(function(){ // mouseleave => onmouseout
    // your code here
})

$(element).focus() // ta3mali auto focus lel input

$("button").hover( // te5dem le onmouseenter , onmouseout fi func wa7da 

    function() { // func 1 : onmouseenter
        $('p').css("color","red");
    }
    
    , // lezem n7ot binethom coma

    function(){ // func 2 : mouseleave
        $("p").css('color','green');
    }

);

$("Element").on("Event", function(){ // nejem ne5dem bel .on
    $(this).hide() //code de function
})   

$("parent").on("Event","child Element", function(){ // thama el tari9a hethi
    $(this).hide() //code de function
})   

$("Element").on("Event1 Event2", function(){ // nejem ma3mel multi Event 
    $(this).toggleClass('color')
})   

$("parent").on("Event1 Event2",'child Element', function(){ // nejem ma3mel multi Event 
    $(this).toggleClass('color')
})   

            // start Event
$("Element").on("el name eli na5tarou" ,function(event){
    $(this).hide() // code de func
});
            // yelzem yet7atou el zouoz m3a b3athhom 
$("button").click(function(){
    $("el Element eli 7atitou mn loul").trigger('el name eli 7atitou mn loul')
}) // w nejem nka3mel child selector
            // end Event 

            // start Event
$("Element").on("el name eli na5tarou" ,function(event , nameParametr){ // nejem nzid el css fel parametr
    $(this).height(nameParametr eli 7alitou mn loul) 
});
            // yelzem yet7atou el zouoz m3a b3athhom 
$("button").click(function(){
    $("el Element eli 7atitou mn loul").trigger('el name eli 7atitou mn loul', ["200px"]) // houni nekteb el value 7atitou mn loul
}) 
            // end Event 

$("div").on("myEvent" ,function(e , myHeight , myWidth , myBackg){ // nejem n7ot multi parametr
    $(this).css({
        width : myWidth ,
        height : myHeight ,
        backgroundColor : myBackg
    })
});

$("button").click(function(){
    $("div").trigger('myEvent' , ["200px", "500px" , "red"]) // el value mta3 el parametre
})

$('div').on({

    click : function() {$(this).text("rak nzelet mara taw ")} ,
    dblclick : function() {$(this).text("rak nzelet martin")},
    
}) // nejem n7ot multi Event m3a b3athhom

$("button").on('click' , function(){
    $("<p>ta3mel bel jQuery</p>").insertAfter(this) // nejem na3mel creat Element bel .on 
})

$("parent").on("click" , "child" , function(){
    $(this).fadeOut(2000) // ken nk7eb na3mel el Eevent lel Element eli t3amlou bel jQuery yelzem n7ot el parent wel child
})

                         // keydown / keypress / keyup => Events kybort
.keydown() // te5em wa9tli n7ot sob3i 3al button
.keypress() // te5em wa9tli nenzel 3al button
.keyup() // te5em wa9tli na7i sob3i 3al button
.change() // te5em wa9tli na7i el focus mn el input w te5dem m3a el option el fel select

                        // blour / focus
.focus() // te5dem wa9tli na3mel focus 3al input
.blour()  // te5dem wa9tli ena7i le focus 3al input

                    // one
.one() // te5dem kima el on ama mara wa7da 

                    // select
.select(function(){}) // ta3mali auto select lel text w nejem n7ot feha func

                    // resize
.resize() // ta3mali actulize lel size mta3 el window

.scroll() // ta3mali actulize lel scroll 

                        // pageX pagewY
$('html').mousemove(function(e){ // yelzem n7ot el Event lel parametre bech meyjich errer
    $("div").text('x ' + e.pageX + 'y' + e.pageY ) // wyelzem n3adeha fi wost el functin 
}) // ta3tini bleset el mouse 

                    // Submit
.submit() // lakthirya temchi m3a el form


                        // Effects
$(document).ready(function(){
    $("button").click(function(){
        $('p').hide(3000 , function(){
            // nejem n7ot el speed wel function fel Effect
        }); // ta3mel hide lel Element ta3tih style diplay none 
        // moula7tha nejem n7ot el slow wla fast fel speed el slow te'mchi bechwaya wel fast tezreb el by defold mta3 el speed fel jquery heya (400 milseconde)
    })
});

$(document).ready(function(){
    $("button").click(function(){
        $('p').show(); // t5ali el Element yothher ta3tih style diplay block
    })
});

$(document).ready(function(){
    $("button").click(function(){
        $('p').toggle(); // ybadel bin le hide wel show 
    })
});

                        // Effects => fade
$(document).ready(function(){
    $('button').click(function(){
     $('div').fadeIn(/* yji feha option , fonction */) // t5li el Element yothher ama bel opacity
    })
});

$(document).ready(function(){
    $('button').click(function(){
     $('div').fadeOut(/*option*/) // ta3mel hide lel Element ama bel opacity
    })
});

 $(document).ready(function(){
    $('button').click(function(){
     $('div').fadeToggle(/*option*/) // tbadeli bin fadeIn wel fadeOut 
    })
 });

 $(document).ready(function(){
    $('button').click(function(){
     $('div').fadeTo(/*yji feha 3 option : speed , opacity , function*/) // t5alini net7akem fel opacity 7ad elwin ta9ef 
    })
 });

                        // Effect => slide
$(document).ready(function(){
    $('button').click(function(){
     $('div').slideDown(/*speed,function*/) // ta3mel sdlide top to bottom ama t5lih yothher
    })
});

$(document).ready(function(){
    $('button').click(function(){
     $('div').slideUp(/*speed,function*/) // ta3mel sdlide bottom to top ama tna7ih
    })
});

$(document).ready(function(){
    $('button').click(function(){
     $('div').slideToggle(/*speed,function*/) // tbadel binethom
    })
});

                            // Effect => Animate
$(document).ready(function(){
    $('button').click(function(){
     $('div').animate({ // t5alini na3mel animation fel Element
        //  css code
        width:"100px", //nejem na3mel el tari9a hethi width : '+=100px' ma3neha tzid 100px 3al width eli heya fih w nejem -= 100px ina9es 100px w nejem n7ot toggle wel hide fel width 
        
        height:'100px', // kifkif lel height
        borderRadius: '100%',
        overflow: 'hidden'
        }, 2000 ,senter)    
    }, /*speed , function*/)
    
});

                            // Effect => Stop
https://www.youtube.com/watch?v=gFImkavKvKk&list=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB&index=8

                            // Effect Chain
$(document).ready(function(){
    $('div')
        .hide()
        .slide()    //nejem na3mel barcha Effect m3a b3athhom
        .show()
})

                             // Effect delay
.delay(5000) // t5alili el Event testana

                            // html/css => cloce
.clone(true , false ) // ya3mali copy lel Element 
// el default value : false wel true t5ali el clone ycopy el Event

                            // html/css => detach
.detach() // kima el remove() ama t5ali el Event mta3 el Element 

                            // html/css => hasClass
$('li').each(function(){ // .each() t5ali el function tet3ada 3ala multi Element kima el for

    if($(this).hasClass("active")){ // el .hasClass() temchi m3a el if tchoufli ken thama el class ehteka wala nn 
        $(this).css("color","#00f")
    }

})

                        // // html/css => offset
$("Element").offset({ // nejem net7akem bel position mta3 el Element
    top : 50 ,
    left : 50 
})

                        // html/css => position
.position() // te5dem kima el offset ama mn wost el parant

                        // html/css => prop
$("input").prop("disabled", false) // t5alini net7alem bel property mta3 el atteibute 
$("input").prop({ // bech na3mel el multi prop yelzemni n7ot el a9wes hethom {}
    'disabled' : false, // el false wel true yjiw blech hethom "" ken el value wel name tji bihom
    "name" : 'mohamed', // wyelzemni n7ot coma binethom 
    'value' : "safe",
    'id': 'test'
}) // nejem na3mel multi property

                            // html/css => ReplaceWith                        
.replaceWith() // tbadali el Element bkolou moula7th ba3d me yetbadel el Element yetna7alou el Effect 

                             // html/css => scrollTop
.scrollTop() // t5alini net7alem bel scrill mn foou9 

                             // html/css => wrap
$("button:contains('add') ").click(function(){
    $("span").wrap('<div></div>') // ta3meli parent lel Element 
})

$("button:contains('remove') ").click(function(){
 $("span").unwrap(yelzem n5aleha fer8a) // tna7ili el parant
})

                             // html/css => Each
.each() // te5dem kima el click ama auto

                            // html/css => has
.has('') // ta3mel selection 3al child   

                            // html/css => is
if( $(this).is('div, p')){
    console.log("rahi div")
}else if ($(this).is('p , span')){
    console.log("rahi p")
} // netfa9ed beha el Element ken div wala ay 7aja o5ra 
.is(":frist-child")
.is(':contains("mohamed")')
.is(".clalss-name") // wnejem na3mel haka zeda

                            // html/css => end
$("div").find('span').css('color','red').end() // .end() t5alini nkamel fel cond me 8ir me n3awed nekteb el selector
.find("strong").css("color","blue").end().css("color","aqua")

                            // html get / set
$(document).ready(function(){
    $('div').text() // itala3li el test eli fel Element
    alert($('div').text())
})        

(document).ready(function(){
    var div = $('div').html() // tala3li el tag m3a el text 
        $('p').text(div)
 })

 $(document).ready(function(){
    $('button').click(function(){
     $('input').val() // ta3tili value. temchi m3a el input wel textearia
    })
})

$(document).ready(function(){
    $('button').click(function(){
        $('a').attr(/*'el attribute eli 7ajti beha */);
    })
})

$(document).ready(function(){
    $('button').click(function(){
        $('a').attr(/*'el attribute eli 7ajti beha' ,'el attribute el jdida'*/); // ken n7eb nbadel el attribute 
    })
})

$(document).ready(function(){
    $('button').click(function(){
        $('a').attr({
            'target':'xx',
            'class':'mohamed',
            'href':'https://www.facebook.com/'
        }); // hehta ken n7eb nbadel barcha attribute m3a b3athhom
    })
})

                                // html => Add Element
    $(document).ready(function(){
        $('button').click(function(){
            $("div").append("el Element child eli n7eb nzidou") // t5alini nzid Element 
        })
    }) // moula7tha tzidli el 7aja fi e5er el Element 
    
    $(document).ready(function(){
        $('button').click(function(){
            $("div").prepend("el Element child eli n7eb nzidou") // tzidli el Element mn loul
        })
    })

    $(document).ready(function(){
        $('button').click(function(){
            $("div").before("el Element eli n7eb nzidou") // tzidli el Element 9bal le Element mouch fi wostou 
        })
    })

    $(document).ready(function(){
        $('button').click(function(){
            $("div").after("el Element eli n7eb nzidou") // tzidli el Element ba3d le Element mouch fi wostou 
        })
    })

    $(document).ready(function(){
        $('button').click(function(){
            $("el Element child eli n7eb nzidou").appendTo("div") // kima el append ama el sintax bel 3aks
        })
    })

    $(document).ready(function(){
        $('button').click(function(){
            $("el Element child eli n7eb nzidou").prependTo("div") // kima el prepend ama el sintax bel 3aks
        })
    }) // moula7tha ki bech nzid Element lezem haka $('<p></p>')

                        // html => Remove Element 
$(document).ready(function(){
    $('button').click(function(){
        $("div").remove() // ta3meli remove lel perant  
    })
})

$(document).ready(function(){
    $('button').click(function(){
        $("div").empty() // ifara8 el Element el perant
    })
})

                        // html => css classes
$(document).ready(function(){
    $('button').click(function(){
        $('div, p').addClass("class name class1 class2  ") ; // tzidli class nejem n7ot barcha m3a b3athhom
    })
}) // moula7tha nejem n7ot akther mn Element 

$('.loun').click(function(){
    $('div').addClass('padding').removeClass('mohamed') // najem ba3d el add n7ot ramove  
})

$('.loun').click(function(){
    $('div').removeClass('mohamed') // tfosa5 class
}) // moula7tha ki men7otech value lel removeClass() tfasa5 classet el kol 

$('.loun').click(function(){
    $('div').toggleClass('padding').removeClass('mohamed') // tbadali el class
})

                                //  html => css get / set
$('.loun').click(function(){
    var color = $('Element').css('el code eli fel css kima color wla padding') // ijibli el code eli fel css
    $('input').val(color)
})

$('.loun').click(function(){
    $('div').css('color',"red") // tbadali fel css ama bel 7aja 
 })

 $('.loun').click(function(){
    $('div').css({
        'color':'red',
        'background':'green',
        'padding':'50px'
    })
 }) // haka ken n7eb nbadel barcha 7ajet m3a b3athhom

                                // html => Dimensions
 $('div').click(function(){
    $('Elemlent').width(/*nekteb 9adech n7ebou iwali */) 
     // ken n7eb n9is el width mta3 el Element ki me nekteb feha chay 

     $('div').width("-=" + 500) // wnejem na3mel ('+=' + 500) iwli dima yzid 3lih kol menenzel
 }) // moula7tha .width() meye7seblich el padding , margin , border 

$('div').click(function(){

      $(this).innerWidth() // ye7seb el width wel padding zeda w ma ye7sebch el border

})

$('div').click(function(){

    $(this).outerWidth() // ye7seb el padding wel border wel wki na3mel .outerWidth(true) twali te7seb le margin 

})

$('div').click(function(){

    $(this).height()
    $(this).text($(this).height()) // n9is beha el height 

})

$('div').click(function(){

    $(this).height()
    $(this).text($(this).innerHeight()) // ye7seb el height wel padding zeda w ma ye7sebch el border 

})

$('div').click(function(){

    $(this).height()
    $(this).text($(this).outerHeight()) // ye7seb el height wel padding w el border wki na3mel .outerHeight(true) te7sebli el margin 

 }) // moula7tha nejem nekteb bel % kima haka ("200%") wel ("em") zeda

                                // Traversing
                        // Parent / Parents / ParentsUtill
$('Element').parent(".class name") // t5alini net7alem fel parent
.parents() // ta3mel el bouwet el kol
.parentsUntil('el Element wel .class name eli n7ebou ye9ef 9ablou') // nejem n7adedlou el win bech ye9ef
// moula7tha te9ef 9bal el Element eli 3lih el class 

                        // Children / Find
$('Element').children('.class name') // tjibli el direct children eli fel Element bark ama eli fi  wost el children le 

$('Element').find('div , p , span').css('border-color','blue') /* tjibli el children eli fi wost direct child nejem na3mel kima fel css */ .find('*')
/*  moula7tha */ .find() /* ken me nekteb feha chay me ta3tini 7ata natija */
/*wnejem zeda na3mel selector el jQuery kima haka */ .find($("Element"))

                        // Siblings / Next / Prev
$('Element').siblings('.class name') // t5alini net7alem b 5wetou w howa le 

$('Element').next() // t5alini net7akem bel Element eli ba3dou

$(this).prev() // t5alini net7akem bel Element eli 9ablou

$(this).nextAll() // t5alini net7akem bel Element eli ba3dou el kol

$(this).prevAll() // t5alini net7akem bel Element eli 9ablou el kol

$(this).nextUntil("el Element wel .class name eli n7ebou ye9ef 9ablou") // te5dem kima nextAll ama nejem n7adedlou el win bech ye9ef

$(this).prevUntil("el Element wel .class name eli n7ebou ye9ef 9ablou") // te5dem kima prevAll ama nejem n7adedlou el win bech ye9ef

.nextUntil($("p:contains('p 1')")) // nejem n7aded bel text eli fi wost el Element

                        // First / Last / Eq / Filter / Note 
$('Element').first(me n7ot chay) // t5alini net7akem b awel Element 

$('Element').last(me n7ot chay) // t5alini net7akem b e5er Element 

$('Element').eq(index number) // t5alini na5tar el Element mn wost w ki n7ot number bel seleb tjibni fi e5er elista 
$('div:eq("1") , p:eq("1")') // nejem nmacheha haka zeda

$('Elemlent').filter(".class name") // y5alini na5tar el Element 
$('Elemlent').filter($('Elemlent')) // wnejem na3mel haka 
$('div').filter(function(mohamed){
    return mohamed === 5        // nejem n7ot feha function
}).css('border','2px solid red')

$('Elemlent').not('.class name') // ma3neha el Element eli mahouch bel class hetheka 
$('Elemlent').not($('Elemlent')) // wnejem na3mel haka
$('div').not(function(mohamed){
    return mohamed === 5        // nejem n7ot feha function
}).css('border','2px solid red')

                            // Selectors Reference
$('*') // t5alini na5tar el Elements el kol

$('.mohamed') // t5alini na5tar el class 

$('#mohamed , yassine') // t5alini na5tar el class ama bel barcha 

$('#mohamed') // t5alini na5tar el id 

$('div') // nejem nekteb el Element 

$('div , p , section') // nejem na5tar bel barcha 

$('div:first') // nejem na5tar haka
$('div:last')
$('div:first, p:last, span:first') // nejem na5tar bel barcha

$('div:even') // t5alini na5tar bel 5lef wtebda b awel ka3ba 
$('div:odd') // t5alini na5tar bel 5lef wtebda b theni ka3ba 

$('p:first') // tjibli awel Element 

$('p:first-child') // tjibli awel Element fi wost el perant

$('p:last') // tjibli e5er Element 

$('p:last-child') // tjibli e5er Element fi wost el perant

$('p:first-of-type') // tjibli awel Element fi wost el perant mn type eli 7ajti bih ena

$('p:last-of-type') // tjibli e5er Element fi wost el perant mn type eli 7ajti bih ena

$('p:nth-child(3)') // nejem na5tar el child eli ba3d first w 9bal last
$('p:nth-last-child(1)') // kifha ama mn le5er

$('p:nth-of-type(1)') // nejem na5tar el child eli ba3d first w 9bal last mn type eli n7eb 3lih 
$('p:nth-last-of-type(1)') // kifha ama mn le5er

$('p:only-child') // tejbedli el child el we7id 
$('p:only-child') // tejbedli el child el we7id mn naw3ou

$('div > p ') // tjibli el direct child 

$('body p ') // tejbodli ay p eli fi wost body

$('div + h3 ') // tjibli el next Element 

$('p ~ div ') // tjibli el 5ou mta3 el Element ama eli ba3dou eli 9ablou le 

$('Element:eq(index number)') // t5alini na5tar el Element bel index 

$('p:gt(index) ') // t5akini n5alef el Element bel index

$('p:lt(length) ')  // t5akini n5alef el Element bel 3aks ama bel length

$('p:not(:contains("1"))') // t5alini n7aded el 7aja eli men7ebhech tete5dem

$(":header") // ijibli el heading el kol 

$(":animated") // tjibli el Element eli 3amelou animation ama me temchi ken bel animation mta3 el jQuery

$(':focus') // tjibli el input eli 3lih focus te5dem bel auto focus eli bel html , jQuery , js

$('div:contains("el kelma eli 7ajti beha ")') // tjibli el Element mn kilma eli fi wostha 

$('div:has("span")') // tjibli tjibli el Element child eli f wost el farent 

$(':empty') // tjobli el Element el fere8 ama el espace yete7seb m3obi 

$(':parent') // tjibli el Element el m3obi moula7tha te7seb el html wel body

$(':hidden') // tejbedli el Element eli fihom display none moula7tha mete5demch m3a visibility none

$(':visible') // tejbedli el Element el thahrin ama eli 3lihom cisibility hidden me te5demch 3lihom

$('div:root') // tjibli ken el html 5atrou akber we7ed fihom 

                    // attribute selector
$('[alt="test"]') // t5alini na5tar el attribute
$("img[alt='golf7']") // nejem zeda n7ot el Edlement 9bal el attribute 
$("img[alt!='golf7']") // nejem na3mel haka na3neha le yousewi 
$("img[alt*='golf7']") // nejem na3mel haka na3neha ilaweh 3al kelma w tala3li 7ata bel 7arf
$("img[alt~='golf7']") // tjibli ama bel kelmla s7i7a
$("img[alt^='golf7']") // nejem na3mel haka na3neha na3neha lezem tebka bel kelma ethika
$('[alt],[title]') // nejem n7ot barcha m3a b3athhom

                    // input selector
$(":input") // tjibli el input el kol
$(":text") // tjibli type el input eli 7ajti bih
$("div :password") // nejem na5tarou bel parent mte3ou
$(':disabled') // tjibli el input eli feha disabled
$(':enabled') // tjibli le input el enabled eli 3aks didabled
$(':checked') // tjibli el input eli 3lihom checked
$(':selected') // tjibli el select ama temchi m3a wa7da bark *

                        // Events Reference PreventDefult
$('a').on('click', function(e){ // lezem n7ot el Event fel parametr mta3 el func
    e.preventDefault() // temna3mi le default moula7tha rahi mete5demch ela bel event eli fel parametre eli fel function
    $("img").slideDown(1000)
})
e.isDefaultPrevented() // te5dem m3a el if(

