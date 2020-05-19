# HTML Response

A class representing an HTML text response.

## Installation

```sh
npm install @response/html
```

## Usage

```js
const html = require('@response/html')
const http = require('http')

http.createServer((req, res) => {
  // Status 200
  html('<p>Hello, World!</p>').write(res)

  // Status 500
  html(500, '<p>Error</p>').write(res)

  // Status 500 & custom headers
  html(500, '<p>Error</p>', { 'X-Powered-By': 'Foobar' }).write(res)
})
```

## Mutable Properties

- `statusCode: number` - The status code
- `headers: object` - The custom headers
- `data: string` - The HTML data
