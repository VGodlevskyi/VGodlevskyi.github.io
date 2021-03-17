import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import UserPhoto from "./UserPhoto/UserPhoto";
import userSelector from "../../../store/selectors/userSelector";
import userProfileSelector from "../../../store/selectors/userProfileSelector";
import { addUserSubscribeAction, removeUserSubscribeAction } from "../../../store/actions/userActions";
import './UserProfileHeader.scss'

const UserProfileHeader = () => {

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const { _id, img, username, name, stats } = useSelector(userProfileSelector);
  const isMe = user.username === username;
  const isSubscribed = user.subscribes.some(us => us.username === username);


  const onSubscribeHandle = () => {
    isSubscribed
      ? dispatch(removeUserSubscribeAction(user._id, _id))
      : dispatch(addUserSubscribeAction(user._id, _id))
  };

  return (
    <div className="user-profile">
      <UserPhoto src={ img } alt={ username } isLoadable={ isMe }/>
      <div>
        <div className='user-meta'>
          <p className='user-nickname'>{ username }</p>
          {
            isMe || <button className='user-meta-action' onClick={ onSubscribeHandle }>
              { isSubscribed ? 'Unsubscribe' : 'Subscribe' }
            </button>
          }
        </div>
        <div className='user-stats'>
          <span> { stats && stats.posts } posts</span>
          <span> { stats && stats.followers } subscribers</span>
          <span> { stats && stats.subscribes } subscribes</span>
        </div>
        <p className='user-full-name'>{ name }</p>
      </div>
    </div>
  );
};

export default UserProfileHeader;