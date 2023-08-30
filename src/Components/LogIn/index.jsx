import { Link } from 'react-router-dom';

const LogIn = ({ parsedAccount, hasUserAnAccount, setView}) => {
    return (
        <section className='w-[300px] flex flex-col gap-6'>
            <p className='w-ful'><span className='text-sm font-light'>Email:</span> <span className='font-medium'>{parsedAccount?.email}</span></p>
            <p className='w-full'><span className='text-sm font-light'>Password:</span> <span className='font-medium'>{parsedAccount?.password}</span></p>
            <Link to='/'>
                <button className='w-full h-12 rounded-lg bg-black disabled:bg-black/40 text-white' disabled={!hasUserAnAccount}>Log in</button>
            </Link>
            <div className='text-center'>
                <a className='w-full text-center underline text-xs' href='/'>Forgot my password</a>
            </div>
            <button className='w-full h-12 border border-black disabled:text-black disabled:border-black/40 rounded-lg' disabled={hasUserAnAccount} onClick={() => setView('create-user-info')}>Sign up</button>
        </section>
    );
}

export default LogIn;