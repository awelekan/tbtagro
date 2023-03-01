import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from "next/link";
import Layout from "../components/layout/Layout";


const BuyOnTBT = () => {
  const { register, handleSubmit } = useForm();
  const [countryCode, setCountryCode] = useState('+234');
  const onSubmit = (data) => {
    console.log(data);
    // handle form submission here
  };

    return (
      <Layout>
            <div className="pt-150 pb-150">
                <div className="">
                    <div className="row">
                        <div className=" col-xl-6 col-lg-6 col-md-12 m-auto">
                        <div className="col-lg-8 col-md-8">
                                    <div className="">
                                        <div className="">
                                        <div className="">
                                          <h1 className='bstbt1'>Buy on TBT</h1>
                                        </div>   
<form onSubmit={handleSubmit(onSubmit)}>
                              
    <div className='md-30 chek-form form-group bstbt d-flex' >
    <label className='form-check-label' htmlFor="name"><h5 >First Name:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; </h5></label>
    <input placeholder="Please enter your first name" type="text" {...register('name', { required: true })} /><br /><br />
                       
    </div>
    <div className='md-30 chek-form form-group bstbt d-flex' >
    <label className='form-check-label' htmlFor="name"><h5 >Last Name:   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; </h5></label>
    <input placeholder="Please enter your last name" type="text" {...register('name', { required: true })} /><br /><br />
                       
     </div>
     
        <div className='bstbt d-flex' >
        <label htmlFor="email"><h5>Email Address: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5></label>
      <input placeholder="Please set the email as the login name" type="text"  {...register('email', { required: true })} /><br /><br />              
        </div>

        <div className='bstbt d-flex' >
        <label htmlFor="password"><h5>Login Password:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</h5></label>
      <input placeholder="Please set the login password" type="password"  {...register('password', { required: true })} /><br /><br />
       </div>
                                            
        <div className='bstbt d-flex' >
        <label htmlFor="password"><h5>Confirm Password:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5></label>
      <input placeholder="Please set the login password again" type="password"  {...register('password', { required: true })} /><br /><br />
        </div>                                       
        
        
                        <div className='bstbt d-flex' >
                            <label htmlFor="coyname"><h5>Company/Business Name:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h5></label>
      <input placeholder="Must be a legally registered business" type="text" {...register('coyname', { required: true })} /><br /><br />
     
     </div>

        <div className='bstbt d-flex' >
        <label htmlFor="phone"><h5>Phone Number: &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5></label>
      <select  {...register('countryCode', { required: true })} value={countryCode} onChange={e => setCountryCode(e.target.value)}>
          <option value="+234">+234</option>       
      </select>
      <input placeholder="Phone Number" type="tel"  {...register('phone', { required: true })} /><br /><br />
                        </div>                 
                      
                       
                        <div className='bstbt d-flex' >
                            <label htmlFor="location"><h5>Location:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5></label>
      <input placeholder="Please enter your state" type="text"  {...register('location', { required: true })} /><br /><br />
     
                                            </div>
                                            
    <div className='bstbt' >
            <input className='bstbt2 btn btn-heading btn-block hover-up' type="submit" value="Submit" />
                      
                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                </div>
                    </div>
                </div>
                </div >

            </Layout>
    
  );
};
export default BuyOnTBT;
