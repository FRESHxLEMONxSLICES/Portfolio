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