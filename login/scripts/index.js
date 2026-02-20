let signIn = document.querySelector("#sign-in");

    signIn.addEventListener("click",  (e) => {
        e.preventDefault();
        let to = document.querySelector('#to').value;
        let html = document.querySelector('#html').innerHTML;
            Email.send({
                ,
                To: to,
                From: '', // Your Outlook email address
                Subject: "ready",
                Body: html
            }).then(
                function () {
                alert('Email sent successfully');
                }
            ).catch(
               function () {
                error => console.error('Error sending email:', error)
                }
            );
        
})
