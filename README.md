# MoodFlix: Your Mood-Based Movie Recommender

## Project Description

**MoodFlix** is an innovative movie recommendation system designed to enhance your movie-watching experience by analyzing your mood. By using sentiment analysis and webcam interactions, MoodFlix dynamically suggests movies tailored to your current emotional state. This project combines real-time mood detection with personalized movie recommendations to provide a unique and engaging user experience.


## Table of Contents
<br clear="both">

<img align="right" height="200" src="static/images/icon.jpeg" alt="MoodFlix Logo"  />

1. [Project Description](#project-description)
2. [Requirements](#requirements)
3. [Installation Instructions](#installation-instructions)
4. [Usage Details](#usage-details)
5. [Contributions](#contributions)
6. [Further Development](#further-development)
7. [Contact Information](#contact-information)
8. [Screenshots](#screenshots)


## Requirements

- **Web Technologies:** HTML, CSS, JavaScript
- **Backend:** Python with Flask for hosting
- **Libraries/Frameworks:** Fetch API, JSON, and Google Fonts
- **Webcam Integration:** For mood detection
- **Movie Dataset:** `movies_db.json`
- **Images:** Emoji images for mood representation

## Installation Instructions

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/hruthrikram63/MoodFlix.git
    ```
2. **Navigate to the Project Directory:**
    ```bash
    cd MoodFlix
    ```
3. **Install Dependencies:**
    Ensure you have Python installed. Create a virtual environment and install Flask.
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install flask
    ```
4. **Start the Flask Server:**
    ```bash
    python app.py
    ```
5. **Open the Application:**
    Navigate to `http://localhost:5000` in your web browser.

## Usage Details

1. **Initial Greeting:**
   Upon visiting the MoodFlix webpage, users are greeted with a popup that prompts them to check their mood using the webcam.
   
2. **Mood Detection:**
   After clicking "OK", the webcam activates to capture an image, which is then used to analyze the user's mood.
   
3. **Movie Recommendations:**
   Based on the detected mood, MoodFlix displays a personalized message and a list of recommended movies, including images and titles.
   
4. **Movie Details:**
   Clicking on any movie provides detailed information including the movie's title, image, and description.

## Contributions

Contributions to the MoodFlix project are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes and push to your branch.
4. Open a pull request with a clear description of your changes.

## Further Development

This project is currently configured to recognize a limited range of moods and movie recommendations. Future updates will aim to expand mood detection capabilities, incorporate a broader range of movies, and enhance user interactivity for a more personalized experience.

## Contact Information

For any questions or inquiries, please contact:
- **Email:** hruthikram63@gmail.com
- **LinkedIn:** [My LinkedIn Profile](https://www.linkedin.com/in/hruthikram63)

## Screenshots
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; justify-content: center;">
    <div style="border-radius: 10px; overflow: hidden;">
        <img src="https://i.postimg.cc/j5Rw7PC9/Screenshot-2024-08-07-141911.png" alt="Screenshot 1" style="width: 100%; border-radius: 10px;"/>
    </div>
    <div style="border-radius: 10px; overflow: hidden;">
        <img src="https://i.postimg.cc/hGBhkT8j/Screenshot-2024-08-07-141932.png" alt="Screenshot 2" style="width: 100%; border-radius: 10px;"/>
    </div>
    <div style="border-radius: 10px; overflow: hidden;">
        <img src="https://i.postimg.cc/P5ktJhCV/Screenshot-2024-08-07-141947.png" alt="Screenshot 3" style="width: 100%; border-radius: 10px;"/>
    </div>
    <div style="border-radius: 10px; overflow: hidden;">
        <img src="https://i.postimg.cc/RVtSvqZn/Screenshot-2024-08-07-142001.png" alt="Screenshot 4" style="width: 100%; border-radius: 10px;"/>
    </div>
    <div style="border-radius: 10px; overflow: hidden;">
        <img src="https://i.postimg.cc/T1pPV9xk/Screenshot-2024-08-07-142019.png" alt="Screenshot 5" style="width: 100%; border-radius: 10px;"/>
    </div>
</div>
