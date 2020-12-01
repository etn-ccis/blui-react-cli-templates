# React CLI Templates

These are project templates that are used by Create React App when starting a new PX Blue project. They are used behind the scenes by the PX Blue CLI.

We currently have templates for:
-   [Blank (TypeScript)](https://www.npmjs.com/package/@pxblue/cra-template-blank-typescript)
-   [Blank (JavaScript)](https://www.npmjs.com/package/@pxblue/cra-template-blank)
-   [Routing (TypeScript)](https://www.npmjs.com/package/@pxblue/cra-template-routing-typescript)
-   [Routing (JavaScript)](https://www.npmjs.com/package/@pxblue/cra-template-routing)

You can use these templates with the PX Blue CLI (recommended):

```sh
npx -p @pxblue/cli pxb new react --template=blank
npx -p @pxblue/cli pxb new react --template=routing
```

or with the Create React App CLI:

```sh
npx create-react-app app-name --template @pxblue/blank
npx create-react-app app-name --template @pxblue/blank-typescript
npx create-react-app app-name --template @pxblue/routing
npx create-react-app app-name --template @pxblue/routing-typescript
```

## Testing Locally
If you would like to test these templates locally, you may do so by running the following command:
```
npx create-react-app myapp --template file:../path/to/template
```
For more information refer to the [CRA documentation](https://create-react-app.dev/docs/custom-templates/).