import {
    GET_USER,
    GET_USER_FEED,
    GET_USER_RECOMMENDS,
    GET_USER_SUBSCRIBES,
    UPDATE_USER_IMG
} from "../actions/userActions";

import { COMMENT_POST_ACTION, DISLIKE_POST_ACTION, LIKE_POST_ACTION } from "../actions/postActions";

export const userReducer = (user = {}, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...user, ...action.payload }
        case GET_USER_FEED:
            return { ...user, feed: action.payload }
        case GET_USER_SUBSCRIBES:
            return { ...user, subscribes: action.payload }
        case GET_USER_RECOMMENDS:
            return { ...user, recommends: action.payload }
        case UPDATE_USER_IMG:
            return { ...user, img: action.payload }
        case LIKE_POST_ACTION:
            const like = action.payload;
            const { likes } = user.feed.find(post => post._id === like.postId)
            likes.push(like)
            return { ...user }
        case DISLIKE_POST_ACTION:
            const { postId, userId } = action.payload;
            const post = user.feed.find(post => post._id === postId)
            post.likes = post.likes.filter(like => like.userId !== userId)
            return { ...user }
        case COMMENT_POST_ACTION:
            const comment = action.payload;
            // console.log(action.payload)
            // console.log(user)
            const { comments } = user.feed.find(post => post._id === comment.postId)
            comments.unshift(comment)
            return { ...user }
        default:
            return user
    }
}