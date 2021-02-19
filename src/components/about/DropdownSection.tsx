/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import AccordionField from './AccordionField';
import { themeColors } from '../../utils/theme';

const dropdownSectionStyle = css`
  color: ${themeColors.white};
  margin: 0 auto;
  padding: 5rem 0 6.4rem 13rem;
`;

const DropdownSection = () => (
  <div css={dropdownSectionStyle}>
    <AccordionField title="Contributors">
      <p>
        This Housing Submarkets research website is the result of the work of many MAPC staff. Here they are listed in alphabetical order, by last name:
      </p>
      <ul>
        <li>Karen Adelman</li>
        <li>Seleeke Flingai</li>
        <li>Guy Hydrick</li>
        <li>Ryan Kelly</li>
        <li>Jessie Partidge Guerrero</li>
        <li>Tim Reardon</li>
        <li>Caitlin Spence</li>
        <li>Annabelle Thomas Taylor</li>
        <li>Kit Un</li>
      </ul>
    </AccordionField>
    <AccordionField title="Definitions">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Harum repudiandae sea at. Pri veritus expetendis ex. Scripta periculis ei eam, te pro movet reformidans. Per ea omnis decore, eu mei appareat tincidunt. Ei qui diceret voluptua luptatum, te dolorum detracto hendrerit sed, ad per offendit consetetur. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pro ea animal dolores. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.
      </p>
    </AccordionField>
  </div>
);

export default DropdownSection;
