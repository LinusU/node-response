class EmptyResponse {
  constructor (statusCode, headers) {
    this.statusCode = statusCode
    this.headers = { ...headers }
  }

  write (to) {
    to.writeHead(this.statusCode, { ...this.headers, 'Content-Length': '0' })
    to.end()
  }
}

module.exports = function empty (statusCode, headers) {
  return new EmptyResponse(statusCode || 204, headers)
}
