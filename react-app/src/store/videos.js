const LOAD_VIDEOS = 'videos/LOAD_VIDEOS'
const EDIT_VIDEO = 'videos/EDIT_VIDEOS'
const DELETE_VIDEO = 'videos/DELETE_VIDEOS'
const ADD_VIDEO = 'videos/ADD_VIDEOS'

// ACTIONS
const loadVideos = (videos) => {
    return {
        type: LOAD_VIDEOS,
        videos
    }
}

const addVideo = (newVideo) => {
    return {
        type: ADD_VIDEO,
        newVideo
    }
}

const editVideo = (video) => {
    return {
        type: EDIT_VIDEO,
        video
    }
}

const deleteVideo = (videoId) => {
    return {
        type: DELETE_VIDEO,
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

export const createVideo = (newVideo) => async dispatch => {
    const res = await fetch('/api/videos/', {
        method: 'POST',
        
    })
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
