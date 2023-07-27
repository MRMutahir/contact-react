import React from 'react'


function Form() {
  return (
    <div className='formMain'>
        <button className='btnsame'>VIA SUPPORT CHAT</button>
        <button className='btnsame'>VIA CALL</button>
        <div className='emailBtn'><button className='btnsame'>VIA EMAIL FORM</button></div>
        <div className="formfield">
        <fieldset>
            <legend>Name</legend>
        </fieldset>
        <fieldset>
            <legend>E-mail</legend>
        </fieldset>
        <fieldset>
               <legend>Text</legend>
        </fieldset>
        </div>
        <button className='btnsame'>SUBMIT</button>
        </div>
  )
}

export default Form