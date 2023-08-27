import { useState, useEffect, createContext } from 'react';
import { categories } from '../utils/constants';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    
    const [products, setProducts] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [category, setCategory] = useState(categories.all);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const [product, setProduct] = useState({});
    const [shoppingCart, setShoppingCart] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      (async () => {
        try {
          const res = await fetch('https://ecommerce-backend-puce.vercel.app/api/products/');  
          const data = await res.json();
          setProducts(data);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setError(true);
          console.warn(err);
        }
      })();
    }, []);

    const filterByCategory = () => {
      return products?.filter((product) => {
        return product.category.toLowerCase() === category.toLowerCase()
      });
    }
  
    const filterByName = (products) => {
      return products?.filter((item) => {
        const itemName = item.name.toLowerCase();
        const searchName = searchValue.toLowerCase();
        return itemName.includes(searchName);
      });
    }

    const renderProducts = () => {
        if (category.toLowerCase() !== categories.all.toLowerCase()) { 
          const productsFilteredByCatergory = filterByCategory();
          return filterByName(productsFilteredByCatergory);
        } else {
          return filterByName(products);
        }
    }

    return(
        <ShoppingCartContext.Provider value={{
            products, 
            setProducts,
            category,
            setCategory,
            searchValue,
            setSearchValue,
            renderProducts,
            isProductDetailOpen,
            setIsProductDetailOpen,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            product,
            setProduct,
            shoppingCart,
            setShoppingCart,
            order,
            setOrder, 
            loading,
            setLoading,
            error,
            setError
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}

