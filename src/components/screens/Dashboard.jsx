import React from 'react'
import styled from 'styled-components'
import Card from '../includes/Card'
import RangeCard from '../includes/RecommendCard'
import ChartCard from '../includes/ChartCard'
import RecommendCard from '../includes/RecommendCard'
import Cruze from "../../assets/images/car.png"
import Swift from "../../assets/images/swift.png"
import Mini from "../../assets/images/mini.png"



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

  const chart_details = [
    {
      id : 1,
      title : "Miles Statistics",
      background_color : "#fff",
	  type: 'bar',
	  color : '#2884FF',
	  borderColor : '2884FF'
    },
    {
      id : 2,
      title : "Car Statistics",
      background_color : "#fff",
	  type : 'line',
	  color : '#FF764C',
	  borderColor : '#FF764C'

    },
  ]

  const recommend_data = [
    {
		id : 1,
		title : "Suzuki Swift",
		background_color : "#E3ECF1",
		percentage : "74",
		likes : "152K",
		amount : "52",
		image : Swift
      
    },
    {
		id : 2,
		title : "Chevorlet Cruze",
		background_color : "#E1DFA4",
		percentage : "64",
		likes : "142K",
		amount : "42",
		image : Cruze
	  },
	  {
		id : 3,
		title : "Mini Cooper",
		background_color : "#F4E3E5",
		percentage : "84",
		likes : "162K",
		amount : "62",
		image : Mini
	  },
  ]

  return (
    <Main>
      <Container>
		{progresses.map((value) => (
			<Card key={value.id} progress={value}/>
		))}
		</Container>
      <ChartContainer>
		{chart_details.map((value) => (
			<ChartCard key={value.id} detail={value} />
		))}
      </ChartContainer>
	  <RecommendationCard>
		{recommend_data.map((value) => (
			<RecommendCard key={value.id} item={value} />
		))}
	  </RecommendationCard>
    </Main>
  )
}

export default Dashboard

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
const Main = styled.div`
`;

const ChartContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-top:18px;
`;
const RecommendationCard = styled.div`
	margin-top:18px;
	display: flex;
	gap: 29px;
`;