# JSON Response

A class representing an JSON text response.

## Installation

```sh
npm install @response/json
```

## Usage

```js
const json = require('@response/json')
const http = require('http')

http.createServer((req, res) => {
  // Status 200
  json({ status: 'success' }).write(res)

  // Status 500
  json(500, { status: 'error' }).write(res)

  // Status 500 & custom headers
  json(500, { status: 'error' }, { 'X-Powered-By': 'Foobar' }).write(res)
})
```

## Mutable Properties

- `statusCode: number` - The status code
- `headers: object` - The custom headers
- `data: object | object[]` - The JSON data to be stringified
