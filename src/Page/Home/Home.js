import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import ServiceCard from '../Services/ServiceCard';
import About from './About';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    useTitle("Home")
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <WhyChooseUs></WhyChooseUs>
            <div className='my-10 flex flex-col items-center'>
                <h2 className='text-center font-bold text-5xl'>Services</h2>
                {
                    services.slice(0, 3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                <Link to='/services'><button className='btn btn-warning font-bold mt-10'>See All</button></Link>
            </div>
        </div>
    );
};

export default Home;