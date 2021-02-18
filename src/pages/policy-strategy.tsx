import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const PolicyStrategy = () => (
  <Layout>
    <SEO title="Policy Stragegy" />
    <h2>Policy Strategy</h2>
    <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/shrmmTszSZhmYMa3t?backgroundColor=orange&viewControls=on"
      frameBorder="0"
      width="800"
      height="533"
      style={{ background: 'transparent', border: '1px solid #ccc' }}
      title="Policy Matrix"
    />
  </Layout>
);

export default PolicyStrategy;
