const cl = require('cli-logs');

const a = 'Testing text';
const b = 'TESTING TYPE';
const c = 'red';

cl.log(a, b, c);
cl.ready(a);
cl.error(a);
cl.warn(a);
cl.event(a);
cl.load(a);
cl.connect(a);
cl.debug(a);
cl.cmd(a);
