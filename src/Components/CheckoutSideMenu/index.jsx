import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShopppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
    
    const { isCheckoutSideMenuOpen, 
            setIsCheckoutSideMenuOpen,
            shoppingCart,
            setShoppingCart
    } = useContext(ShopppingCartContext);

    const deleteProduct = (id) => {
        const index = shoppingCart.findIndex(item => item.id === id);
        const productList = [...shoppingCart];
        productList.splice(index, 1);
        setShoppingCart(productList);
    }

    return (
    <aside className={`w-[360px] h-[calc(100vh-68px)] fixed right-0 bottom-0 z-10 rounded-lg bg-white border border-black ${isCheckoutSideMenuOpen ? 'flex flex-col': 'hidden'}`}>
        <div className='w-full p-6 flex justify-between items-center'>
            <h2 className='text-xl font-medium'>My Order</h2>
            <div className='cursor-pointer' onClick={() => setIsCheckoutSideMenuOpen(false)}><XMarkIcon className='h-6 w-6 text-black'/></div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
            { shoppingCart.map(product => <OrderCard product={product} key={product.id} deleteProduct={deleteProduct}/>) }
        </div>
        <div className='p-6'>
            <p className='flex flex-row justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(shoppingCart)}</span>
            </p>
        </div>
    </aside>
    );
}

export default CheckoutSideMenu;