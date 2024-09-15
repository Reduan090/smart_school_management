import { Link } from 'react-router-dom';
import img from '../assets/login_promo_desktop.svg'
import logoG from '../assets/google-logo-icon-png-transparent-background-osteopathy-16.png'
import 'animate.css';

const Login = () => {

    return (
        <>
            <div>


                <div className="grid grid-cols-1 md:grid-cols-4">

                    <div className="col-span-1 mt-20 ">

                        <div className=''>
                            <h1 className="text-4xl font-bold text-center text-[#00684A] animate__animated   animate__flash">Log in to your account</h1>
                            <p className="text-center mt-3">Do not have an account?<Link className="text-blue-600 underline font-semibold" to='/signUp'> Sign Up</Link></p>

                            <div className='space-y-3 mx-auto card-body '>
                                <button className="btn glass outline outline-1 w-full">
                                    <img className='h-4 w-4' src={logoG} alt="" />
                                    Login With Google
                                </button>
                            </div>

                            <form className="card-body ">


                                <div className="form-control animate__animated animate__fadeInLeft">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control
                                animate__animated animate__fadeInRight
                                ">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="input input-bordered"
                                    />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-medium text-blue-600 text-base">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6" >
                                    <button className="btn btn-outline btn-accent text-base "><Link className='text-xl' to='/Home'>Student Login</Link></button>
                                </div>

                                <div className="form-control mt-6" >
                                    <button className="btn btn-outline btn-accent text-base "><Link className='text-xl' to='/TeacherHome'>Teacher Login</Link></button>
                                </div>


                            </form>
                        </div>

                    </div>

                    <div className="col-span-3 hidden md:block">
                        <img className='h-[100vh] w-full' src={img} alt="#" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;