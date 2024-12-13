import Lottie from 'lottie-react';
import registration from '../assets/registration.json'
import google from '../assets/image/google.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const nameOrEmail = form.NameOrEmail.value;
    const password = form.password.value;
    console.log(nameOrEmail,  password);
  }


  return (
    <div className="flex items-center mt-10">
      <div className='lg:w-4/12'>
      </div>
      <div className="w-full sm:w-4/12 mx-auto text-center">
        <div>
          <p className='my-7'>Wellcome back</p>
          <h1 className="font-bold text-4xl">Member Login</h1>
          <p className='my-2'>Access to all features. No credit card required.</p>
        </div>
        <button
          className='w-full flex items-center justify-center gap-2 border p-3 my-5'>
          <img
            className='w-7'
            src={google} alt="" />
          <strong>Sign up With google</strong>
        </button>
        <div className="divider mb-6">or</div>

        <form className="w-full" onSubmit={handleLogin}>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Username or Email address *</span>
            </label>
            <input type="text" name='NameOrEmail' placeholder="Username or Email address" className="input input-bordered " required />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Password*</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered " required />
          </div>

          <div className='flex items-center justify-between mb-3'>
          <div className="flex items-center gap-2 ">
            <label className="cursor-pointer label">
              <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
            </label>
            <span className="label-text">Agree and terms and policy</span>
          </div>
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover text-sm">Forgot password?</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-md border-none bg-[#05264e] hover:to-blue-400">Login</button>
          </div>
          <p className='text-center my-5'>Don't have an Account? <Link >Sign up</Link></p>
        </form>
      </div>
      <div className="lg:w-4/12 hidden lg:block">
        <Lottie className='w-4/5 mx-auto ' animationData={registration}></Lottie>
      </div>
    </div>
  );
};

export default SignIn;