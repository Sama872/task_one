import React from 'react'
import style from  './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer>
   <div className="container">
    <div className="row row-cols-lg-3 row-cols-sm-1 row-cols-md-2">
      <div className="col">
        <h2>LOCATION</h2>
        <h2 className='h6'>2215 John Daniel Drive</h2>
        <h2 className='h6'>Clark, MO 65243</h2>
      </div>
      <div className="col">
        <h2>AROUND THE WEB</h2>
        <div className={style.icons}>
        <div className={style.iconStyle}><i className="fa-brands fa-facebook-f"></i></div>
        <div className={style.iconStyle}><i class="fa-brands fa-twitter"></i></div>
        <div className={style.iconStyle}><i class="fa-brands fa-linkedin-in"></i></div>
        <div className={style.iconStyle}><i class="fa-solid fa-globe"></i></div>

        </div>
        
      </div>
      <div className="col">
        <h2>ABOUT FREELANCER</h2>
        <h2 className='h6'>Freelance is a free to use, licensed Bootstrap theme created by Route </h2>
      </div>
    </div>

  </div>

      
</footer>
<div className={style.copyRights}>Copyright © Your Website 2021</div>
    </>
  )
}
