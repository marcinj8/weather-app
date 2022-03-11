import Styled from 'styled-components';

export const StyledHourlyForecast = Styled.ul`
    width: 100%;
    display: flex;
    padding: 10px 5px;
    list-style-type: none;
    border-top: 1px solid rgba(256, 256,256 ,.4);
    border-bottom: 1px solid rgba(256, 256,256 ,.4);
`;

export const StyledHourForecast = Styled.li`
    width: 20%;
    padding: 10px
`;

export const StyledHourlyForecastDate = Styled.h6`
    margin: 5px;
`;

export const StyledHourlyForecastTemp = Styled.div`
    margin: 5px;
`;
