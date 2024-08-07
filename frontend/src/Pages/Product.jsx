import React, { useContext} from "react";
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from "../Components/Description/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProduct";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productID } = useParams();
    const product = all_product.find((e) => e.id === Number(productID))
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts/>
        </div>
    )
}

export default Product
