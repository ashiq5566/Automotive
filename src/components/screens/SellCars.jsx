import React from 'react'
import styled from 'styled-components';
import CarCard from '../includes/sell/CarCard';
import GraphCard from '../includes/sell/GraphCard';


const SellCars = () => {
  return (
    <Main>
      <SellContainer>
        <CarCard />
		<GraphCard />
      </SellContainer>
      <OfferContainer></OfferContainer>
    </Main>
  )
}

export default SellCars

const SellContainer = styled.div`
	display: flex;
	gap: 27px;
`;
const OfferContainer = styled.div``;
const Main = styled.div``;