import { React, useState } from "react";
import styled from "styled-components";
import Light from "/icons/light.svg";
import Eclips from "/icons/eclips.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../small/ProgressProvider";

const Card = ({ progress = {} }) => {
  const [valueEnd, setValueEnd] = useState(75);
  return (
    <Container bg={progress.background_color}>
      <Image>
        <img className="light" src={progress.image} alt="light" />
      </Image>
      <Title color={progress.title_color}>{progress.title}</Title>
      <Bottom>
        <ProgressProvider valueStart={0} valueEnd={progress.percentage} duration={0.5}>
          {(value) => <Progress 
            color={progress.percentage_color}
            path_color={progress.path_color} 
            rail_color={progress.rail_color} 
            value={value} text={`${progress.percentage}%`} 
            />}
        </ProgressProvider>
      </Bottom>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  padding: 20px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 14px;
  background: ${({bg}) => bg};
  flex-direction: column;
  width: calc(25% - 20px);
  box-sizing: border-box;
`;
const Image = styled.div`
  padding: 9px;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;

  .light {
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  color: ${({color}) => color};
  margin-bottom: 30px;
`;

const Bottom = styled.div`
  width: 112px;
  height: 112px;
`;

const Progress = styled(CircularProgressbar)`
  .CircularProgressbar-path {
    stroke: ${({path_color}) => path_color};
  }

  .CircularProgressbar-text {
    fill: ${({color}) => color};
    font-size: 24px;
    font-weight: bold;
  }

  .CircularProgressbar-trail {
    stroke: ${({rail_color}) => rail_color};
  }
`;
