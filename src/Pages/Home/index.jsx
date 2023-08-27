import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import CardContainer from '../../Components/CardContainer';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const Home = () => {

  const { searchValue, setSearchValue, renderProducts, loading, error } = useContext(ShoppingCartContext);
  
  return (
    <Layout>
      <h1 className='text-xl font-medium mb-4'>Home</h1>
      <input type='text' placeholder='Search a Product' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
      className='xs:w-72 sm:w-80 px-3 py-3 rounded-lg mb-4 border border-black focus:outline-none'/>
      {loading && <p className='mt-4 text-2xl font-light'>Loading, please wait!</p>}
      {error && <p className='mt-4 text-2xl font-light'>Error, check your internet connection</p>}
      {(!loading&&!error) && <CardContainer>
          { renderProducts()?.map(product => <Card product={product} key={product.id}/>) }
      </CardContainer>}
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
