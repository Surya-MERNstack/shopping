import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breedcrum from '../components/Breedcrums/Breedcrum';
import Productdisplay from '../components/ProductDisplay/Productdisplay';
import DescriptionBox from '../components/Description/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

export default function Product() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breedcrum product = {product}/>
      <Productdisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}
