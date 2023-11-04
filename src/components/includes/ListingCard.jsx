import React from 'react'
import styled from 'styled-components'
import People from '/icons/people.svg'
import Loop from '/icons/loop.svg'
import Like from '/icons/like.svg'
import Audi from '../../assets/images/audi-a3.png'
import { ReactSVG } from 'react-svg'




const ListingCard = ({ item = {} }) => {
  return (
    <Container>
        <Top isFavorite={item.favorite}>
            <Title>{item.title}</Title>
            <ReactSVG
                className='like'
                src={Like}
                alt='icon'
            />
        </Top>
        <span className='segment'>{item.segment}</span>
        <Car>
            <img src={item.image} alt='car' />
        </Car>
        <Bottom>
            <Left>
                <ReactSVG className="people" src={People} alt='icon' />
                <span className='count'>{item.count}</span>
                <ReactSVG className='loop' src={Loop} alt='icon' />
                <span className='transmission'>{item.transmission}</span>
            </Left>
            <span className='amount'>${item.amount}<small className='small'>/d</small></span>
        </Bottom>

    </Container>
  )
}

export default ListingCard


const Container = styled.div`
    padding: 24px;
    background-color: #fff;
    width: calc(29% - 29px);
    border-radius: 14px;
	overflow: hidden;

    .segment{
        margin-top: 4px;
        font-size: 16px;
        color: #72767C;
    }

`;
const Top = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    .like{
        height: 24px;
        width: 24px;
        path {
            stroke: ${(props) => (props.isFavorite ? 'none' : '#A162F7')};
            fill: ${(props) => (props.isFavorite ? '#F84F56' : 'none')};
        } 
    }
`;
const Car = styled.div`
    margin: 21px 0px;
    display: flex;
    justify-content: center;
`;
const Title = styled.h2`
    font-size: 18px;
    margin: 0;
    font-weight: 700;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    .amount{
        font-size: 18px;
        font-weight: bold;
    }
    .small{
        color: #72767C;
        font-weight: lighter;
    }
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    .loop{
        height: 20px;
        width: 20px;
        margin-right: 5px;
        path{
            stroke: #A162F7;
        }
    }
    .people{
        height: 20px;
        width: 20px;
        margin-right: 4px;
    }
    .count{
        margin-right: 18px;
        color: #72767C;
    }
    .transmission{
        color: #72767C;
    }
`;