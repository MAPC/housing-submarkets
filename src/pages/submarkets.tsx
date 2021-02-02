/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors } from '../utils/theme';
import Layout from '../components/layout';

const submarketsBackground = css`
  background-color: ${themeColors.bgPurple};
`;

const contentWrapper = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const introArticle = css`
  color: ${themeColors.white};
  max-width: 78.6rem;
  padding: 7.6rem 18rem;
`;

const h2Style = css`
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 6.2rem;
  margin: 0;
`;

const Submarkets = () => (
  <Layout css={submarketsBackground}>
    <div css={contentWrapper}>
      <article css={introArticle}>
        <h2 css={h2Style}>What is a submarket?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Scripta periculis ei eam, te pro movet reformidans. Vivendum intellegat et qui, ei denique consequuntur vix. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Quas scaevola postulant id vis, tincidunt assueverit et pro, quo et alii scripta accommodare.
        </p>
        <p>
            Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Vivendum intellegat et qui, ei denique consequuntur vix. Qui gloriatur scribentur et, id velit verear mel, cum no porro debet. Scripta periculis ei eam, te pro movet reformidans. Vivendum intellegat et qui, ei denique consequuntur vix. Sit fugit nostrum et. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Vivendum intellegat et qui, ei denique consequuntur vix. Vivendum intellegat et qui, ei denique consequuntur vix.
        </p>
      </article>
      <section>
        Grid
      </section>
    </div>
  </Layout>
);

export default Submarkets;
