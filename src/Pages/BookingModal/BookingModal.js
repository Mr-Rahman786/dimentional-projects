import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date, 
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }
        console.log(booking)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={date} className="input input-bordered w-full mt-5 text-center" />
                        <select name='slot' className="select select-bordered w-full mt-5 font-bold">

                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered w-full mt-5 text-center" />
                        <input name='email' type="text" placeholder="Enter Your Email" className="input input-bordered w-full mt-5 text-center" />
                        <input name='phone' type="text" placeholder="Number" className="input input-bordered w-full mt-5 text-center" />
                        <input className='input w-full text-white' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;