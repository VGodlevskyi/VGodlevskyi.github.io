import React, { useEffect, useState } from 'react';
import PostContainerTabs from "./PostContainerContent/PostContainerTabs";
import PostContainerContent from "./PostContainerContent/PostContainerContent";
import { useDispatch, useSelector } from "react-redux";
import userProfileSelector from "../../../store/selectors/userProfileSelector";
import { getProfilePosts } from "../../../store/actions/profileActions";
import './UserPostContainer.scss'

const UserPostContainer = () => {

  const [activeTab, setActiveTab] = useState('posts')

  const dispatch = useDispatch()
  const { _id } = useSelector(userProfileSelector)

  useEffect(() => {
    _id && dispatch(getProfilePosts(_id))
  }, [dispatch, _id])


  return (
    <div className='user-post-container'>
      <PostContainerTabs />
      <PostContainerContent currentTab={ activeTab }/>
    </div>
  );
};

export default UserPostContainer;