type Submarket = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const submarketHighlights: {[Key in Submarket]: Array<string> } = {
  1: [
    "Premium-priced",
    "Increasing home prices and rents",
    "Declining numbers of renters"
  ],
  2: [
    "Highest renter share",
    "High rates of foreclosure and cash sales",
    "Highest rate of business buyers",
    "Rapid sale price escalation "
  ],
  3: [
    "Oldest housing stock",
    "Mix of single-family and small multifamily",
    "Increasing home prices and rents"
  ],
  4: [
    "Older housing stock in suburbs and regional urban centers",
    "Low density and housing costs",
    "Minimal change in rents",
    "Slowest population growth"
  ],
  5: [
    "Premium-priced low-density suburbs",
    "Large, older housing stock in very expensive single-family home neighborhoods",
    "Low and declining renter share"
  ],
  6: [
    "Suburban edges with the newest housing stock and lowest home prices",
    "Rapid increases in density, rents, and renters"
  ],
  7: [
    "Moderate-cost single-family suburbs",
    "Newer housing stock",
    "Few renters"
  ]
}

export { submarketHighlights };