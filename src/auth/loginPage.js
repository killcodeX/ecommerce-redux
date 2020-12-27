import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginPage() {
    const {loginWithRedirect} = useAuth0();
    return (
        <section className='section height-100'>
            <div className='container error-pa'>
                <img src="/login.svg" alt='ecommerce user' className='pb-4' style={{width:'40%'}}/>
                <button className='btn btn-buy' onClick={loginWithRedirect}>Login / Signup</button>
            </div>
        </section>
    )
}
