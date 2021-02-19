/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { fonts, themeColors } from '../../utils/theme';
import metrocommonTriangle from '../../images/metrocommonTriangle.svg';

function toggleVisibility(currentState: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>) {
  if (currentState === true) {
    return setActive(false);
  }
  return setActive(true);
}

type AccordionFieldProps = {
  title: string,
  children: React.HTMLAttributes<HTMLParagraphElement>
}

const accordionHeaderStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const h3Style = css`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  width: 29rem;
`;

const iconStyle = css`
  transition: transform .3s ease-out;
  transform: rotate(0deg);
`;

const activeIconStyle = css`
  ${iconStyle}
  transition: transform .3s ease-out;
  transform: rotate(90deg);
`;

const contentStyle = css`
  margin-top: 2rem;
`;

const accordionDividerStyle = css`
  color: ${themeColors.white};
  margin: 3rem 0;
`;

const AccordionField: React.FC<AccordionFieldProps> = ({ title, children }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div>
      <header
        css={accordionHeaderStyle}
        onClick={() => toggleVisibility(isActive, setActive)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleVisibility(isActive, setActive);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <h3 css={h3Style}>{ title }</h3>
        <img
          src={metrocommonTriangle}
          alt="Decorative triangle"
          className={isActive ? 'accordion__icon accordion__icon--active' : 'accordion__icon'}
          css={isActive ? activeIconStyle : iconStyle}
        />
      </header>
      {isActive ? <div css={contentStyle}>{children}</div> : ''}
      <hr css={accordionDividerStyle} />
    </div>
  );
};

export default AccordionField;
