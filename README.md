# kysely-codegen-timestamp-to-string-script

## What is this?
It is workaround for not configurable `kysely-codegen` behaviour that generates `Date` type for timestamps.

## How to use:
Copy script to your project, and set proper paths. Then add execution to `package.json` script running kysely-codegen type generation. 

Eg. `"database:push": "npm run database:generate:migration && npm run database:migrate && npm run database:generate:types && node src/utils/kysely-codegen-timpestamp-to-string.js"`
