import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import { categories } from '../../utils/constants';

const Navbar = () => {
    
    const { shoppingCart, 
            setCategory, 
            setIsCheckoutSideMenuOpen,
            setSignOut,
            signOut 
          } = useContext(ShoppingCartContext);
          
    const activeStyle = 'underline underline-offset-4';

    const SignOut = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(SignOut);
    const isUserSignOut = signOut || parsedSignOut;
    
    const handleSignOut = () => {
        const strigifiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', strigifiedSignOut);
        setSignOut(true);
    }
    
    const renderView = () => {
        if (isUserSignOut) {
            return (
                <li onClick={() => handleSignOut()}>
                    <NavLink to='/sign-in'
                    className={({isActive}) => (isActive ? activeStyle : undefined)}
                    >Sign out</NavLink>
                </li>
            );
        } else {
            return (
                <>
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
                    <li onClick={() => handleSignOut()}>
                        <NavLink to='/sign-in'
                        className={({isActive}) => (isActive ? activeStyle : undefined)}
                        >Sign out</NavLink>
                    </li>
                </>
            );
        }
    }
    
    return (
        <nav className='w-full hidden lg:flex justify-between py-5 px-8 fixed top-0 z-10 text-sm font-light bg-white'>
            <ul className='flex items-center gap-6'>
                <li>
                    <NavLink to='/' 
                    className='font-semibold text-lg'
                    onClick={() => setCategory(categories.all)} 
                    >Shopi</NavLink>
                </li>
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

            <ul className='flex items-center gap-6'>
                {renderView()}
                <li onClick={() => setIsCheckoutSideMenuOpen(current => !current)}className='flex flex-row justify-center items-center cursor-pointer'><ShoppingBagIcon className='h-6 w-6 text-black'/>{shoppingCart.length}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;