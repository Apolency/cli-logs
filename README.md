# Cli-Logs V2
A useful tools for logging thing in the terminal.
Now with TypeScript support

# Download
Just run:
```
npm i cli-logs
```
or globaly:
```
npm i -g cli-logs
```

# Examples
```js
const cl = require('cli-logs');

cl.ready('Node is ready!');
```

# Available Options
```js
const cl = require('cli-logs');

cl.log(text, type, color)
cl.ready(text);
cl.error(text);
cl.warn(text);
cl.event(text);
cl.load(text);
cl.connect(text);
cl.debug(text);
cl.cmd(text);
```
More options will be added soon!

# Test
To test, simply run
```
npm run test
```
