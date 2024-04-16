let signIn = document.querySelector('#sign-in');
signIn.addEventListener("onclick",    function (){
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;

    // Replace these with your SMTP server details
    const smtpConfig = {
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // use SSL/TLS
        auth: {
            user: 'marvelybannk@outlook.com', // Your Outlook email address
            pass: '123@123@abcD' // Your Outlook password or app password
        }
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    // Construct email message
    const mailOptions = {
        from: 'marvelybannk@outlook.com', // Your Outlook email address
        to,
        subject,
        text: body
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            alert('Email sent successfully');
        }
    });
})
