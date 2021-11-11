import React from 'react';
import './Banner.css';

export default function Banner() {
    return (
<>
    <div className="container-banner">
        <img src="/images/main-banner@3x.png" alt="" />
    </div>

    <div className="container-banner">
        <img src="/images/introduction-bg@3x.png" alt="" />
        <span className="span-what-happened"> What Happened! </span>
        <span className="span-text"> 
            How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first 
            step to your brand's success. How to create 
            mobile-optimized videos in minutes. 
        </span>
    </div>

    <div className="container-banner">
        <img src="/images/bes-bg@3x.png" alt="" />
        <span className="span-best-product"> BEST PRODUCT </span>
        <span className="span-best-text">  
            How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first 
        </span>
        <div className="image-banner">
            <ul>
                <li>
                    <div className="box-image-banner">
                        <img src="/images/best-image-01@3x.png" className="image-box-one" alt="" />
                        <img src="/images/producticon-01@3x.png" className="image-box-two" alt="" />
                        <div className="detail-box">
                            <h3> How to create mobie-optimized</h3>
                            <span>
                                <img src="/images/go-icon@3x.png" alt="" />
                            </span> 
                        </div> 
                    </div>
                </li>
                <li>
                    <div className="box-image-banner">
                        <img src="/images/best-image-02@3x.png" className="image-box-one" alt="" />
                        <img src="/images/producticon-02@3x.png" className="image-box-two" alt="" />
                        <div className="detail-box">
                            <h3> How to create mobie-optimized</h3>
                            <span>
                                <img src="/images/go-icon@3x.png" alt="" />
                            </span> 
                        </div> 
                    </div>
                </li>
                <li>
                    <div className="box-image-banner">
                        <img src="/images/best-image-03@3x.png" className="image-box-one" alt="" />
                        <img src="/images/producticon-03@3x.png" className="image-box-two" alt="" />
                        <div className="detail-box">
                            <h3> How to create mobie-optimized</h3>
                            <span>
                                <img src="/images/go-icon@3x.png" alt="" />
                            </span> 
                        </div> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
</>
    )
}
