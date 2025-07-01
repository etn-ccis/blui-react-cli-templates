[![Build](https://github.com/etn-ccis/blui-react-cli-templates/actions/workflows/blui-ci.yml/badge.svg?branch=master)](https://github.com/etn-ccis/blui-react-cli-templates/actions/workflows/blui-ci.yml)

> **Important Migration Notice:**
>
> This repository has been migrated to a monorepo to consolidate all the React libraries developed by Brightlayer UI team into a single workspace. Future development and updates will now occur in [this location](https://github.com/etn-ccis/blui-react/tree/dev/packages/cli-templates). Please update your bookmarks and contribute to the monorepo for the latest changes.

# React + TypeScript + Vite Templates

These are project templates that are used for starting a new Brightlayer UI project. The templates are configured with the basic Brightlayer UI libraries for themes and components and configures the application to use them.

## Available Templates

### Blank

The [Blank template](https://github.com/etn-ccis/blui-react-cli-templates/blob/master/templates/blank-typescript/README.md) provides a bare-bones application with Brightlayer UI components and themes automatically configured and ready to use.

### Routing

The [Routing template](https://github.com/etn-ccis/blui-react-cli-templates/blob/master/templates/routing-typescript/README.md) provides all of the essential Brightlayer UI configuration as well as additional configuration for using using [React Router](https://reactrouter.com/). It also adds a navigation Drawer to switch between several sample screens.

### Authentication

The [Authentication template](https://github.com/etn-ccis/blui-react-cli-templates/blob/master/templates/authentication-typescript/README.md) includes everything from the Routing template and also installs and configures the Brightlayer UI [react-auth-workflow](https://www.npmjs.com/package/@brightlayer-ui/react-auth-workflow) package to automatically wrap the main application with functions and screens for Okta Login, Registration, Change Password, etc.

|                | placeholder landing page | navigation drawer & routing | login & registration screens |
| -------------- | ------------------------ | --------------------------- | ---------------------------- |
| Blank          | ✅                       |                             |                              |
| Routing        | ✅                       | ✅                          |                              |
| Authentication | ✅                       | ✅                          | ✅                           |

## Screenshots

##### Routing Template With Collapsed Drawer

![Routing Template With Collapsed Drawer](https://github.com/etn-ccis/blui-react-cli-templates/blob/master/images/routing.png)

##### Routing Template With Expanded Drawer

![Routing Template With Expanded Drawer](https://github.com/etn-ccis/blui-react-cli-templates/blob/master/images/routing-expanded.png)

##### Login Screen from Auth Template

![Authentication Template Login](https://github.com/etn-ccis/blui-react-cli-templates/blob/master/images/authentication.png)

## Usage

You can use these templates with the `create-blui-react-app` package:

```sh
npx create-blui-react-app
```

## Testing Locally

If you would like to test these templates locally, you may do so by running the following command:

```
npm link
npx create-blui-react-app
```

## Browser Support

Brightlayer UI CLI Templates will work with any modern browser. For details refer to our [Browser Support](https://brightlayer-ui.github.io/development/frameworks-web/react#browser-support) documentation.
