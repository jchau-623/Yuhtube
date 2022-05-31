const LOAD_VIDEOS = 'videos/LOAD_VIDEOS'
const EDIT_VIDEOS = 'videos/EDIT_VIDEOS'
const DELETE_VIDEOS = 'videos/DELETE_VIDEOS'
const ADD_VIDEOS = 'videos/ADD_VIDEOS'

// ACTIONS
const loadVideos = (videos) => {
    return {
        type: LOAD_VIDEOS,
        videos
    }
}

const addVideos = (newVideo) => {
    return {
        type: ADD_VIDEOS,
        newVideo
    }
}

const editVideo = (video) => {
    return {
        type: EDIT_VIDEOS,
        video
    }
}

const deleteVideo = (videoId) => {
    return {
        type: DELETE_VIDEOS,
        videoId
    }
}

// THUNK CREATORS
export const getVideos = () => async dispatch => {
    const res = await fetch('/api/videos/')

    if (res.ok) {
        const videos = await res.json()
        dispatch(loadVideos(videos.videos))
        return videos
    }
}


const initialState = {
    list: []
}

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case LOAD_VIDEOS:
            return {
                ...state,
                list:action.videos
            }
            default:
                return state;
    }
}
