from flask import Flask
from flask import render_template
from flask import request

from faketwitter.database import db_session
from faketwitter.utils import make_tweet
from faketwitter.models import Post

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api', methods=['GET', 'POST'])
def api():
    if request.method == 'POST':
        text = request.form['body']
        result = make_tweet(text)
        return {
            'result': result
        }
    else:
        # Get posts from db
        posts = Post.query.all()
        return {
            'posts': [post.to_json() for post in posts]
        }

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()
