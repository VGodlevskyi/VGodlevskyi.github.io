import React, { useState } from 'react';
import FeedItemHeader from "./FeedItemComponents/FeedItemHeader";
import FeedItemStats from "./FeedItemComponents/FeedItemStats";
import FeedItemComments from "./FeedItemComponents/FeedItemComments";
import LikedIcon from "../../../../components/SvgIcons/LikedIcon";
import PostModal from "../../../../components/PostModal/PostModal";
import userSelector from "../../../../store/selectors/userSelector";
import { useDispatch, useSelector } from "react-redux";
import { dislikePostAction, likePostAction } from "../../../../store/actions/postActions";
import "./FeedItem.scss"

const FeedItem = ({ post }) => {

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [openedPost, setOpenedPost] = useState(null)
  const { _id, url, author, likes, comments } = post
  const isLiked = likes && likes.some(like => like.userId === user._id)

  const likePostHandle = () => {
    isLiked
      ? dispatch(dislikePostAction(_id, user._id))
      : dispatch(likePostAction(_id, user._id))
  }

  return (
    <div className='post-item'>
      {
        openedPost && <PostModal post={openedPost} onClose={() => setOpenedPost(null)} />
      }
      <FeedItemHeader author={author} />
      <div className='post-item__body'>
        <div className='post-item__body__overlay' onDoubleClick={likePostHandle}>
          
        </div>
        <img src={url} alt="post-content" />
      </div>
      <FeedItemStats isLiked={isLiked}
        likesCount={likes && likes.length}
        likePostHandle={() => likePostHandle()}
        setOpenedPost={() => setOpenedPost(post)} />
      <FeedItemComments postId={_id} comments={comments} />
    </div>
  );
};

export default FeedItem;