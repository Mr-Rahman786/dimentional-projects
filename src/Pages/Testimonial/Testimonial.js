import React from 'react';
import quaote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import Review from './Review';


const Testimonial = () => {


    const reviews = [
        {
            _id: 1,
            name: 'winson harrey',
            img:person1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California'
        },
        {
            _id: 2,
            name: 'winson harrey',
            img:person3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California'
        },
        {
            _id: 3,
            name: 'winson harrey',
            img:person3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California'
        },
    ]

    return (

        <section className=' mx-auto'>

            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl">Testimonial</h4>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quaote} alt="" />
                </figure>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    reviews.map(revie => <Review
                        key={revie._id}
                        revie={revie}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;