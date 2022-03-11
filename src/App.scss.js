import Styled from 'styled-components';

export const StyledViewApp = Styled.section`
 min-height: 100vh;
 width: 100%;
 margin: 0;
 overflow: hidden;
 text-align: center;
 background: ${(props) => props.theme.background};
 color: ${(props) => props.theme.color};
`;
