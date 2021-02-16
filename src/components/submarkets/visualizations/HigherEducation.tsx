import React from 'react';
import { VegaLite, VisualizationSpec } from 'react-vega';
import { StaticQuery, graphql } from "gatsby";

const SectionWithChart = () => {
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    data: { name: "adjustedData" },
    mark: {
      type: "boxplot",
      extent: "min-max",
      size: 30,
    },
    height: 350,
    width: 400,
    "transform": [
      {"calculate": "2*datum.b", "as": "b2"},
    ],
    encoding: {
      y: {
        field: "Submarket",
        type: "nominal",
      },
      x: {
        field: "baplP",
        type: "quantitative",
        title: "% Population with more than Bachelors Degree",
      },
      color: {
        legend: null,
        field: "Submarket",
        type: 'nominal',
        "scale": {
          range: ['#C7024E',
          '#80CDC1',
          '#06614d',
          '#F37B74',
          '#BF812D',
          '#8C510A',
          '#6EA1C9'],
          domain: [1,2,3,4,5,6,7]
        }
      },
    }
  };

  return (
    <StaticQuery query={
      graphql`{
        postgres {
          allHousSubmarketsCtsList {
            baplP
            submktId
          }
        }
      }`}
      render={(data) => {
        const adjustedData = data.postgres.allHousSubmarketsCtsList.map((row: { baplP: number, submktId: number }) => {
          return {
          'baplP': row.baplP,
          'Submarket': row.submktId
        }})
        return (
          <VegaLite spec={spec} data={{ adjustedData }} />
        )
      }}
    />
  )
};

export default SectionWithChart;
