import React from 'react';
import { VegaLite, VisualizationSpec } from 'react-vega';
import { StaticQuery, graphql } from "gatsby";

const MCASScores = () => {
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    data: { name: "adjustedData" },
    mark: {
      type: "boxplot",
      extent: "min-max",
      size: 30,
    },
    height: 300,
    width: 400,
    title: "MCAS Math achievement score growth, 3rd to 8th grade",
    encoding: {
      x: {
        field: "Submarket",
        type: "nominal",
      },
      y: {
        field: "mthGrwth",
        type: "quantitative",
        title: "Score growth",
        scale: { zero: false },
        axis: { tickCount: 5}
      },
      color: {
        legend: null,
        field: "Submarket",
        type: 'nominal',
        scale: {
          range: ['#C7024E', '#80CDC1', '#06614d', '#F37B74', '#BF812D', '#8C510A', '#6EA1C9'],
          domain: [1,2,3,4,5,6,7],
          zero: false,
        }
      },
    }
  };

  return (
    <StaticQuery query={
      graphql`{
        postgres {
          allHousSubmarketsCtsList {
            mthGrwth
            submktId
          }
        }
      }`}
      render={(data) => {
        const adjustedData = data.postgres.allHousSubmarketsCtsList.map((row: { mthGrwth: number, submktId: number }) => {
          return {
          'mthGrwth': row.mthGrwth,
          'Submarket': row.submktId
        }})
        return (
          <VegaLite spec={spec} data={{ adjustedData }} />
        )
      }}
    />
  )
};

export default MCASScores;
