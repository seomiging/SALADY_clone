import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import '../css/application.css'

const Membership = () => (
  <div className='app_content'>
    <div className='membership_hero'>
      <h2>샐러디 멤버십</h2>
      <p>
        샐러디 앱을 통해 스탬프 적립, 멤버십 등<br/>
        다양한 혜택을 만나보세요!
      </p>
    </div>
 
    <div className='stamp_info'>
      <h3>STAMP</h3>
      <p>
        메인메뉴 1개당 스탬프 1개를 적립할 수 있습니다.<br/>
        스탬프 12개 적립 시 3,000원 할인 쿠폰 1장이 자동 발급됩니다.
      </p>
    </div>
 
    <div className='grade_grid'>
      <div className='grade_card grade_welcome'>
        <h4>웰컴</h4>
        <p className='grade_stamp'>스탬프 0개</p>
        <ul><li>기본 혜택 제공</li></ul>
      </div>
      <div className='grade_card grade_green'>
        <h4>그린</h4>
        <p className='grade_stamp'>스탬프 5개</p>
        <ul><li>생일 축하 쿠폰 1장(연 1회)</li></ul>
      </div>
      <div className='grade_card grade_red'>
        <h4>레드</h4>
        <p className='grade_stamp'>스탬프 50개</p>
        <ul>
          <li>생일 축하 쿠폰 1장(연 1회)</li>
          <li>무료 토핑 쿠폰 1장(매월 1회)</li>
        </ul>
      </div>
      <div className='grade_card grade_gold'>
        <h4>골드</h4>
        <p className='grade_stamp'>스탬프 80개</p>
        <ul>
          <li>생일 축하 쿠폰 1장(연 1회)</li>
          <li>무료 토핑 쿠폰 1장(매월 1회)</li>
          <li>월간 드링크 쿠폰 1장(매월 1회)</li>
        </ul>
      </div>
      <div className='grade_card grade_black'>
        <h4>블랙</h4>
        <p className='grade_stamp'>스탬프 100개</p>
        <ul>
          <li>생일 축하 쿠폰 1장(연 1회)</li>
          <li>무료 토핑 쿠폰 1장(매월 1회)</li>
          <li>월간 드링크 쿠폰 1장(매월 1회)</li>
          <li>월간 2,000원 할인 쿠폰(매월 1회)</li>
        </ul>
      </div>
    </div>
  </div>
)
 
const Order = () => (
  <div className='app_content'>
    <div className='order_section'>
      <h2>샐러디 오더</h2>
      <p>
        앱에서 미리 주문하고 매장에서 바로 픽업하세요.<br/>
        대기 없이 빠르게 건강한 한 끼를 즐길 수 있습니다.
      </p>
      <div className='app_store_btns'>
        <a
          href='https://apps.apple.com/kr/app/%EC%83%90%EB%9F%AC%EB%94%94/id1234567890'
          className='app_store_btn ios'
          target='_blank'
          rel='noreferrer'
        >
          🍎 App Store
        </a>
        <a
          href='https://play.google.com/store/apps/details?id=com.salady'
          className='app_store_btn android'
          target='_blank'
          rel='noreferrer'
        >
          ▶ Google Play
        </a>
      </div>
    </div>
  </div>
)

const GiftCard = () => (
  <div className='app_content'>
    <div className='giftcard_section'>
      <h2>기프트카드</h2>
      <p>
        소중한 사람에게 건강한 선물을 전해보세요.<br/>
        샐러디 기프트카드는 전국 샐러디 매장에서 사용 가능합니다.
      </p>
      <div className='giftcard_grid'>
        <div className='giftcard_item'>
          <h4>5,000원권</h4>
          <p>간단한 선물로 건강한 한 끼를 선물하세요.</p>
        </div>
        <div className='giftcard_item'>
          <h4>10,000원권</h4>
          <p>샐러드 한 끼를 여유롭게 즐길 수 있는 금액.</p>
        </div>
        <div className='giftcard_item'>
          <h4>30,000원권</h4>
          <p>여러 번 사용 가능한 실속 있는 기프트카드.</p>
        </div>
      </div>
    </div>
  </div>
)
 

const Application = () => {
  const location = useLocation()
  const path = location.pathname
 
  return (
    <div>
      <nav className='app_subnav'>
        <ul>
          <li>
            <Link
              to='/application/membership'
              className={path.includes('membership') || path === '/application' ? 'active_app' : ''}
            >
              샐러디 멤버십
            </Link>
          </li>
          <li>
            <Link
              to='/application/order'
              className={path.includes('order') ? 'active_app' : ''}
            >
              샐러디 오더
            </Link>
          </li>
          <li>
            <Link
              to='/application/giftcard'
              className={path.includes('giftcard') ? 'active_app' : ''}
            >
              기프트카드
            </Link>
          </li>
        </ul>
      </nav>
 
      <Routes>
        <Route path='/' element={<Membership/>}/>
        <Route path='membership' element={<Membership/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='giftcard' element={<GiftCard/>}/>
      </Routes>
    </div>
  )
}
 
export default Application