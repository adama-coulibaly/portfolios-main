function sendMail() {
    var params = {
        name : document.getElementById("nom").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("objet").value,
        message : document.getElementById("messages").value
    };

    const serviceID = "service_for_Adama";

    const templateID = "template_4qakicm";

    emailjs.send(serviceID,templateID,params)
        .then(
            res => {
                document.getElementById("nom").value = "";
                document.getElementById("email").value = "";
                document.getElementById("objet").value = "";
                document.getElementById("messages").value = "";
                console.log(res);
                alert("Message envoyé avec succès !");
            }
        ).catch((err) => console.log(err));

}