import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Service;