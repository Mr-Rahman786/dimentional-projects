import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-center mt-5">
                <div className="card-body">
                    <h2 className="card text-2xl font-bold text-center">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length}{slots.length > 1 ? 'spaces' : 'space'}</p>
                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary"
                            onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;