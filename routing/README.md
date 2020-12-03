# Routing Template (JavaScript)

![npm (scoped)](https://img.shields.io/npm/v/@pxblue/cra-template-routing?color=%23007bc1&label=%40pxblue%2Fcra-template-routing)

This is an official PX Blue template for use with the [Create React App](https://create-react-app.dev/) CLI. It is also used internally by the [PX Blue CLI](https://www.npmjs.com/package/@pxblue/cli).

This template includes the installation and initial setup of routing using [React Router](https://reactrouter.com/). It includes several placeholder routes/screens and a [Drawer](https://pxblue-components.github.io/react/?path=/info/components-drawer--get-read-me-story) navigator from the PX Blue [React Component Library](https://www.npmjs.com/package/@pxblue/react-components).

## Usage
This template can be used with Create React App:
```sh
npx create-react-app myapp --template @pxblue/routing
```
or using the PX Blue CLI:
```sh
npx -p @pxblue/cli pxb new react --name=myapp --language=js --template=routing
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
└── /src
    |── index.jsx                           // the root file that renders the application (Theme Provider, Router, & CSS Baseline styles)
    |── App.jsx                             // sets up the DrawerLayout component
    |── /components                           
    │   └── Logo.jsx                        // PXB spinning logo graphic
    |── /contexts                           
    │   └── drawerContextProvider.jsx       // creates a Context to allow pages to open/close the navigation drawer
    |── /pages                              // sample application pages
    └── /router
        |── drawer.jsx                      // the contents of the navigation drawer
        |── main.jsx                        // React Router route configuration
        └── routes.jsx                      // route definitions for use in the Router
```