import React from "react";
import "../css/brand.css";
const Brand = () => {
  return (
    <div>
      <div className="title_info">
        <h2>샐러디</h2>
        <h2>─</h2>
      </div>
       <div className="brandimg_box"><img src="./brand/brand_top_img.jpg" alt="brand_top_img" className="brand_top_img"/></div> 
      <div className="brand_textbox">
        <h3>미션</h3>
        <h4>음식을 통해 사람들의 삶을 즐겁고 건강하게 만듭니다.</h4>
        <h3>브랜드 스토리</h3>
        <p>
          2013년 겨울, 평범한 대학생이었던 두 청년은 선릉역 뒷골목 작은 식당을
          열었습니다.
          <br />
          미숙한 손길이 곳곳에 묻어 있던 이 식당이 한 가지 특별했던 점은 한 끼
          식사로 샐러드를 판매했다는 것입니다.
          <br />
          <br />
          그러나 당시만 하더라도 샐러드를 ‘식사’로 여기는 사람들이 드물었기에
          식당의 앞날은 불투명 하기만 했죠.
          <br />
          매일같이 마주하는 어려움. 저희를 지탱했던 것은 기름진 식문화를보다
          신선하고 건강하게 바꾸겠다는 의지였습니다.
          <br />
          다양한 문제를 해결하는 동안 ‘건강한 식사에 대한 관심이 높아졌고
          <br />
          10명 남짓의 손님이 찾아오던 작은 식당은 어느새 하루 1만명의 손님을
          맞이하는 브랜드가 되었죠.
          <br />
          <br />
          샐러디는 이제 포케볼, 랩, 샌드 등 더욱 다양한 메뉴군과 함께 샐러드
          전문점을 넘어 건강한 일상 밀착 건강식 브랜드로 도약하고자 합니다.
          <br />
          앞으로 더 맛있고 건강한 메뉴들로 보다 많은 사람들에게 즐거움과
          건강함을 선사하는 브랜드가 되겠습니다.
        </p>
      </div>
    </div>
  );
};

export default Brand;
