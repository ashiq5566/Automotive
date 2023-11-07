import React from 'react'
import { styled } from 'styled-components'
import Basic from '../../../assets/images/basic.png'
import { Link } from 'react-router-dom';

const PeriodicService = ({ item = {} }) => {
  return (
    <Main to={item.link}>
        <Left>
            <h3 className='title'>{item.title}</h3>
            <ul className='list'>
                {item.features.map((feature, i) => (
                    <li key={i}  className='item'>{feature.title}</li>
                ))}
            </ul>
            <h5 className='amount'>Rs.{item.amount}/-</h5>
        </Left>
        <Right>
            <img src={item.image} alt='image' />
            <Button>ADD</Button>
        </Right>
    </Main>
  )
}

export default PeriodicService


const Main = styled(Link)`
	width: calc(31% - 10px);
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px;
	border-radius: 8px;
`;
const Left = styled.div`
	.title{
		margin: 0;
        color: #474747;
	}
	.list{
		margin: 0;
        color: #474747;
	}
	.amount{
		margin: 0;
        color: #474747;
	}
`;
const Right = styled.div``;
const Button = styled.div`
	border: 2px solid #304FFE;
    border-radius: 8px;
    text-align: center;
    padding: 5px 20px;
	cursor: pointer;
	font-weight: 700;

`;