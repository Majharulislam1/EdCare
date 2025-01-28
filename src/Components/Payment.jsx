import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { AuthContext } from './Authentication';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const {id} = useParams();
    const stripePromise = loadStripe('pk_test_51QjcgOCOpFZSKvwEUU1RfdvkSHDKxWddqu5tNYI69Y4wTWNForkeUrIPhe0fvRmoTb1s2kMAJsTDChJYeZbe9J4c00AEZPvpLR');
 

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { isPending, data: priceCount = [], } = useQuery({
        queryKey: ['price_count', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/session_details/${id}`);
            return res.data;
        }
    })

    if (isPending) return <p>Loading</p>;

     


    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm  session={priceCount}  />
        </Elements>
    );
};

export default Payment;