declare type Headers = { [name: string]: string | string[] | undefined }

declare interface ServerResponseLike {
  writeHead (statusCode: number, headers: Headers): void
  end (chunk?: Uint8Array): void
}

declare class RedirectResponse {
  statusCode: number
  headers: Headers
  url: string

  write (to: ServerResponseLike): void
}

declare function redirect (url: string): RedirectResponse
declare function redirect (statusCode: number, url: string, headers?: Headers): RedirectResponse

export = redirect
