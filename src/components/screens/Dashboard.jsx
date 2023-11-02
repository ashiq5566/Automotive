import React from 'react'
import styled from 'styled-components'
import Card from '../includes/Card'
import RangeCard from '../includes/RangeCard'

const Dashboard = () => {
  return (
    <Container>
      <Card />
      <RangeCard />
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;