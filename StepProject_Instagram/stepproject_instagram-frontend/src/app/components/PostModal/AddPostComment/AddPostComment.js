import React, {useState} from 'react';
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { commentPostAction } from "../../../store/actions/postActions";
import {useDispatch, useSelector} from "react-redux";
import './AddPostComment.scss'
import userSelector from "../../../store/selectors/userSelector";

const AddPostComment = ({ postId, userId }) => {

  const dispatch = useDispatch()
  const { _id: authorizedUserId } = useSelector(userSelector)
  const [isAllComments, setIsAllComments] = useState(false);


  const initialValues = {
    comment: ''
  }

  const validationSchema = object({
    comment: string()
      .min(1)
      .required()
  })

  const commentSubmitHandler = ({ comment }, { setSubmitting, resetForm }) => {
    setIsAllComments(!isAllComments)
    const onComplete = () => {
      resetForm({ values: '' })
      setSubmitting(false)
    }
    dispatch(commentPostAction({ postId, userId, text: comment }, onComplete))
  }

  return (
    <div className='add-post-comment'>
      <Formik initialValues={ initialValues } validationSchema={ validationSchema }
              onSubmit={ commentSubmitHandler }>
        {
          ({ isSubmitting }) => <Form>
            <Field name='comment' type='text' disabled={ isSubmitting } placeholder='Add comment...'/>
            <button type='submit' disabled={ isSubmitting }>Send</button>
          </Form>
        }
      </Formik>
    </div>
  );
};

export default AddPostComment;