import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import ReactStars from 'react-stars';

const Reviews = ({review}) => {
    return (
        <div>
            <div className='border-2 border-orange-500 rounded-xl m-24 p-10 flex flex-row gap-10 '>
                {
                    review?.user_photo ?
                    <img src={review.user_photo} alt="user_pic"/>
                    : <FontAwesomeIcon icon={faUserAlt} className="text-warning fa-2x icon mx-3 rounded" />
                }
                <div>
                    <h2>{review.user_displayName}</h2>
                    <ReactStars
                        count={5}
                        size={24}
                        value={review.review_rating}
                        color2={'#FFA500'} />
                    <p>{review.review_text}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;