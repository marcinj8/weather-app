import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export const StyledButtonsContainer = Styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    padding: 5px 0;
`;

export const StyledLink = Styled(Link)`
    display: inline-block;
    width: 8px;
    height: 8px;
    background: transparent;
    margin: 5px;
    border: 1px solid white;
    border-radius: 50%;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: ${(props) => props.theme.color};
    }
`;

export const StyledActiveNav = Styled.span`
    width: 8px;
    height: 8px;
    background: white;
    margin: 5px;
    border: 1px solid white;
    border-radius: 50%;
`;
