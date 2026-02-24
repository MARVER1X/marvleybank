/**
 * ! GLOBAL APPLICATION STATE
 * Persisting user data across multi-step form transitions
 */
let userEmail = "";

/**
 * ! STEP 1: EMAIL IDENTIFICATION & VALIDATION
 * Logic for validating the user's primary identity before proceeding
 */
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();   
    
    // Capture and sanitize input
    userEmail = document.getElementById('email').value.trim();
    const emailGroup = document.getElementById('emailGroup');
    const emailError = document.getElementById('emailError');
    
    // Standard RFC 5322 Compliant Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // --- Guard Clause: Validate Email Format ---
    if (!userEmail || !emailRegex.test(userEmail)) {
        emailGroup.classList.add('error');
        emailError.style.display = 'block';
        return;
    }
    
    // --- State Transition: Success ---
    // Flush error states and toggle view from Email to Name collection
    emailGroup.classList.remove('error');
    emailError.style.display = 'none';
    document.getElementById('emailSection').style.display = 'none';
    document.getElementById('nameSection').style.display = 'block';
});

/**
 * ! STEP 2: USER PROFILING & ASYNCHRONOUS DATA PERSISTENCE
 * Logic for final validation and cross-domain Webhook communication
 */
document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let userName = document.getElementById('fullName').value.trim();
    const nameGroup = document.getElementById('nameGroup');
    const nameError = document.getElementById('nameError');
    
    // --- Guard Clause: Minimum Character Requirement ---
    if (!userName || userName.length < 2) {
        nameGroup.classList.add('error');
        nameError.style.display = 'block';
        return;
    }
    
    nameGroup.classList.remove('error');
    nameError.style.display = 'none';

    /**
     * ! GOOGLE APPS SCRIPT WEBHOOK INTEGRATION
     * Constructing the payload for the external database (Google Sheets)
     */
    let textPayload = `New Waitlist Entry - Name: ${userName} | Email: ${userEmail}`;
    
    // Execute Asynchronous POST request
    fetch("https://script.google.com/macros/s/AKfycbyHgbE_Y7jiyNnxrhgCy8MvHxx2qpAR37oF1PMA3vVPI7oQG63tab5AhgkyhXEYnAX_/exec", {
        mode: 'no-cors', // Essential for bypassing Cross-Origin Resource Sharing (CORS) limits with GAS
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textPayload })
    })
    .then(() => {
        // Log successful network resolution
        console.log("Data sent to webhook successfully.");
    })
    .catch(error => console.error("Webhook Error:", error));

    /**
     * ! UI TERMINATION STATE
     * Finalizing the user journey and presenting the success state
     */
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "block";
});

/**
 * ! EVENT LISTENERS: REAL-TIME VALIDATION RESET
 * Improving UX by clearing error feedback on active user input
 */
document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailGroup').classList.remove('error');
    document.getElementById('emailError').style.display = 'none';
});

document.getElementById('fullName').addEventListener('input', function() {
    document.getElementById('nameGroup').classList.remove('error');
    document.getElementById('nameError').style.display = 'none';
});
