import React from 'react';
import './AllCommentsButton.scss'

const AllCommentsButton = ({ commentsCount, showAllComments, isAllComments }) => {

  const onClickHandler = () => {
    showAllComments(!isAllComments)
  }

  return (
    <button className='all-comments-button' onClick={onClickHandler}>
      { isAllComments ? 'Hide comments...' : `See all ${commentsCount} comments...`}
    </button>
  );
};

export default AllCommentsButton;