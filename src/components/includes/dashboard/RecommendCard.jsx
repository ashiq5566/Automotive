import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Light from '/icons/light.svg'
import RotateArrow from '/icons/rotate-arrow.svg'
import Loop from '/icons/loop.svg'
import Star from '/icons/star.svg'
import Tunder from '/icons/tunder.svg'
import 'react-circular-progressbar/dist/styles.css';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const RecommendCard = ({ item = {} }) => {

	const titleAnimation = {
		hidden: { opacity: 0, x: -100 }, // Start from the left (-100px)
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
        <Container bg={item.background_color}>
            <Top>
                <img className='rotate_arrow' src={RotateArrow} alt='icon' />
                <h3 className='recommend'>{item.percentage}% Recommended</h3>
            </Top>
			<Car>
				<motion.div ref={ref} initial="hidden" animate={controls} variants={titleAnimation}
                    transition={{
                        type:"spring",
                        duration:0.4,
                        stiffness: 100,
                        damping: 10
                    }}
                    whileInView="visible"
				>
					<img src={item.image} alt='car' />
				</motion.div>
			</Car>
            <Title>{item.title}</Title>
            <Bottom>
                <Left>
                    <img className="loop" src={Loop} alt='icon' />
                    <span className='likes'>{item.likes}</span>
                    <img className='star' src={Star} alt='icon' />
                    <img className='tunder' src={Tunder} alt='icon' />
                </Left>
                <span className='amount'>${item.amount}/h</span>
            </Bottom>

        </Container>
    )
}

export default RecommendCard

const Container = styled.div`
    padding: 15px 27px;
    background-color: ${({bg}) => bg};
    width: calc(29% - 29px);
    border-radius: 14px;
	overflow: hidden;

`;
const Top = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    .recommend{
        font-size: 16px;
    }
    .rotate_arrow{
        height: 24px;
        width: 24px;
    }
`;
const Car = styled.div``;
const Title = styled.h2`
    font-size: 20px;
`;
const Bottom = styled.div`
    display: flex;
    gap: 105px;
`;
const Left = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    .loop{
        height: 20px;
        width: 20px;
    }
    .star{
        height: 16px;
        width: 16px;
    }
    .tunder{
        height: 16px;
        width: 16px;
    }
`;