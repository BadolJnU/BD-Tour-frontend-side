import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReactStars from 'react-stars';
import { AuthContext } from '../../contextApi/AuthProvider/AuthProvider';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
    const [user_review, setReview] = useState([]);
    const { user } = useContext(AuthContext);
    const { name, photo, description, _id, rating, price } = useLoaderData();
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const review_text = form.review.value;
        const review_rating = form.rating.value;
        const user_email = user.email;
        const user_photo = user.photoURL;
        const user_displayName = user.displayName;
        const serviceId = _id;
        const review = {review_text, 
            review_rating, 
            user_email, 
            user_displayName, 
            user_photo,
            serviceId};
        console.log(review);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("Succesfully Submitted Review");
                event.target.reset();
            }
        })
        .catch(error => console.error(error))
    }
    const url = `http://localhost:5000/reviews?serviceId=${_id}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    //console.log(user_review[0].review_text)
    return (
        <div>
            <div className='m-10'>
                <PhotoProvider>
                    <PhotoView src={photo}>
                        <img src={photo} alt="" style={{ height: "500px", width: "1200px", margin: "0 auto", borderRadius: "10px" }} />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='m-10 md:m-24'>
                <h2 className='text-center font-bold text-4xl'>{name}</h2>
                <div className='flex items-center'>
                    <h5 className='font-bold'>Rating: </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={rating}
                        color2={'#FFA500'} />
                </div>
                <h5 className='font-bold'>Package Price: <span className='font-semibold'>{price}</span></h5>
                <p className='text-justify'>{description}</p>
            </div>
            <h2 className='text-center font-bold text-4xl'>Reviews</h2>
            <div>
            {
                user_review.map(review => <Reviews
                review={review}></Reviews>)
            }
            </div>
            <div className='m-24'>
                {
                    user?.uid ?
                        <>
                            <form className="w-full" onSubmit={handleForm}>


                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                            Review
                                        </label>
                                        <textarea rows="10" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='review'>
                                        </textarea>
                                    </div>
                                    <div className="flex justify-between w-full px-3">
                                        <input type="text" name="rating" id="" placeholder='rating' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'/>
                                    </div>
                                    <div className="flex justify-between w-full px-3">
                                        <button className="shadow bg-orange-600 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                            Submit
                                        </button>
                                    </div>

                                </div>

                            </form>
                        </>
                        :
                        <><h2 className='text-red-700 font-bold text-2xl text-center my-16'>"To give your review, login first"</h2></>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;