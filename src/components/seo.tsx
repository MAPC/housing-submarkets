import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import card from '../images/social-card.png';

type SEOProps = {
  title?: string,
}

const SEO: React.FC<SEOProps> = ({ title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title ? `${title} | MAPC Housing Submarkets` : 'MAPC Housing Submarkets'}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
        {
          name: 'og:image',
          content: `https://housing-submarkets.mapc.org/${card}`,
        },
      ]}
    >
      {children}
    </Helmet>
  )
};

export default SEO;
