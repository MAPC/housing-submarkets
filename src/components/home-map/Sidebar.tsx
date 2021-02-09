/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import Highlight from './Highlight';
import CardFace from './CardFace';
import LayerMenu from './LayerMenu';
import { themeColors } from '../../utils/theme';
import { submarketHighlights } from '../../content/highlights';

const sidebarWrapper = css`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10rem;
  top: 5rem;

  @media (max-width: 1280px) {
    align-items: flex-start;
    right: 5rem;
  }

  @media (max-width: 1024px) {
    top: 5rem;
  }

  @media (max-width: 768px) {
    right: 1rem;
    top: 1rem;
  }
`;

const panelStyle = css`
  background-color: ${themeColors.white};
  display: flex;
  flex-direction: row;
  min-height: 47rem;
  width: 43rem;

  @media (max-width: 1024px) {
    width: 40rem;
  }

  @media (max-width: 768px) {
    align-items: flex-reverse;
    border-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 36rem;
  }
`;

const sidebarList = css`
  list-style: none;
  margin: 0 0 3rem 0;
  padding: 0;
`;

const sidebarListItem = css`
  margin: 1.2rem 0;
`;

const reportLinkStyle = css`
  color: ${themeColors.fontGray};
  margin-top: 2rem;
`;

type SidebarProps = {
  layerVisibility: {},
  activeLayer: number,
  sidebarOpen: boolean
  dispatch: React.DispatchWithoutAction,
}

const Sidebar: React.FC<SidebarProps> = ({ layerVisibility, dispatch, activeLayer, sidebarOpen }) => {
  const listItems = Object.keys(submarketHighlights[activeLayer].highlights).map((highlight) => {
    return (<li css={sidebarListItem}>{highlight}</li>)
  });

  return (
    <StaticQuery query={graphql`{
      allMarkdownRemark(filter: {frontmatter: {folder: {in: "definitions"}}}, sort: {fields: frontmatter___submarket, order: ASC}) {
        nodes {
          internal {
            content
              }
            }
          }
      }`}
      render={data => (
        <div css={sidebarWrapper}>
          <aside css={panelStyle}>
            <Highlight activeLayer={activeLayer} dispatch={dispatch} sidebarOpen={sidebarOpen} />
            <CardFace activeLayer={activeLayer} layerVisibility={layerVisibility} dispatch={dispatch}>
            <p>{data.allMarkdownRemark.nodes[activeLayer-1].internal.content}</p>
              <ul css={sidebarList}>
                {listItems}
              </ul>
            </CardFace>
            <LayerMenu activeLayer={activeLayer} dispatch={dispatch} layerVisibility={layerVisibility} />
          </aside>
          <Link to="/policy-strategy" css={reportLinkStyle}>Read Report &gt;&gt;</Link>
        </div>
      )
    }
    />
)}

export default Sidebar;
