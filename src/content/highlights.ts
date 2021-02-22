type Submarket = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const submarketHighlights: {[Key in Submarket]: Array<string> } = {
  1: [
    "Racially and ethnically diverse, but with declining Black and growing White population",
    "Mostly younger adults without children",
    "High rate of college education",
    "Above average rate of severe cost burden"
  ],
  2: [
    "Racially and ethnically diverse with two-thirds residents of color",
    "Highest unemployment rate",
    "Highest rate of severe cost burden",
    "Highest home mortgage denial rate",
  ],
  3: [],
  4: [],
  5: [],
  6: [
    "Like the region in many ways",
    "Racially and ethnically diverse",
    "Fastest growth of Black, Latinx, and Asian populations",
    "High public school growth performance",
  ],
  7: []
}

export { submarketHighlights };