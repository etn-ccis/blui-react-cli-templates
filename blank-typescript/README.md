# Blank Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@pxblue/cra-template-blank-typescript?color=%23007bc1&label=%40pxblue%2Fcra-template-blank-typescript)

This is an official PX Blue template for use with the [Create React App](https://create-react-app.dev/) CLI. It is also used internally by the [PX Blue CLI](https://www.npmjs.com/package/@pxblue/cli).

This template installs the basic PX Blue libraries for themes and components and configures the application to use them. It includes a simple placeholder screen that you can replace with your own application content.

## Usage
This template can be used with Create React App:
```sh
npx create-react-app myapp --template @pxblue/blank-typescript
```
or using the PX Blue CLI:
```sh
npx -p @pxblue/cli pxb new react --name=myapp --language=ts --template=blank
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
└── /src
    |── index.tsx                           // the root file that renders the application (Theme Provider & CSS Baseline styles)
    └── App.tsx                             // a sample landing page
```