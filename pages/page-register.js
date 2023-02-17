import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit } = useForm();
  //const [countryCode, setCountryCode] = useState('+1');
  const onSubmit = (data) => {
    console.log(data);
    // handle form submission here
  };
    
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Register">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                        <div className="row">
                            
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="bstbt1 heading_s1">
                                                <h1 className="mb-5">Create an Account</h1>
                                                <p>Already have an account? <Link href="/page-login"><a>Log in instead!</a></Link></p>
                                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            
                                            <form method="post">
                                                <div className="form-group">
                                                <input placeholder="Please enter your first name" type="text" {...register('name', { required: true })} /><br /><br />
                                                    </div>

                                                     <div className="d-flex payment_option mb-50"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <div className="custome-radio">
                                                        <input id="exampleRadios3" defaultChecked="" className="form-check-input" type="radio" {...register('payment_option', { required: true })} /><br /><br />
                                                        <label className="form-check-label" htmlFor="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">I am a customer</label>
                                                    </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <div className="custome-radio">
                                                        <input id="exampleRadios4" defaultChecked="" className="form-check-input" type="radio" {...register('payment_option', { required: true })} /><br /><br />
                                                        <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">I am a vendor</label>
                                                    </div>
                                                    </div>
                                                    
                                                <div className="form-group">
                                                    <input type="text" required="" name="email" placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="Confirm password" />
                                                </div>
                                                <div className="login_footer form-group">
                                                    <div className="chek-form">
                                                        <input type="text" required="" name="email" placeholder="Security code *" />
                                                    </div>
                                                    <span className="security-code">
                                                        <b className="text-new">8</b>
                                                        <b className="text-hot">6</b>
                                                        <b className="text-sale">7</b>
                                                        <b className="text-best">5</b>
                                                    </span>
                                                </div>
                                               
                                                <div className="login_footer form-group mb-50">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" value="" />
                                                            <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                                                        </div>
                                                    </div>
                                                    <Link href="/page-Register-policy"><a><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a></Link>
                                                </div>
                                                <div className="form-group mb-30">
                                                    <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Register</button>
                                                </div>
                                                <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our Register policy</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <div className="card-login mt-115">
                                        <a href="#" className="social-login facebook-login">
                                            <img src="/assets/imgs/theme/icons/logo-facebook.svg" alt="" />
                                            <span>Continue with Facebook</span>
                                        </a>
                                        <a href="#" className="social-login google-login">
                                            <img src="/assets/imgs/theme/icons/logo-google.svg" alt="" />
                                            <span>Continue with Google</span>
                                        </a>
                                        <a href="#" className="social-login apple-login">
                                            <img src="/assets/imgs/theme/icons/logo-apple.svg" alt="" />
                                            <span>Continue with Apple</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default Register;
