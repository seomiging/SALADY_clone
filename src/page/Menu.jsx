import React, { useState } from 'react'
import '../css/menu.css'

let menus =[
  {id:1,name:'스파이시 쉬림프 샌드위치', text:'Spicy Shrimp Sandwich', category:['새로운 메뉴','랩&샌드위치'],tag:['NEW'],img:'/menu/1.png'},
  {id:2,name:'불고기 반미 샌드위치', text:'Bulgogi Banh mi Sandwich', category:['새로운 메뉴','베스트 메뉴','랩&샌드위치'],tag:['NEW'],img:'/menu/2.png'},

  
  {id:3,name:'클래식 치킨 샌드위치', text:'Classic Chicken Sandwich', category:['베스트 메뉴','랩&샌드위치'],tag:['BEST'],img:'/menu/3.png'},
  {id:4,name:'그라브락스 연어 포케볼', text:'Gravalx Salmon Poke', category:['베스트 메뉴','포케볼'],tag:['BEST', 'LOW SUGAR'],img:'/menu/4.png'},
  {id:5,name:'칠리베이컨 곡물랩', text:'Cilli Bacon Grain Wrap', category:['베스트 메뉴','랩&샌드위치'],tag:['BEST'],img:'/menu/5.png'},
  {id:6,name:'멕시칸 랩', text:'Mexican Wrap', category:['베스트 메뉴','랩&샌드위치'],tag:['BEST'],img:'/menu/6.png'},
  {id:7,name:'칠리베이컨 포케볼', text:'Cilli Bacon Poke', category:['베스트 메뉴','샐러디'],tag:['BEST'],img:'/menu/7.png'},
  {id:8,name:'로스트닭다리살 샐러디', text:'Roast Chicken Thigh Salady', category:['베스트 메뉴','샐러디'],tag:['NEW'],img:'/menu/8.png'},
  {id:9,name:'그라브락스 연어 샐러디', text:'Gravlax Salmon Salady', category:['베스트 메뉴','샐러디'],tag:['BEST','LOW SUGAR'],img:'/menu/9.png'},
  {id:10,name:'우삼겹메밀면 누들볼', text:'Beef Loin Buckwheat Noodles', category:['베스트 메뉴','누들볼'],tag:['BEST'],img:'/menu/10.png'},
  {id:11,name:'타코 쉬림프 랩', text:'Taco Shrimp', category:['베스트 메뉴','누들볼'],tag:['BEST'],img:'/menu/11.png'},
  {id:12,name:'로스트닭다리살마요', text:'Roast Chicken Thigh Mayo Rice', category:['베스트 메뉴','그레인볼'],tag:['BEST'],img:'/menu/12.png'},


  {id:13,name:'탄단지 샐러디', text:'Tandanji Salady', category:['샐러디'],tag:[''],img:'/menu/13.png'},
  {id:14,name:'랜치 콥 샐러디', text:'Ranch Cobb Salady', category:['샐러디'],tag:['LOW SUGAR'],img:'/menu/14.png'},
  {id:15,name:'노릇두부단호박 샐러디', text:'Golden Tofu Sweet Pumkin Salady', category:['샐러디'],tag:['VEGAN','LOW SUGAR'],img:'/menu/15.png'},
  {id:16,name:'타코 쉬림프 샐러디', text:'Taco Shrimp Salady', category:['샐러디'],tag:[''],img:'/menu/16.png'},


  {id:17,name:'로스트삼겹 포케볼', text:'Roast Pork Belly Poke', category:['그레인볼'],tag:[''],img:'/menu/17.png'},
  {id:18,name:'우삼겹 포케볼', text:'Beef Loin Poke', category:['그레인볼'],tag:[''],img:'/menu/18.png'},
  {id:19,name:'노릇노릇두부 포케볼', text:'Golden Tofu Poke', category:['그레인볼'],tag:['VEGAN'],img:'/menu/19.png'},
  {id:20,name:'바베큐닭다리살 포케볼', text:'Barbeque Chicken Thigh Poke', category:['그레인볼'],tag:[''],img:'/menu/20.png'},
  {id:21,name:'바베큐삼겹 덮밥', text:'Barbeque Pork Belly Rice', category:['그레인볼'],tag:[''],img:'/menu/21.png'},


  {id:22,name:'그라브락스 연어 파스타 누들볼', text:'Gravlax Salmon Pasta', category:['누들볼'],tag:['LOW SUGAR'],img:'/menu/22.png'},
  {id:23,name:'비빔메밀면 누들볼', text:'Bibim Buckwheat Noodleds', category:['누들볼'],tag:[''],img:'/menu/23.png'},
  {id:24,name:'고소삼겹 들기름파스타 누들볼', text:'Roast Pork Belly Perilla Oil Pasta', category:['누들볼'],tag:[''],img:'/menu/24.png'},


  {id:25,name:'닭다리살 MAX 프로틴 박스', text:'Chicken Thigh MAX Protein Box', category:['프로틴 박스'],tag:['LOW SUGAR'],img:'/menu/25.png'},
  {id:26,name:'치킨 MAX 프로틴 파스타', text:'Chicken Breast MAX Protein Pasta', category:['프로틴 박스'],tag:['LOW SUGAR'],img:'/menu/26.png'},
  {id:27,name:'우삼겹 MAX 프로틴 박스', text:'Beef Loin MAX Protein Box', category:['프로틴 박스'],tag:['LOW SUGAR'],img:'/menu/27.png'},


  {id:28,name:'BELT 시저 샌드위치', text:'BELT Caesar Sandwich', category:['랩&샌드위치'],tag:[''],img:'/menu/29.png'},
  {id:29,name:'잠봉 샌드위치', text:'Jambong Sandwich', category:['랩&샌드위치'],tag:[''],img:'/menu/30.png'},
  {id:30,name:'비프에그마요 샌드위치', text:'Beef Egg Mayo Sandwich', category:['랩&샌드위치'],tag:[''],img:'/menu/31.png'},  
  {id:31,name:'바질연어 샌드위치', text:'Basil Salmon Sandwich', category:['랩&샌드위치'],tag:[''],img:'/menu/32.png'},


  {id:32,name:'고소우삼겹 곡물랩', text:'Perilla Oil Beef Loin Grain Wrap', category:['랩&샌드위치'],tag:['LOW SUGAR'],img:'/menu/33.png'},
  {id:33,name:'바베큐닭다리살 곡물랩', text:'Barbecue Chicken Thigh Grain Wrap', category:['랩&샌드위치'],tag:[''],img:'/menu/34.png'},
  {id:34,name:'그라브락스 연어 랩', text:'Gravlax Salmon Wrap', category:['랩&샌드위치'],tag:[''],img:'/menu/35.png'},
  {id:35,name:'시저치킨 랩', text:'Ceasar Chicken Wrap', category:['랩&샌드위치'],tag:['NEW'],img:'/menu/36.png'},
  {id:36,name:'로스트닭다리살 랩', text:'Roast Chicken Thigh Wrap', category:['랩&샌드위치'],tag:[''],img:'/menu/37.png'},
  {id:37,name:'에그마요 랩', text:'Egg May Wrap', category:['랩&샌드위치'],tag:[''],img:'/menu/38.png'},
  {id:38,name:'바질치킨 랩', text:'Basil Chicken Wrap', category:['랩&샌드위치'],tag:[''],img:'/menu/39.png'},

  {id:39,name:'채소볼', text:'Salady', category:['나만의 샐러디'],tag:['VEGAN'],img:'/menu/40.png'},
  {id:40,name:'포케볼', text:'Poke BOwl', category:['나만의 샐러디'],tag:[''],img:'/menu/41.png'},
  {id:41,name:'메밀면볼', text:'BuckWheat Noodle Bowl', category:['나만의 샐러디'],tag:[''],img:'/menu/42.png'},
  {id:42,name:'파스타볼', text:'Pasta Bowl', category:['나만의 샐러디'],tag:[''],img:'/menu/43.png'},
]

