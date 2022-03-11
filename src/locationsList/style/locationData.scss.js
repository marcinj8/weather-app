import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLoacationData = Styled.li`
    cursor: pointer;
    box-sizing: border-box; 
    position: relative;
    list-style-type: none;
    width: 120px;
    height: 120px;
    margin: 20px;
    border-radius: 10px;
    background: rgba(255,255,255,.3);
    @media(min-width: 400px) {
        width: 200px;
        height: 200px;
    }
`;

export const StyledLoacationHeader = Styled.header`
    font-size: .8rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(min-width: 400px) {
        font-size: 1.3rem;
    }
`;

export const StyledLoacationTitle = Styled.h2`
    margin: 0;
    padding-left: 5px;
    padding-top: 5px;
    @media(min-width: 400px) {
        padding-top: 15px;
        padding-left: 15px;

    }
`;

export const StyledLoacationImg = Styled.img`
    position: relative;
    right: 15%;
    width: 30px;
    height: 30px;
    @media(min-width: 400px) {
        width: 70px;
        height: 70px;
    }
`;

export const StyledCityDetails = Styled.div`
    width: 90%;
    margin: 0 auto;
    height: 60px;
    & :nth-child(1){
        font-size: .9rem;
        padding: 3px 0;
        text-align: left;
        font-weight: bold;
        @media(min-width: 400px) {
            font-size: 1.3rem;
        }
    };
    & :nth-child(2){
        padding: 3px 0;
        font-size: .9rem;
        text-align: left;
        @media(min-width: 400px) {
          font-size: 1.2rem;
        }
    };
    @media(min-width: 400px) {
        height: 100px;
        width: 80%;
    }
`;

export const StyledLink = Styled(Link)`
    display: flex;
    justify-content: space-between;
    flex-direction: column ;
    position: absolute;
    padding: 10px 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: ${(props) => props.theme.color};
    }
`;
