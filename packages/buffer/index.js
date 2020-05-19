class BufferResponse {
  constructor (statusCode, data, headers) {
    this.statusCode = statusCode
    this.headers = { 'Content-Type': 'application/octet-stream', ...headers }
    this.data = data
  }

  write (to) {
    to.writeHead(this.statusCode, { ...this.headers, 'Content-Length': this.data.byteLength })
    to.end(this.data)
  }
}

module.exports = function buffer (statusCode, data, headers) {
  if (typeof statusCode !== 'number') {
    data = statusCode
    statusCode = 200
  }

  return new BufferResponse(statusCode, data, headers)
}
