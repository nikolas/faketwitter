from faketwitter.database import db_session
from faketwitter.models import Post

def make_tweet(s):
    p = Post('Anonymous', s)

    db_session.add(p)
    db_session.commit()

    print(Post.query.all())
    print(s)
    return True
