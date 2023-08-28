import Layout from '../../Components/Layout';

const MyAccount = () => {
    return (
      <Layout>
          <h1 className='text-lg font-medium mb-12'>My Account</h1>
          <section className='w-[300px] flex flex-col gap-8'>
              <p className='w-ful'><span className='text-sm font-light'>Email:</span> <span className='font-medium'>fran@platzi.com</span></p>
              <p className='w-full'><span className='text-sm font-light'>Password:</span> <span className='font-medium'>123123</span></p>
              <button className='w-full h-12 rounded-lg bg-black text-white'>Sign Out</button>
          </section>
      </Layout>
    );
  }
  
export default MyAccount;