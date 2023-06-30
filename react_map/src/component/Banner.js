import React from 'react'
import banner from '../scss/banner.module.css'

export default function Banner(props) {   

    return (
        <>   
        <div id="banner" className={`${banner.mt52}`}>
            
          <div className={`d-flex boxwrap ${banner.container} ${banner.bgcolor}`}>
            <div className={`boximg`}></div>
            <div id="wrap" className="d-flex flex-column justify-content-center align-items-center">
                <div className="adtitle d-flex justify-content-center">
                    <div className='d-inline-block bg-black text-white adtitle'>나를 위한</div>
                </div>
                <h3 className='title1'>건강기능식품 추천</h3>
                <div className='title2'>헬시차트</div>
                <span className='ct-txt'>쇼핑 데이터로 살펴보는 건강기능상품</span>
                <div className='bt-text'>분석기간:2022.01.01~2023.02.01</div>
            </div>
          </div>
        </div>    
          
        </>
    )
}
