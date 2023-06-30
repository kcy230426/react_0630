import React from 'react'

export default function Portfolio(props) {   

    return (
        <>
        <section id="pt">
            <div className='d-flex flex-column jusitify-content-center align-items-center'>
                <span className='f-txt'>연령별로 많이 검색하는</span>
                <h3>건강키워드<span>NEW</span></h3>
                <p>6/23 UPDATE</p>
            </div> 
            <div className="agewrap">
                <ul id='agebox'>
                        <li className='on'><a href="#">20대</a></li>
                        <li><a href="#">30대</a></li>
                        <li><a href="#">40대</a></li>
                        <li><a href="#">50대 이상</a></li>
                </ul>
            </div>
            
            <div id="pt-wrap">
                <div id="pt-box">
                    <ul id="pt-ul" className='text-left'>
                        <p>● 검색 인기 상품을 확인해 보세요!</p>
                        <li><a href="">마그네슘</a><i class="bi bi-caret-right-fill"></i></li>
                        <li><a href="">루테인</a><i class="bi bi-caret-right-fill"></i></li>
                        <li><a href="">멀티비타민</a><i class="bi bi-caret-right-fill"></i></li>
                        <li><a href="">칼슘</a><i class="bi bi-caret-right-fill"></i></li>
                        <li className='border-0'><a href="">감마리놀렌산</a><i class="bi bi-caret-right-fill"></i></li>
                    </ul>
                    <div class="pt-info">*2022년 20대 데이터 기준. 상세 집계 기준은 하단 확인</div>
                </div>
            </div>
        </section>
        </>
    )
}
