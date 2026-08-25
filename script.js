document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            btn.innerText = "Syncing...";
            btn.disabled = true;

            const formData = {
                apikey: "14e212d5-36a2-4ed3-8a42-5d70e4246279", // <-- Paste your key here
                name: document.getElementById('feedbackName').value,
                email: document.getElementById('feedbackEmail').value,
                message: document.getElementById('feedbackText').value
            };

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    status.classList.remove('hidden');
                    feedbackForm.reset();
                    btn.innerText = "Submit Feedback";
                    btn.disabled = false;
                    setTimeout(() => status.classList.add('hidden'), 5000);
                } else {
                    alert(json.message || 'Submission failed. Please try again.');
                    btn.innerText = "Submit Feedback";
                    btn.disabled = false;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please check your connection.');
                btn.innerText = "Submit Feedback";
                btn.disabled = false;
            });
        });
    }
});
