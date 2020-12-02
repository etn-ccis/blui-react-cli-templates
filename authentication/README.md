# Authentication Template (JavaScript)

![npm (scoped)](https://img.shields.io/npm/v/@pxblue/cra-template-authentication?color=%23007bc1&label=%40pxblue%2Fcra-template-authentication)

This is an official PX Blue template for use with the [Create React App](https://create-react-app.dev/) CLI. It is also used internally by the [PX Blue CLI](https://www.npmjs.com/package/@pxblue/cli).

This template installs and configures the PX Blue [react-auth-workflow](https://www.npmjs.com/package/@pxblue/react-auth-workflow) package to automatically wrap your main application with functions and screens for Login, Registration, Change Password, etc. This uses the same configurations as the sample project for that package — you will need to replace the API integrations with implementations specific to your API. This template also includes the installation and initial setup of routing using [React Router](https://reactrouter.com/). It includes several placeholder routes/screens and a Drawer navigator from the PX Blue [React Component Library](https://www.npmjs.com/package/@pxblue/react-components).

## Usage
This template can be used with Create React App:
```sh
npx create-react-app myapp --template @pxblue/authentication
```
or using the PX Blue CLI:
```sh
npx -p @pxblue/cli pxb new react --name=myapp --language=js --template=authentication
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
└── /src
    |── index.jsx                           // the root file that renders the application (Theme Provider, Router, & CSS Baseline styles)
    |── App.jsx                             // sets up the Authentication wrappers and DrawerLayout component
    |── /components                           
    │   └── Logo.jsx                        // PXB spinning logo graphic
    |── /constants                          // sample application pages
    │   |── index.js                        // constants used by the mock LocalStorage implementation
    │   |── routing.js                      // custom URLs to use for the auth-workflow
    │   └── sampleEula.js                   // sample end-user license agreement text
    |── /contexts                           
    │   └── drawerContextProvider.jsx       // creates a Context to allow pages to open/close the navigation drawer
    |── /pages                              // sample application pages
    └── /router
    │   |── drawer.jsx                      // the contents of the navigation drawer
    │   |── main.jsx                        // React Router route configuration
    │   └── routes.jsx                      // route definitions for use in the Router
    └── /store
        └── local-storage.js                // mock implementation for storing/retrieving user authentication session data 
```