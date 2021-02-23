/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { themeColors, fonts } from '../../utils/theme';

interface PolicyItemProps {
  title: string,
  body: string,
}

const listItemStyle = css`
  padding-bottom: 1.6rem;
`;

const h4Style = css`
  font-family: ${fonts.calibre};
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`;

const PolicyItem: React.FC<PolicyItemProps> = ({ title, body }) => (
  <li css={listItemStyle}>
    <h4 css={h4Style}>{title}</h4>
    {body}
  </li>
);

export default PolicyItem;
