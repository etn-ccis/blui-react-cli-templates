# React CLI Templates

These are project templates that are used by Create React App when starting a new PX Blue project. They are used behind the scenes by the PX Blue CLI.

We currently have templates for:
-   [Blank (TypeScript)](https://www.npmjs.com/package/@pxblue/cra-template-blank-typescript)
-   [Blank (JavaScript)](https://www.npmjs.com/package/@pxblue/cra-template-blank)

You can use these templates with the PX Blue CLI (recommended):

```sh
npx -p @pxblue/cli pxb new react --template=blank
```

or with the Create React App CLI:

```sh
npx create-react-app app-name --template @pxblue/blank
npx create-react-app app-name --template @pxblue/blank-typescript
```
