import React from 'react'
import styled from 'styled-components';
import Tick from '/icons/services/tick.svg'
import { Title } from 'chart.js';

const ServiceDetails = ({type}) => {

	const taglines = [
		{
			id: 1,
			title:"4 Hrs Taken",
			image : "/icons/services/car.svg",
		},
		{
			id: 2,
			title:"1000 Kms or 1 Month Warranty",
			image : "/icons/services/assure.svg",
		},
		{
			id: 3,
			title:"Every 5000 Kms or 3 Months",
			image : "/icons/services/thumb.svg",
		},
		{
			id: 4,
			title:"Free Pick-up or Drop",
			image : "/icons/services/clock.svg",
		},
	]

	const includes = [
		{
			id: 1,
			title:"Engine Oil Replacement",
		},
		{
			id: 2,
			title:"Oil Filter Replacement",
		},
		{
			id: 3,
			title:"Air Filter Cleaning",
		},
		{
			id: 4,
			title:"Coolant Top up",
		},
		{
			id: 5,
			title:"Wiper Fluid Replacement",
		},
		{
			id: 6,
			title:"Battery Water Top up",
		},
		{
			id: 7,
			title:"Heater/Spark Plugs Checking",
		},
		{
			id: 8,
			title:"Car Wash",
		},
		{
			id: 9,
			title:"Interior Vacuuming  (Carpet & Seats)",
		},
	]

	const service_details = {
		basic : {
			details:[
				{
					id: 1,
					title:"4 Hrs Taken",
					image : "/icons/services/car.svg",
				},
				{
					id: 2,
					title:"1000 Kms or 1 Month Warranty",
					image : "/icons/services/assure.svg",
				},
				{
					id: 3,
					title:"Every 5000 Kms or 3 Months",
					image : "/icons/services/thumb.svg",
				},
				{
					id: 4,
					title:"Free Pick-up or Drop",
					image : "/icons/services/clock.svg",
				},
			],
			includes:[
				{
					id: 1,
					title:"Engine Oil Replacement",
				},
				{
					id: 2,
					title:"Oil Filter Replacement",
				},
				{
					id: 3,
					title:"Air Filter Cleaning",
				},
				{
					id: 4,
					title:"Coolant Top up",
				}
			]
		},
		standard: {
			details:[
				{
					id: 1,
					title:"5 Hrs Taken",
					image : "/icons/services/car.svg",
				},
				{
					id: 2,
					title:"5000 Kms or 1 Month Warranty",
					image : "/icons/services/assure.svg",
				},
				{
					id: 3,
					title:"Every 10000 Kms or 3 Months",
					image : "/icons/services/thumb.svg",
				},
				{
					id: 4,
					title:"Free Pick-up or Drop",
					image : "/icons/services/clock.svg",
				},
			],
			includes:[
				{
					id: 1,
					title:"Engine Oil Replacement",
				},
				{
					id: 2,
					title:"Oil Filter Replacement",
				},
				{
					id: 3,
					title:"Air Filter Cleaning",
				},
				{
					id: 4,
					title:"Coolant Top up",
				},
				{
					id: 5,
					title:"Wiper Fluid Replacement",
				},
				{
					id: 6,
					title:"Battery Water Top up",
				}
			]
		},
		comprehensive: {
			details:[
				{
					id: 1,
					title:"6 Hrs Taken",
					image : "/icons/services/car.svg",
				},
				{
					id: 2,
					title:"10000 Kms or 1 Month Warranty",
					image : "/icons/services/assure.svg",
				},
				{
					id: 3,
					title:"Every 15000 Kms or 3 Months",
					image : "/icons/services/thumb.svg",
				},
				{
					id: 4,
					title:"Free Pick-up or Drop",
					image : "/icons/services/clock.svg",
				},
			],
			includes:[
				{
					id: 1,
					title:"Engine Oil Replacement",
				},
				{
					id: 2,
					title:"Oil Filter Replacement",
				},
				{
					id: 3,
					title:"Air Filter Cleaning",
				},
				{
					id: 4,
					title:"Coolant Top up",
				},
				{
					id: 5,
					title:"Wiper Fluid Replacement",
				},
				{
					id: 6,
					title:"Battery Water Top up",
				},
				{
					id: 7,
					title:"Heater/Spark Plugs Checking",
				},
				{
					id: 8,
					title:"Car Wash",
				},
				{
					id: 9,
					title:"Interior Vacuuming  (Carpet & Seats)",
				},
			]
		}
	}

	const current_service = type in service_details && service_details[type]

  return (
    <Main>
	{current_service?.details?.map((value) => (
		<Container key={value.id}>
			<img className='image' src={value.image} alt='icon' />
			<p className='taglines'>{value.title}</p>
        </Container>
	))}
	<hr />

	<Heading>What’s included?</Heading>
	{current_service?.includes?.map((value) => (
		<Container key={value.id}>
			<img className='image' src={Tick} alt='icon' />
			<p className='includes'>{value.title}</p>
		</Container>
	))}
    </Main>
  )
}

export default ServiceDetails

const Main = styled.div`
	.includes{
		font-weight: 500;
		margin: 0px 0px 0px 8px;
	}
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;

	.taglines{
		margin: 0px 0px 0px 8px;
		font-weight: 700;
	}
	.image{
		height: 20px;
		width: 20px;
	}
`;
const Heading = styled.h3`
	margin : 0px 0px 20px 0px;
`;
