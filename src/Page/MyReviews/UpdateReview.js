import React, { useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const storeReview = useLoaderData();
    const navigate = useNavigate();
    console.log(storeReview._id);
    const [review, setReview] = useState(storeReview);
    const handleUpdateReview = event =>{
        event.preventDefault();
        console.log(review);
        fetch(`http://localhost:5000/reviews/${storeReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('user updated')
                navigate('/myreviews');
            }
            
        })
 
               
    }
    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div>
            <form onSubmit={handleUpdateReview}>
            <textarea rows="10" defaultValue={storeReview.review_text} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='review' onChange={handleInputChange}></textarea>
                <button type="submit" className='btn btn-warning'>Update Review</button>
            </form>
        </div>
    );
};

export default UpdateReview;