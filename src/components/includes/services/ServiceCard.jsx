import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';



const ServiceCard = ({ item = {} }) => {
  return (
    <CardLink to={item.type}>
        <Main whileHover={{ scale: 1.1 }} >
        <ReactSVG src={item.image} alt="icon" />
        <Title>{item.title}</Title>
        </Main>
    </CardLink>
  )
}

export default ServiceCard

const CardLink = styled(Link)`
    background-color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 14px;
    width: 15%;
    cursor: pointer;
`
const Main = styled(motion.div)`
`;
const Title = styled.h5`
    margin: 0;
    color : #000;
`;