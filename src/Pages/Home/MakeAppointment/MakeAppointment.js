import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import apointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';



const MakeAppointment = () => {
    return (
        <section className=''
            style={{
            background:(`url(${apointment})`)
        }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="lg:w-1/3 hidden lg:block -mt-32 rounded-lg shadow-2xl" />
                    <div className='w-1/2 ml-5 mx-auto'>
                        <small className='text-primary font-bold'>Appointment</small>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;