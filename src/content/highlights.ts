type Submarket = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const submarketHighlights: {[Key in Submarket]: Array<string> } = {
  1: [
    "Premium-priced",
    "Increasing home prices and rents",
    "Declining numbers of renters"
  ],
  2: [
    "High-density, lower-cost urban markets",
    "High rates of foreclosure and cash sales",
    "Rapid sale price escalation",
  ],
  3: [
    "Oldest housing stock",
    "Mix of single-family and small multifamily",
    "Increasing home prices and rents"
  ],
  4: [
    "Older housing stock in suburbs and regional urban centers",
    "Low density and housing costs",
    "Moderate incomes, minimal change"
  ],
  5: [
    "Premium-priced low-density suburbs",
    "Large, older housing stock in very expensive single-family home neighborhoods"
  ],
  6: [
    "Suburban edges and new urban centers",
    "Newest housing stock and lowest home prices",
    "Rapid increases in density, rents, and renters"
  ],
  7: [
    "Low-density, moderate-cost single-family suburbs",
    "Newer housing stock",
    "Few renters"
  ]
}

export { submarketHighlights };