import React from 'react';
import Productscart from './Productscart';
import { toast } from 'react-toastify';

const Cart = ({ purchasedProduct, removeProduct, setPurchasedProduct }) => {

    const totalPrice = purchasedProduct.reduce((sum, item) => {
        return sum + item.price
    }, 0)

    const handleCheckOut = () =>{
        if(purchasedProduct.length === 0){
            toast.error('Your cart is empty!')
            return
        }
        else{
            toast.success("Checkout Successful! Thank you for your purchase.");
            setPurchasedProduct([])
        }
    }

    return (
        <div>
            {
                purchasedProduct.map(product => <Productscart key={product.id} purchasedProduct={purchasedProduct} removeProduct={removeProduct} product={product}></Productscart>)
            }

            <div className="my-10 p-6 bg-white border-2 border-amber-400 rounded-2xl w-[80%] mx-auto">
                <div className="flex justify-between items-center text-3xl font-bold">
                    <h3>Total Price:</h3>
                    <h3 className="text-green-600">${totalPrice}</h3>
                </div>
            </div>

            <div className='flex justify-center py-5'>
                <button onClick={handleCheckOut} className='bg-blue-800 text-white w-[50%] py-2 rounded-3xl cursor-pointer
                hover:bg-blue-600 hover:text-amber-100'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;