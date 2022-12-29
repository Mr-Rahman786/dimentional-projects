import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);


    const { data: appointmentOptions,isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () =>
            fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    })
    return (
        <section>
            <h2 className='text-center font-bold'>Available Services on {format(selectedDate, 'PP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                        selectedDate={selectedDate}
                    treatment={treatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;