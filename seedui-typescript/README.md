# Seed UI Template (TypeScript)


This is an official Brightlayer UI template for use with the [Create React App](https://create-react-app.dev/) CLI. It is also used internally by the [Brightlayer UI CLI](https://www.npmjs.com/package/@brightlayer-ui/cli).

This template installs and configures the Brightlayer UI Seed UI package to automatically wrap your main application with functions and screens for Login, Registration, Invite etc.

## Usage
This template can be used with Create React App:
```sh
npx create-react-app myapp --template @brightlayer-ui/seedui-typescript
```
or using the Brightlayer UI CLI:
```sh
npx -p @brightlayer-ui/cli blui new react --name=myapp --language=ts --template=seedui-typescript
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
└── /src
    |── index.tsx                           // the root file that renders the application (Theme Provider, Router, & CSS Baseline styles)
    |── App.tsx                             // sets up the DrawerLayout component
    |── /components                           
    │   └── Layout                          // layout, header
    |   └── pages                           // dashboard, inviteuser
    |── /constants                           
    │   └── eula                            // sampleeula
    |── /assets                              
    │   └── images                          // images
    └── /actions                            // actions of seed ui
        └── uiactions.tsx                   // login, loadeula actions
``` 