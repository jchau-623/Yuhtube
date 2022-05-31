from app.models import db, Comment
import datetime

now = datetime.datetime.utcnow()
def seed_comments():
    comments = [
    Comment(
    body='This video is awesome!',
    user_id='1',
    video_id='1',
    created_at=now
    ),
    Comment(
    body='Demo comment',
    user_id='1',
    video_id='1',
    created_at=now
    )
    ]

    for comment in comments:
        db.session.add(comment)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
