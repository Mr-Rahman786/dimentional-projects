import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name ,slots} = treatment;
    const date = format(selectedDate, 'PP')
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form>
                        <input type="text" disabled value={date} className="input input-bordered w-full mt-5 text-center" />
                        <select className="select select-bordered w-full mt-5">
                            
                            {
                                slots.map(slot => <option value={slot}>{ slot}</option>)
                            }
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 text-center" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 text-center" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mt-5 text-center" />
                        <input className='w-full text-white' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;