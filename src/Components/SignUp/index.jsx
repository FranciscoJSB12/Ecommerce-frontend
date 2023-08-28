const SignUp = () => {
    return (
        <>
            <h1 className='text-lg font-medium mb-6'>Welcome</h1>
            <section className='w-[300px] flex flex-col gap-6'>
                <div className='w-full'>
                    <label for='name'>Your name:</label>
                    <input className='w-full px-6 py-2 rounded-lg border border-gray-500 focus:outline-none' type='text' id='name'/>
                </div>
                <div className='w-full'>
                    <label for='email'>Your email:</label>
                    <input className='w-full px-6 py-2 rounded-lg border border-gray-500 focus:outline-none' type='email' id='email'/>
                </div>
                <div className='w-full'>
                    <label for='password'>Your password:</label>
                    <input className='w-full px-6 py-2 rounded-lg border border-gray-500 focus:outline-none' type='password' id='password'/>
                </div>
                <button className='w-full h-12 rounded-lg bg-black text-white'>Create</button>
            </section>
        </>
    );
}

export default SignUp;