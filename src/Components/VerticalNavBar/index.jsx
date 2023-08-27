import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import { categories } from '../../utils/constants';

const VerticalNavBar = () => {
    
    const { shoppingCart, setCategory } = useContext(ShoppingCartContext);
    const [isVerticalBarHidden, setIsVerticalBarHidden] = useState(true);
    const activeStyle = 'underline underline-offset-4';
    
    return (
        <>
        <nav className='w-full lg:hidden py-5 px-8 fixed top-0 z-10 text-sm font-light bg-white'>
            <ul className='w-full flex justify-between'>
                <li>
                    <ul className='flex items-center gap-8'>
                        <li className='cursor-pointer' onClick={() => setIsVerticalBarHidden(current => !current)}>
                            <Bars3Icon className='h-6 w-6 text-black'/>
                        </li>
                        <li>
                            <NavLink to='/' 
                            className='font-medium text-xl'
                            onClick={() => setCategory(categories.all)} 
                            >Shopi</NavLink>
                        </li>
                    </ul>
                </li>
                <li className='flex flex-row justify-center items-center'><ShoppingBagIcon className='h-6 w-6 text-black'/>{shoppingCart.length}</li>
            </ul>
        </nav>
        <aside className={`w-2/3 sm:w-3/6 md:2/6 h-[calc(100vh-72px)] ${ isVerticalBarHidden ? 'hidden' : 'flex flex-col'} justify-start px-5 fixed top-[72px] z-10 text-sm font-light bg-white gap-3`}>
            <hr/>
            <ul className='flex flex-col items-center gap-6'>
                <li><h2 className='text-lg font-medium'>Categories</h2></li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => setCategory(categories.all)} 
                    >All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => setCategory(categories.clothes)} 
                    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => setCategory(categories.electronics)} 
                    >Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/furniture'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => setCategory(categories.furniture)} 
                    >Furniture</NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => setCategory(categories.toys)} 
                    >Toys</NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => setCategory(categories.others)} 
                    >Others</NavLink>
                </li>
            </ul>
            <hr/>
            <ul className='flex flex-col items-center gap-6'>
                <li>
                    <NavLink to='/my-account'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >My Account</NavLink>
                </li>
                <li>fran@platzi.com</li>
                <li>
                    <NavLink to='/my-orders'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >My orders</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-out'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Sign out</NavLink>
                </li>
            </ul>
        </aside>
        </>
     );
}

export default VerticalNavBar;