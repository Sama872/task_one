import React, { useEffect } from 'react'
import style from './Contact.module.css'

export default function Contact() {
    useEffect(()=>{
        document.title='contact'
    },[])
  return (
    <div className={style.container}>
          <p>conatct section</p>
          <div className={`${style.iconContainer} justify-content-center`}>
          <div className={style.line}></div>
          <i className="fa-solid fa-star"></i>
          <div className={style.line}></div>
        </div>
      
      <input type='text' placeholder='userName'/>
      <input type='text' placeholder='userAge'/>
      <input type='email' placeholder='userEmail'/>
      <input type='password' placeholder='userPassword'/>
    </div>
  )
}
