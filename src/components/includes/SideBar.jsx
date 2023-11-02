import React from 'react'
import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom'
import Dashb_icon from '/icons/dasboard.svg'
import Assets from '/icons/assets.svg'
import Booking from '/icons/booking.svg'




const SideBar = () => {
  return (
    <SidebarContainer>
		<SidebarList>
			<SidebarListItem >
				<SidebarLink
					to="/dashboard" >
						<img className='icon' src={Dashb_icon} alt='dashb' />
                         Dashboard
				</SidebarLink>
			</SidebarListItem>
			<SidebarListItem>
				<SidebarLink>
					<img className='icon' src={Assets} alt='assets' />
                     Assets
				</SidebarLink>
			</SidebarListItem>
			<SidebarListItem>
				<SidebarLink>
					<img className='icon' src={Booking} alt='booking' />
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
    width: 152px;
`;
const SidebarList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const SidebarListItem = styled.li`
  padding: 7px 8px;
  font-size: 14px;
  color: white;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
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
	.icon{
		margin-right: 8px;
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