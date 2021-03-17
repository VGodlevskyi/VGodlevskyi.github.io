import React, { useEffect } from 'react';
import Profile from "./Profile/Profile";
import Recommends from "./Recommends/Recommends";
import { useDispatch, useSelector } from "react-redux";
import userSelector from "../../../store/selectors/userSelector";
import userRecommendsSelector from "../../../store/selectors/userRecommendsSelector";
import userSubscribesSelector from "../../../store/selectors/userSubscribesSelector";
import {
  addUserSubscribeAction,
  getUserRecommendsAction,
  getUserSubscribesAction,
  removeUserSubscribeAction
} from "../../../store/actions/userActions";
import './Sidebar.scss'

const Sidebar = () => {

  const dispatch = useDispatch()
  const { _id } = useSelector(userSelector)
  const subscribes = useSelector(userSubscribesSelector) || []
  const recommends = useSelector(userRecommendsSelector) || []

  useEffect(() => {
    _id && dispatch(getUserSubscribesAction(_id))
    _id && dispatch(getUserRecommendsAction(_id))
  }, [dispatch, _id])

  const subscribeOnUser = (subscribeUser) => {
    dispatch(addUserSubscribeAction(_id, subscribeUser._id))
  }

  const unsubscribeOnUser = (subscribeUser) => {
    dispatch(removeUserSubscribeAction(_id, subscribeUser._id))
  }

  return (
    <div className="sidebar">
      <Profile />
      {
        subscribes.length > 0
        && <Recommends title='Your subscribes'
          users={subscribes}
          action={unsubscribeOnUser}
          actionName='Unsubscribe' />
      }
      {
        recommends.length > 0
        && <Recommends title='Recommends for you'
          users={recommends}
          action={subscribeOnUser}
          actionName='Subscribe' />
      }
    </div>
  );
};

export default Sidebar;