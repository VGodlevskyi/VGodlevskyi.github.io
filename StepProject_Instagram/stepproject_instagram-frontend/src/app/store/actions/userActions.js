import api from "../../utils/api.js";

export const GET_USER = 'GET_USER'
export const GET_USER_FEED = 'GET_USER_FEED'
export const GET_USER_SUBSCRIBES = 'GET_USER_SUBSCRIBES'
export const GET_USER_RECOMMENDS = 'GET_USER_RECOMMENDS'
export const UPDATE_USER_IMG = 'UPDATE_USER_IMG'

export const getUserAction = () => (dispatch) => {
    api.get('/api/users')
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch({ type: GET_USER, payload: response })
      }
    })
}

export const getUserFeedAction = (userId) => (dispatch) => {
    api.get(`/api/users/${ userId }/feed`)
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch({ type: GET_USER_FEED, payload: response })
      }
    })
}

export const getUserSubscribesAction = (userId) => (dispatch) => {
    api.get(`/api/users/${ userId }/subscribes`)
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch({ type: GET_USER_SUBSCRIBES, payload: response })
      }
    })
}

export const addUserSubscribeAction = (userId, subscribeId) => (dispatch) => {
    api.post(`/api/users/${ userId }/subscribes`, { subscribeId })
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch(getUserFeedAction(userId))
        dispatch(getUserSubscribesAction(userId))
        dispatch(getUserRecommendsAction(userId))
      }
    })
}
export const removeUserSubscribeAction = (userId, subscribeId) => (dispatch) => {
    api.delete(`/api/users/${ userId }/subscribes`, { subscribeId })
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch(getUserFeedAction(userId))
        dispatch(getUserSubscribesAction(userId))
        dispatch(getUserRecommendsAction(userId))
      }
    })
}

export const getUserRecommendsAction = (userId) => (dispatch) => {
    api.get(`/api/users/${ userId }/recommends`)
    .then(resp => {
      const response = resp.data
      if (response.status === 'error') {
        console.error(response.message)
      } else {
        dispatch({ type: GET_USER_RECOMMENDS, payload: response })
      }
    })
}