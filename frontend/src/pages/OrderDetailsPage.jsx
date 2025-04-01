import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import {fetchOrderDetails} from "../redux/slices/orderSlice"
const OrderDetailsPage = () => {
    const { id } = useParams();
   const dispatch = useDispatch();
   const {OrderDetails, loading, error} = useSelector((state) => state.orders);

   useEffect(() => {
    dispatch(fetchOrderDetails(id));
   }, [dispatch, id]);

   if(loading) return <p>Loading ...</p>
   if(error) return <p>Error: {error}</p>



    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6 '>
            <h2 className='text-2xl md:text-3xl font-bold mb-6 '>Order Details</h2>
            {!OrderDetails ? (<p>No Order details found</p>) : (
                <div className='p-4 sm:p-6 rounded-lg border'>
                    {/* Order Info */}
                    <div className='flex flex-col sm:flex-row justify-between mb-8'>
                        <div>
                            <h3 className='text-lg md:text-xl font-semibold'>
                                Order ID: #{OrderDetails._id}
                            </h3>
                            <p className='text-gray-600'>{new Date(OrderDetails.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className='flex flex-col items-start sm:items-end mt-4 sm:mt-0'><span className={`${OrderDetails.isPaid ? "bg-green-200 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{OrderDetails.isPaid ? "Approved" : "Pending"}</span>
                            <span className={`${OrderDetails.isDelivered ? "bg-green-200 text-green-700" : "bg-yellow-100 text-yellow-600"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{OrderDetails.isDelivered ? "Delivered" : "Pending Delivery"}</span>
                        </div>
                    </div>
                    {/* Customer, Payment, Shipping Info */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8'>
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>
                                Payment Info
                            </h4>
                            <p>Payment Method: {OrderDetails.paymentMethod}</p>
                            <p>Status: {OrderDetails.isPaid ? "Paid" : "Unpaid"}</p>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>
                                Shipping Info
                            </h4>
                            <p>Shipping Method: {OrderDetails.shippingMethod}</p>
                            <p>Address: {`${OrderDetails.shippingAddress.city}, ${OrderDetails.shippingAddress.country}`}</p>
                        </div>
                    </div>
                    {/* Product List */}
                    <div className='overflow-x-auto'>
                        <h4 className='text-lg font-semibold mb-4'>Products</h4>
                        <table className='min-w-full text-gray-600 mb-4'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th className='py-2 px-4'>Name</th>
                                    <th className='py-2 px-4'>Unit Price</th>
                                    <th className='py-2 px-4'>Quantity</th>
                                    <th className='py-2 px-4'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {OrderDetails.orderItems.map((item) =>(
                                <tr key={item.productId} className='broder-b'>
                                    <td className='py-2 px-4 flex items-center'>
                                        <img src={item.image} alt={item.name} className='w-12 h-12 object-cover rounded-lg mr-4' />
                                        <Link to={`/product/${item.productId}`}
                                        className='text-blue500 hover:underline'>
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td className='py-2 px-4 '>${item.price}</td>
                                    <td className='py-2 px-4 '>{item.quantity}</td>
                                    <td className='py-2 px-4 '>${item.price * item.quantity}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Back to Order Link */}
                    <Link to="/my-orders" className='text-blue-500 hover:underline'>Back to My Orders</Link>
                </div>
            )}
        </div>
    )
}

export default OrderDetailsPage