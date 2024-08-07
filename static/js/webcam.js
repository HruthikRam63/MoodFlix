document.addEventListener('DOMContentLoaded', () => {
    // Initialize the webcam and start the video stream
    function startWebcam() {
        const video = document.getElementById('video');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    video.srcObject = stream;
                    video.play();
                })
                .catch(error => console.error('Error accessing webcam:', error));
        } else {
            console.error('Webcam not supported');
        }
    }

    // Capture an image from the webcam and process it for mood detection
    function captureAndProcessImage() {
        const video = document.getElementById('video');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas size to video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw the current frame from the video onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');

        // Send the image to the backend for mood detection
        fetch('/detect_emotion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: imageData })
        })
        .then(response => response.json())
        .then(data => {
            if (data.emotion) {
                showMoodConfirmation(data.emotion);
            } else {
                alert('Unable to detect mood. Please retry.');
            }
        })
        .catch(error => console.error('Error processing image:', error));
    }

    /* Show mood confirmation with options to proceed or retry
    function showMoodConfirmation(mood) {
        const moodConfirmation = document.createElement('div');
        moodConfirmation.classList.add('mood-confirmation');
        moodConfirmation.innerHTML = `
            <div class="mood-confirmation-content">
                <p>Yoo!! Are you feeling ${mood}? 😃</p>
                <img src="static/images/${mood}.png" alt="${mood}" class="mood-image">
                <button id="proceed">Proceed</button>
                <button id="retry">Retry</button>
            </div>
        `;

        document.body.appendChild(moodConfirmation);

        // Event listeners for proceed and retry buttons
        document.getElementById('proceed').addEventListener('click', () => {
            moodConfirmation.remove();
            processMood(mood);
        });

        document.getElementById('retry').addEventListener('click', () => {
            moodConfirmation.remove();
            captureAndProcessImage();
        });
    }
*/
    // Process the detected mood and update the UI accordingly
    function processMood(mood) {
        fetch(`/recommend_movies?mood=${encodeURIComponent(mood)}`)
            .then(response => response.json())
            .then(movies => {
                // Assuming there's a function in frontend.js to update movie recommendations
                if (typeof updateMovieRecommendations === 'function') {
                    updateMovieRecommendations(movies);
                } else {
                    console.error('updateMovieRecommendations function not found');
                }
            })
            .catch(error => console.error('Error fetching movie recommendations:', error));
    }

    // Start the webcam when the page loads
    startWebcam();

    // Capture mood when the "Capture Mood" button is clicked
    document.getElementById('capture').addEventListener('click', captureAndProcessImage);
});
