declare type Headers = { [name: string]: string | string[] | undefined }

declare interface ServerResponseLike {
  writeHead (statusCode: number, headers: Headers): void
  end (chunk?: Uint8Array): void
}

declare class JsonResponse<T extends object | object[]> {
  statusCode: number
  headers: Headers
  data: T

  write (to: ServerResponseLike): void
}

declare function json<T extends object | object[]> (data: T): JsonResponse<T>
declare function json<T extends object | object[]> (statusCode: number, data: T, headers?: Headers): JsonResponse<T>

export = json
