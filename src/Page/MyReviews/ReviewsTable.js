import React from 'react';

const ReviewsTable = (review) => {
    console.log({review});
    return (
        <div>
            <h2>All the reviews submitted by - {review.user_displayName}</h2>
            <div>
                <h2>Review on :</h2>
                <p>{review.review_text}</p>
            </div>
        </div>
    );
};

export default ReviewsTable;