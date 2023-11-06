import React,{useState} from 'react'
import styled from 'styled-components'
import Card from '../includes/dashboard/Card'
import RangeCard from '../includes/dashboard/RecommendCard'
import ChartCard from '../includes/dashboard/ChartCard'
import Cruze from "../../assets/images/car.png"
import Swift from "../../assets/images/swift.png"
import Mini from "../../assets/images/mini.png"
import RecommendCard from '../includes/dashboard/RecommendCard'
import Banner1 from '../../assets/images/banner1.jpg'
import Banner2 from '../../assets/images/banner2.jpg'
import Banner3 from '../../assets/images/banner3.jpg'
import Banner4 from '../../assets/images/banner4.jpg'
import Banner5 from '../../assets/images/banner5.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



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
	const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5]; 
	const [currentSlide, setCurrentSlide] = useState(0);
	const settings = {
		infinite: true, 
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1, 
		autoplay: true,
		autoplaySpeed: 2000,
		beforeChange: (current, next) => setCurrentSlide(next),

	  };

  return (
      <Main>
		<Container>
			{progresses.map((value) => (
				<Card key={value.id} progress={value}/>
			))}
		</Container>	
        <Slider {...settings}>
			{bannerImages.map((src, index) => (
				<div key={index}>
					<BannerContainer
						style={{ backgroundImage: `url(${src})` }}
						className={index === currentSlide ? "active" : ""}
					>
					</BannerContainer>
				</div>
			))}
		</Slider>
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

const BannerContainer = styled.div`
	margin-top:18px;
	border-radius: 14px;
	width: 100%;
	border-radius: 14px;
	height: 400px;
	background-size: cover;
	background-position: center;
	opacity: 0;
	transition: opacity 0.3s ease;

	&.active {
		opacity: 1;
	}
`;
const RecommendationCard = styled.div`
	margin-top:18px;
	display: flex;
	gap: 29px;
`;