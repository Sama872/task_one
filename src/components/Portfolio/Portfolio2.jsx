import React, { useEffect, useState } from 'react'
import image1 from '../../images/poert1.png'
import image2 from '../../images/port2.png'
import image3 from '../../images/port3.png'
import style from './portfolio.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Portfolio2() {


  const showSwal = (imageSrc) => {
    withReactContent(Swal).fire({
      html: <img src={imageSrc} alt="image3" style={{ width: '100%' }} />,
      showConfirmButton: false
    });
  };
    useEffect(()=>{
        document.title='Portfolio'
    },[])
  return (
    <div className='container mb-2'>
    <p>conatct section</p>
          <div className={`${style.iconContainer} justify-content-center`}>
          <div className={style.line}></div>
          <i className="fa-solid fa-star"></i>
          <div className={style.line}></div>
        </div>
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
      <div className={`${style.imgoverlay} col`} onClick={() => showSwal(image1)}>
      <img src={image1} alt='image1' data-bs-toggle="modal" data-bs-target='#one'/>
      <div className={style.overlay}><i class="fa-solid fa-plus fa-2xl"></i></div>

      </div>
      <div className={`${style.imgoverlay} col`} onClick={() => showSwal(image2)}>
      <img src={image2} alt='image2' />
      <div className={style.overlay}><i class="fa-solid fa-plus fa-2xl"></i></div>

      </div>
      <div className={`${style.imgoverlay} col`} onClick={() => showSwal(image3)}>
      <img src={image3} alt='image3'/>
      <div className={style.overlay}><i class="fa-solid fa-plus fa-2xl"></i></div>

      </div>

      <div className={`${style.imgoverlay} col`} onClick={() => showSwal(image1)}>
      <img src={image1} alt='image1'/>
      <div className={style.overlay}><i class="fa-solid fa-plus fa-2xl"></i></div>

      </div>
      <div className={`${style.imgoverlay} col`} onClick={() => showSwal(image2)}>
      <img src={image2} alt='image2'/>
      <div className={style.overlay}><i class="fa-solid fa-plus fa-2xl"></i></div>

      </div>
      <div className={`${style.imgoverlay} col`} onClick={() => showSwal(image3)}>
      <img src={image3} alt='image3'/>
      <div className={style.overlay}><i class="fa-solid fa-plus fa-2xl"></i></div>

      </div>


      </div>
    </div>
    
    </div>

    

  )
}
