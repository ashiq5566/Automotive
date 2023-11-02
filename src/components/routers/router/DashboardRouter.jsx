import React from 'react'
import styled from 'styled-components';
import SideBar from '../../includes/SideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../screens/Dashboard';
import Header from '../../includes/Header';



const DashboardRouter = () => {
  return (
    <Wrapper>
        <Header />
        <Container>
            <SideBar />
            <Screen>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
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
    height: calc(100vh - 98px);
    overflow: hidden;
    margin-left: 294px;
`