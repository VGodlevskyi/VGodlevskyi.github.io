import {
  CLEAR_USER_PROFILE,
  CREATE_POST_ACTION,
  GET_PROFILE_POSTS,
  LOAD_USER_PROFILE,
  UPDATE_PROFILE_IMG
} from "../actions/profileActions";

export const profileReducer = (profile = {}, action) => {
  const { posts } = profile || []
  switch (action.type) {
    case LOAD_USER_PROFILE:
      return action.payload;
    case CLEAR_USER_PROFILE:
      return action.payload;
    case UPDATE_PROFILE_IMG:
      return { ...profile, img: action.payload };
    case GET_PROFILE_POSTS:
      return { ...profile, posts: action.payload };
    case CREATE_POST_ACTION:
      posts.unshift(action.payload)
      return { ...profile, posts };
    default:
      return profile
  }
}