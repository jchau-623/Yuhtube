from app.models import db, Video
def seed_videos():

    videos = [
    Video(

    )
    ]

    for video in videos:
        db.session.add(video)
    db.session.commit()

def undo_videos():
    db.session.execute('TRUNCATE notebooks RESTART IDENTITY CASCADE;')
    db.session.commit()
