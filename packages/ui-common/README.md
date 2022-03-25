# UI Common Library

## Why is tsup used

tsp is used in package.json to bundle the ui library. This is not required for
Next.js and vite apps, but webpack builds for module federations were failing if
the libraries were not bundled. See details
[here](https://github.com/vercel/turborepo/issues/360#issuecomment-1013885148)

There is still an issue with bundling svg files, see error below:

> ui:dev: src/components/AccountList.tsx(12,27): error TS2307: Cannot find
> module '../assets/retirement.svg' or its corresponding type declarations.
