import React from 'react'
import styled from 'styled-components'
import searchIcon from "/icons/search.svg"

function SearchBox({ onSearch }) {
  return (
    <Bottom>
        <SearchContainer>
            <div className="left">
                <label htmlFor="search">
                    <img src={searchIcon} alt="search icon" />
                </label>
                <Rectangle></Rectangle>
                <input type="search" id="search" placeholder='Search...' onChange={onSearch} />
            </div>
        </SearchContainer>
    </Bottom>
  )
}

export default SearchBox

const Bottom = styled.div`
	display: flex;
`;
const SearchContainer = styled.div`
    border: 1px solid #EEE;
    display: flex;
    align-items: center;
	width: 358px;
	border-radius: 10px;
	background: #FFF;
    height: 48px;

    .left{
        padding: 14px 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;

        img{
            width: 16px;
        }
        input{
            width: 100%;
            color: #d3d3d3;
            font-size: 16px;
            border: none;

            &::placeholder{
                color: inherit;
            }
        }
    }
    .right{
        cursor: pointer;
        padding: 8px 12px;
        border-left: 1px solid #eee;

        img{
            width: 16px;
        }
    }
;`

const Rectangle = styled.div`
    width: 2px;
    height: 22px;
    border-radius: 4px;
    background: #EF9011;
    margin-left: 16px;
    margin-right: 4px;
`;