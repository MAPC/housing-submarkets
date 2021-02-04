/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from "@emotion/react";
import { choroplethColors, fonts, themeColors } from '../../utils/theme';
import { View, viewData } from '../../utils/submarketViews';

function setLegend(view) {
  return viewData[view].legendKeys.map((entry: string, i: number) => (
    <li key={i}>
      <svg width="10" height="10">
        <circle cx="5" cy="5" r="5" fill={choroplethColors[i]} stroke="black" />
      </svg>
      <span css={css`
        font-family: ${fonts.calibre};
        font-weight: 300;
        font-size: 1.4rem;
        margin-left: 1rem;
      `}>
        {entry}
      </span>
    </li>
  ));
}

type LegendProps = {
  view: View,
}

const legendStyle = css`
  background-color: rgba(255, 255, 255, 0.8);
  left: 8px;
  min-height: 20px;
  padding: 5px 15px;
  position: absolute;
  top: 8px;
  width: 6.25rem;
  width: 16rem;
  z-index: 1000;
`;

const legendTitle = css`
  font-family: ${fonts.calibre};
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0;
`;

const legendToggle = css`
  float: right;
`;

const legendList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Legend: React.FC<LegendProps> = ({ view, children }) => {
  const [ isExpanded, toggleExpansion] = useState(true);
  return (
    <div css={legendStyle}>
      { isExpanded ? (
        <React.Fragment>
          <ul css={legendList}>
            {setLegend(view)}
          </ul>
          {children}
        </React.Fragment>
      ) : <span css={legendTitle}>Expand Legend</span>}
      <button role="button" css={legendToggle} onClick={() => toggleExpansion(!isExpanded)}>
        {isExpanded ? '-' : '+'}
      </button>
    </div>
  )
}

export default Legend;
