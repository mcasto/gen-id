# gen-id

I often have need of a unique id. Usually, it's when I'm manually adding a record to a source that doesn't automatically generate a unique id in some way. So, I wanted a quick and easy way to get a unique id that I could paste wherever I need it.

I threw this together to do just that. It generates a unique id using [uniqid](https://www.npmjs.com/package/uniqid) and copies it to the clipboard using [clipboardy](https://www.npmjs.com/package/clipboardy).

I only need it on my Mac, but I think it will work on any system running NodeJS. You might have to tweak the shebang line in index.js if your node doesn't run from `#!/usr/bin/env node`.

# Install
`npm i -g mcasto/gen-id`

or

`yarn add global mcasto/gen-id`

# Usage
There's nothing fancy about this :D

From the command line, run `gen-id`

The unique id string will be copied to your clipboard, and you can paste it wherever you need it.