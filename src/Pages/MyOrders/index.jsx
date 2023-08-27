import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';

const MyOrders = () => {
    
    const { order } = useContext(ShoppingCartContext);

    return (
      <Layout>
          <h1 className='text-lg font-medium mb-6'>My Orders</h1>
          <section>
            { order.map((order, index) => {
            return <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                    />
                </Link>})}
          </section>
      </Layout>
    );
  }
  
export default MyOrders;