import React, { useState } from 'react';
import { useSelector } from "react-redux";
import userSelector from "../../../../../store/selectors/userSelector";
import AddPostComment from "../../../../../components/AddPostComment/AddPostComment";
import AllCommentsButton from "../AllCommentsButton/AllCommentsButton";

const FeedItemComments = ({ postId, comments = [] }) => {

  const { _id: authorizedUserId } = useSelector(userSelector)
  const [isAllComments, setIsAllComments] = useState(false);

  const renderComments = (comments) => comments.map(({ text, author }, index) => {
    return <p key={index}>
      <span className='last-comment-author'>{author.username}:</span>
      <span className='last-comment-text'>{text}</span>
    </p>
  })

  return (
    <div>
      <div>
        {
          comments.length > 0
          && <div className='last-comment'>
            {renderComments(isAllComments ? comments : comments.slice(0, 1))}
          </div>
        }
      </div>
      <div className='all-comments-button__wrapper'>
        {
          comments.length > 1 &&
          <AllCommentsButton commentsCount={comments.length}
            showAllComments={setIsAllComments}
            isAllComments={isAllComments} />
        }
      </div>
      <AddPostComment postId={postId} userId={authorizedUserId} />
    </div>
  );
};

export default FeedItemComments;