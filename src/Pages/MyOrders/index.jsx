import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';

const MyOrders = () => {
    
    const { order } = useContext(ShoppingCartContext);
    
    let data;

    if (order.length > 0) {
      data = order.map((order, index) => {
      return  <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                    totalPrice={order.totalPrice}
                    totalProducts={order.totalProducts}
                />
              </Link>})
    } else {
      data = <p className='mt-4 text-2xl font-light'>There aren't any orders yet</p>
    }
    
    return (
      <Layout>
          <h1 className='text-lg font-medium mb-6'>My Orders</h1>
          <section>
            {data}
          </section>
      </Layout>
    );
  }
  
export default MyOrders;