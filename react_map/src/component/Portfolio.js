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
                <ul id="pt-box" className='text-left'>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </section>
        </>
    )
}
