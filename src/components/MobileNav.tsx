import React, { useState } from 'react';
import MobileNavButton from './MobileNavButton';
import MobileNavMenu from './MobileNavMenu';

const MobileNav = () => {
  const [mobileNavOpen, toggleMobileNav] = useState(false);
  return (
    <React.Fragment>
      <MobileNavButton toggleMobileNav={toggleMobileNav} />
      { mobileNavOpen ? <MobileNavMenu toggleMobileNav={toggleMobileNav} /> : '' }
    </React.Fragment>
  );
};

export default MobileNav;
