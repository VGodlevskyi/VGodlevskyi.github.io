import React, { useEffect } from 'react';
import UserProfileHeader from "./UserProfileHeader/UserProfileHeader";
import Header from "../../components/Header/Header";
import UserPostContainer from "./UserPostContainer/UserPostContainer";
import { useDispatch, useSelector } from "react-redux";
import { clearUserProfile, loadUserProfile } from "../../store/actions/profileActions";
import userProfileSelector from "../../store/selectors/userProfileSelector";

const UserProfile = (props) => {

  const { userId } = props.match.params
  const dispatch = useDispatch()
  const profile = useSelector(userProfileSelector)

  useEffect(() => {
    dispatch(loadUserProfile(userId))
    return () => dispatch(clearUserProfile())
  }, [dispatch, userId])

  return (
    <>
      <Header/>
      <div className='container'>
        {
          profile && <>
            <UserProfileHeader/>
            <UserPostContainer/>
          </>
        }
      </div>
    </>
  );
};

export default UserProfile;