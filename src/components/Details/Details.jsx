import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../State/action';
import { Timer } from '../DetailParent/DetailParent';
import Modal from '../Modal/Modal'
import "./Details.css"

function Details() {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const timer = useSelector((state) => state.timer)

  const signHandler = (e) => {
      dispatch(showModal(true))
  }

  const closeModal = (e) => {
    dispatch(showModal(false))
  }


  return (
  <div className={modal ? 'details' : "details__visible"} onClick= {modal ? closeModal : () => {} }>
      <div className="processing"></div>
      <div className="doc">
        <img src='http://templatelab.com/wp-content/uploads/2017/04/terms-and-conditions-template-03.jpg'></img>
        <button className="sign" onClick={signHandler}>
          Request OTP to Sign
        </button>
      </div>
      {
        timer ? <Timer /> : null
      }
    </div>
  )
}

export default Details