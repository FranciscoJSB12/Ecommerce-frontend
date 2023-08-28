import { useState } from 'react';
import Layout from '../../Components/Layout';
import LogIn from '../../Components/LogIn';
import SignUp from '../../Components/SignUp';

const SignIn = () => {
    const [isLogInHidden, setIsLogInHidden] = useState(false);
    const [isSignUpHidden, setSignUpHidden] = useState(true);
    return (
      <Layout>
        {!isLogInHidden && <LogIn setIsLogInHidden={setIsLogInHidden} setSignUpHidden={setSignUpHidden}/>}
        {!isSignUpHidden && <SignUp/>}
      </Layout>
    );
  }
  
export default SignIn;