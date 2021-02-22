/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Plus } from 'phosphor-react';
import { themeColors } from '../../utils/theme';

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
`;

const h5Style = css`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 0 1rem;
  width: 29rem;
`;

const contentStyle = css`
  margin-top: 2rem;
`;

const StrategyAccordion: React.FC<AccordionFieldProps> = ({ title, children }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div css={css`margin-bottom: 2rem;`}>
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
        <Plus size={16} weight="bold" color={themeColors.bgPurple} />
        <h5 css={h5Style}>{ title }</h5>
      </header>
      {isActive ? <div css={contentStyle}>{children}</div> : ''}
    </div>
  );
};

export default StrategyAccordion;
