# Routing Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/cra-template-routing-typescript?color=%23007bc1&label=%40brightlayer-ui%2Fcra-template-routing-typescript)

This is an official Brightlayer UI template for use with the [Create React App](https://create-react-app.dev/) CLI. It is also used internally by the [Brightlayer UI CLI](https://www.npmjs.com/package/@brightlayer-ui/cli).

This template includes the installation and initial setup of routing using [React Router](https://reactrouter.com/). It includes several placeholder routes/screens and a [Drawer](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) navigator from the Brightlayer UI [React Component Library](https://www.npmjs.com/package/@brightlayer-ui/react-components).

## Usage
This template can be used with Create React App:
```sh
npx create-react-app myapp --template @brightlayer-ui/routing-typescript
```
or using the Brightlayer UI CLI:
```sh
npx -p @brightlayer-ui/cli blui new react --name=myapp --language=ts --template=routing
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
└── /src
    |── index.tsx                           // the root file that renders the application (Theme Provider, Router, & CSS Baseline styles)
    |── App.tsx                             // sets up the DrawerLayout component
    |── /components                           
    │   └── Logo.tsx                        // BLUI spinning logo graphic
    |── /contexts                           
    │   └── drawerContextProvider.tsx       // creates a Context to allow pages to open/close the navigation drawer
    |── /pages                              // sample application pages
    └── /router
        |── drawer.tsx                      // the contents of the navigation drawer
        |── main.tsx                        // React Router route configuration
        └── routes.tsx                      // route definitions for use in the Router
```