import api from "../../utils/api.js";

export const LIKE_POST_ACTION = 'LIKE_POST_ACTION'
export const DISLIKE_POST_ACTION = 'DISLIKE_POST_ACTION'
export const COMMENT_POST_ACTION = 'COMMENT_POST_ACTION'

export const likePostAction = (postId, userId) => (dispatch) => {
    api.post(`/api/likes/`, { postId, userId })
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch({ type: LIKE_POST_ACTION, payload: response })
      }
    })
}

export const dislikePostAction = (postId, userId) => (dispatch) => {
    api.delete(`/api/likes/`, { postId, userId })
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch({ type: DISLIKE_POST_ACTION, payload: response })
      }
    })
}

export const commentPostAction = (data, onComplete) => (dispatch) => {
    api.post(`/api/comments/`, data).then(resp => {
    onComplete()
    const response = resp.data
    if (response.status === 'error') {
      console.error(response.message)
    } else {
      dispatch({ type: COMMENT_POST_ACTION, payload: response })
    }
  })
}