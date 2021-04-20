import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'secondary'
    },
    {
        title: 'Visit Our Location',
        description: '10, North Komolapur, Komolapur, Dhaka',
        icon: faMapMarker,
        background: 'primary'
    },
    {
        title: 'Call us now',
        description: '01521564987',
        icon: faPhone,
        background: 'success'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;