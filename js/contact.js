let sendEmail = () => {
    var params =
    {
        from_name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    }
    emailjs.send("service_gf4fnsl", "template_k615q5q", params).then(alert("Message sent!"))
}
