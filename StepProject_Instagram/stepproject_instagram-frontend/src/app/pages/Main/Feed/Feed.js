import React, { useEffect } from 'react';
import FeedItem from "./FeedItem/FeedItem";
import { useDispatch, useSelector } from "react-redux";
import { getUserFeedAction } from "../../../store/actions/userActions";
import userSelector from "../../../store/selectors/userSelector";
import userFeedSelector from "../../../store/selectors/userFeedSelector";
import './Feed.scss'

const Feed = () => {

  const dispatch = useDispatch()
  const { _id } = useSelector(userSelector)
  const feed = useSelector(userFeedSelector) || []

  useEffect(() => {
    dispatch(getUserFeedAction(_id))
  }, [dispatch, _id])

  const feedItemComponents = feed.map(post => <FeedItem post={post} key={post._id} />) || []

  return (
    <div className="post-container">
      {
        feedItemComponents.length > 0
          ? feedItemComponents
          : <p className='post-container__message'>We dont find anything to show</p>
      }
    </div>
  );
};

export default Feed;