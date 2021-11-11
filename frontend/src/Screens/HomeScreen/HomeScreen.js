import React from 'react';
import Banner from '../../Components/BannerHomeScreen/Banner';
import BannerBehind from '../../Components/BannerBehindProduct/BannerBehind';
import ProductHome from '../../Components/ProductHomeScreen/ProductHome';
import productData from '../../Data/data';

import './HomeScreen.css';

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
</div>
    )
}
