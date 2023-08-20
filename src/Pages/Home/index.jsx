import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';

const Home = () => {
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');  
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  return (
    <Layout>
      Home
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
          { products?.map(product => <Card product={product} key={product.id}/>) }
      </div>
    </Layout>
  );
}

export default Home;
