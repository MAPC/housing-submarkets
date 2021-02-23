import React from 'react';
import { VegaLite, VisualizationSpec } from 'react-vega';
import { StaticQuery, graphql } from "gatsby";

const PercentWhite = () => {
  const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    data: { name: "adjustedData" },
    mark: {
      type: "boxplot",
      extent: "min-max",
      size: 30,
    },
    title: {text: "% of Population that is Non-Hispanic White", fontSize: 24},
    height: 800,
    width: 1000,
    encoding: {
      x: {
        field: "Submarket",
        type: "nominal",
        axis: {
          titleFontSize: 20,
          labelFontSize: 16
        }
      },
      y: {
        field: "nhwhiP",
        type: "quantitative",
        title: "% Population",
        axis: {
          titleFontSize: 20,
          labelFontSize: 16,
          tickCount: 10,
        }
        // title: {text: "% of Population", fontSize: 20},
      },
      color: {
        legend: null,
        field: "Submarket",
        type: 'nominal',
        scale: {
          range: ['#C7024E', '#80CDC1', '#06614d', '#F37B74', '#BF812D', '#8C510A', '#6EA1C9'],
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
            nhwhiP
            submktId
          }
        }
      }`}
      render={(data) => {
        const adjustedData = data.postgres.allHousSubmarketsCtsList.map((row: { nhwhiP: number, submktId: number }) => {
          return {
          'nhwhiP': row.nhwhiP,
          'Submarket': row.submktId
        }})
        return (
          <VegaLite spec={spec} data={{ adjustedData }} />
        )
      }}
    />
  )
};

export default PercentWhite;
