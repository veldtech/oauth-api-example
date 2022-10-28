# Miki API OAuth2 Example

This example shows how to use Miki's OAuth2 authorization API. Use it as a reference point to start
your implementation.

## Getting Started

### Create an application

Reach out to Veld#0001 for an application, right now developer support is not public as we are in
private testing trials with integration. Apologies for the inconvenience.

### Clone the repo

```bash
$ git clone https://github.com/veldtech/oauth-api-example
$ cd oauth-api-example
```

### Paste your tokens

Copy .env.example and fill in the properties. Redirect URI defaults to localhost:3000/, would
recommend keeping it the same because otherwise it won't work, however, if you are running your own
app and need a redirection app, you can use this app to receive the properties.

```bash
$ cp .env.example .env
```

### Install and Run

```bash
$ yarn && yarn start
```

After this localhost:3000/ should redirect you to your oauth application authorize flow.
