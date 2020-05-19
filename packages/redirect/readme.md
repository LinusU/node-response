# Redirect Response

A class representing a redirect response.

## Installation

```sh
npm install @response/redirect
```

## Usage

```js
const redirect = require('@response/redirect')
const http = require('http')

http.createServer((req, res) => {
  // Status 302
  redirect('/thing').write(res)

  // Status 301
  redirect(301, '/thing').write(res)

  // Status 301 & custom headers
  redirect(301, '/thing', { 'X-Powered-By': 'Foobar' }).write(res)
})
```

## Mutable Properties

- `statusCode: number` - The status code
- `headers: object` - The custom headers
- `url: string` - The target of the redirect
