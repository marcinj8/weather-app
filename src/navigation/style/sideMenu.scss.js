import Styled from 'styled-components';

export const StyledSideMenu = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    padding: 30px 10px 0 10px;
    background: rgba(256,256,256,.8);
    background: ${(props) => props.theme.colorSecondary};
    color: ${(props) => props.theme.color};
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    opacity: 0;
    z-index: 20;
`;

export const StyledBackdrop = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 10
`;
