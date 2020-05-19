declare type Headers = { [name: string]: string | string[] | undefined }

declare interface ServerResponseLike {
  writeHead (statusCode: number, headers: Headers): void
  end (chunk?: Uint8Array): void
}

declare class BufferResponse {
  statusCode: number
  headers: Headers
  data: Buffer

  write (to: ServerResponseLike): void
}

declare function buffer (data: Buffer): BufferResponse
declare function buffer (statusCode: number, data: Buffer, headers?: Headers): BufferResponse

export = buffer
