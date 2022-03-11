import Styled from 'styled-components';

export const StyledButton = Styled.button`
${props => console.log(props)}
    padding: 5px;
    width: ${props => props.width ? props.width :'150px'};
    margin: 5px auto;
    border: none;
    border-radius: 3px;
    cursor: pointer
`;

export const StyledButtonClose = Styled(StyledButton)`
    color: red;
    background: pink;

`;
