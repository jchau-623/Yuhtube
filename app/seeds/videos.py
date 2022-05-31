from app.models import db, Video

import datetime

now = datetime.datetime.utcnow()
def seed_videos():

    videos = [
    Video(
        title='demo title',
        user_id='1',
        description='demo description',
        created_at=now,
        
    )
    ]

    for video in videos:
        db.session.add(video)
    db.session.commit()

def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()
