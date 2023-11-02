import {React, useState} from 'react'
import styled from 'styled-components'
import Light from '/icons/light.svg'
import Eclips from '/icons/eclips.svg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from '../small/ProgressProvider';

const Card = () => {
	const [valueEnd, setValueEnd] = useState(75);
    return (
        <Container>
            <Image>
				<img className="light" src={Light} alt='light' />
			</Image>
            <Title>
                Energy
            </Title>
            <Bottom>
				<ProgressProvider valueStart={0} valueEnd={valueEnd} duration={0.5}>
					{value => <Progress value={value} text={`${value}%`} />}
				</ProgressProvider>
                
            </Bottom>
        </Container>
    )
}

export default Card

const Container = styled.div`
    display: inline-flex;
    height: 266px;
    padding: 20px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 14px;
    background: var(--primary-purple, #A162F7);
    flex-direction: column;

`;
const Image = styled.div`
	padding: 9px;
	background-color: #A66FF0;
	border-radius: 50%;
	height: 38px;
	width: 38px;
	display: flex;
	justify-content: center;

	.light{
		
	}

`;

const Title = styled.h2`
    font-size: 24px;
    margin-top: 10px;
    color: #fff;
    margin-bottom: 30px;
`;

const Bottom = styled.div`

    width: 112px;
    height: 112px;
`;

const Progress = styled(CircularProgressbar)`
    .CircularProgressbar-path {
        stroke: #fff;
    }

    .CircularProgressbar-text {
        fill: #fff;
        font-size: 24px;
        font-weight: bold;  
    }

    .CircularProgressbar-trail {
        stroke: #B37EFC;
    }

    
`;