import React from 'react'
import styled from 'styled-components';
import ListingCard from '../includes/ListingCard'
import Mini from "../../assets/images/mini.png"
import Crysta from "../../assets/images/crysta.png"
import Desire from "../../assets/images/desire.png"
import Ertiga from "../../assets/images/ertiga.png"
import M_class from "../../assets/images/m_class.png"
import Audi from "../../assets/images/audi.png"
import Audi_a3 from "../../assets/images/audi-a3.png"



const Booking = () => {
    const listings = [
        {
            id : 1,
            title : "Audi A3",
            segment : "Sedan",
            count : "74",
            transmission : "Mannual",
            amount : "500",
            image : Audi_a3,
            favorite: true
          
        },
        {
            id : 2,
            title : "Mercedes-Benz M-Class",
            segment : "SUV",
            count : "74",
            transmission : "Automatic",
            amount : "1000",
            image : M_class,
            favorite: true
          
        },
        {
            id : 3,
            title : "Innova Crysta",
            segment : "MPV",
            count : "54",
            transmission : "Mannual",
            amount : "800",
            image : Crysta,
            favorite: true
          
        },
        {
            id : 4,
            title : "Swift Desire",
            segment : "Sedan",
            count : "48",
            transmission : "Mannual",
            amount : "400",
            image : Desire,
            favorite: true
          
        },
        {
            id : 5,
            title : "MINI Countryman",
            segment : "compact crossover SUV",
            count : "74",
            transmission : "Automatic",
            amount : "900",
            image : Mini,
            favorite: false
          
        },
        {
            id : 6,
            title : "Audi Q5",
            segment : "compact luxury SUV",
            count : "45",
            transmission : "Automatic",
            amount : "1000",
            image : Audi,
            favorite: true
          
        },
        
      ]

    return (
        <Main>
            <Container>
            {listings.map((value) => (
                <ListingCard key={value.id} item={value} />
            ))}
            </Container>
        </Main>
    )
}

export default Booking

const Container = styled.div`
	display: flex;
	gap: 29px;
    flex-wrap: wrap;
`;
const Main = styled.div`
`;
