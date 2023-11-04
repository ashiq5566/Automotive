import {React, useEffect, useRef} from 'react'
import styled from 'styled-components';
import Chart from 'chart.js/auto';


const GraphCard = () => {
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
		  type: 'bar', // Change this to the chart type you want
		  data: {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			datasets: [
			  {
				label: 'Chart Data',
				data: [10, 20, 30, 40, 50, 5, 100], 
				backgroundColor: "#FF6370", 
				borderColor: "none", 
				borderWidth: 0,
                borderRadius: 25
			  },
			],
		  },
          options: {
            responsive: true, // Make the chart responsive to container size
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            },
          },
		});
	  }
	}, []);
    return (
        <Main>
            <h2 className='title'>Tracking History</h2>
            <canvas ref={chartRef}></canvas>
        </Main>
    )
}

export default GraphCard

const Main = styled.div`
	background-color: #fff;
	padding: 25px 43px;
    width: calc(30% - 27px);
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .title{
		margin: 0;
	}
`;