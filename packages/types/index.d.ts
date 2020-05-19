export type Headers = { [name: string]: string | string[] | undefined }

export interface ServerResponseLike {
  writeHead (statusCode: number, headers: Headers): void
  end (chunk?: Uint8Array): void
}

export interface Response {
  statusCode: number
  headers: Headers

  write (to: ServerResponseLike): void
}
