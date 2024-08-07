from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

# Load movies data from JSON file
with open('data/movies_db.json', 'r') as f:
    movies_data = json.load(f)

# Route for the main page
@app.route('/')
def index():
    return render_template('indexpage.html')

# Route for detecting emotion (simulated for example purposes)
@app.route('/detect_emotion', methods=['POST'])
def detect_emotion():
    # This should be replaced with actual emotion detection logic
    simulated_emotion = 'happy'
    return jsonify({'emotion': simulated_emotion})

# Route for recommending movies based on mood
@app.route('/recommend_movies')
def recommend_movies():
    mood = request.args.get('mood', '')
    recommended_movies = [movie for movie in movies_data if mood.lower() in movie['keywords']]
    return jsonify(recommended_movies)

# Route for movie details
@app.route('/movie/<title>')
def movie_detail(title):
    movie = next((movie for movie in movies_data if movie['title'] == title), None)
    return render_template('movie_detail.html', movie=movie)

if __name__ == '__main__':
    app.run(debug=True)
