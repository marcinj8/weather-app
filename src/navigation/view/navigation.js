import React, { useState } from 'react';
import CurrentDate from '../components/currentDate';

import { NewCityForm, SideMenu } from '../components';
import { BurgerMenu, StyledNavigation } from '../style/navigation.scss';

const Navigation = ({ variant, themeButtons }) => {
  const [isSideMenuShow, setIsSideMenuShow] = useState(false);

  return (
    <StyledNavigation>
      <BurgerMenu onClick={() => setIsSideMenuShow(true)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerMenu>
      {variant === 'list' ? <NewCityForm /> : <CurrentDate />}
      <SideMenu
        themeButtons={themeButtons}
        close={() => setIsSideMenuShow(false)}
        show={isSideMenuShow}
      />
    </StyledNavigation>
  );
};

export default Navigation;
