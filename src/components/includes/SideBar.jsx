import React from 'react'
import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom'
import Dashb_icon from '/icons/dasboard.svg'
import Assets from '/icons/assets.svg'
import Booking from '/icons/booking.svg'
import { ReactSVG } from 'react-svg'





const SideBar = () => {
  return (
    <SidebarContainer>
		<SidebarList>
			<SidebarListItem className={({ isActive }) => isActive ? "active" : ""}>
				<SidebarLink 
					to="/dashboard"
					>
					<ReactSVG className='icon' src={Dashb_icon} alt='dashb' />
						Dashboard
				</SidebarLink>
			</SidebarListItem>
			<SidebarListItem>
				<SidebarLink
					to="/assets"
					className={({ isActive }) => isActive ? "active" : ""}>
					<ReactSVG className='icon' src={Assets} alt='assets' />
                     Assets
				</SidebarLink>
			</SidebarListItem>
			<SidebarListItem>
				<SidebarLink 
					to="/booking"
					className={({ isActive }) => isActive ? "active" : ""}
				>
					<ReactSVG className='icon' src={Booking} alt='booking' />
					Booking
				</SidebarLink>
			</SidebarListItem>
		</SidebarList>
        <Bottom>
            <Logout>
                <span>Logout</span>
            </Logout>
        </Bottom>
  	</SidebarContainer>
  )
}

export default SideBar



const SidebarContainer = styled.aside`
    height: 954px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 24px 30px 24px;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    position: fixed;
    background: #fff;
    margin-top: 108px;
    width: 250px;
`;
const SidebarList = styled.div`
  padding: 0;
  list-style-type: none;
`;

const SidebarListItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #F3F5F8;
  }
`;

const SidebarLink = styled(NavLink)`
	text-decoration: none;
	color: #5F6165;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
	display: flex;
	align-items: center;
	padding: 7px 105px 7px 8px;
	border-radius: 4px;
	.icon{
		margin-right: 8px;
	}
	&.active {
	background-color: #F3F5F8;
  }
`;
const Bottom = styled.div``;
const Logout = styled.div`
    text-decoration: none;
	color: #fff;
	font-size: 24px;
	font-style: normal;
	font-weight: 200;
	line-height: normal;
    margin-top: 25%;
    
    span {
        font-size: 18px;
        color: #fff;
    }
`;