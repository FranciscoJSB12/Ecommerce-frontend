import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    
    const { isProductDetailOpen, 
            setIsProductDetailOpen,
            product } = useContext(ShoppingCartContext);

    return (
        <aside className={`w-[360px] h-[calc(100vh-68px)] fixed right-0 bottom-0 z-10 rounded-lg bg-white border border-black ${isProductDetailOpen ? 'flex flex-col': 'hidden'}`}>
            <div className='w-full p-6 flex justify-between items-center'>
                <h2 className='text-xl font-medium'>Detail</h2>
                <div className='cursor-pointer'onClick={() => setIsProductDetailOpen(false)}><XMarkIcon className='h-6 w-6 text-black'/></div>
            </div>
            <figure className='px-6'>
                <img src={product.image} alt={product.name} className='w-full h-full rounded-lg'/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{product.name}</span>
                <span className='font-medium text-md'>${product.price}</span>
                <span className='font-light text-sm'>{product.description}</span>
            </p>
        </aside>
    );
}

export default ProductDetail;