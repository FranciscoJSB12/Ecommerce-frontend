import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
    
    const { isCheckoutSideMenuOpen, 
            setIsCheckoutSideMenuOpen,
            shoppingCart,
            setShoppingCart,
            order,
            setOrder  
    } = useContext(ShoppingCartContext);

    const deleteProduct = (id) => {
        const index = shoppingCart.findIndex(item => item.id === id);
        const productList = [...shoppingCart];
        productList.splice(index, 1);
        setShoppingCart(productList);
    }

    const saveOrder = () => {
        const newOrder = {
            date: '01.01.23',
            products: shoppingCart,
            totalProducts: shoppingCart.length,
            totalPrice: totalPrice(shoppingCart)
        }

        setOrder([...order, newOrder]);
        setShoppingCart([]);
    }

    return (
    <aside className={`w-[360px] h-[calc(100vh-68px)] fixed right-0 bottom-0 z-10 rounded-lg bg-white border border-black ${isCheckoutSideMenuOpen ? 'flex flex-col': 'hidden'}`}>
        <div className='w-full p-6 flex justify-between items-center'>
            <h1 className='text-xl font-medium'>My Order</h1>
            <div className='cursor-pointer' onClick={() => setIsCheckoutSideMenuOpen(false)}><XMarkIcon className='h-6 w-6 text-black'/></div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
            { 
                shoppingCart.map(product => <OrderCard product={product} key={product.id} deleteProduct={deleteProduct}/>) 
            }
        </div>
        <div className='px-6 pb-6'>
            <p className='flex flex-row justify-between items-center m-4'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(shoppingCart)}</span>
            </p>
            <Link to='/my-orders/last'>
                <button className='w-full h-14 rounded-lg bg-black text-white text-lg' onClick={() => saveOrder()}>Checkout</button>
            </Link>
        </div>
    </aside>
    );
}

export default CheckoutSideMenu;