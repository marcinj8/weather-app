import React from 'react';
import Styled from 'styled-components';

import { MONTH, WEEKDAY } from '../../shared/data/variables';

const StyledCurrentDate = Styled.div`
  position: absolute;
    width: 200px;
    padding: 16px;
    color: white;
    font-weight: bolder;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`;

const StyledSign = Styled.div`
    position: absolute;
    right: 15px;
    padding: 16px;
    color: white;
    font-weight: bolder;
    font-size: 15px;
`;

const CurrentDate = () => {
  const weekDay = new Date().getDay();
  const monthDay = new Date().getDate();
  const month = new Date().getMonth();

  return (
    <React.Fragment>
      <StyledCurrentDate>
        {WEEKDAY[weekDay].slice(0, 3)}, {MONTH[month]} {monthDay}
      </StyledCurrentDate>
      <StyledSign>°C</StyledSign>
    </React.Fragment>
  );
};

export default CurrentDate;
