import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import { categories } from '../../utils/constants';

const VerticalNavBar = () => {
    
    const { shoppingCart, setCategory, setIsCheckoutSideMenuOpen} = useContext(ShoppingCartContext);
    const [isVerticalBarHidden, setIsVerticalBarHidden] = useState(true);
    const activeStyle = 'underline underline-offset-4';

    const handleSelect = (category) => {
        setCategory(category);
        setIsVerticalBarHidden(current => !current)
    }

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
                <li onClick={() => setIsCheckoutSideMenuOpen(current => !current)}className='flex flex-row justify-center items-center cursor-pointer'><ShoppingBagIcon className='h-6 w-6 text-black'/>{shoppingCart.length}</li>
            </ul>
        </nav>
        <aside className={`w-10/12 sm:w-3/6 md:w-2/6 lg:hidden h-[calc(100vh-68px)] ${ isVerticalBarHidden ? 'hidden' : 'flex flex-col'} justify-start px-5 fixed top-[68px] z-10 text-sm font-light bg-white gap-3`}>
            <hr/>
            <ul className='flex flex-col items-center gap-6'>
                <li><h2 className='text-lg font-medium'>Categories</h2></li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => handleSelect(categories.all)} 
                    >All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => handleSelect(categories.clothes)} 
                    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => handleSelect(categories.electronics)} 
                    >Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/furniture'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => handleSelect(categories.furniture)} 
                    >Furniture</NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => handleSelect(categories.toys)} 
                    >Toys</NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    onClick={() => handleSelect(categories.others)} 
                    >Others</NavLink>
                </li>
            </ul>
            <hr/>
            <ul className='flex flex-col items-center gap-6'>
                <li onClick={() => setIsVerticalBarHidden(current => !current)}>
                    <NavLink to='/my-account'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >My Account</NavLink>
                </li>
                <li>fran@platzi.com</li>
                <li onClick={() => setIsVerticalBarHidden(current => !current)}>
                    <NavLink to='/my-orders'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >My orders</NavLink>
                </li>
                <li onClick={() => setIsVerticalBarHidden(current => !current)}>
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