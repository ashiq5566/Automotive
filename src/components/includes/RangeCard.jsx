import {React, useState} from 'react'
import styled from 'styled-components'
import Light from '/icons/light.svg'
import Arrow from '/icons/arrow.svg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from '../small/ProgressProvider';

const RangeCard = () => {
    const [valueEnd, setValueEnd] = useState(55);
    return (
        <Container>
            <Image>
                <img className="arrow" src={Arrow} alt='arrow' />
            </Image>
            <Title>
                Range
            </Title>
            <Bottom>
				<ProgressProvider valueStart={0} valueEnd={valueEnd} duration={0.5}>
					{value => <Progress value={value} text={`${value}%`} />}
				</ProgressProvider>
            </Bottom>
        </Container>
    )
}

export default RangeCard

const Container = styled.div`
    display: inline-flex;
    height: 266px;
    padding: 20px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 14px;
    flex-direction: column;
    background-color: #fff;

`;
const Image = styled.div`
	padding: 9px;
	background-color: rgba(255, 126, 134, 0.10);
	border-radius: 50%;
	height: 38px;
	width: 38px;
	display: flex;
	justify-content: center;

	.arrow{
    }

`;

const Title = styled.h2`
    font-size: 24px;
    margin-top: 10px;
    color: #000;
    margin-bottom: 30px;
`;

const Bottom = styled.div`

    width: 112px;
    height: 112px;
`;

const Progress = styled(CircularProgressbar)`
    .CircularProgressbar-path {
        stroke: #FF7E86;
    }

    .CircularProgressbar-text {
        fill: #000;
        font-size: 24px;
        font-weight: bold;  
    }

    .CircularProgressbar-trail {
        stroke: #F4F5F9;
    }

    
`;