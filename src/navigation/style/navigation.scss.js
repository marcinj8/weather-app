import Styled from 'styled-components';

export const StyledNavigation = Styled.nav`
    width: 100%;
    height: 80px;
    position: relative;
    padding: 15px;
`;

export const BurgerMenu = Styled.div`
    color: ${(props) => props.theme.color};
    position: absolute;
    top: 15px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 5;
    div {
        width: 90%;
        height: 4px;
        margin: 5px;
        background: ${(props) => props.theme.color};
    }
`;
