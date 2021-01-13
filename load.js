const WebSocket = require('ws');

const ws = new WebSocket('ws://norns.local:5555/', ['bus.sp.nanomsg.org']);

ws.on('open', function open() {
	ws.send('norns.script.load("' + process.argv[2] + '")\n');
});

ws.on('message', (d) => {
	console.log(d);
	ws.close();
});

