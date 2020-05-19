# Buffer Response

A class representing a raw response backed by a `Buffer`.

## Installation

```sh
npm install @response/buffer
```

## Usage

```js
const buffer = require('@response/buffer')
const http = require('http')

const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==', 'base64')

http.createServer((req, res) => {
  // Status 200, type application/octet-stream
  buffer(png).write(res)

  // Status 200, type application/octet-stream
  buffer(200, png).write(res)

  // Status 200, type image/png
  buffer(200, png, { 'Content-Type': 'image/png' }).write(res)
})
```

## Mutable Properties

- `statusCode: number` - The status code
- `headers: object` - The custom headers
- `data: Buffer` - The raw data
