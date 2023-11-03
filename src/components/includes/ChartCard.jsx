import {React, useRef, useEffect} from 'react'
import styled from "styled-components";
import Chart from 'chart.js/auto';


const ChartCard = ({ detail = {} }) => {
	const chartRef = useRef(null);
	let myChart = null; // Store chart instance
  
	useEffect(() => {
	  if (chartRef.current) {
		const ctx = chartRef.current.getContext('2d');
  
		// Destroy the previous chart instance if it exists
		if (myChart) {
		  myChart.destroy();
		}
  
		myChart = new Chart(ctx, {
		  type: detail.type, // Change this to the chart type you want
		  data: {
			labels: ['1 PM', '2 PM', '3PM', '4PM', '5PM', '6PM', '7PM'],
			datasets: [
			  {
				label: 'Chart Data',
				data: [10, 20, 30, 40, 50, 5, 25], 
				backgroundColor: detail.color, 
				borderColor: detail.borderColor, 
				borderWidth: 1, 
			  },
			],
		  },
		});
	  }
	}, []);

  return (
    <Container bg={detail.background_color}>
        <Title>
          {detail.title}
        </Title>
		<canvas ref={chartRef}></canvas>
    </Container>
  )
}

export default ChartCard

const Container = styled.div`
  display: flex;
  padding: 15px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  flex-direction: column;
  width: calc(50% - 20px);
  background: ${({bg}) => bg};
  box-sizing: border-box;
  height: 332px;
`;

const Title = styled.h3``;