import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../State/action'
import Details from '../Details/Details'
import Modal from '../Modal/Modal'
import './DetailParent.css'

const Timer = (props) => {
  let ele = <div className="verified">Aadhar verified successfully</div>
  return (
    <div className="timer">
      <div className="signing">
        <h1>Signing...</h1>
        <p>Mutual Non Disclosure Agreement</p>
      </div>
      <div className="verified">Aadhar verified successfully</div>
    </div>
  )
}

function DetailParent() {
  const modal = useSelector((state) => state.modal)
  const timer = useSelector((state) => state.timer)
  const dispatch = useDispatch()

  return (
    <>
      <div className={modal ? 'detail__parent' : ''}>
        <Details />
        {modal ? <Modal /> : <div></div>}
        {timer ? <Timer /> : null}
      </div>
    </>
  )
}

export { DetailParent, Timer }
