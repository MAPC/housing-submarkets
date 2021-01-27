import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import Toggle from './Toggle';
import submarketColors, { themeColors } from '../../utils/colors';
import { fonts } from '../../utils/theme';

const SidebarContent = styled.div`
  padding: 3rem 2rem 0 3rem;
  width: 43rem;

  @media (max-width: 1024px) {
    width: 35rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 32rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarTitle = styled.h2((props) => ({
  color: submarketColors[props.activeLayer-1],
  fontFamily: fonts.calibre,
  fontSize: '2.8rem',
  fontWeight: '600',
  margin: '0 3.6rem 0 0',
}));

const SidebarSubtitle = styled.h3`
  font-family: ${fonts.calibre};
  font-size: 2rem;
  line-height: 1.8rem;
`;

const sidebarLink = (activeLayer) => (css`
  color: ${submarketColors[activeLayer-1]};
  text-decoration: underline;

  &:focus {
    border: 1px solid ${themeColors.highlightPurple};
  }
`);

const CardFace = ({ layerVisibility, dispatch, activeLayer, children }) => (
  <SidebarContent>
    <TitleWrapper>
      <SidebarTitle activeLayer={activeLayer}>
        Submarket {activeLayer}
      </SidebarTitle>
      <Toggle activeLayer={activeLayer} layerVisibility={layerVisibility} dispatch={dispatch} />
    </TitleWrapper>
    { children[0] }
    <SidebarSubtitle>Key Highlights</SidebarSubtitle>
    { children[1] }
    <Link to={`/submarkets/${activeLayer}`} css={sidebarLink(activeLayer)} tabIndex={0}>View Full Profile &gt;&gt;</Link>
  </SidebarContent>
);

CardFace.propTypes = {
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default CardFace;
