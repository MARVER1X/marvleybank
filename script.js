let userEmail = "";

// Step 1: Handle Email Submission
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();   
    
    userEmail = document.getElementById('email').value.trim();
    const emailGroup = document.getElementById('emailGroup');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!userEmail || !emailRegex.test(userEmail)) {
        emailGroup.classList.add('error');
        emailError.style.display = 'block';
        return;
    }
    
    // Success: Move to Step 2
    emailGroup.classList.remove('error');
    emailError.style.display = 'none';
    document.getElementById('emailSection').style.display = 'none';
    document.getElementById('nameSection').style.display = 'block';
});

// Step 2: Handle Name Submission & Webhook
document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let userName = document.getElementById('fullName').value.trim();
    const nameGroup = document.getElementById('nameGroup');
    const nameError = document.getElementById('nameError');
    
    if (!userName || userName.length < 2) {
        nameGroup.classList.add('error');
        nameError.style.display = 'block';
        return;
    }
    
    nameGroup.classList.remove('error');
    nameError.style.display = 'none';

    // Send to Google Sheets Webhook
    let textPayload = `New Waitlist Entry - Name: ${userName} | Email: ${userEmail}`;
    
    fetch("https://script.google.com/macros/s/AKfycbz2qVHeV_wNI9R6v4J8YdeDEB38DSLxXbeIaJKwTJ8ulNu6sV_1ehhMvCyK2UJVst6XyQ/exec", {
        mode: 'no-cors', 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textPayload })
    })
    .then(() => {
        console.log("Data sent to webhook successfully.");
    })
    .catch(error => console.error("Webhook Error:", error));

    // Show Success UI
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "block";
});

// Clear error states when typing
document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailGroup').classList.remove('error');
    document.getElementById('emailError').style.display = 'none';
});

document.getElementById('fullName').addEventListener('input', function() {
    document.getElementById('nameGroup').classList.remove('error');
    document.getElementById('nameError').style.display = 'none';
});
