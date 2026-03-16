import React from 'react'
import { Link } from 'react-router-dom'
import './css/header.css'
const Header = () => {
  return (
    <header>
      <div className='header_inner'>
    <Link to={"/"}><img src='salady_logo.jpg' alt='home_logo' className='home_logo'/></Link>
          <ul>
       <li className='header_li_brand'><Link to={"/brand"}>브랜드</Link></li>
       <li><Link to={"/menu"}>메뉴</Link></li>
       <li><Link to={"/nutrition"}>영양 정보</Link></li>
       <li><Link to={"/application"}>APP</Link></li>
       <li>매장</li>
       <li>프랜차이즈</li>
       <li>새소식</li>
       <li>FAQ</li>
      </ul>
      <div className='language_box'>
        <img className='language_img' src='lang_img.png' alt='language_img'/>
        <p>KOR</p>
        <p className='triangle'>▼</p>
      <div className='hamburger_btn'>
        <img className='hbg_btn' src='./hambtn.png' alt='hbg_btn'/>
      </div>
      </div>
      </div>
    </header>
  )
}

export default Header
