const LogIn = (props) => {
    
    const { setIsLogInHidden, setSignUpHidden } = props;

    const handleSignUp = () => {
        setIsLogInHidden(true);
        setSignUpHidden(false);
    }
    
    return (
        <>
            <h1 className='text-lg font-medium mb-6'>Welcome</h1>
            <section className='w-[300px] flex flex-col gap-6'>
                <p className='w-ful'><span className='text-sm font-light'>Email:</span> <span className='font-medium'>fran@platzi.com</span></p>
                <p className='w-full'><span className='text-sm font-light'>Password:</span> <span className='font-medium'>123123</span></p>
                <button className='w-full h-12 rounded-lg bg-black text-white'>Log in</button>
                <p className='w-full text-center underline text-xs'>Forgot my password</p>
                <button className='w-full h-12 rounded-lg text-gray-500 border border-gray-500 bg-white' onClick={() => handleSignUp()}>Sign up</button>
            </section>
        </>
    );
}

export default LogIn;