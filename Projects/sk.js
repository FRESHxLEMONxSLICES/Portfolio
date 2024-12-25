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

let magazineImgs = [ "imgs/magazine/SK magazine cover.png", "imgs/magazine/SK magazine init.png", "imgs/magazine/SK magazine init 2.png", "imgs/magazine/SK magazine p1.png", "imgs/magazine/SK magazine p2.png", "imgs/magazine/SK magazine p3.png", "imgs/magazine/SK magazine p4.png", "imgs/magazine/SK magazine p5.png", "imgs/magazine/SK magazine p6.png", "imgs/magazine/SK magazine p7.png", "imgs/magazine/SK magazine p8.png", "imgs/magazine/SK magazine p9.png", "imgs/magazine/SK magazine p10.png", "imgs/magazine/SK magazine final.png", "imgs/magazine/SK magazine final 2.png", "imgs/magazine/Sk magazine back cover.png" ] ;
let magazinePresentedImg = document.querySelector(".collateral-magazine-presenter-img") ;

let counter = 0 ;
magazinePresentedImg.src = magazineImgs[ counter ] ;

function changeMagazineImg( value ) {

    if( value == 1 ){ counter -- ; } ;
    if( value == 0 ){ counter ++ ; } ;
    if( counter == magazineImgs.length ){ counter = 0 } ;
    if( counter < 0 ){ counter = magazineImgs.length - 1 } ;

    magazinePresentedImg.src = magazineImgs[ counter ] ;
}