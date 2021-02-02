/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors } from '../../utils/theme';

type GridItemProps = {
  submarket: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  image: string,
}

const imageStyle = css`
  background-position: center;
  background-size: cover;
  height: 35rem;
`;

const overlayStyle = css`
  background-color: rgba(255, 255, 255, 0.15);
  height: 35rem;
  position: absolute;
  top: 0;
  width: 100%;
`;

const GridItem: React.FC<GridItemProps> = ({ submarket, image, ...props }) => (
  <div {...props}>
    <div css={css`
      ${imageStyle}
      background-image: url(${image});
    `}/>
    <div css={overlayStyle} />
  </div>
);

export default GridItem;
