from .db import db
from datetime import datetime

class Video(db.Model):
    __tablename__ = 'videos'

    id  = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(2200), nullable=False)
    video_url = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship('User', back_populates='videos')
    comments = db.relationship('Comment', back_populates='video', cascade='all,delete' )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'description': self.description,
            'video_url': self.video_url,
            'image_url': self.image_url,
            'created_at': self.created_at,
            'comments': [comment.to_dict() for comment in self.comments]
        }
