# React CLI Templates

These are project templates that are used by Create React App when starting a new PX Blue project. They are used behind the scenes by the PX Blue CLI.

## Available Templates

### Blank
The Blank template provides a bare-bones application with PX Blue components and themes automatically configured and ready to use. This template is available in [TypeScript](https://www.npmjs.com/package/@pxblue/cra-template-blank-typescript)(recommended) and [JavaScript](https://www.npmjs.com/package/@pxblue/cra-template-blank).

### Routing
The Routing template provides all of the essential PX Blue configuration as well as additional configuration for using using [React Router](https://reactrouter.com/). It also adds a navigation Drawer to switch between several sample screens. This template is available in [TypeScript](https://www.npmjs.com/package/@pxblue/cra-template-routing-typescript)(recommended) and [JavaScript](https://www.npmjs.com/package/@pxblue/cra-template-routing).

### Authentication
The Authentication template includes everything from the Routing template and also installs and configures the PX Blue [react-auth-workflow](https://www.npmjs.com/package/@pxblue/react-auth-workflow) package to automatically wrap the main application with functions and screens for Login, Registration, Change Password, etc. This template is available in [TypeScript](https://www.npmjs.com/package/@pxblue/cra-template-authentication-typescript)(recommended) and [JavaScript](https://www.npmjs.com/package/@pxblue/cra-template-authentication).

|                | placeholder landing page | navigation drawer & routing  | login & registration screens  |
| -------------- | -- | -- | -- |
| Blank          | ✅ |    |    |
| Routing        | ✅ | ✅ |    |
| Authentication | ✅ | ✅ | ✅ |


## Screenshots
##### Routing Template With Collapsed Drawer
![Routing Template With Collapsed Drawer](./images/routing.png)
##### Routing Template With Expanded Drawer
![Routing Template With Expanded Drawer](./images/routing-expanded.png)
##### Login Screen from Auth Template
![Authentication Template Login](./images/authentication.png)

## Usage
You can use these templates with the PX Blue CLI (recommended):

```sh
npx -p @pxblue/cli pxb new react --template=blank
npx -p @pxblue/cli pxb new react --template=routing
npx -p @pxblue/cli pxb new react --template=authentication
```

or with the Create React App CLI:

```sh
npx create-react-app app-name --template @pxblue/blank
npx create-react-app app-name --template @pxblue/blank-typescript
npx create-react-app app-name --template @pxblue/routing
npx create-react-app app-name --template @pxblue/routing-typescript
npx create-react-app app-name --template @pxblue/authentication
npx create-react-app app-name --template @pxblue/authentication-typescript
```

## Testing Locally
If you would like to test these templates locally, you may do so by running the following command:
```
npx create-react-app myapp --template file:../path/to/template
```
For more information refer to the [CRA documentation](https://create-react-app.dev/docs/custom-templates/).