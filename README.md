## Using Lerna

#### From root directory

Install Lerna
``` bash
$ npm i -g lerna
```

Recursively install dependencies for client and server
``` bash
$ lerna bootstrap
```

Start dev server for both client and server
``` bash
$ lerna run start
```

## Manually
### Server

#### Installation

From root directory
``` bash
$ yarn --cwd packages/server/ install
```

##### Start DEV Server

From root directory
``` bash
$ yarn --cwd packages/server/ start
```

### Client

#### Installation

From root directory

``` bash
$ yarn --cwd packages/client/ install
```

#### Start DEV Server

From root directory
``` bash
$ yarn --cwd packages/client/ start
```

> **Note** Access web app on `http://localhost:2345/`

<img width="1746" alt="Screenshot 2023-01-12 at 02 20 39" src="https://user-images.githubusercontent.com/15639127/211960643-63fb6e51-9782-4606-b37c-2e0f191556fe.png">

### Possible Improvements
* Provide unit test coverage for util functions, services, routes and components.
* Validate request data before persisting data.
* Validate form fields and provide visual feedback to user.
* Update react query state upon successful network request as oposed to lazily refetching the entire data.
* Encapsulate Material UI components.
* Move some lifecycle hooks into a custom hook in order to clean up Home component.
* Add mobile and tablet support.
