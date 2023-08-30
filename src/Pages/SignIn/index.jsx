import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import LogIn from '../../Components/LogIn';
import SignUp from '../../Components/SignUp';

const SignIn = () => {

    const { account } = useContext(ShoppingCartContext);

    const [view, setView] = useState('user-info');

    const localStorageAccount = localStorage.getItem('account');
    const parsedAccount = JSON.parse(localStorageAccount);

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0: true;
    const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;

    const renderLogIn = () => {
      return (
          <LogIn 
            parsedAccount={parsedAccount} 
            hasUserAnAccount={hasUserAnAccount}
            setView={setView}
          />
        );
    }

    const renderCreateUserInfo = () => {
      return (
        <SignUp/>
      );
    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo():renderLogIn();
    
    return (
      <Layout>
          <h1 className='text-lg font-medium mb-6'>Welcome</h1>
          {renderView()}
      </Layout>
    );
  }
  
export default SignIn;