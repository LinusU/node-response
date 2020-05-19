# Response

Response classes for the Node.js HTTP server.

## Packages

- [`@response/empty`](https://github.com/LinusU/node-response/tree/master/packages/empty)
- [`@response/html`](https://github.com/LinusU/node-response/tree/master/packages/html)
- [`@response/json`](https://github.com/LinusU/node-response/tree/master/packages/json)
- [`@response/redirect`](https://github.com/LinusU/node-response/tree/master/packages/redirect)
- [`@response/types`](https://github.com/LinusU/node-response/tree/master/packages/types)

## See also

- [`@body/json`](https://github.com/node-body/json)
- [`@body/stream`](https://github.com/node-body/stream)
- [`@body/urlencoded`](https://github.com/node-body/urlencoded)

## Usage

This library is framework agnostic, but here is an example on how to use it with [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org):

`index.ts`

```typescript
import express, { Request } from 'express'
import { Response } from '@response/types'

import * as users from './routes/users'

const app = express()

type Method = 'get' | 'post' | 'put' | 'delete'
type Handler = (req: Request) => Promise<Response>

function route (method: Method, path: string, handler: Handler): void {
  app[method](path, (req, res, next) => handler(req).then(result => result.write(res)).catch(next))
}

route('get', '/v1/users', users.list)
route('post', '/v1/users', users.post)
route('get', '/v1/users/:id', users.get)
route('delete', '/v1/users/:id', users.delete)
```

`routes/users.ts`

```typescript
import type { Request } from 'express'
import type { Response } from '@response/types'

import getJsonBody from '@body/json'
import empty from '@response/empty'
import json from '@response/json'
import redirect from '@response/redirect'

export async function list (req: Request): Promise<Response> {
  const users = [/* ... */]

  return json(users)
}

export async function post (req: Request): Promise<Response> {
  const input = await getJsonBody(req)
  const id = '/* ... */'

  return redirect(`/v1/users/${id}`)
}

export async function get (req: Request): Promise<Response> {
  const user = { /* ... */ }

  return json(user)
}

export async function delete (req: Request): Promise<Response> {
  /* ... */

  return empty()
}
```
