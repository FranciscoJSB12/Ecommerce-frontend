import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import CardContainer from '../../Components/CardContainer';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:8080/products');  
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  return (
    <Layout>
      <CardContainer>
          { products?.map(product => <Card product={product} key={product.id}/>) }
      </CardContainer>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
