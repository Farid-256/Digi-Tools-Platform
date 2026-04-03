import React, { useState } from 'react';
import tic from '../assets/products/Check.png'
import { toast } from 'react-toastify';

const Card = ({ product, purchasedProduct, setPurchasedProduct }) => {

    const [ispurchased, setIspurchased] = useState(false)

    const handlePurchased = (productData) => {

        toast('Added to Cart')

        setPurchasedProduct([...purchasedProduct, productData])

        setIspurchased(true)
    }

    return (
        <section className='border border-gray-400 rounded-2xl p-3 space-y-3 hover:border-2 hover:border-amber-400 hover:bg-amber-50  hover:shadow-2xl transition-all'>
            <div className='flex justify-between items-center'>
                <h3 className='text-5xl'>{product.icon}</h3>
                <p className={`${product.tagType === 'popular' ? 'bg-amber-400 px-4 py-1 rounded-3xl' : 'bg-blue-400 px-4 py-1 rounded-3xl text-white'}`}>{product.tagType}</p>
            </div>

            <div>
                <h2 className='text-3xl font-bold'>{product.name}</h2>
                <p className='text-gray-500'>{product.description}</p>
            </div>

            <div>
                <p className='font-bold text-3xl flex'>$<span>{product.price}</span>/ <h3 className='text-xl text-gray-400'>{product.period}</h3></p>
            </div>

            <div>
                <h5 className='flex items-center gap-2 text-gray-400'> <img src={tic} alt="" /> {product.features[0]}</h5>
                <h5 className='flex items-center gap-2 text-gray-400'> <img src={tic} alt="" />{product.features[1]}</h5>
                <h5 className='flex items-center gap-2 text-gray-400'> <img src={tic} alt="" />{product.features[2]}</h5>
            </div>

            <div>
                <button onClick={() => handlePurchased(product)} disabled={ispurchased} className={`${ispurchased === true ? 'px-6 py-2 bg-red-700 text-white cursor-pointer w-full rounded-3xl' : 'px-6 py-2 bg-blue-700 text-white cursor-pointer w-full rounded-3xl'}`}>{ispurchased === true ? 'Added to Cart' : 'Add to Cart'}</button>
            </div>
        </section>
    );
};

export default Card;