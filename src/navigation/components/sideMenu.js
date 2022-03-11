import React, { useEffect, useRef } from 'react';
import { StyledButtonClose } from '../../shared/components/button/button.scss';
import { showAnimation, hideAnimation } from '../animation.js/animation';

import { StyledSideMenu, StyledBackdrop } from '../style/sideMenu.scss';
import CitiesControllers from './sideMenuCitiesList';

const SideMenu = ({ themeButtons, show, close }) => {
  const sideMenuRef = useRef(null);
  //   console.log(cities);

  useEffect(() => {
    if (show) {
      showAnimation(sideMenuRef.current);
    } else {
      hideAnimation(sideMenuRef.current);
    }
  }, [show]);

  //   useEffect(() => {
  //     if (cities !== null && cities.length) {
  //       cities.map((city) => {
  //         return <NavLink to={`weather/${city}`}>{city}</NavLink>;
  //       });
  //     }
  //   },[cities]);

  return (
    <React.Fragment>
      {show && <StyledBackdrop onClick={close} />}
      <StyledSideMenu ref={sideMenuRef}>
        <h3 style={{ textShadow: ' 0 0 2px black' }}>set theme</h3>
        {themeButtons}
        <CitiesControllers />
        <StyledButtonClose onClick={close}>close</StyledButtonClose>
      </StyledSideMenu>
    </React.Fragment>
  );
};

export default SideMenu;
