document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            btn.innerText = "Syncing...";
            btn.disabled = true;

            const nameVal = document.getElementById('feedbackName').value;
            const emailVal = document.getElementById('feedbackEmail').value;
            const msgVal = document.getElementById('feedbackText').value;

            // 1. Send to Web3Forms (For Email Notifications)
            const web3Data = {
                apikey: "14e212d5-36a2-4ed3-8a42-5d70e4246279", 
                name: nameVal,
                email: emailVal,
                message: msgVal
            };

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(web3Data)
            });

            // 2. Send to Google Sheets (For Mentor Review)
            // ⚠️ PASTE YOUR GOOGLE SCRIPT URL BETWEEN THE QUOTES BELOW ⚠️
            const googleSheetURL = "https://script.google.com/macros/s/AKfycbya27byzup8vGPuinD3V2wzIJLt1W3JcqBmQObrOKHLGpq0A0AIgBsF8--TiY62xb46/exec"; 

            fetch(googleSheetURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: nameVal, email: emailVal, message: msgVal })
            })
            .then(() => {
                status.classList.remove('hidden');
                feedbackForm.reset();
                btn.innerText = "Submit Feedback";
                btn.disabled = false;
                setTimeout(() => status.classList.add('hidden'), 5000);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
                btn.innerText = "Submit Feedback";
                btn.disabled = false;
            });
        });
    }
});
