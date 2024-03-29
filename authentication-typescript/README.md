# Authentication Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/cra-template-authentication-typescript?color=%23007bc1&label=%40brightlayer-ui%2Fcra-template-authentication-typescript)

This is an official Brightlayer UI template for use with the [Create React App](https://create-react-app.dev/) CLI. It is also used internally by the [Brightlayer UI CLI](https://www.npmjs.com/package/@brightlayer-ui/cli).

This template installs and configures the Brightlayer UI [react-auth-workflow](https://www.npmjs.com/package/@brightlayer-ui/react-auth-workflow) package to automatically wrap your main application with functions and screens for Login, Registration, Change Password, etc. This uses the same configurations as the sample project for that package — you will need to replace the API integrations with implementations specific to your API. This template also includes the installation and initial setup of routing using [React Router](https://reactrouter.com/). It includes several placeholder routes/screens and a [Drawer](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) navigator from the Brightlayer UI [React Component Library](https://www.npmjs.com/package/@brightlayer-ui/react-components).

## Usage
This template can be used with Create React App:
```sh
npx create-react-app myapp --template @brightlayer-ui/authentication-typescript
```
or using the Brightlayer UI CLI:
```sh
npx -p @brightlayer-ui/cli blui new react --name=myapp --language=ts --template=authentication
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
└── /src
    |── index.tsx                           // the root file that renders the application (Theme Provider, Router, & CSS Baseline styles)
    |── App.tsx                             // sets up the Authentication wrappers and DrawerLayout component
    |── /components                           
    │   └── Logo.tsx                        // BLUI spinning logo graphic
    |── /constants                          // sample application pages
    │   |── index.ts                        // constants used by the mock LocalStorage implementation
    │   |── routing.ts                      // custom URLs to use for the auth-workflow
    │   └── sampleEula.ts                   // sample end-user license agreement text
    |── /contexts                           
    │   └── drawerContextProvider.tsx       // creates a Context to allow pages to open/close the navigation drawer
    |── /pages                              // sample application pages
    └── /router
    │   |── drawer.tsx                      // the contents of the navigation drawer
    │   |── main.tsx                        // React Router route configuration
    │   └── routes.tsx                      // route definitions for use in the Router
    └── /store
        └── local-storage.ts                // mock implementation for storing/retrieving user authentication session data 
```