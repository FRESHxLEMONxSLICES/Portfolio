function sendEmail() {

    var params = {

        msg : document.querySelector(".msg").value ,
    };

    const serviceID = "Serviceid_LEMON" ;
    const templateID = "template_tsolmej" ;

    emailjs 
        .send( serviceID , templateID , params )
        .then(( res ) => {

            document.querySelector(".msg").value = "" ;
        })
}

// Drop Menu

const headerLink2 = document.querySelector(".header-link-2") ;
const dropmenu = document.querySelector(".header-link-2-dropmenu") ;

headerLink2.addEventListener( 'mouseenter' , () => { 

    dropmenu.classList.add("show") ;
}) ;

dropmenu.addEventListener( 'mouseenter' , () => { 

    clearTimeout( closeTimeout ) ;
    dropmenu.classList.add("show") ;
}) ;

headerLink2.addEventListener( 'mouseleave' , () => { 

    closeTimeout = setTimeout(() => {
        
        dropmenu.classList.remove("show") ;
    }, 200);
}) ;

dropmenu.addEventListener( 'mouseleave' , () => { 

    dropmenu.classList.remove("show") ;
}) ;
  

/////////////////////////////////////////// Project img indicator 1

// project 1 imgs src array ( list )

let project1Imgs = [ "imgs/South Keystone background 1.png" , "imgs/South Keystone background 2.png" , "imgs/South Keystone background 3.png" , "imgs/South Keystone background 4.png.png" , "imgs/South Keystone background 5.png.png" ] ;

// project 1 <pre> tags classes inside an array 

let project1pres = [ document.querySelector(".project-1-pre-1") , document.querySelector(".project-1-pre-2") , document.querySelector(".project-1-pre-3") , document.querySelector(".project-1-pre-4") , document.querySelector(".project-1-pre-5") ] ;

// Projct 1 img - the main img that will be shown

let project1Img = document.querySelector(".project-1-img") ;

// indicator or counter

let indicator1 = 0 ;

// all the <pre> are set to 30% opacity by default. here we're making first <pre> 100%

project1pres[ indicator1 ].style.opacity = "100%" ;
project1Img.src = project1Imgs[ indicator1 ] ;

function changeProject1Img() {

    if( indicator1 != project1Imgs.length ) { 

        indicator1 += 1 ;
        project1Img.src = project1Imgs[ indicator1 ] ;
    }

    if( indicator1 == project1Imgs.length ){

        project1pres[ indicator1 - 1 ].style.opacity = "30%" ;
        indicator1 = 0 ;
        project1Img.src = project1Imgs[ indicator1 ] ;
    }

    project1pres[ indicator1 ].style.opacity = "100%" ;
    project1pres[ indicator1 - 1 ].style.opacity = "20%" ;
}

/* changeProject1Img() - break down 

if not 5 - not the end of the array. we jump to the next image
and set current <pre> to 100% opacity and the old one to 100%
( -1 since it is in chronological order )

if 5 - we start over ( set indicator1 to 0 ) and do it again and
again and again...

for <pre> you can just change color instead of opacity.
but i love working this way it gives more flexibility.

*/

// Clicking on the <pre> will change the img to it's index :

function showImage1( index ){  

    project1pres[ indicator1 ].style.opacity = "20%" ;
    indicator1 = index ;
    project1pres[ index ].style.opacity = "100%" ;
    project1Img.src = project1Imgs[ index ] ;
}

/////////////////////////////////////////// Project img indicator 2

// project 1 imgs src array ( list )

let project2Imgs = [ "imgs/TaxiF_bg_1.png", "imgs/TaxiF_bg_2.png", "imgs/TaxiF_bg_3.png", "imgs/TaxiF_bg_4.png" ] ;

// project 1 <pre> tags classes inside an array 

let project2pres = [ document.querySelector(".project-2-pre-1") , document.querySelector(".project-2-pre-2") , document.querySelector(".project-2-pre-3") , document.querySelector(".project-2-pre-4") , document.querySelector(".project-2-pre-5") ] ;

// Projct 2 img - the main img that will be shown

let project2Img = document.querySelector(".project-2-img") ;

// indicator or counter

let indicator2 = 0 ;

// all the <pre> are set to 30% opacity by default. here we're making first <pre> 100%
// and setting the shown first img to the first element inside Project1Imgs array

project2pres[ indicator2 ].style.opacity = "100%" ;
project2Img.src = project2Imgs[ indicator2 ] ;

function changeProject2Img() {

    if( indicator2 != project2Imgs.length ) { 

        indicator2 += 1 ;
        project2Img.src = project2Imgs[ indicator2 ] ;
    }

    if( indicator2 == project2Imgs.length ){

        project2pres[ indicator2 - 1 ].style.opacity = "30%" ;
        indicator2 = 0 ;
        project2Img.src = project2Imgs[ indicator2 ] ;
    }

    project2pres[ indicator2 ].style.opacity = "100%" ;
    project2pres[ indicator2 - 1 ].style.opacity = "20%" ;
}

/* changeProject1Img() - break down 

if not 5 - not the end of the array. we jump to the next image
and set current <pre> to 100% opacity and the old one to 100%
( -1 since it is in chronological order )

if 5 - we start over ( set indicator1 to 0 ) and do it again and
again and again...

for <pre> you can just change color instead of opacity.
but i love working this way it gives more flexibility.

*/

