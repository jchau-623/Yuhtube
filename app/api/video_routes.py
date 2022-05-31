from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Video, Comment

video_routes = Blueprint('video', __name__)

@video_routes.route('/')
def get_videos():
    user_id = current_user.get_id()
    videos = Video.query.filter(Video.user_id == user_id).all()
    return {'videos': [video.to_dict() for video in videos]}
