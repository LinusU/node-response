declare type Headers = { [name: string]: string | string[] | undefined }

declare interface ServerResponseLike {
  writeHead (statusCode: number, headers: Headers): void
  end (chunk?: Uint8Array): void
}

declare class HtmlResponse {
  statusCode: number
  headers: Headers
  data: string

  write (to: ServerResponseLike): void
}

declare function html (data: string): HtmlResponse
declare function html (statusCode: number, data: string, headers?: Headers): HtmlResponse

export = html
