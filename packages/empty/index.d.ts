declare type Headers = { [name: string]: string | string[] | undefined }

declare interface ServerResponseLike {
  writeHead (statusCode: number, headers: Headers): void
  end (chunk?: Uint8Array): void
}

declare class EmptyResponse {
  statusCode: number
  headers: Headers

  write (to: ServerResponseLike): void
}

declare function empty (statusCode?: number, headers?: Headers): EmptyResponse

export = empty
