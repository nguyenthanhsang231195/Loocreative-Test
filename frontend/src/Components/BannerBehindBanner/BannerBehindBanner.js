import React from 'react';
import './BannerBehindBanner.css';

export default function BannerBehindBanner() {
    return (
<div className="banner-behind-banner">
    <div className="behind-two">

        <img className="dice-3" src="/images/news-object-02@3x.png" alt="" />
        <img className="dice-5" src="/images/news-object-03@2x.png" alt="" /> 


        <div className="control-text-banner-behind-banner">
            <h2> Happened’s issue </h2>
            <p> 
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요. 
            </p>
            <button type="submit" >
                SEE MORE 
            </button>
        </div>
        

        <div className="new-main">

            <div id="image-new-1">
                <h1 id="arrow-text"> whpn issue </h1> 
                <img id="arrow-image" src="/images/news-img-01@3x.png" alt="" />
                <img className="object-03" src="/images/news-object-03@3x.png" alt="" />
            </div>

            <div id="image-new-2">
                <h1 className="new-text"> B BRAND </h1>
                <img src="/images/news-img-03@3x.png" className="new-image" alt="" />
            </div>

            <div id="image-new-3">
                <h1 className="new-text"> C BRAND </h1>
                <img src="/images/news-img-03@3x.png" className="new-image" alt="" />
            </div>

            <div id="image-new-4">
                <h1 id="new-text-4" className="new-text"> D BRAND </h1>
                <img src="/images/news-img-04@3x.png" className="new-image" alt="" />
            </div>

            <div id="image-new-5">
                <h1 className="new-text"> E BRAND </h1>
                <img src="/images/news-img-05@3x.png" className="new-image" alt="" />
                <img className="object-05" src="/images/news-object-05@3x.png" alt="" />
            </div>
             
        </div>
    </div>
</div>
    )
}
