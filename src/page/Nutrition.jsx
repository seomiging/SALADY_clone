import React from "react";
import '../css/nutrition.css'

const Nutrition = () => {
  return (
    <div>
      <div className="title_info">
        <h2>영양정보</h2>
        <h2>─</h2>
      </div>

      <div className="banner_box">
        <div className="banner1">
          <div className="banner_text">
          <h3>균형</h3>
          <p>
            샐러디는 3대 영양소인 탄수화물, 단백질, 지방의 적절한 분배와 균형을
            추구합니다.
            <br />
            개개인의 식습관에 따라 탄수화물, 단백질, 지방간의 구성 비율이 다양한
            샐러디의 메뉴들을 선택할 수 있습니다.
          </p>
          </div>
        </div>
        <div className="banner2">
             <div className="banner_text">
          <h3>더하기</h3>
          <p>
            일반적인 식습관을 가지고 있는 대부분의 사람들은 비타민, 무기질,
            식이섬유 섭취가 부족합니다.
            <br />
            샐러디의 다양한 종류의 채소와 토핑들은
            <br />
            평소 섭취가 부족한 영양소들을 더하는데 도움을 줍니다.
          </p>
          </div>
        </div>
        <div className="banner3">
             <div className="banner_text">
          <h3>빼기</h3>
          <p>
            샐러디의 메뉴들은 다른 일반적인 음식 대비 당, 포화지방, 나트륨
            함량이 적습니다.
            <br />
            대부분의 성인은 세 가지 영양소를 권장량에 비해 더 많이 섭취하고
            있습니다.
            <br />
            샐러디는 기존 메뉴에서 빼야 할 영양소는 줄여가고, 맛과 품질을
            유지하는 선에서
            <br />
            레시피 개선에 대한 연구를 지속하고 있습니다.
          </p>
          </div>
        </div>
      </div>

<div className="guide">
      <div className="title_info">
        <h2>가이드 라인</h2>
        <h2>─</h2>
      </div>
      <div className="guide_line">
        <div className="guide_box">
          <img src="./nutrition/icon1.gif" />
          <h4>영양성분표</h4>
          <p>샐러디 전체 메뉴의 영양성분표입니다.<br/>
            본인의 식습관과 식단을 고려하여 알맞은 메뉴를 선택하고<br/>
            부족한 영양소는 토핑 추가 등을 통해 보완하세요.
          </p>
          <div className="nut_btn">영양성분표 보기</div>
        </div>
        <div className="guide_box">
          <img src="./nutrition/icon2.gif" />
          <h4>칼로리 계산하기</h4>
          <p>개인의 나이, 기초대사량에 따라 권장 칼로리는 달라집니다.<br/>
            본인에게 맞는 열량을 확인하고 한 끼 식사의 열량을 고려하여 <br/>샐러디 메뉴를 선택하세요.
          </p>
          <div className="nut_btn">칼로리 계산하기</div>
        </div>
        <div className="guide_box">
          <img src="./nutrition/icon3.gif" />
          <h4>알레르기 정보</h4>
          <p>
            특정 음식에 대해 알레르기가 있으신 고객분께서는 <br/>메뉴 선택 전에
            알레르기 정보를 꼭 확인하시기 바랍니다.
          </p>
              <div className="nut_btn">알레르기 정보 보기</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Nutrition;
