import React from 'react';
import { useSelector } from "react-redux";
import userSelector from "../../store/selectors/userSelector";
import PostModalHeader from "./PostModalHeader/PostModalHeader";
import PostModalComments from "./PostModalComments/PostModalComments";
import AddPostComment from "./AddPostComment/AddPostComment";
import './PostModal.scss'

const PostModal = ({ post, onClose }) => {

  const { _id: authorizedUserId } = useSelector(userSelector)
  const { _id: postId, url, author, comments } = post

  const handleModalClose = (event) => {
    event.target === event.currentTarget && onClose()
  }

  return (
    <div className='post-modal__wrapper' onClick={ handleModalClose }>
      <div className='post-modal'>
        <div className='post-modal__img'>
          <img src={ url } alt={ `Posted by ${ author.username }` }/>
        </div>
        <div className='post-modal__info'>
          <PostModalHeader postAuthor={ author }/>
          <PostModalComments comments={ comments }/>
          <AddPostComment postId={ postId } userId={ authorizedUserId }/>
        </div>
      </div>
    </div>
  );
};

export default PostModal;