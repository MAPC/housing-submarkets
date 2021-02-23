# MAPC Housing Submarkets

A one-size-fits-all approach to housing policy can’t meet the many and varied housing challenges facing Greater Boston. Reducing the cost of living, enabling access to suitable housing, and protecting housing stability will require different strategies in different places.

All these strategies are part of the puzzle of building better housing opportunities for the residents of Greater Boston—they are just more critical in some places than others.

## Local development
This site was built with [Gatsby](https://www.gatsbyjs.com) and uses [yarn](https://yarnpkg.com/) for package management. Install the Gatsby CLI with `npm install -g gatsby-cli`, then install local dependencies with `yarn install`.

For database access, you'll need to set the following variables in your .ENV file at the root of the project. The Mapbox access token allows the maps to load properly; the Google Analytics ID can be obtained from the MAPC GA account. The remaining three are used to connect to the Housing Submarkets data table:

```
GATSBY_MAPBOX_ACCESS_TOKEN
GOOGLE_ANALYTICS_IDS
DB_PASS
DB_USER
HOST
```

Once you've installed and configured everything, run `gatsby develop` for local development.

## Deployment
This site is hosted on Github Pages. To deploy, simply push to the `main` branch.