const categories = ['샐러디','그레인볼','누들볼','프로틴 박스','랩&샌드위치','나만의 샐러디']
const displayCategories = ['새로운 메뉴','베스트 메뉴','샐러디','그레인볼','누들볼','프로틴 박스','랩&샌드위치','나만의 샐러디']

const tagColors = {
  'NEW': '#ff8400',
  'BEST': '#c9241a',
  'LOW SUGAR': '#c07b02',
  'VEGAN': '#226140',
}

const Menu = () => {
const [activeCategory, SetActiveCategory]= useState(null)
const filterMenus = activeCategory === 'ALL'
? menus
: menus.filter(menu => menu.category.includes(activeCategory))

const MenuCard =(menu) =>(
  <li key={menu.id} className='menu_name'>
     <img src={`/SALADY_clone${menu.img}`} alt={menu.name}/>
      <p>{menu.name}</p>
      <p>{menu.text}</p>
      {menu.tag.map(t => t && <span key={t} style={{backgroundColor : tagColors[t]}}>{t}</span>)}
  </li>
)
   return (
    <section>
       <ul>
        {categories.map(category => (
          <li key={category} onClick={() => SetActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>

      {activeCategory === null
        ? displayCategories.map(cat => (
            <div key={cat}>
              <h2>{cat}</h2>
              <ul className='menulist'>
                {menus.filter(menu => menu.category.includes(cat)).map(menu => MenuCard(menu))}
              </ul>
            </div>
          ))
        : <ul className='menulist'>
            {menus.filter(menu => menu.category.includes(activeCategory)).map(menu => MenuCard(menu))}
          </ul>
      }
    </section>
  )
}

export default Menu
