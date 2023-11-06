import React from 'react'
import styled from 'styled-components'
import ServiceCard from '../includes/services/ServiceCard'

const Services = () => {
    
    const services = [
		{
            id : 1,
            image : "/icons/services/car_service.svg",
            type : "periodic",
            title : "Car Service",
		},
        {
            id : 2,
            image : "/icons/services/tyre.svg",
            type : "tyre",
            title : "Tyres and Wheel care",
        },
        {
            id : 3,
            image : "/icons/services/painting.svg",
            type : "painting",
            title : "Denting and Painting",
        },
        {
            id : 4,
            image : "/icons/services/ac.svg",
            type : "ac",
            title : "AC Service Repair",
        },
        {
            id : 5,
            image : "/icons/services/spa.svg",
            type : "spa",
            title : "Car Spa and Cleaning",
        },
        {
            id : 6,
            image : "/icons/services/battery.svg",
            type : "battery",
            title : "Batteries",
        },
        {
            id : 7,
            image : "/icons/services/insurance.svg",
            type : "insurance",
            title : "Insurance Claims",
        },
        {
            id : 8,
            image : "/icons/services/light.svg",
            type : "light",
            title : "Windshield Lights",
        },
        {
            id : 9,
            image : "/icons/services/breake.svg",
            type : "break",
            title : "Clutch and Break",
        },
        {
            id : 10,
            image : "/icons/services/dry.svg",
            type : "dry",
            title : "Dry Clean",
        },
        {
            id : 11,
            image : "/icons/services/wash.svg",
            type : "wash",
            title : "Car Wash",
        },
        {
            id : 12,
            image : "/icons/services/oiling.svg",
            type : "oiling",
            title : "Oiling",
        },
	]

    return (
        <Main>
            {services.map((value) => (
                <ServiceCard key={value.id} item={value}/>
            ))}
        </Main>
    )
}

export default Services

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
`;