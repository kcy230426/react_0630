import hd from '../scss/hd.module.css'

const Hd = (props) => {
    // const 내부에 map을 쓰면 Hd에서만 사용 가능. 외부에 적으면 다른 곳에서도 사용 가능
    const hddata = {
        pAction:true,
        promotion:{
            title:"오늘의 특가",
            href:"https://naver.com",
            target:"_blank",
            cls:"event"
        },
        gnb:[
            {
                title:"연령별고민",
                href:"#age",
                target:"",
                cls:""
            },
            {
                title:"스테디셀러",
                href:"#seller",
                target:"",
                cls:""
            },
            {
                title:"1만 리뷰",
                href:"#review",
                target:"",
                cls:""
            },
            {
                title:"요즘 인기",
                href:"#popular",
                target:"",
                cls:""
            }
        ],
        util:[
            {
                title:"공유하기",
                href:"#share",
                target:"",
                cls:""
            }
        ]
    } 
    // {} 는 오브젝트(집합체, 한개) [ ] 는 어레이(여러개)?

    return (
            <header id="hd" className={`fixed-top bg-white ${props.scrollcls}`}>
                <div className="px-0"> 
                    {/* row와 container는 같이 쓰면 충돌이 난다. (둘다 마진이 들어있음.) */}
                    <div className="inner mx-auto d-flex justify-content-between align-items-center">
                        <h1><a href="#top"></a></h1>
                        <ul id="gnb" className="d-flex">
                            {/* array.map(function(){}) */}
                            {
                               hddata.gnb.map(function(v,i){
                                return (
                                    <>
                                    <li className="px-2"><a href="" className="d-block">{v.title}</a></li>
                                    {hddata.pAction &&
                                     ( i === 1&&
                                        <li className={`px-2 ${hddata.promotion.cls}`}>
                                            <a href={hddata.promotion.href} > {hddata.promotion.title} </a>
                                        </li>
                                     )
                                    }
                                    </>
                                )
                               })
                            }
                        </ul>
                        <ul className="sns d-flex align-items center">
                            {
                                hddata.util.map(function(v,i){
                                    return <li className="px-1">
                                            <a href={v.href}>
                                                <span className='visible-hidden'>공유하기</span>
                                            </a></li>
                                    
                                })
                            }
                        </ul>
                    </div>
                </div>
            </header>   
                    
    )
}

export default Hd