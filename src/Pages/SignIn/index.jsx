import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';

const SignIn = () => {

    const { account } = useContext(ShoppingCartContext);

    const localStorageAccount = localStorage.getItem('account');
    const parsedAccount = JSON.parse(localStorageAccount);

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0: true;
    const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;
    
    return (
      <Layout>
          <h1 className='text-lg font-medium mb-6'>Welcome</h1>
          <section className='w-[300px] flex flex-col gap-6'>
              <p className='w-ful'><span className='text-sm font-light'>Email:</span> <span className='font-medium'>{parsedAccount?.email}</span></p>
              <p className='w-full'><span className='text-sm font-light'>Password:</span> <span className='font-medium'>{parsedAccount?.password}</span></p>
              <Link to='/'>
                  <button className='w-full h-12 rounded-lg bg-black disabled:bg-black/40 text-white' disabled={!hasUserAnAccount}>Log in</button>
              </Link>
              <div className='text-center'>
                <a className='w-full text-center underline text-xs' href='/'>Forgot my password</a>
              </div>
              <button className='w-full h-12 border border-black disabled:text-black disabled:border-black/40 rounded-lg' disabled={hasUserAnAccount}>Sign up</button>
          </section>
      </Layout>
    );
  }
  
export default SignIn;