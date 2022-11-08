import React, { useState } from 'react';

const AddService = () => {

    const [service, setService] = useState({});
    const handleAddService = (event) => {
        event.preventDefault();
        //console.log(service);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("Succesfully store in Database");
                event.target.reset();
            }
        })
        .catch(error => console.error(error))
    }

    const handleInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newService = {...service};
        newService[field] = value;
        setService(newService);
    }

    return (
        <div className='max-w-screen-md mx-auto p-5'>
            <h2 className='text-center font-bold text-4xl my-10'>Add Servce</h2>
            <form className="w-full" onSubmit={handleAddService}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Service Name
                        </label>
                        <input onChange={handleInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" name='name' type="text" placeholder="Type service name" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="service-rating">
                            Service Rating
                        </label>
                        <input onChange={handleInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="service-rating" name='rating' type="text" placeholder="Enter the Service Rating" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input onChange={handleInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" name='price' type="text" placeholder="Enter the Service Price" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label onChange={handleInput} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="photo">
                            Photo URL
                        </label>
                        <input onChange={handleInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="photo" name="photo" type="text" placeholder="PhotoUrl" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label onChange={handleInput} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea rows="10" onChange={handleInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='description'>
                        </textarea>
                    </div>
                    <div className="flex justify-between w-full px-3">
                        <div className="md:flex md:items-center">
                            <label className="block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">
                                    Confirm
                                </span>
                            </label>
                        </div>
                        <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                            Send Message
                        </button>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default AddService;