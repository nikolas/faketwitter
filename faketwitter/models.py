from sqlalchemy import Column, Integer, String
from faketwitter.database import Base

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    author = Column(String(50))
    body = Column(String(140))

    def __init__(self, author=None, body=None):
        self.author = author
        self.body = body

    def __str__(self):
        return f'<Post {self.author!r} {self.body!r}>'

    def to_json(self):
        return {
            'author': self.author,
            'body': self.body,            
        }
    
