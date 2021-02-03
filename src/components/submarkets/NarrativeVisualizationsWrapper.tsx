/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { themeColors, fonts } from './../../utils/theme';

const wrapperStyle = css`
  margin: 4rem auto 20rem auto;
  max-width: 146.6rem;
`;

const sectionStyle = css`
  padding: 0 5rem;
`;

const sectionWithChart = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const sectionWithoutChart = css`
  ${sectionStyle}
  max-width: 100rem;
`;

const h3Style = css`
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
`;

const chartPlaceholder = css`
  align-items: center;
  background-color: ${themeColors.accentPurple};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  height: 40rem;
  margin-left: 4rem;
  width: 50rem;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const NarrativeVisualizationsWrapper = () => (
  <div css={wrapperStyle}>
    <section css={sectionStyle}>
      <h3 css={h3Style}>Overlay Indicators</h3>
      <div css={sectionWithChart}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pro ea animal dolores. Scripta periculis ei eam, te pro movet reformidans. Erroribus adipiscing id eam. His an amet petentium voluptatibus, modo malis error nec no. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pro ea animal dolores. Scripta periculis ei eam, te pro movet reformidans. Erroribus adipiscing id eam. His an amet petentium voluptatibus, modo malis error nec no. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
          </p>
        </div>
        <aside css={chartPlaceholder}>Chart</aside>
      </div>
    </section>
    <section css={sectionWithoutChart}>
      <h3 css={h3Style}>Lorem ipsum posse graeco</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pro ea animal dolores. Scripta periculis ei eam, te pro movet reformidans. Erroribus adipiscing id eam. His an amet petentium voluptatibus, modo malis error nec no. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Pri posse graeco definitiones cu, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pro ea animal dolores. Scripta periculis ei eam, te pro movet reformidans. Erroribus adipiscing id eam. His an amet petentium voluptatibus, modo malis error nec no. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
      </p>
    </section>
    <section css={sectionStyle}>
      <h3 css={h3Style}>His an amet petentium voluptatibus, modo malis error nec no</h3>
      <div css={sectionWithChart}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pro ea animal dolores. Scripta periculis ei eam, te pro movet reformidans. Erroribus adipiscing id eam. His an amet petentium voluptatibus, modo malis error nec no. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pro ea animal dolores. Scripta periculis ei eam, te pro movet reformidans. Erroribus adipiscing id eam. His an amet petentium voluptatibus, modo malis error nec no. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
          </p>
        </div>
        <aside css={chartPlaceholder}>Chart</aside>
      </div>
    </section>
  </div>
);

export default NarrativeVisualizationsWrapper;