// Clicking on the <pre> will change the img to it's index :

function showImage2( index ){  

    project2pres[ indicator2 ].style.opacity = "20%" ;
    indicator2 = index ;
    project2pres[ index ].style.opacity = "100%" ;
    project2Img.src = project2Imgs[ index ] ;
}

/////////////////////////////////////////// Project img indicator 3

// project 1 imgs src array ( list )

let project3Imgs = [ "imgs/CRACKER - bg1.png", "imgs/CRACKER - bg2.png", "imgs/CRACKER - bg3.png" ] ;

// project 1 <pre> tags classes inside an array 

let project3pres = [ document.querySelector(".project-3-pre-1") , document.querySelector(".project-3-pre-2") , document.querySelector(".project-3-pre-3") , document.querySelector(".project-3-pre-4") , document.querySelector(".project-3-pre-5") ] ;

// Projct 1 img - the main img that will be shown

let project3Img = document.querySelector(".project-3-img") ;

// indicator or counter

let indicator3 = 0 ;

// all the <pre> are set to 30% opacity by default. here we're making first <pre> 100%
// and setting the shown first img to the first element inside Project1Imgs array

project3pres[ indicator3 ].style.opacity = "100%" ;
project3Img.src = project3Imgs[ indicator3 ] ;

function changeProject3Img() {

    if( indicator3 != project3Imgs.length ) { 

        indicator3 += 1 ;
        project3Img.src = project3Imgs[ indicator3 ] ;
    }

    if( indicator3 == project3Imgs.length ){

        project3pres[ indicator3 - 1 ].style.opacity = "30%" ;
        indicator3 = 0 ;
        project3Img.src = project3Imgs[ indicator3 ] ;
    }

    project3pres[ indicator3 ].style.opacity = "100%" ;
    project3pres[ indicator3 - 1 ].style.opacity = "20%" ;
}

/* changeProject1Img() - break down 

if not 5 - not the end of the array. we jump to the next image
and set current <pre> to 100% opacity and the old one to 100%
( -1 since it is in chronological order )

if 5 - we start over ( set indicator1 to 0 ) and do it again and
again and again...

for <pre> you can just change color instead of opacity.
but i love working this way it gives more flexibility.

*/

// Clicking on the <pre> will change the img to it's index :

function showImage3( index ){  

    project3pres[ indicator3 ].style.opacity = "20%" ;
    indicator3 = index ;
    project3pres[ index ].style.opacity = "100%" ;
    project3Img.src = project3Imgs[ index ] ;
}

/////////////////////////////////////////// Project img indicator 4

// project 1 imgs src array ( list )

let project4Imgs = [ "imgs/MALIKS bg 1.png", "imgs/MALIKS bg 2.png", "imgs/MALIKS bg 3.png" ] ;

// project 1 <pre> tags classes inside an array 

let project4pres = [ document.querySelector(".project-4-pre-1") , document.querySelector(".project-4-pre-2") , document.querySelector(".project-4-pre-3") , document.querySelector(".project-4-pre-4") , document.querySelector(".project-4-pre-5") ] ;

// Projct 1 img - the main img that will be shown

let project4Img = document.querySelector(".project-4-img") ;

// indicator or counter

let indicator4 = 0 ;

// all the <pre> are set to 30% opacity by default. here we're making first <pre> 100%
// and setting the shown first img to the first element inside Project1Imgs array

project4pres[ indicator4 ].style.opacity = "100%" ;
project4Img.src = project4Imgs[ indicator4 ] ;

function changeProject4Img() {

    if( indicator4 != project4Imgs.length ) { 

        indicator4 += 1 ;
        project4Img.src = project4Imgs[ indicator4 ] ;
    }

    if( indicator4 == project4Imgs.length ){

        project4pres[ indicator4 - 1 ].style.opacity = "30%" ;
        indicator4 = 0 ;
        project4Img.src = project4Imgs[ indicator4 ] ;
    }

    project4pres[ indicator4 ].style.opacity = "100%" ;
    project4pres[ indicator4 - 1 ].style.opacity = "20%" ;
}

/* changeProject1Img() - break down 

if not 5 - not the end of the array. we jump to the next image
and set current <pre> to 100% opacity and the old one to 100%
( -1 since it is in chronological order )

if 5 - we start over ( set indicator1 to 0 ) and do it again and
again and again...

for <pre> you can just change color instead of opacity.
but i love working this way it gives more flexibility.

*/

// Clicking on the <pre> will change the img to it's index :

function showImage4( index ){  

    project4pres[ indicator4 ].style.opacity = "20%" ;
    indicator4 = index ;
    project4pres[ index ].style.opacity = "100%" ;
    project4Img.src = project4Imgs[ index ] ;
}

var iconClicked = false ;

function copyEmail(){

    navigator.clipboard.writeText("mohamadoz.design@gmail.com") ;
    
    if( !iconClicked ){ 
        
        document.querySelector(".copy-icon").src = "imgs/check-mark.svg" ; 
        iconClicked = true ;
    }
    else if( iconClicked ){

        document.querySelector(".copy-icon").src = "imgs/copy-icon.svg" ; 
        iconClicked = false ;
    }
}