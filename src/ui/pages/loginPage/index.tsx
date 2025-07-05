import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router'
import { userAuthStore } from '../../../store';
import { Button, InputField } from '../../components';

export const LoginPage = () => {
  const { userLogin } = userAuthStore();
  const navigate = useNavigate();
  const [loginData,setLoginData] = React.useState<{
    email: string | number | readonly string[] | undefined,
    password:string | number | readonly string[] | undefined,
  }>({
    email:"",
    password:""
  })
  function handleSignUpPage(){
    navigate("/signup");
  }
  function handleLogin() {
    if(loginData.email?.toString().trim() && loginData.password?.toString().trim()){
      userLogin(loginData);
      setLoginData({email:'',password:''});

    }
   else{
    toast.error("Input fields are empty");
   } 
  }
  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    const { name,value } = event.target;
   
      setLoginData({...loginData,[name]:value});      
    
    }
  return (
    <div className='flex flex-1 items-center justify-center h-screen w-screen'>
      <div className='border border-gray-500 rounded-xl p-10 max-w-2xl w-full flex flex-col items-center gap-y-8 '>
        <h1 className='text-3xl text-blue-600'>Welcome to SV</h1>
        <h2 className='text-2xl font-semibold text-purple-800'>Login Page</h2>
        <div className='w-full max-w-lg flex flex-col gap-y-8 items-center'>
            <InputField type="text" name='email' placeholder='Enter your email'  value={loginData?.email} onChange={handleChange} />
            <InputField type="password" name='password' placeholder='Enter your password' onChange={handleChange} value={loginData?.password}/>
            <Button className='border w-fit py-2 px-6 rounded-lg bg-blue-600 text-white cursor-pointer text-lg hover:opacity-80' onClick={handleLogin}>Login</Button>
        </div>

        <p>Don't have an account ? <span className='decoration-blue-400 underline text-blue-700 cursor-pointer' onClick={handleSignUpPage}>Create Account</span></p>

      </div>
    </div>
  )
}

