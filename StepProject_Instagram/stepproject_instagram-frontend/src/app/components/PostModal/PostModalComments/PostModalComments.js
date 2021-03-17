import React from 'react';
import './PostModalComments.scss'

const PostModalComments = ({ comments }) => {

  const renderComments = () => comments && comments.map(
    ({ author, text }, index) => {
      return (
        <li key={ index } className='post-modal-comments__item'>
          <span className='post-modal-comments__item__author'>{ author.username }:</span>
          <span className='post-modal-comments__item__comment'>{ text }</span>
        </li>
      )
    }
  )

  return (
    <div className="post-modal-comments">
      <ul>
        { renderComments() }
      </ul>
    </div>
  )
    ;
};

export default PostModalComments;