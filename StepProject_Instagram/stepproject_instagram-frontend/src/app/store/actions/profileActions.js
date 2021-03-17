import api from "../../utils/api.js";
import { UPDATE_USER_IMG } from "./userActions";

export const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE'
export const CLEAR_USER_PROFILE = 'LOAD_USER_PROFILE'
export const UPDATE_PROFILE_IMG = 'UPDATE_PROFILE_IMG'
export const GET_PROFILE_POSTS = 'GET_PROFILE_POSTS'
export const CREATE_POST_ACTION = 'CREATE_POST_ACTION'

export const loadUserProfile = (userId) => async (dispatch) => {
  const { data } = await api.get(`/api/users/${ userId }`)
  if (data.status === 'error') {
    console.error(data.message)
  } else {
    dispatch({ type: LOAD_USER_PROFILE, payload: data })
  }
}

export const clearUserProfile = () => (dispatch) => {
  dispatch({ type: CLEAR_USER_PROFILE, payload: null })
}

export const updateProfileImage = (userId, fileImg) => async (dispatch) => {
  const sendData = new FormData()
  sendData.append('file', fileImg)
  const fileUploadResponse = await api.post(`/api/files`, sendData)
  if (fileUploadResponse.data.status === 'error') {
    console.error(fileUploadResponse.data.message)
  } else {
    const imgUpdateResponse = await api.put(`/api/users/${ userId }`, { img: fileUploadResponse.data.url })
    if (imgUpdateResponse.data.status === 'error') {
      console.error(imgUpdateResponse.data.message)
    } else {
      dispatch({ type: UPDATE_PROFILE_IMG, payload: imgUpdateResponse.data.img })
      dispatch({ type: UPDATE_USER_IMG, payload: imgUpdateResponse.data.img })
    }
  }
}

export const getProfilePosts = (userId) => async (dispatch) => {
  const { data } = await api.get(`/api/posts/${ userId }`)
  if (data.status === 'error') {
    console.error(data.message)
  } else {
    dispatch({ type: GET_PROFILE_POSTS, payload: data })
  }
}

export const createProfilePost = (userId, fileImg) => async (dispatch) => {
  const sendData = new FormData()
  sendData.append('file', fileImg)
  const fileUploadResponse = await api.post(`/api/files`, sendData)
  if (fileUploadResponse.data.status === 'error') {
    console.error(fileUploadResponse.data.message)
  } else {
    const postCreateResponse = await api.post(`/api/posts/`, {
      authorId: userId,
      url: fileUploadResponse.data.url
    })
    if (postCreateResponse.data.status === 'error') {
      console.error(postCreateResponse.data.message)
    } else {
      dispatch({ type: CREATE_POST_ACTION, payload: postCreateResponse.data })
    }
  }
}