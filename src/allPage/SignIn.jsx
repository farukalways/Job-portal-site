import Lottie from 'lottie-react';
import registration from '../assets/registration.json'
import google from '../assets/image/google.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../ciontext/AuthContext';

const SignIn = () => {
  // const [error, setError] = useState('')
  const {userLogin, googleLogin} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleGoogleLogin= ()=>{
    googleLogin()
    .then(()=> {
      navigate(from)
    })

  }

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
    .then(result => {
      console.log(result);
      navigate(from)
    })
    .catch(error=>{
      console.log(error.message);
    })
  
    form.reset();
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
          className='w-full flex items-center justify-center gap-2 border p-3 my-5'
          onClick={handleGoogleLogin}
          >
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
            <input type="email" name='email' placeholder="Email address" className="input input-bordered " required />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Password*</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered " required />
          </div>

          <div className='flex items-center justify-between mb-3'>
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover text-sm">Forgot password?</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-md border-none bg-[#05264e] hover:to-blue-400">Login</button>
          </div>
          <p className='text-center my-5'>Don't have an Account? <Link 
          to={'/register'} >Register </Link></p>
        </form>
      </div>
      <div className="lg:w-4/12 hidden lg:block">
        <Lottie className='w-4/5 mx-auto ' animationData={registration}></Lottie>
      </div>
    </div>
  );
};

export default SignIn;