/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import GridItem from './GridItem';

const SubmarketGrid = () => (
  <section>
    <GridItem submarket={1} />
    <GridItem submarket={2} />
    <GridItem submarket={3} />
    <GridItem submarket={4} />
    <GridItem submarket={5} />
    <GridItem submarket={6} />
    <GridItem submarket={7} />
  </section>
);

export default SubmarketGrid;
