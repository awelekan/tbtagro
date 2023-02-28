import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useSession } from 'next-auth/react';


import React, { useState, useEffect, useReducer } from "react";
import AdminDashboardScreen from "./admin/dashboard";
import SellerScreen from "./seller";

function Account() {

    const [activeIndex, setActiveIndex] = useState(1);
    const { data: session } = useSession();
    
     const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
     });
    
    function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}


    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };


    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Account">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dashboard-menu">
                                            <ul className="nav flex-column" role="tablist">
                                                <li className="nav-item">
                                                    <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}><i className="fi-rs-settings-sliders mr-10"></i>Dashboard</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 2 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(2)}><i className="fi-rs-shopping-bag mr-10"></i>Orders</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 3 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(3)}><i className="fi-rs-shopping-cart-check mr-10"></i>Track Your Order</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 4 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(4)}><i className="fi-rs-marker mr-10"></i>My Address</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 5 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(5)}><i className="fi-rs-user mr-10"></i>Account details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 6 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(6)}><i className="fi-rs-user mr-10"></i>Become a Seller</a>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/"><a className="nav-link"><i className="fi-rs-sign-out mr-10"></i>Logout</a></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="tab-content account dashboard-content pl-50">
                                            <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                         {session && (<h3 className="mb-0">Welcome {session.user.name} !</h3>
    )}
                                                    </div>
                                                    <div className="card-body">
                                                        <h4>
                                                        Dashboard
                                                        </h4>
                                                        <div className="md:col-span-3">
          <h1 className="mb-4 text-xl"></h1>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="card m-5 p-5">
                  <p className="text-3xl">${summary.ordersPrice} </p>
                  <p>Sales</p>
                  <Link href="/admin/orders">View sales</Link>
                </div>
                <div className="card m-5 p-5">
                  <p className="text-3xl">{summary.ordersCount} </p>
                  <p>Orders</p>
                  <Link href="/admin/orders">View orders</Link>
                </div>
                <div className="card m-5 p-5">
                  <p className="text-3xl">{summary.productsCount} </p>
                  <p>Products</p>
                  <Link href="/admin/products">View products</Link>
                </div>
                <div className="card m-5 p-5">
                  <p className="text-3xl">{summary.usersCount} </p>
                  <p>Users</p>
                  <Link href="/admin/users">View users</Link>
                </div>
              </div>
              <h2 className="text-xl">Sales Report</h2>
              <Bar
                options={{
                  legend: { display: true, position: 'right' },
                }}
                data={data}
              />
            </div>
                                                            )}
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Your Orders</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Order</th>
                                                                        <th>Date</th>
                                                                        <th>Status</th>
                                                                        <th>Total</th>
                                                                        <th>Actions</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>#1357</td>
                                                                        <td>March 45, 2020</td>
                                                                        <td>Processing</td>
                                                                        <td>₦125.00 for 2 item</td>
                                                                        <td><a href="#" className="btn-small d-block">View</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#2468</td>
                                                                        <td>June 29, 2020</td>
                                                                        <td>Completed</td>
                                                                        <td>₦364.00 for 5 item</td>
                                                                        <td><a href="#" className="btn-small d-block">View</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#2366</td>
                                                                        <td>August 02, 2020</td>
                                                                        <td>Completed</td>
                                                                        <td>₦280.00 for 3 item</td>
                                                                        <td><a href="#" className="btn-small d-block">View</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Orders tracking</h3>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                                                    <div className="input-style mb-20">
                                                                        <label>Order ID</label>
                                                                        <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                                                    </div>
                                                                    <div className="input-style mb-20">
                                                                        <label>Billing email</label>
                                                                        <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                                                    </div>
                                                                    <button className="submit submit-auto-width" type="submit">Track</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header">
                                                                <h3 className="mb-0">Billing Address</h3>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    
                                                                </address>
                                                                <p>New York</p>
                                                                <a href="#" className="btn-small">Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="mb-0">Shipping Address</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    4299 Express Lane<br />
                                                                    Sarasota, <br />FL 34249 USA <br />Phone: 1.941.227.4444
                                                                </address>
                                                                <p>Sarasota</p>
                                                                <a href="#" className="btn-small">Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                             <div className={activeIndex === 6 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4 className="mb-0">Become A Seller!</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <SellerScreen />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>Account Details</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>Already have an account? <Link href="/page-login"><a>Log in instead!</a></Link></p>
                                                        <form method="post" name="enq">
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <label>First Name <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="name" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label>Last Name <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="phone" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Display Name <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="dname" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Email Address <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="email" type="email" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Current Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="password" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>New Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="npassword" type="password" />
                                                                </div>
                                                                       
                                                                   <div className="form-group col-md-12">
                                                                    <label>Confirm Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="cpassword" type="password" />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Save Change</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
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

export default Account;
