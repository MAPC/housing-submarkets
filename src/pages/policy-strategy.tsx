/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { themeColors, fonts } from '../utils/theme';

const contentWrapper = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 7.6rem 5rem;
`;

const h2Style = css`
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin: 0 0 1.6rem 0;
`;

const PolicyStrategy = () => (
  <Layout>
    <SEO title="Policy Stragegy" />
    <section css={contentWrapper}>
      <h2 css={h2Style}>Policy Strategy</h2>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrmmTszSZhmYMa3t?backgroundColor=orange&viewControls=on"
        frameBorder="0"
        width="100%"
        height="650"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Policy Matrix"
      />
    </section>
  </Layout>
);

export default PolicyStrategy;
