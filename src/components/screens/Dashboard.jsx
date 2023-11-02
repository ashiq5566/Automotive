import React from 'react'
import styled from 'styled-components'
import Card from '../includes/Card'
import RangeCard from '../includes/RangeCard'


const Dashboard = () => {
  const progresses = [
    {
      id : 1,
      image : "/icons/light.svg",
      title : "Energy",
      percentage : 45,
      background_color : "#A162F7",
      percentage_color : "#fff",
      title_color : "#fff",
      path_color: "#fff",
      rail_color : "#B37EFC"
    },
    {
      id : 2,
      image : "/icons/arrow.svg",
      title : "Range",
      percentage : 65,
      background_color : "#fff",
      percentage_color : "#000",
      title_color : "#000",
      path_color: "#FF7E86",
      rail_color : "#F4F5F9"
    },
    {
      id : 3,
      image : "/icons/water.svg",
      title : "Break Fluid",
      percentage : 75,
      background_color : "#fff",
      percentage_color : "#000",
      title_color : "#000",
      path_color: "#A162F7",
      rail_color : "#F4F5F9",
    },
    {
      id : 4,
      image : "/icons/tyre.svg",
      title : "Tyre Wear",
      percentage : 85,
      background_color : "#fff",
      percentage_color : "#000",
      title_color : "#000",
      path_color: "#F6CC0D",
      rail_color : "#F4F5F9"
    },
  ]
  return (
    <Container>
    {progresses.map((value) => (
      <Card key={value.id} progress={value}/>
    ))}
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;