import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/header.css'

const Header = () => {
  const [menu_open, set_menu_open] = useState(false)

  const handle_open = () => {
    set_menu_open(true)
    document.body.style.overflow = 'hidden'
  }
  const handle_close = () => {
    set_menu_open(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header>
        <div className='header_inner'>

          {/* 1920: 좌측 로고 */}
          <Link to={"/"} className='logo_desktop' onClick={handle_close}>
            <img src='salady_logo.jpg' alt='home_logo' className='home_logo'/>
          </Link>

          {/* 1300↓: 좌측 언어 */}
          <div className='language_box_left'>
            <img className='language_img' src='lang_img.png' alt='language_img'/>
            <p>KOR</p>
            <p className='triangle'>▼</p>
          </div>

          {/* 1300↓: 중앙 로고 */}
          <Link to={"/"} className='logo_mobile' onClick={handle_close}>
            <img src='salady_logo.jpg' alt='home_logo' className='home_logo'/>
          </Link>

          {/* 1920: 중앙 네비 */}
          <nav className='header_nav'>
            <ul>
              <li className='header_li_brand'><Link to={"/brand"}>브랜드</Link></li>
              <li><Link to={"/menu"}>메뉴</Link></li>
              <li><Link to={"/nutrition"}>영양 정보</Link></li>
              <li>APP</li>
              <li>매장</li>
              <li>프랜차이즈</li>
              <li>새소식</li>
              <li>FAQ</li>
            </ul>
          </nav>

         
          <div className='language_box'>
            <img className='language_img' src='lang_img.png' alt='language_img'/>
            <p>KOR</p>
            <p className='triangle'>▼</p>
            <button className='hbg_btn_wrap' onClick={handle_open} aria-label='메뉴 열기'>
              <span className='hbg_line'></span>
              <span className='hbg_line'></span>
              <span className='hbg_line'></span>
            </button>
          </div>

        </div>
      </header>

      {/* 오버레이 */}
      <div className={`drawer_overlay${menu_open ? ' is_open' : ''}`} onClick={handle_close}/>

      {/* 드로어 */}
      <div className={`drawer${menu_open ? ' is_open' : ''}`}>
        <div className='drawer_top'>
          <div className='drawer_lang'>
            <img className='language_img' src='lang_img.png' alt='language_img'/>
            <p>KOR</p>
            <p className='triangle'>▼</p>
          </div>
          <button className='drawer_close_btn' onClick={handle_close}>✕</button>
        </div>
        <nav className='drawer_nav'>
          <ul>
            <li><Link to={"/brand"} onClick={handle_close}>브랜드</Link></li>
            <li><Link to={"/menu"} onClick={handle_close}>메뉴</Link></li>
            <li><Link to={"/nutrition"} onClick={handle_close}>영양 정보</Link></li>
            <li><span>APP</span></li>
            <li><span>매장</span></li>
            <li><span>프랜차이즈</span></li>
            <li><span>새소식</span></li>
            <li><span>FAQ</span></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
