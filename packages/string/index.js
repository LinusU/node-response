class StringResponse {
  constructor (statusCode, data, headers) {
    this.statusCode = statusCode
    this.headers = { 'Content-Type': 'text/plain; charset=utf-8', ...headers }
    this.data = data
  }

  write (to) {
    const data = Buffer.from(this.data, 'utf8')
    to.writeHead(this.statusCode, { ...this.headers, 'Content-Length': String(data.byteLength) })
    to.end(data)
  }
}

module.exports = function string (statusCode, data, headers) {
  if (typeof statusCode !== 'number') {
    data = statusCode
    statusCode = 200
  }

  return new StringResponse(statusCode, data, headers)
}
