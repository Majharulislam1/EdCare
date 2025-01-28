import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { AuthContext } from './Authentication';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ session }) => {

    const { reg_fee } = session;

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);


    const navigate = useNavigate();


    useEffect(() => {
        if (parseInt(reg_fee) > 0) {
            axiosPublic.post('/create-payment-intent', { price: reg_fee })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosPublic, reg_fee])



    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            setError(error.message);
        } else {

            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            setError('confirm error')
        }
        else {
            if (paymentIntent.status === 'succeeded') {


                const value = {
                    student_email: user.email,
                    session_id: session._id,
                    tutor_email: session.tutor_email,
                    tutor_name: session.tutor_name,
                    classEnd: session.classEnd,
                    classStart: session.classStart,
                    reg_end_date: session.reg_end_date,
                    reg_start_date: session.reg_start_date,
                    description: session.description,
                    reg_fee: session.reg_fee,
                    session_duration: session.session_duration,
                    session_title: session.session_title,
                    cover_img: session.cover_img

                };

                axiosPublic.post('/booked_session', value)
                    .then(res => {

                        if (res.data.insertedId) {

                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Booked Session",
                                showConfirmButton: false,
                                timer: 2000
                            });

                            navigate('/dashboard/view_booked_session');

                        }
                    })




            }
        }


    };

    return (
        <div className='h-screen  flex   justify-center items-center '>

            <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md bg-white">
                <div className="mb-4">
                    <label htmlFor="card-element" className="block text-sm font-medium text-gray-700 mb-2">
                        Card Details
                    </label>
                    <div
                        id="card-element"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition"
                    >
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-primary px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition disabled:opacity-50"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
                <p className='text-red-600'>{error}</p>
            </form>


        </div>
    );
};

export default CheckoutForm;