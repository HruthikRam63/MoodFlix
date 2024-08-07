document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch movie recommendations based on user mood
    function recommendMovies(userMood) {
        fetch(`/recommend_movies?mood=${encodeURIComponent(userMood)}`)
            .then(response => response.json())
            .then(movies => {
                displayMovies(movies);
            })
            .catch(error => console.error('Error fetching movie recommendations:', error));
    }

    // Function to display the movies dynamically on the page
    function displayMovies(movies) {
        const movieContainer = document.getElementById('movieContainer');
        movieContainer.innerHTML = '';

        if (movies.length === 0) {
            movieContainer.innerHTML = '<p>No movies found for this mood.</p>';
            return;
        }

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.dataset.title = movie.title;

            const img = document.createElement('img');
            img.src = movie.image;
            img.alt = movie.title;

            const title = document.createElement('p');
            title.textContent = movie.title;

            movieDiv.appendChild(img);
            movieDiv.appendChild(title);
            movieContainer.appendChild(movieDiv);

            // Event listener for clicking on a movie to view details
            movieDiv.addEventListener('click', () => showMovieDetails(movie.title));
        });
    }

    // Function to show movie details on a new page
    function showMovieDetails(title) {
        window.location.href = `/movie/${encodeURIComponent(title)}`;
    }

    // Function to handle the mood message and display recommendations based on mood
    function handleMoodDetection(mood) {
        const moodMessage = `You seem to be ${mood}, watch these to embrace yourself.`;
        document.getElementById('moodMessage').textContent = moodMessage;
        recommendMovies(mood);
    }

    // Event listener for the "Capture Mood" button
    document.getElementById('capture').addEventListener('click', () => {
        fetch('/detect_emotion', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.emotion) {
                    const userMood = data.emotion.toLowerCase();
                    document.getElementById('webcam').style.display = 'none';
                    document.getElementById('main-content').classList.remove('hidden');
                    handleMoodDetection(userMood);
                } else {
                    alert('Unable to detect mood. Please try again.');
                }
            })
            .catch(error => console.error('Error detecting emotion:', error));
    });

    // Event listener for the "OK" button on the initial popup
    document.getElementById('popup-ok').addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('webcam').style.display = 'flex';
        startWebcam();
    });

    // Function to initialize and start the webcam
    function startWebcam() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    const video = document.getElementById('video');
                    video.srcObject = stream;
                    video.play();
                })
                .catch(error => console.error('Error accessing webcam:', error));
        }
    }
});
