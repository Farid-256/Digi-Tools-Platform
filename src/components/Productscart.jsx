
const Productscart = ({ product, removeProduct }) => {


  
    return (
        <div className='w-[80%] mx-auto'>
            <div className='border border-gray-500 rounded-2xl bg-amber-100 space-y-2 my-5 flex items-center justify-between p-2'>
                <div className='flex items-center gap-5'>
                    <h3 className='text-5xl'>{product.icon}</h3>
                    <div>
                        <h2 className='text-3xl font-bold'>{product.name}</h2>
                        <h2 className='text-xl text-gray-400'>${product.price}</h2>
                    </div>
                </div>

                <button onClick={() => removeProduct(product)} className='px-6 py-2 bg-red-700 text-white cursor-pointer'>Delete</button>
            </div>
            
        </div>
    );
};

export default Productscart;