import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faGlobe, faPhoneFlip, faTrophy } from '@fortawesome/free-solid-svg-icons';


const WhyChooseUs = () => {
    return (
        <div className='m-20'>
            <h1 className='font-bold text-6xl text-center mt-12'>Why Choose Us</h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-8 mt-6 p-5'>
                <div className='border-2 p-3 flex flex-col shadow-lg shadow-orange-500/30 hover:border-orange-800'>
                    <FontAwesomeIcon icon={faDisplay} className="text-warning fa-3x icon my-5" />
                    <h1 className='text-2xl font-bold text-center my-2'>Ultimate flexibility</h1>
                    <p className='text-center'>You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                </div>
                <div className='border-2 p-3 flex flex-col shadow-lg shadow-orange-500/30 hover:border-orange-800'>
                    <FontAwesomeIcon icon={faGlobe} className="text-warning fa-3x icon my-5" />
                    <h1 className='text-2xl font-bold text-center my-2'>Memorable experiences</h1>
                    <p className='text-center'>Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                </div>
                <div className='border-2 p-3 flex flex-col shadow-lg shadow-orange-500/30 hover:border-orange-800'>
                    <FontAwesomeIcon icon={faTrophy} className="text-warning fa-3x icon my-5" />
                    <h1 className='text-3xl font-bold text-center my-2'>Quality at our core</h1>
                    <p className='text-center'>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                </div>
                <div className='border-2 p-3 flex flex-col shadow-lg shadow-orange-500/30 hover:border-orange-800'>
                    <FontAwesomeIcon icon={faPhoneFlip} className="text-warning fa-3x icon my-5" />
                    <h1 className='text-3xl font-bold text-center my-2'>Award-winning support</h1>
                    <p className='text-center'>New price? New plan? No problem. We’re here to help, 24/7.</p>
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUs;