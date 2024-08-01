import React from 'react'
import './Homepage.css'
import assets from '../../assets/assets'

const Homepage = () => {
  return (
    <div className="homepage">
    
    <div className='hero'>
        <img src={assets.banner_1} alt="" className="banner" />  

        <div className="about">

          <div className="h1">About NR Chembio</div>
          <img src={assets.about_1} alt="" className="image-placeholder" />
              <div className="text">
              <div className="p">NR CHEMBIOSCIENCES OPC PVT LTD specializes in Micro/Nano Encapsulation and Powderization of Liquids, delivering cutting-edge nutraceutical and cosmetic solutions. We harness advanced technologies to enhance the bioavailability, stability, and efficacy of active compounds. Our products, ranging from dietary supplements to functional lipids, embody innovation and quality, meeting stringent industry standards. Dedicated to sustainability and scientific excellence, we aim to revolutionize health product effectiveness and safety worldwide</div>
              </div>

        </div>

        <div className="branded_ingredients">
        <div className="h1">Core products</div>
        <div className="grid-container">
            <div className="ingredients_lable">
              <div className="overlay">
              <img src={assets.BI_1} alt="" className="item-image"/>
              </div>
              <div className="image-text"><h4>EncapAmid -BCAA</h4></div>
            </div>

            <div className="ingredients_lable">
              <div className="overlay">
              <img src={assets.BI_2} alt="" className="item-image"/>
              </div>
              <div className="image-text"><h4>EncapAmid -EAA</h4></div>
            </div>

            <div className="ingredients_lable">
              <div className="overlay">
              <img src={assets.BI_3} alt="" className="item-image"/>
              </div>
              <div className="image-text"><h4>EncapAmid -CAathcine</h4></div>
            </div>
            
            <div className="ingredients_lable">
              <div className="overlay">
              <img src={assets.BI_4} alt="" className="item-image"/>
              </div>
              <div className="image-text"><h4>Baccpos Tasty</h4></div>
            </div>

            <div className="ingredients_lable">
              <div className="overlay">
              <img src={assets.BI_5} alt="" className="item-image"/>
              </div>
              <div className="image-text"><h4>Baccogcandhs</h4></div>
            </div>

            <div className="ingredients_lable">
              <div className="overlay">
              <img src={assets.BI_1} alt="" className="item-image"/>
              </div>
              <div className="image-text"><h4>Bosermin</h4></div>
            </div>

            <div className="ingredients_lable">
              <div className="overlay">
              <img src={assets.BI_1} alt="" className="item-image"/>
              </div>
              <div className="image-text"><h4>Currso</h4></div>
            </div>

        </div>
        </div>
              
    </div>

    </div>
  )
}

export default Homepage
