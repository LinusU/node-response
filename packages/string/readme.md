# String Response

A class representing a raw response backed by a string.

## Installation

```sh
npm install @response/string
```

## Usage

```js
const string = require('@response/string')
const http = require('http')

http.createServer((req, res) => {
  // Status 200, type text/plain
  string('Hello,World').write(res)

  // Status 200, type text/plain
  string(200, 'Hello,World').write(res)

  // Status 200, type text/csv
  string(200, 'Hello,World', { 'Content-Type': 'text/csv' }).write(res)
})
```

## Mutable Properties

- `statusCode: number` - The status code
- `headers: object` - The custom headers
- `data: string` - The raw data
