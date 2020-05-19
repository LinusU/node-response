declare type Headers = { [name: string]: string | string[] | undefined }

declare interface ServerResponseLike {
  writeHead (statusCode: number, headers: Headers): void
  end (chunk?: Uint8Array): void
}

declare class StringResponse {
  statusCode: number
  headers: Headers
  data: string

  write (to: ServerResponseLike): void
}

declare function string (data: string): StringResponse
declare function string (statusCode: number, data: string, headers?: Headers): StringResponse

export = string
