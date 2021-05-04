# monorepo example

This is an example of a monorepo setup using a symlink to
get access to shared code.

Each "application" lives in `app/*` and shared code is accessed
via the namespace `@lib` for example:

```js
import { caps } from '@lib/util/string.js'
console.log(caps('foo')) // => 'FOO'
```

Each application needs to be added to the `setup` npm run script,
in the `package.json` file. (All this does is create the symlink.)
