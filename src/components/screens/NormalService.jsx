import React from "react";
import { styled } from "styled-components";
import Basic from "../../assets/images/basic.png";
import Standard from "../../assets/images/std.png";
import Comprehensive from "../../assets/images/comp.png";
import PeriodicService from "../includes/services/PeriodicService";

const NormalService = () => {
  const services = [
    {
      id: 1,
      title: "Basic Service",
      link: "basic",
      features: [
        {
          title: "Every 5000 Kms/3 Months",
        },
        {
          title: "Takes 4 Hours",
        },
        {
          title: "1 Month Warranty",
        },
        {
          title: "Includes 9 Services",
        },
      ],
      image: Basic,
      amount: "2500",
    },
    {
      id: 2,
      title: "Standard Service",
      link: "standard",
      features: [
        {
          title: "Every 10000 Kms/6 Months",
        },
        {
          title: "Takes 6 Hours",
        },
        {
          title: "1 Month Warranty",
        },
        {
          title: "Includes 15 Services",
        },
      ],
      image: Standard,
      amount: "3500",
    },
    {
      id: 3,
      title: "Comprehensive Service",
      link: "comprehensive",
      features: [
        {
          title: "Every 20000 Kms/1 Year",
        },
        {
          title: "Takes 8 Hours",
        },
        {
          title: "1 Month Warranty",
        },
        {
          title: "Includes 20 Services",
        },
      ],
      image: Comprehensive,
      amount: "4500",
    },
  ];

  return (
    <Main>
      {services.map((value) => (
        <PeriodicService key={value.id} item={value} />
      ))}
    </Main>
  );
};

export default NormalService;

const Main = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
