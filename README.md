# zemoga React-Native Challenge ⚡️
Challenge by Gabriel Gutierrez 
gabrieleduardogg@gmail.com
## Quick start

- Install dependencies: `yarn install`
- Run `yarn start` to start expo.
- Run `yarn android` to start android emulator.
- Run `yarn ios` to start ios emulator.
- Run `yarn test` to test application.
## Features

- 🏗 Built with [React-Native](https://reactnative.dev) using [Expo CLI](https://expo.io/)
- 🛣 Routing and Navigation with [React-Navigation](https://reactnavigation.org)
- 🧰 All necessary packages are already installed
-    Persistent data managed with [React-Native-async-storage](https://github.com/react-native-async-storage/async-storage)

## Requirement fulfillment 
 - In order to refresh the posts the pull to refresh functionality has been implemented
 - For deleted all the current posts there is a trash bin on the header 's right side
 - For deleted a single post the longPress on item was implemented for each post button on the list

 For all the delete features a confirmation alert was added in order to confirm this "permanent" decision.
## Basic structure and configurations

All under the src directory
```
components/           // App components
screens/              // App screens
constants/            // constants files and helpers
app.json              // app configuration
package.json          // deps and workspace scripts
babel.config.json     // babel configuration
Navigator/            // Navigation configuration
helpers               // Some extracted funtions to make the code leaner
README.md             // docs are important
```

## Third party libraries
Four libraries were installed in order to complete the challenge
- React navigation native (Navigation)
- React navigation stack (Navigatio)
- Axios (API calls)
- React native async storage (Persistency)

When it came to choosing the persistecy library there were a couple of options to choose from. Firebase, redux persistency, keychain storage, etc. The reason for going through with async storage is because of the scope of the managed data. Given we had no redux implementation, the data was needed locally and it was not sensitive data, async storage worked just fine for stored this posts in plain text. The advantage of this library is easy setup and managing, sacrifing the security of the data. This is stored as plain text in the app memory segment and could be accesed by other on the right circumstances.

For the network interactions made for this project any library could have done the job. I personally chose Axios as I find it more complete than fetch. Axios allows for download progress tracking, requests interception and cancelling, between some other perks. It is true that at some point the big request can become a bit more complex to handle with axios and it needs a formal intallation ( vs fetch that is already build-in), but axios is a way more powerful and flexible tool.