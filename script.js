// Handle Feedback Form Submission to Google Sheet (via SheetDB)
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
                data: {
                    name: document.getElementById('feedbackName').value,
                    email: document.getElementById('feedbackEmail').value,
                    feedback: document.getElementById('feedbackText').value
                }
            };

            // REPLACE THE URL BELOW WITH YOUR SHEETDB API ENDPOINT URL
            fetch('https://sheetdb.io/api/v1/dlal972pihgd3', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    status.classList.remove('hidden');
                    feedbackForm.reset();
                    btn.innerText = "Submit Feedback";
                    btn.disabled = false;
                    setTimeout(() => status.classList.add('hidden'), 5000);
                } else {
                    alert('Submission failed. Please check your API URL.');
                    btn.innerText = "Submit Feedback";
                    btn.disabled = false;
                }
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
