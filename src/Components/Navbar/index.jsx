import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShopppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const { shoppingCart } = useContext(ShopppingCartContext);
    const activeStyle = 'underline underline-offset-4';
    
    return (
        <nav className='w-full flex justify-between py-5 px-8 fixed top-0 z-10 text-sm font-light bg-white'>
            <ul className='flex items-center gap-6'>
                <li>
                    <NavLink to='/' className='font-semibold text-lg'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/furniture'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Furniture</NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Toys</NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Others</NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-6'>
                <li>fran@platzi.com</li>
                <li>
                    <NavLink to='/my-orders'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >My orders</NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >My Account</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-out'
                     className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Sign out</NavLink>
                </li>
                <li className='flex flex-row justify-center items-center'><ShoppingBagIcon className='h-6 w-6 text-black'/>{shoppingCart.length}</li>
            </ul>
        </nav>
    );
}

export default Navbar;