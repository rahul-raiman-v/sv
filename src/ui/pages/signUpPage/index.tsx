import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { userAuthStore } from '../../../store';
import { Button, InputField } from '../../components';

export const SignUpPage = () => {
    const navigate = useNavigate();
    const { userSignUp } = userAuthStore();
  const [signUpData,setSignUpData] = React.useState<{
    fullName: string | number | readonly string[] | undefined ,
    email: string | number | readonly string[] | undefined,
    password:string | number | readonly string[] | undefined,
  }>({
    fullName:"",
    email:"",
    password:""
  })
  function handleLoginPage(){
    navigate("/login");
  }
  function handleLogin() {
    if(signUpData.email?.toString().trim() && signUpData.password?.toString().trim() && signUpData.fullName?.toString().trim()){
      userSignUp(signUpData);
      setSignUpData({email:'',password:'',fullName:''});
    }
   else{
    toast.error("Input fields are empty");
   } 
  }
  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    const { name,value } = event.target;
      setSignUpData({...signUpData,[name]:value});      
    }
  return (
    <div className='flex flex-1 items-center justify-center h-screen w-screen'>
      <div className='border border-gray-500 rounded-xl p-10 max-w-2xl w-full flex flex-col items-center gap-y-8 '>
        <h1 className='text-3xl text-blue-600 font-semibold'>Welcome to SV</h1>
        <h2 className='text-2xl font-semibold text-purple-800'>SignUp Page</h2>
        <div className='w-full max-w-lg flex flex-col gap-y-8 items-center'>
            <InputField type="text" name='fullName' placeholder='Enter your full name'  value={signUpData?.fullName} onChange={handleChange} />
            <InputField type="email" name='email' placeholder='Enter your email'  value={signUpData?.email} onChange={handleChange} />
            <InputField type="password" name='password' placeholder='Enter your password'  onChange={handleChange} value={signUpData?.password}/>
            <Button className='border w-fit py-2 px-6 rounded-lg bg-blue-600 text-white cursor-pointer text-lg hover:opacity-80' onClick={handleLogin}>Register</Button>
        </div>

        <p>Already have an account ? <span className='decoration-blue-400 underline text-blue-700 cursor-pointer' onClick={handleLoginPage}>Login In</span></p>

      </div>
    </div>
  )
}

