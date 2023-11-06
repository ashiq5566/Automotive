import React from 'react'
import styled from 'styled-components';
import SideBar from '../../includes/SideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../screens/Dashboard';
import Header from '../../includes/Header';
import Booking from '../../screens/Booking';
import SellCars from '../../screens/SellCars';
import Services from '../../screens/Services';
import NormalService from '../../screens/NormalService';



const DashboardRouter = () => {
  return (
    <Wrapper>
        <Header />
        <Container>
            <SideBar />
            <Screen>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="services/*" >
                        <Route index element={<Services />} />
                        <Route path="periodic" element={<NormalService />} />
                    </Route>
                    <Route path="booking" element={<Booking />} />
                    <Route path="sell-cars" element={<SellCars />} />
                </Routes>
            </Screen>
        </Container>
    </Wrapper>
  )
}

export default DashboardRouter

const Wrapper = styled.section`
	display: flex;
    flex-direction: column;
`
const Container = styled.div`
	display: flex;
`
const Screen = styled.div`
	padding: 30px 30px;
    margin-top: 108px;
    background: rgb(248, 249, 251);
    width: calc(100vw - 371px);
    /* height: calc(100vh - 98px); */
    margin-left: 294px;
`