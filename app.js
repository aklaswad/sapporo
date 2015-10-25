var AbsodulerServer = require('Absoduler').Server;
var abdls = new AbsodulerServer({ port: 9801 });

abdls.on('connection', function (ws) {
//  ws.sendEvent('blah', 1000, {'additional': 'informations'});
});

var origin = (new Date()).getTime();
var index = 0;

var sendPing = function () {
  var now = (new Date()).getTime();
  var after = 3000 + origin + index * 960 - now;
  console.log(after);
  for ( var c in abdls.wss.clients ) {
    abdls.wss.clients[c].sendEvent('blah', after, {index: index, origin: origin, interval: 1920});
  }
  index += 2;
  setTimeout( sendPing, origin + index * 960 - now);
};
sendPing();