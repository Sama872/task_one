import React, { useEffect } from 'react'
import style from './About.module.css'

export default function About() {
  useEffect(() => {
    document.title = 'About'
  }, [])

  return (
    <div className={`${style.about}`}>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'>
          <p>about component</p>
        </div>
      </div>
      <div className='row'>
        <div className={`${style.iconContainer} justify-content-center`}>
          <div className={style.line}></div>
          <i className="fa-solid fa-star"></i>
          <div className={style.line}></div>
        </div>
      </div>
      <div className='row  container'>
        <div className='col-6 d-flex justify-content-center'>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </div>
        <div className='col-6 d-flex justify-content-center'>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </div>
      </div>
    </div>
  )
}