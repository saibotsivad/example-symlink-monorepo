# monorepo example

This is an example of a monorepo setup using a symlink to
get access to shared code.

Each "application" lives in `app/*` and shared code is accessed
via the namespace `@lib` for example:

```js
import { upper } from '@/lib/strings.js'
console.log(upper('foo')) // => 'FOO'
```

Each application needs to be added to the `setup` npm run script,
in the `package.json` file. (All this does is create the symlink.)

Each `deploy` folder is for any service to deploy, you can have
persisted files in the folder if you want, or use that as the final
build output and gitignore the whole folder.
