import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contextApi/AuthProvider/AuthProvider';
import axios from 'axios';
import ReviewsTable from './ReviewsTable';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';



const MyReviews = () => {
    const [reviews, setReview] = useState([]);
    const { user } = useContext(AuthContext);
    useTitle('My Review');
    
    //console.log(user.email)
    useEffect(() => {
        if (user.email === null) {
            return <div>loading</div>
        }
        else {
            const email = user.email;
            const url = `http://localhost:5000/user_reviews?email=${email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setReview(data))
        }
    }, [user?.email])

    console.log(reviews);
    //const [displayReview, setDisplayReview] = useState(reviews);
    //console.log(displayReview);
    const handleDelete = (review) => {
        const agree = window.confirm(`Are you sure you want to delete: ${review._id}`);
        //console.log(displayReview);
        if (agree) {
            // console.log('deleting user with id: ', user._id)
            fetch(`http://localhost:5000/reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingReview = reviews
                            .filter(rev => rev._id !== review._id);
                        setReview(remainingReview);
                    }
                });
        }
    }
    const handleEdit = (event) => {
        event.preventDefault();
        console.log("ok");
    }
    return (
        <div>
            <h2>{reviews.length}</h2>
            {
                reviews.map(review => <div key={review._id} className="m-24 border-2 p-10">
                    <h2>All the reviews submitted by - {review.user_displayName}</h2>
                    <div>
                        <h2>Review on Service: {review.serviceName}</h2>
                        <p>Review: {review.review_text}</p>
                    </div>
                    <Link to={`/updateReview/${review._id}`}><button className='btn btn-primary mx-2'>Edit</button></Link> 
                    <button className='btn btn-danger' onClick={() => handleDelete(review)}>Delete</button>
                </div>)
            }

        </div>
    );
};

export default MyReviews;