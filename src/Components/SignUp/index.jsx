import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    const form = useRef(null);

    const createAnAccount = () => {
        
        const formData = new FormData(form.current);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        console.log(data);
    }

    return (
        <form ref={form} className='w-[300px] flex flex-col gap-6'>
            <div className='w-full'>
                <label htmlFor='name'>Your name:</label>
                <input className='w-full px-6 py-2 rounded-lg border border-gray-500 focus:outline-none' type='text' id='name' name='name'/>
            </div>
            <div className='w-full'>
                <label htmlFor='email'>Your email:</label>
                <input className='w-full px-6 py-2 rounded-lg border border-gray-500 focus:outline-none' type='email' id='email' name='email'/>
            </div>
            <div className='w-full'>
                <label htmlFor='password'>Your password:</label>
                <input className='w-full px-6 py-2 rounded-lg border border-gray-500 focus:outline-none' type='password' id='password' name='password'/>
            </div>
            <Link to='/'>
                <button 
                    className='w-full h-12 rounded-lg bg-black text-white'
                    onClick={() => createAnAccount()}
                >Create</button>
            </Link>
        </form>
    );
}

export default SignUp;