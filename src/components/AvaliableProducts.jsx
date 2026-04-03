import React, { use } from 'react';
import Card from './Card';

const AvaliableProducts = ({ productsPromise, purchasedProduct, setPurchasedProduct }) => {
    const productsData = use(productsPromise)

    return (
        <section>
            <div className='grid grid-cols-3 gap-10 w-[85%] mx-auto my-10'>
                {
                    productsData.map(product => <Card key={product.id} setPurchasedProduct = {setPurchasedProduct} purchasedProduct = {purchasedProduct} product={product}></Card>)
                }
            </div>
        </section>
    );
};

export default AvaliableProducts;