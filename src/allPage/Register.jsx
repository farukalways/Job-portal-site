import Lottie from 'lottie-react';
import registration from '../assets/registration.json'
import google from '../assets/image/google.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [error, setError] = useState('')

const handleRegister = (e) =>{
  e.preventDefault()
  const form = e.target;
  const fullName = form.fullName.value;
  const email = form.email.value;
  const userName = form.Username.value;
  const password = form.password.value;
  const rePassword = form.rePassword.value;



  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  if (password !== rePassword) {
    setError("Passwords do't match.");
    return;
  }

  if(!/[a-z]/.test(password)){
    setError("one lowercase add")
    return;
  }
  if(!/[A-Z]/.test(password)){
    setError("one Uppercase add")
    return;
  }
  
  setError('');
  // console.log(fullName, email, userName, password, rePassword);
}
  


  return (

    <div className="flex items-center mt-10">
      <div className='lg:w-4/12'>
      </div>
      <div className="w-full sm:w-4/12 mx-auto text-center">
        <div>
          <p className='my-7'>register</p>
          <h1 className="font-bold text-4xl">Start for free Today</h1>
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

        <form className="w-full" onSubmit={handleRegister}>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">Full Name*</span>
            </label>
            <input type="text" name='fullName' placeholder="Full Name" className="input input-bordered " required />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">Email*</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered " required />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">Username*</span>
            </label>
            <input type="text" name='Username' placeholder="Username" className="input input-bordered " required />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">Password*</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">Re-Password*</span>
            </label>
            <input type="password" name='rePassword' placeholder="Re-Password" className="input input-bordered" required />
            {
              error && <p className='text-red-500 text-start'>{error}</p>
            }
          </div>
          <div className="flex items-center gap-2 mb-3">
            <label className="cursor-pointer label">
              <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
            </label>
              <span className="label-text">Agree and terms and policy</span>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-md border-none bg-[#05264e] hover:to-blue-400">Submit & Register</button>
          </div>
          <p className='text-center my-5'>Already have an account? <Link to={'/signIn'} >Sign in</Link></p>
        </form>
      </div>
      <div className="lg:w-4/12 hidden lg:block">
        <Lottie animationData={registration}></Lottie>
      </div>
    </div>

  );
};

export default Register;