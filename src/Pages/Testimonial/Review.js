import React from 'react';

const Review = ({ revie }) => {
    const { name, img, review, location } = revie;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{ review}</p>
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;