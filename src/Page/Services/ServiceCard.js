import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const { name, photo, rating, price, description, _id } = service
    return (
        <div className="row mt-5 container mx-auto">

            <div className="preview-card">
                <div className="preview-card__wrp">
                    <div className="preview-card__item">
                        <div className="preview-card__img">
                            <img src={photo} alt="" />
                        </div>
                        <div className="preview-card__content">
                            <div className="preview-card__title">{name}</div>
                            {description.length > 200 ?
                                <p>{description.slice(0, 200) + '....'} </p>
                                : <p>details</p>}
                            <Link to={`/service/${_id}`} className="preview-card__button">Read More</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ServiceCard;