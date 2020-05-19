class JsonResponse {
  constructor (statusCode, data, headers) {
    this.statusCode = statusCode
    this.headers = { 'Content-Type': 'application/json', ...headers }
    this.data = data
  }

  write (to) {
    const data = Buffer.from(JSON.stringify(this.data))
    to.writeHead(this.statusCode, { ...this.headers, 'Content-Length': data.byteLength })
    to.end(data)
  }
}

module.exports = function json (statusCode, data, headers) {
  if (typeof statusCode !== 'number') {
    data = statusCode
    statusCode = 200
  }

  return new JsonResponse(statusCode, data, headers)
}
