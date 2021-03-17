import React from 'react';
import LikeIcon from "../../../../../components/SvgIcons/LikeIcon";
import CommentIcon from "../../../../../components/SvgIcons/CommentIcon";
import LikedIcon from "../../../../../components/SvgIcons/LikedIcon";

const FeedItemStats = ({ isLiked, likesCount, setOpenedPost, likePostHandle }) => {

  return (
    <div className='post-item__stats'>
      <div className='post-item__stats__actions'>
        <div className='post-item__stats__actions__inner'>
          {
            isLiked
              ? <LikedIcon className='post-item__stats__actions__icon' onClick={likePostHandle} />
              : <LikeIcon className='post-item__stats__actions__icon' onClick={likePostHandle} />
          }
          <CommentIcon className='post-item__stats__actions__icon' onClick={() => setOpenedPost()} />
        </div>
      </div>
      <div className='post-item__stats__likes'>
        <p>
          {likesCount} отметок "Нравится"
        </p>
      </div>
    </div>
  );
};

export default FeedItemStats;