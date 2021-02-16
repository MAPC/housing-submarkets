/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import { Question } from 'phosphor-react';
import { fonts, themeColors } from '../utils/theme';

type HoverablePhraseProps = {
  phrase: string,
  definition: string,
}

const footnoteStyle = css`
  border-bottom: 1px dashed ${themeColors.bgPurple};
  display: inline-block;

  .superscript .tooltip {
    background-color: ${themeColors.bgPurple};
    border-radius: .5rem;
    color: ${themeColors.white};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    padding: 1.25rem 1.5rem;
    position: absolute;
    margin-left: -7.5rem;
    visibility: hidden;
    width: 12.25rem;
    z-index: 1;
    bottom: 140%;
  }

  .superscript .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${themeColors.bgPurple} transparent transparent transparent;
  }

  .superscript:hover .tooltip {
    visibility: visible;
  }
`;

const superscriptStyle = css`
  color: ${themeColors.bgPurple};
  display: inline-block;
  font-size: 1.6rem;
  position: relative;
`;

const HoverablePhrase: React.FC<HoverablePhraseProps> = ({ phrase, definition }) => (
  <span css={footnoteStyle} className="footnote">
    {phrase}
    <sup css={superscriptStyle} className="superscript">
      <Question size={14} />
      <span className="tooltip">
        {definition}
      </span>
    </sup>
  </span>
);

export default HoverablePhrase;
