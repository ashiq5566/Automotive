import {React, useState} from 'react'
import styled from 'styled-components'
import Light from '/icons/light.svg'
import RotateArrow from '/icons/rotate-arrow.svg'
import Loop from '/icons/loop.svg'
import Star from '/icons/star.svg'
import Tunder from '/icons/tunder.svg'

import 'react-circular-progressbar/dist/styles.css';
import Cruze from '../../assets/images/car.png'



const RecommendCard = ({ item = {} }) => {
    return (
        <Container bg={item.background_color}>
            <Top>
                <img className='rotate_arrow' src={RotateArrow} alt='icon' />
                <h3 className='recommend'>{item.percentage}% Recommended</h3>
            </Top>
            <Car>
                <img src={item.image} alt='car' />
            </Car>
            <Title>{item.title}</Title>
            <Bottom>
                <Left>
                    <img className="loop" src={Loop} alt='icon' />
                    <span className='likes'>{item.likes}</span>
                    <img className='star' src={Star} alt='icon' />
                    <img className='tunder' src={Tunder} alt='icon' />
                </Left>
                <span className='amount'>${item.amount}/h</span>
            </Bottom>

        </Container>
    )
}

export default RecommendCard

const Container = styled.div`
    padding: 15px 27px;
    background-color: ${({bg}) => bg};
    width: calc(29% - 29px);
    border-radius: 14px;

`;
const Top = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    .recommend{
        font-size: 16px;
    }
    .rotate_arrow{
        height: 24px;
        width: 24px;
    }
`;
const Car = styled.div``;
const Title = styled.h2`
    font-size: 20px;
`;
const Bottom = styled.div`
    display: flex;
    gap: 105px;
`;
const Left = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    .loop{
        height: 20px;
        width: 20px;
    }
    .star{
        height: 16px;
        width: 16px;
    }
    .tunder{
        height: 16px;
        width: 16px;
    }
`;