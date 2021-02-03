/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { viewData } from '../../utils/submarketViews';
import { fonts, themeColors } from '../../utils/theme';
import caret from '../../images/caret-down.svg'

const ViewSelector = ({ dispatch }) => {
  const options = Object.keys(viewData)
    .map((option) => <option value={option} key={viewData[option].id}>{viewData[option].title}</option>);
  return (
    <select
      css={css`
        appearance: none;
        background-color: ${themeColors.accentPurple};
        background-image: url(${caret});
        background-position: right .7em top 50%, 0 0;
        background-repeat: no-repeat;
        background-size: 2rem;
        border: none;
        color: ${themeColors.bgPurple};
        font-family: ${fonts.calibre};
        font-size: 2.8rem;
        font-weight: 600;
        margin: 0 auto 1rem auto;
        width: 45rem;
      `}
      onChange={(e) => dispatch({ type: 'setChartView', chartView: e.target.value })}
    >
      { options }
    </select>
  );
};

export default ViewSelector;
