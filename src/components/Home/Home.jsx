import React, { useState } from 'react'
import './Home.css'
import isEmail from 'validator/lib/isEmail'
import { useNavigate } from 'react-router-dom'
function Home() {
  const [emailInput, setEmailInput] = useState('')

  const navigate = useNavigate()

  const emailHandler = (e) => {
    e.preventDefault()
    let enteredEmail = e.target.value
    setEmailInput(enteredEmail);
  }

  const continueHandler = (e) => {
    navigate('/details')
  }

  return (
    <div className="home">
      <div className="home__email">
        <p id="home__email__inp">Proceed with your email address</p>
        <input type={'email'} onChange={emailHandler} value={emailInput} placeholder={'Enter Valid Email'}/>
      </div>
      <div className="home__proceed">
        <p>
          By continuing i confirm to Terms and Services and Privacy Policy of{' '}
          <a href="https://www.digio.in/#/index">DIGIO.in</a>
        </p>
        <button onClick={continueHandler} disabled={!isEmail(emailInput)} className={isEmail(emailInput) ? "proceed__button" : null}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Home
