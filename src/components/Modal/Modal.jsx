import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showModal, timerAction } from '../../State/action'
import './Modal.css'

function Modal() {
  const [otp, setOTP] = useState('')
  const [aadhar, setAadhar] = useState('')
  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch()
  const modal = useSelector((state) => state.modal)

  const aadharInputHandler = (e) => {
    e.preventDefault()
    const aadharNum = e.target.value
    setAadhar(aadharNum)
  }

  const isAadharValid = (anum) => {
    if (anum.length === 12) {
      return !isNaN(Number(anum))
    }
    return false
  }

  const isOtpValid = (o) => {
    if (o.length === 6) {
      return !isNaN(Number(o))
    }
    return false
  }

  const otpHandler = (e) => {
    console.log(e.target.value, otp)
    setOTP(e.target.value)
  }

  return (
    <div className="modal">
      <div className="modal__header">Register Aadhar</div>
      <div className="modal__content">
        <img src="https://tse3.mm.bing.net/th?id=OIP.EuSs2mt8_wWanCLxD8kgLgHaHb&pid=Api&P=0&w=166&h=167"></img>
        <div className="modal__aadhar">
          <input
            type={'text'}
            placeholder="Enter Aadhar Number"
            onChange={aadharInputHandler}
            value={aadhar}
          />
        </div>
        <div className="verify__button">
          <button>Verify</button>
        </div>
      </div>
      <div
        className={
          isAadharValid(aadhar) ? 'modal__content__hidden' : 'invisible'
        }
      >
        <div>
          <input
            type="checkbox"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span>I aggree to e-sign this kyc document to get started</span>
        </div>
        <div className="modal__content__hidden__otp">
          <input type="text" onChange={otpHandler} value={otp} />
          <button
            disabled={!isOtpValid(otp)}
            onClick={() => {
              if (checked) {
                dispatch(showModal(false))
                dispatch(timerAction(true));
                setTimeout(() => {
                  dispatch(timerAction(false));
                }, 5000)
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
