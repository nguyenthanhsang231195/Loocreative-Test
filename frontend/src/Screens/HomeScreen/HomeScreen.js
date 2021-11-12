import React from 'react';
import './HomeScreen.css';
import ProductHome from '../../Components/ProductHomeScreen/ProductHome';
import productData from '../../Data/data';
import Banner from '../../Components/BannerHomeScreen/Banner';
import BannerBehind from '../../Components/BannerBehindProduct/BannerBehind';
import BannerBehindBanner from '../../Components/BannerBehindBanner/BannerBehindBanner';
import BannerUpFooter from '../../Components/BannerUpFooter/BannerUpFooter';

export default function HomeScreen() {
    return (
<div className="Homescreen">
    <Banner />

    <div className="show-product">
        <ul>
            {productData.getAllProducts().map((product) => (
            <ProductHome product={product}></ProductHome>
            ))}
        </ul>

        <div className="button-next-category">
            <button type="submit" className="button-see-more"> SEE MORE </button>
        </div>
    </div>

    <BannerBehind />
    <BannerBehindBanner />
    <BannerUpFooter />
</div>
    )
}
