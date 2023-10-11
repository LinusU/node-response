class RedirectResponse {
  constructor (statusCode, url, headers) {
    this.statusCode = statusCode
    this.headers = { ...headers }
    this.url = url
  }

  write (to) {
    to.writeHead(this.statusCode, { ...this.headers, 'Content-Length': '0', 'Location': this.url })
    to.end()
  }
}

module.exports = function redirect (statusCode, url, headers) {
  if (typeof statusCode !== 'number') {
    url = statusCode
    statusCode = 302
  }

  return new RedirectResponse(statusCode, url, headers)
}
