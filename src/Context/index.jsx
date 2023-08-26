import { useState ,createContext } from 'react';

export const ShopppingCartContext = createContext();

export const ShopppingCartProvider = ({ children }) => {

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const [product, setProduct] = useState({});
    const [shoppingCart, setShoppingCart] = useState([]);
    
    return(
        <ShopppingCartContext.Provider value={{
            isProductDetailOpen,
            setIsProductDetailOpen,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            product,
            setProduct,
            shoppingCart,
            setShoppingCart
        }}>
            { children }
        </ShopppingCartContext.Provider>
    );
}

