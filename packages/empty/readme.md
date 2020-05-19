# Empty Response

A class representing an empty response.

## Installation

```sh
npm install @response/empty
```

## Usage

```js
const empty = require('@response/empty')
const http = require('http')

http.createServer((req, res) => {
  // Status 204
  empty().write(res)

  // Status 200
  empty(200).write(res)

  // Status 200 & custom headers
  empty(200, { 'X-Powered-By': 'Foobar' }).write(res)
})
```

## Mutable Properties

- `statusCode: number` - The status code
- `headers: object` - The custom headers
