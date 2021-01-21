function generateSchema(submarket, field, domain, format, selectedTract, color) {
  return {
    width: 700,
    height: 55,
    transform: [{ filter: `datum.class == ${submarket}` }],
    title: `Submarket ${submarket}`,
    data: { name: 'data' },
    mark: { type: 'tick' },
    encoding: {
      color: { value: color },
      x: {
        field,
        type: 'quantitative',
        scale: { type: 'linear', domain },
        title: null,
        axis: { format },
      },
      size: {
        condition: {
          test: `datum['ct10_id'] == ${selectedTract}`,
          value: 40,
        },
        value: 15,
      },
    },
    config: { tick: { thickness: 2, color } },
  };
}

export default generateSchema;
