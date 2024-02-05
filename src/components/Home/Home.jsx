import React, { useEffect } from 'react'
import style from  './Home.module.css'
import person from '../../images/avataaars.svg'
export default function Home() {
  useEffect(()=>{
    document.title='home'
},[])
  return (
    <div className={style.home}>
    <div className={style.imageContainer}>
      <img src={person} alt='person'/>
      <p className='m-4'>start Framework</p>
      <div className={style.iconContainer}>
          <div className={style.line}></div>
          <i className="fa-solid fa-star"></i>
          <div className={style.line}></div>
        </div>
        <h2 className='h6 m-3'>Graphic Artist - Web Designer - Illustrator</h2>
    </div>

    </div>
  )
}
