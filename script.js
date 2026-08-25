document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const successMessage = document.getElementById('success-message');
    const submitBtn = document.getElementById('submit-btn');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';

            const formData = new FormData(feedbackForm);

            try {
                const response = await fetch(feedbackForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    feedbackForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                } else {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Feedback';
                    alert('Submission error. Please verify your Formspree link.');
                }
            } catch (error) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Feedback';
                alert('Network issue. Please try again.');
            }
        });
    }
});