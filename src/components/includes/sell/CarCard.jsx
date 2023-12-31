import React,{useEffect} from 'react'
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
import Top from '/icons/top.svg'
import Middle from '/icons/middle.svg'
import Bottom from '/icons/bottom.svg'
import Audi from '../../../assets/images/audi-a6.png'
import 'react-circular-progressbar/dist/styles.css';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';



const CarCard = () => {

	const titleAnimation = {
		hidden: { opacity: 0, x: -100,zIndex: 10 }, // Start from the left (-100px)
		visible: { opacity: 1, x: 0, transition: { duration: 2.0 } }, // Move to the center (0px)
	  };
	
	const [ref, inView] = useInView({
	triggerOnce: true,
	});

	useEffect(() => {
	if (inView) {
		controls.start('visible',{
		type:"spring"
		});
	}
	}, [inView]);
	
	  const controls = useAnimation();

	return (
		<Main>
			<h2 className='title'>2022 Audi A6</h2>
			<Container>
				<motion.div ref={ref} initial="hidden" animate={controls} variants={titleAnimation}
					transition={{
						type:"spring",
						duration:0.4,
						stiffness: 100,
						damping: 10
					}}
					whileInView="visible"
				>
					<img className="car" src={Audi} alt='image' />
				</motion.div>
				<ReactSVG className="top" src={Top} alt="image" />
				<ReactSVG className="middle" src={Middle} alt="image" />
				<ReactSVG className="bottom" src={Bottom} alt="image" />
			</Container>
		</Main>
	)
}

export default CarCard

const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #fff;
	padding: 25px 43px;
	width: calc(70% - 27px);
	border-radius: 14px;
	.title{
		margin: 0;
	}
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	.car{
		width: 405px;
		height: 269px;
		z-index: 5;
	}
	.top{
		z-index: 4;
		position: absolute;
    	width:450px;
		top: 80px;
		svg{
			width: 100%;
			display: block;
		}
	}
	.middle{
		z-index: 3;
		position: absolute;
    	width: 450px;
		top: 97px;
		svg{
			width: 100%;
			display: block;
		}
	}
	.bottom{
		z-index: 2;
		position: absolute;
    	width: 450px;
		top: 115px;
		svg{
			width: 100%;
			display: block;
		}
	}
`;