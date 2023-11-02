import React, { Profiler } from 'react'
import { styled } from 'styled-components'
import logo from '/icons/logo.svg'
import SearchBox from '../small/SearchBox'
import Notify from '/icons/notify.svg'
import ProfileImage from '../../assets/images/profile.jpeg'

const Header = () => {
  return (
    <Container>
      <Left>
        <img className='logo' src={logo} alt='logo' />
        <h1 className='title'>Motive.</h1>
      </Left>
      <SearchBox />
      <Right>
        <Notification>
            <img className="icon" src={Notify} alt='notifictaion' />
        </Notification>
        <Profile>
            <img className="image" src={ProfileImage} alt='profile' />
        </Profile>
      </Right>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    padding: 15px 31px;
    justify-content: space-between;
    gap: 10px;
    height: 78px;
    align-items: center;
    position: fixed;
    width: 95vw;
    background-color: #fff;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    .logo{
        border-radius: 6px;
        padding: 5px 6px;
        background: var(--primary-purple, #A162F7);
        height: 14px;
        width: 16px;
        margin-right: 12px;
    }
    .title{
        color: var(--gray-dark, #1F2128);
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

`;
const Right = styled.div`
    display: flex;
    align-items: center;
`;
const Notification = styled.div`
    .icon{
        margin-right: 12px;
    }
`;
const Profile = styled.div`
    .image{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

