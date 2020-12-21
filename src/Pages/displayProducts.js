import React from 'react';
import data from '../mockProducts';
import {Product} from '../components';

export default function displayProducts() {
    return (
        <section className='section'>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((d,i) => {
                            return <Product data={d} key={i} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
