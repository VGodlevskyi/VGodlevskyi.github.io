import React from 'react';
import { updateProfileImage } from "../../../../store/actions/profileActions";
import { useDispatch, useSelector } from "react-redux";
import userSelector from "../../../../store/selectors/userSelector";

const UserPhoto = ({ src, alt, isLoadable }) => {

  const dispatch = useDispatch();
  const { _id: authorizedUserId } = useSelector(userSelector);

  const onChangeInputFile = ({ files }) => {
    const [imgFile] = files;
    imgFile && dispatch(updateProfileImage(authorizedUserId, imgFile))
  };

  return (
    <>
      {
        isLoadable
          ? <label className='user-photo--loadable'>
            <input type="file" accept="image/x-png,image/gif,image/jpeg"
                   onChange={ (event) => onChangeInputFile(event.target) }/>
            <img src={ src || '/no_user_photo.png' } alt={ alt }/>
          </label>
          : <div className='user-photo'>
            <img src={ src || '/no_user_photo.png' } alt={ alt }/>
          </div>
      }
    </>
  );
};

export default UserPhoto;