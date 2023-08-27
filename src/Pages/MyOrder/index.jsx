import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

const MyOrder = () => {
    const { order } = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    const lastIndex = currentPath.lastIndexOf('/') + 1;
    let id = currentPath.substring(lastIndex);
    if (id === 'last') { id = order?.length - 1}
    
    return (
      <Layout>
          <header className='flex flex-row items-center gap-8 mb-8'>
            <Link to='/my-orders' className='cursor-pointer'>
                <ChevronLeftIcon className='h-6 w-6 text-black'/>
            </Link>
            <h1 className='text-lg font-medium'>My Order</h1>
          </header>
          <section className='w-80'>
            { 
              order[id]?.products.map(product => <OrderCard product={product} key={product.id}/>) 
            }
          </section>
      </Layout>
    );
  }
  
export default MyOrder;